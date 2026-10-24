<script setup lang="ts">
/**
 * Route-change curtain: an ink panel with a dithered leading edge sweeps up
 * over the page, holds a beat while the spark spins (the new page swaps in
 * underneath, hiding the scroll reset), then lifts away. Three phases at
 * three paces: cover, hold, reveal. Off entirely for reduced motion.
 */
type Phase = 'idle' | 'cover' | 'reveal'

/** Must match the CSS durations below. */
const COVER_MS = 550
/** Time on the ink, so the moment registers before the new page lifts in. */
const HOLD_MS = 350
const REVEAL_MS = 750

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
  coveredAt = performance.now() + COVER_MS + HOLD_MS
}

function reveal() {
  if (phase.value !== 'cover') return
  // Never lift before cover + hold have played, even on instant navigations.
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
    <LogoMark class="curtain__mark" size="44px" />
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
  transition: transform 550ms var(--ease-out);
}

.curtain[data-phase='reveal'] {
  visibility: visible;
  transform: translateY(-100%);
  transition: transform 750ms var(--ease-in-out);
}

/* The spark arrives a beat after the cover lands, and spins through the hold. */
.curtain__mark {
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity 220ms var(--ease-out),
    transform 320ms var(--ease-spring);
}

.curtain[data-phase='cover'] .curtain__mark {
  opacity: 1;
  transform: none;
  transition-delay: 380ms;
}

.curtain__mark :deep(.mark__glyph) {
  animation: curtain-spin 900ms linear infinite;
}

@keyframes curtain-spin {
  to { transform: rotateY(360deg); }
}
</style>
