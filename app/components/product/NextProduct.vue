<script setup lang="ts">
/** "Next ↳" link at the foot of a product page, so the lineup reads as a sequence. */
import type { Product } from '~/utils/product'

defineProps<{ product: Product }>()
</script>

<template>
  <NuxtLink v-sound="'tick'" :to="product.path" class="next">
    <AppLabel>Next ↳</AppLabel>
    <span class="next__title">{{ product.title }}</span>
    <span class="next__tagline">{{ product.tagline }}</span>
    <DitherImage class="next__art" :src="product.art" :alt="product.artAlt" aspect="4 / 5" fit="contain" knockout />
  </NuxtLink>
</template>

<style scoped>
.next {
  position: relative;
  display: grid;
  gap: var(--space-2);
  padding-block: var(--space-8) var(--space-16);
  border-top: 1px solid var(--line);
  overflow: hidden;
}

.next__title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  line-height: 0.9;
  transition: color var(--dur-hover) var(--ease-out), transform var(--dur-panel) var(--ease-out);
}

.next__tagline {
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.next__art {
  position: absolute;
  right: 0;
  top: 50%;
  width: clamp(120px, 16vw, 220px);
  opacity: 0.5;
  transform: translateY(-50%) rotate(4deg);
  transition: opacity var(--dur-panel) var(--ease-out), transform var(--dur-panel) var(--ease-spring);
}

@media (hover: hover) {
  .next:hover .next__title {
    color: var(--accent);
    transform: translateX(var(--space-2));
  }

  .next:hover .next__art {
    opacity: 1;
    transform: translateY(-50%) rotate(0deg) scale(1.05);
  }
}
</style>
