<script setup lang="ts">
/**
 * Two-tone dithered artwork that "develops" coarse → fine as it scrolls
 * into view. Rendering is lazy (starts ~400px before the viewport) and
 * shared through a single WebGL context (utils/dither-renderer).
 *
 * The develop steps deliberately have uneven durations so the reveal
 * feels like a print coming up, not a linear fade.
 */
import { renderDitherFrames } from '~/utils/dither-renderer'

const props = withDefaults(defineProps<{
  src: string
  alt: string
  /** CSS aspect-ratio of the frame, e.g. "4 / 5". Reserves space to avoid layout shift. */
  aspect?: string
  fit?: 'cover' | 'contain'
  /** Final dither cell size in source pixels. */
  pixelSize?: number
  /** Load and develop immediately (above-the-fold art). */
  priority?: boolean
  /** Drop the dark tone entirely: light stipple floating on whatever is behind. */
  knockout?: boolean
}>(), {
  aspect: '4 / 5',
  fit: 'cover',
  pixelSize: 3,
  priority: false,
  knockout: false,
})

/** Coarse → fine cell sizes and how long each frame holds (ms). */
const DEVELOP_STEPS = [
  { scale: 8, hold: 70 },
  { scale: 4.5, hold: 90 },
  { scale: 2.4, hold: 130 },
] as const

const root = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const state = ref<'idle' | 'ready' | 'failed'>('idle')

let frames: HTMLCanvasElement[] = []
let loadObserver: IntersectionObserver | null = null
let viewObserver: IntersectionObserver | null = null
let timers: number[] = []

function draw(frame: HTMLCanvasElement) {
  const target = canvas.value
  if (!target) return
  target.width = frame.width
  target.height = frame.height
  target.getContext('2d')?.drawImage(frame, 0, 0)
}

function develop() {
  if (!frames.length) return
  timers.forEach(clearTimeout)
  timers = []
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    draw(frames.at(-1)!)
    return
  }
  let elapsed = 0
  frames.forEach((frame, index) => {
    timers.push(window.setTimeout(() => draw(frame), elapsed))
    elapsed += DEVELOP_STEPS[index]?.hold ?? 0
  })
}

async function load() {
  const el = root.value
  if (!el) return
  const styles = getComputedStyle(el)

  try {
    const img = new Image()
    img.decoding = 'async'
    img.src = props.src
    await img.decode()

    frames = await renderDitherFrames(img, {
      colorDark: styles.getPropertyValue('--dither-dark') || '#151515',
      colorLight: styles.getPropertyValue('--dither-light') || '#c4b5e3',
      pixelSizes: [...DEVELOP_STEPS.map(step => props.pixelSize * step.scale), props.pixelSize],
      knockout: props.knockout,
    })
    draw(frames[0]!)
    state.value = 'ready'
    viewObserver = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return
      viewObserver?.disconnect()
      develop()
    }, { threshold: 0.2 })
    viewObserver.observe(el)
  }
  catch (error) {
    // Image or WebGL failure: fall back to a CSS-toned <img> so the art still shows.
    console.error(`[DitherImage] Unable to render ${props.src}`, error)
    state.value = 'failed'
  }
}

onMounted(() => {
  if (props.priority) {
    void load()
    return
  }
  loadObserver = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    loadObserver?.disconnect()
    void load()
  }, { rootMargin: '400px 0px' })
  loadObserver.observe(root.value!)
})

/** Re-runs the coarse → fine develop, e.g. on hover. No-op until the art has rendered. */
defineExpose({ develop })

onBeforeUnmount(() => {
  loadObserver?.disconnect()
  viewObserver?.disconnect()
  timers.forEach(clearTimeout)
  timers = []
  frames = []
})
</script>

<template>
  <div
    ref="root"
    class="dither"
    :class="`dither--${fit}`"
    :data-state="state"
    :style="{ aspectRatio: aspect }"
    role="img"
    :aria-label="alt"
  >
    <img
      v-if="state === 'failed'"
      class="dither__fallback"
      :src="src"
      alt=""
      loading="lazy"
    >
    <canvas v-else ref="canvas" class="dither__canvas" aria-hidden="true" />
  </div>
</template>

<style scoped>
.dither {
  position: relative;
  width: 100%;
  overflow: hidden;
  contain: layout paint;
}

.dither__canvas,
.dither__fallback {
  width: 100%;
  height: 100%;
  object-position: center;
}

.dither--cover :is(.dither__canvas, .dither__fallback) {
  object-fit: cover;
}

.dither--contain :is(.dither__canvas, .dither__fallback) {
  object-fit: contain;
}

.dither__canvas {
  image-rendering: pixelated;
  opacity: 0;
  transition: opacity var(--dur-enter-fast) var(--ease-out);
}

.dither[data-state='ready'] .dither__canvas {
  opacity: 1;
}

.dither__fallback {
  filter: grayscale(1) contrast(1.6);
  mix-blend-mode: multiply;
}
</style>
