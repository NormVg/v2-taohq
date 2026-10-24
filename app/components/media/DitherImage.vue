<script setup lang="ts">
/**
 * Pre-rendered dithered artwork (see scripts/build-art.mjs) that "develops"
 * coarse → fine when it scrolls into view, and again on demand (hover).
 *
 * The server renders the final frame as a real <img> with alt text, so the
 * art works without JS and is indexable. On the client the frames are tiny
 * cached PNGs; developing just swaps the <img> src, with no canvas or GPU work.
 * Frame holds are deliberately uneven so it reads like a print coming up.
 */
import { ART_MANIFEST, ART_STEPS, type ArtName } from '#shared/constants/art-manifest'
import { preloadFrame } from '~/utils/art-frames'

const props = withDefaults(defineProps<{
  name: ArtName
  alt: string
  /** CSS aspect-ratio of the frame. Defaults to the artwork's own ratio. */
  aspect?: string
  fit?: 'cover' | 'contain'
  /** Above-the-fold art: load eagerly with high priority. */
  priority?: boolean
}>(), {
  fit: 'contain',
  priority: false,
})

/** How long each coarse frame holds before the next (ms). */
const FRAME_HOLDS = [70, 90, 130]

/**
 * Develop once this much of the art is on screen, so the effect plays in
 * view rather than at the viewport's edge. Art taller than the viewport
 * can't reach that ratio, so it uses whatever share fits in 60% of the screen.
 */
const VISIBLE_SHARE = 0.4
const OBSERVER_THRESHOLDS = [0, 0.1, 0.2, 0.3, 0.4]

const root = ref<HTMLElement | null>(null)
const img = ref<HTMLImageElement | null>(null)
const shown = ref(false)
/**
 * Crisp nearest-neighbour scaling only looks clean at 2× the cell grid or
 * more. Nearer 1× (small specimens, phones) it doubles some cells and not
 * others, which reads as a blocky checkerboard moiré, so smooth instead.
 */
const upscaled = ref(true)

const size = computed(() => ART_MANIFEST[props.name])
const frames = computed(() => Array.from({ length: ART_STEPS }, (_, step) => `/art/${props.name}/${step}.png`))
const finalFrame = computed(() => frames.value[ART_STEPS - 1]!)
const aspectRatio = computed(() => props.aspect ?? `${size.value.width} / ${size.value.height}`)

let observer: IntersectionObserver | null = null
let resizeObserver: ResizeObserver | null = null
let timers: number[] = []

function clearTimers() {
  timers.forEach(clearTimeout)
  timers = []
}

function setFrame(src: string) {
  if (img.value) img.value.src = src
}

async function develop() {
  clearTimers()
  // Frames are a few hundred bytes to a few KB each; have them all before playing.
  const ready = await Promise.all(frames.value.map(preloadFrame)).then(() => true, () => false)
  shown.value = true
  if (!ready) {
    setFrame(finalFrame.value)
    return
  }
  let elapsed = 0
  frames.value.forEach((src, step) => {
    timers.push(window.setTimeout(() => setFrame(src), elapsed))
    elapsed += FRAME_HOLDS[step] ?? 0
  })
}

defineExpose({ develop })

onMounted(() => {
  resizeObserver = new ResizeObserver(([entry]) => {
    if (!entry) return
    const drawn = entry.contentRect.width * window.devicePixelRatio
    upscaled.value = drawn >= size.value.width * 2
  })
  resizeObserver.observe(root.value!)

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = true
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    const fits = (window.innerHeight * 0.6) / entry.boundingClientRect.height
    if (entry.intersectionRatio < Math.min(VISIBLE_SHARE, fits)) return
    observer?.disconnect()
    void develop()
  }, { threshold: OBSERVER_THRESHOLDS })
  observer.observe(root.value!)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  resizeObserver?.disconnect()
  clearTimers()
})
</script>

<template>
  <div
    ref="root"
    class="art"
    :class="[`art--${fit}`, { 'art--smooth': !upscaled }]"
    :data-shown="shown || undefined"
    :style="{ aspectRatio }"
  >
    <img
      ref="img"
      class="art__img"
      :src="finalFrame"
      :alt="alt"
      :width="size.width"
      :height="size.height"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
    >
  </div>
</template>

<style scoped>
.art {
  position: relative;
  width: 100%;
  overflow: hidden;
  contain: layout paint;
}

.art__img {
  width: 100%;
  height: 100%;
  object-position: center;
  /* One file pixel per dither cell: scale up without smoothing. */
  image-rendering: pixelated;
  transition: opacity var(--dur-enter-fast) var(--ease-out);
}

.art--smooth .art__img {
  image-rendering: auto;
}

.art--cover .art__img {
  object-fit: cover;
}

.art--contain .art__img {
  object-fit: contain;
}

/* With JS, art waits for its develop so the sharp frame never flashes first.
   The head failsafe drops `.js` if the app never boots, showing it anyway. */
.js .art:not([data-shown]) .art__img {
  opacity: 0;
}
</style>
