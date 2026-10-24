/**
 * Renders the social share card: ink background, lavender taohq mark centred.
 *
 *   pnpm og
 *
 * Output: public/og.png (1200 × 630, the Open Graph / Twitter large-card size).
 * Re-run after changing the logo or the brand colours.
 */
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const WIDTH = 1200
const HEIGHT = 630
const INK = '#151515'
const LAVENDER = '#C4B5E3'
/** Mark height as a share of the card height. */
const MARK_SCALE = 0.46

const svg = (await readFile(join(ROOT, 'app/assets/logo.svg'), 'utf8'))
  .replaceAll(/fill="#[0-9a-fA-F]{6}"/g, `fill="${LAVENDER}"`)

const markHeight = Math.round(HEIGHT * MARK_SCALE)
const mark = await sharp(Buffer.from(svg), { density: 600 })
  .resize({ height: markHeight })
  .png()
  .toBuffer()
const { width: markWidth = 0 } = await sharp(mark).metadata()

await sharp({ create: { width: WIDTH, height: HEIGHT, channels: 4, background: INK } })
  .composite([{
    input: mark,
    left: Math.round((WIDTH - markWidth) / 2),
    top: Math.round((HEIGHT - markHeight) / 2),
  }])
  .png({ compressionLevel: 9 })
  .toFile(join(ROOT, 'public/og.png'))

console.log(`Wrote public/og.png (${WIDTH}×${HEIGHT})`)
