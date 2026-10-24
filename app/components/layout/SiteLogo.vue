<script setup lang="ts">
/**
 * taohq mark + wordmark. The mark is a CSS mask so it takes the accent
 * colour on any tone. Every few seconds it flips like a tossed coin, then
 * rests: a quiet sign of life. Its square box keeps the diamond's proportions.
 */
import logoUrl from '~/assets/logo.svg?url'
import { SITE } from '~/constants/site'
</script>

<template>
  <NuxtLink to="/" class="logo" :aria-label="`${SITE.name} home`">
    <span class="logo__mark" :style="{ '--logo-url': `url(${logoUrl})` }" aria-hidden="true" />
    <span class="logo__word" aria-hidden="true">{{ SITE.name }}</span>
  </NuxtLink>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  color: var(--text-primary);
  perspective: 160px;
}

.logo__mark {
  /* Square box: the tall diamond fits inside and never clips while turning. */
  width: 20px;
  height: 20px;
  background: var(--accent);
  mask: var(--logo-url) center / contain no-repeat;
  animation: flip 5s var(--ease-in-out) infinite;
}

.logo__word {
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

/* Rest for most of the cycle, then one full flip. */
@keyframes flip {
  0%, 78% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .logo__mark {
    animation: none;
  }
}
</style>
