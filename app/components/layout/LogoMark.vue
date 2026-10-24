<script setup lang="ts">
/**
 * The taohq spark on its own. A CSS mask, so it takes the current text
 * colour (or the accent), and every few seconds it flips like a tossed coin,
 * then rests. While hovered (it, or the link it sits in) it spins like a coin.
 * Its square box keeps the diamond's proportions at any size.
 */
import logoUrl from '~/assets/logo.svg?url'

withDefaults(defineProps<{
  /** Any CSS length, e.g. "20px" or "0.6em". */
  size?: string
  tone?: 'accent' | 'current'
}>(), {
  size: '20px',
  tone: 'accent',
})
</script>

<template>
  <span
    class="mark"
    :class="`mark--${tone}`"
    :style="{ '--logo-url': `url(${logoUrl})`, '--mark-size': size }"
    aria-hidden="true"
  >
    <span class="mark__glyph" />
  </span>
</template>

<style scoped>
.mark {
  display: inline-block;
  flex-shrink: 0;
  width: var(--mark-size);
  height: var(--mark-size);
  perspective: calc(var(--mark-size) * 8);
}

.mark__glyph {
  display: block;
  width: 100%;
  height: 100%;
  mask: var(--logo-url) center / contain no-repeat;
  animation: flip 5s var(--ease-in-out) infinite;
}

.mark--accent .mark__glyph {
  background: var(--accent);
}

.mark--current .mark__glyph {
  background: currentColor;
}

/* Hover: spins like a coin on its vertical axis for as long as it's hovered.
   Linear is right here: it's continuous rotation, not a state change. */
.mark:hover .mark__glyph,
:is(a, button):hover > .mark .mark__glyph {
  animation: coin-spin 900ms linear infinite;
}

@keyframes coin-spin {
  to { transform: rotateY(360deg); }
}

/* Rest for most of the cycle, then one full flip. */
@keyframes flip {
  0%, 78% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .mark__glyph {
    animation: none;
  }
}
</style>
