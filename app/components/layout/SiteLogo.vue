<script setup lang="ts">
/** taohq mark + wordmark, linking home. */
import { SITE } from '~/constants/site'
</script>

<template>
  <NuxtLink to="/" class="logo" :aria-label="`${SITE.name} home`">
    <LogoMark size="20px" />
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

.logo__word {
  font-family: var(--font-display);
  font-size: 1.625rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
</style>
