<script setup lang="ts">
/**
 * Route-change curtain: an ink panel with a dithered leading edge sweeps up
 * over the page, the new page swaps in underneath (hiding the scroll reset),
 * then the curtain lifts away. Each phase has its own pace: a quick cover,
 * a slower reveal. Off entirely for reduced motion.
 */
type Phase = 'idle' | 'cover' | 'reveal'

/** Must match the CSS durations below. */
const COVER_MS = 240
const REVEAL_MS = 420

const nuxtApp = useNuxtApp()
const phase = ref<Phase>('idle')

let coveredAt = 0
let timers: number[] = []
let reduceMotion = false

function later(fn: () => void, ms: number) {
  timers.push(window.setTimeout(fn, ms))
}

function cover() {
  if (reduceMotion || nuxtApp.isHydrating) return
  timers.forEach(clearTimeout)
  timers = []
  phase.value = 'cover'
  coveredAt = performance.now() + COVER_MS
}

function reveal() {
  if (phase.value !== 'cover') return
  // Never lift before the page is fully covered, even on instant navigations.
  const wait = Math.max(0, coveredAt - performance.now())
  later(() => {
    phase.value = 'reveal'
    later(() => (phase.value = 'idle'), REVEAL_MS)
  }, wait)
}

nuxtApp.hook('page:start', cover)
nuxtApp.hook('page:finish', reveal)

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>

<template>
  <div class="curtain" :data-phase="phase" aria-hidden="true">
    <LogoMark size="40px" />
  </div>
</template>

<style scoped>
.curtain {
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-menu) + 2);
  display: grid;
  place-items: center;
  background: var(--ink-900);
  transform: translateY(100%);
  pointer-events: none;
  visibility: hidden;
}

/* Dithered leading and trailing edges: the same 2px checker as the art. */
.curtain::before,
.curtain::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  background-image: conic-gradient(var(--ink-900) 25%, transparent 0 50%, var(--ink-900) 0 75%, transparent 0);
  background-size: 6px 6px;
}

.curtain::before {
  bottom: 100%;
}

.curtain::after {
  top: 100%;
}

.curtain[data-phase='cover'] {
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition: transform 240ms var(--ease-out);
}

.curtain[data-phase='reveal'] {
  visibility: visible;
  transform: translateY(-100%);
  transition: transform 420ms var(--ease-in-out);
}
</style>
