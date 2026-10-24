<script setup lang="ts">
/**
 * One product in the products index, yuriy-style: tiny sticky text columns
 * on the left (name + number, details + action), large dithered art on
 * the right that scrolls past them.
 */
import type { Product } from '~/utils/product'

const props = defineProps<{
  product: Product
  index: number
  total: number
  priority?: boolean
}>()

const counter = computed(() => `${String(props.index).padStart(2, '0')} / ${String(props.total).padStart(2, '0')}`)
</script>

<template>
  <article v-reveal class="item">
    <div class="item__text">
      <div class="item__name" data-reveal="rise">
        <h2 class="item__title">
          <NuxtLink v-sound="'tick'" :to="product.path">{{ product.title }}</NuxtLink>
        </h2>
        <span class="item__counter">{{ counter }}</span>
        <ProductStatus :status="product.status" />
      </div>
      <div class="item__details" data-reveal="rise" style="--reveal-delay: 120ms">
        <p class="item__tagline">{{ product.tagline }}</p>
        <p class="item__description">{{ product.description }}</p>
        <ProductActions :product="product" :max="1" :show-details="true" size="sm" />
      </div>
    </div>
    <NuxtLink :to="product.path" class="item__art" tabindex="-1" aria-hidden="true" data-reveal="fade" style="--reveal-delay: 60ms; --reveal-duration: 900ms">
      <DitherImage :src="product.art" :alt="product.artAlt" aspect="4 / 5" :priority="priority" />
    </NuxtLink>
  </article>
</template>

<style scoped>
.item {
  display: grid;
  gap: var(--space-8);
  padding-block: var(--space-8) var(--space-24);
  border-top: 1px solid var(--line);
}

.item__text {
  display: grid;
  gap: var(--space-6);
  align-content: start;
}

.item__name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}

.item__title {
  font-size: var(--text-h2);
}

.item__title a:hover {
  color: var(--accent);
}

.item__counter {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  color: var(--text-muted);
}

.item__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  max-width: 22rem;
}

.item__tagline {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.15;
  color: var(--accent);
}

.item__description {
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.item__art {
  display: block;
  overflow: hidden;
}

.item__art :deep(.dither) {
  transition: transform 1200ms var(--ease-out);
}

.item__art:hover :deep(.dither) {
  transform: scale(1.03);
}

@media (min-width: 900px) {
  .item {
    grid-template-columns: 1fr 1fr;
  }

  .item__text {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
