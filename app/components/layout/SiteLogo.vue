<script setup lang="ts">
/** taohq mark + wordmark. The mark is a CSS mask so it inherits text colour on any tone. */
import logoUrl from '~/assets/logo.svg?url'
import { SITE } from '~/constants/site'

withDefaults(defineProps<{ size?: 'md' | 'lg' }>(), { size: 'md' })
</script>

<template>
  <NuxtLink to="/" class="logo" :class="`logo--${size}`" :aria-label="`${SITE.name} home`">
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
}

.logo__mark {
  width: 14px;
  height: 19px;
  background: var(--accent);
  mask: var(--logo-url) center / contain no-repeat;
  transition: transform var(--dur-panel) var(--ease-spring);
}

.logo__word {
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

.logo--lg .logo__mark {
  width: 34px;
  height: 46px;
  background: currentColor;
}

.logo--lg .logo__word {
  font-size: clamp(4rem, 2rem + 10vw, 11rem);
  line-height: 0.8;
}

@media (hover: hover) {
  .logo:hover .logo__mark {
    transform: rotate(-12deg);
  }
}
</style>
