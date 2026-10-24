/**
 * Pre-renders every artwork into dithered "develop" frames at build time.
 *
 *   pnpm art
 *
 * Why build time: dithering in the browser meant one WebGL pass and one
 * GPU readback per frame per image while the page was loading, which was
 * slow and broke on some engines. Two-tone PNGs at one pixel per dither cell
 * are a few KB each, render identically everywhere, and scale up crisply
 * with `image-rendering: pixelated`.
 *
 * Input:  art/source/<name>.webp   (see ART below)
 * Output: public/art/<name>/<0..3>.png   coarse → final
 *         app/constants/art-manifest.ts  (names, grid sizes)
 */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const INK = [0x15, 0x15, 0x15]
const LAVENDER = [0xc4, 0xb5, 0xe3]

/** Longest edge the source is fitted into before cells are counted. */
const BASE_SIZE = 800

/** Develop sequence: multiples of the final cell size, coarse → final. */
const DEVELOP_SCALES = [8, 4.5, 2.4, 1]

/**
 * mode
 *   light  lavender cells on transparent: for art on ink backgrounds
 *   dark   ink cells on transparent: for art on lavender backgrounds
 * cell     final dither cell size, in BASE_SIZE pixels
 * contrast optional tonal contrast before dithering (default 1.5)
 * normalize optional: stretch the source's tones to full range first (for flat, mid-grey art)
 */
const ART = [
  { name: 'fold', mode: 'light', cell: 3 },
  { name: 'bottles', mode: 'light', cell: 3 },
  { name: 'bubbles-space', mode: 'light', cell: 3 },
  { name: 'bubbles-mail', mode: 'light', cell: 3 },
  { name: 'web-have-sounds', mode: 'light', cell: 3 },
  // Studio panels sit on lavender, so they print in ink.
  { name: 'studio-interface', mode: 'dark', cell: 3 },
  { name: 'studio-systems', mode: 'dark', cell: 3 },
  { name: 'studio-identity', mode: 'dark', cell: 3 },
  { name: 'team-vishnu', mode: 'light', cell: 4 },
  { name: 'not-found', mode: 'light', cell: 3, contrast: 1.8, normalize: true },
  { name: 'cat', mode: 'dark', cell: 3 },
]

/**
 * Writes only when the bytes differ. The manifest is imported by
 * content.config.ts, so needless rewrites make Nuxt Content rebuild its
 * database in dev, and queries briefly come back empty.
 */
async function writeIfChanged(path, data) {
  const next = Buffer.isBuffer(data) ? data : Buffer.from(data)
  const current = await readFile(path).catch(() => null)
  if (current && current.equals(next)) return false
  await writeFile(path, next)
  return true
}

const BAYER_4X4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(v => v / 16)

/** Ordered two-tone dither of an RGBA grid (one source pixel per cell). */
function dither(data, width, height, mode, contrast) {
  const [r, g, b] = mode === 'light' ? LAVENDER : INK
  const out = Buffer.alloc(width * height * 4)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4
      if (data[i + 3] < 128) continue // transparent source stays transparent

      const luma = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255
      const tone = Math.min(1, Math.max(0, (luma - 0.5) * contrast + 0.5))
      const lit = tone >= BAYER_4X4[(y % 4) * 4 + (x % 4)] + 0.001
      // light mode keeps lit cells, dark mode keeps unlit cells.
      if (lit !== (mode === 'light')) continue

      out[i] = r
      out[i + 1] = g
      out[i + 2] = b
      out[i + 3] = 255
    }
  }
  return out
}

async function renderArt({ name, mode, cell, contrast = 1.5, normalize = false }) {
  const base = sharp(join(ROOT, 'art/source', `${name}.webp`))
  const source = (normalize ? base.normalise() : base).ensureAlpha()
  const { width = 0, height = 0 } = await source.metadata()
  const fit = Math.min(1, BASE_SIZE / Math.max(width, height))
  const baseW = width * fit
  const baseH = height * fit

  const dir = join(ROOT, 'public/art', name)
  await mkdir(dir, { recursive: true })
  // Drop frames from an older, longer develop sequence.
  for (const file of await readdir(dir)) {
    if (!DEVELOP_SCALES.some((_, step) => file === `${step}.png`)) await rm(join(dir, file))
  }

  let final = { width: 0, height: 0 }
  for (const [step, scale] of DEVELOP_SCALES.entries()) {
    const cols = Math.max(4, Math.round(baseW / (cell * scale)))
    const rows = Math.max(4, Math.round(baseH / (cell * scale)))
    const { data } = await source.clone()
      .resize(cols, rows, { fit: 'fill', kernel: 'mitchell' })
      .raw()
      .toBuffer({ resolveWithObject: true })

    const png = await sharp(dither(data, cols, rows, mode, contrast), { raw: { width: cols, height: rows, channels: 4 } })
      .png({ palette: true, colours: 2, compressionLevel: 9 })
      .toBuffer()
    await writeIfChanged(join(dir, `${step}.png`), png)

    final = { width: cols, height: rows }
  }
  return { name, ...final }
}

function manifestSource(entries) {
  const body = entries
    .map(({ name, width, height }) => `  '${name}': { width: ${width}, height: ${height} },`)
    .join('\n')
  return `// Generated by scripts/build-art.mjs. Do not edit by hand; run \`pnpm art\`.

/** Dithered artworks available under /art/<name>/<step>.png. */
export const ART_MANIFEST = {
${body}
} as const

export type ArtName = keyof typeof ART_MANIFEST

/** Number of develop frames per artwork (0 = coarsest, last = final). */
export const ART_STEPS = ${DEVELOP_SCALES.length}

export const ART_NAMES = Object.keys(ART_MANIFEST) as [ArtName, ...ArtName[]]
`
}

const entries = await Promise.all(ART.map(renderArt))
await writeIfChanged(join(ROOT, 'app/constants/art-manifest.ts'), manifestSource(entries))
console.log(`Rendered ${entries.length} artworks × ${DEVELOP_SCALES.length} frames`)
