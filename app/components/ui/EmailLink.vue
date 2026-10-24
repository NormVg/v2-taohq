<script setup lang="ts">
/** The taohq address set large in pixel type, as the action itself. */
import { SITE } from '~/constants/site'

defineProps<{ subject?: string }>()
</script>

<template>
  <a v-sound :href="mailtoHref(subject)" class="email">
    {{ SITE.email }}
    <AppIcon name="arrow-up-right" :size="20" class="email__icon" />
  </a>
</template>

<style scoped>
.email {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 1.3rem + 1.6vw, 2.75rem);
  line-height: 1;
  overflow-wrap: anywhere;
  transition: color var(--dur-hover) var(--ease-out);
}

.email__icon {
  color: var(--accent);
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .email:hover {
    color: var(--accent);
  }

  .email:hover .email__icon {
    transform: translate(3px, -3px);
  }
}
</style>
