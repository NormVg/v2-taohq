<script setup lang="ts">
/**
 * taohq mark + wordmark. The mark is a CSS mask so it takes the accent
 * colour on any tone, and it slowly turns like a coin, a quiet sign of life.
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
  perspective: 120px;
}

.logo__mark {
  width: 14px;
  height: 19px;
  background: var(--accent);
  mask: var(--logo-url) center / contain no-repeat;
  /* Linear is right here: it's continuous rotation, not a state change. */
  animation: coin-spin 6s linear infinite;
}

.logo__word {
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

@keyframes coin-spin {
  to { transform: rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .logo__mark {
    animation: none;
  }
}
</style>
