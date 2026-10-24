<script setup lang="ts">
/** Sticky left column of a product page: identity, spec sheet and actions. */
import type { Product } from '~/utils/product'
import { productMeta } from '~/utils/product-meta'

const props = defineProps<{
  product: Product
  index: number
  total: number
}>()

const counter = computed(() => `№ ${String(props.index).padStart(2, '0')} / ${String(props.total).padStart(2, '0')}`)
const meta = computed(() => productMeta(props.product))
</script>

<template>
  <aside v-reveal class="aside">
    <AppLabel data-reveal="fade">
      <NuxtLink to="/products" class="aside__back">Products</NuxtLink>
      <span aria-hidden="true">/</span>
      <span class="aside__counter">{{ counter }}</span>
    </AppLabel>
    <h1 class="aside__title" data-reveal="rise-slow" style="--reveal-delay: 60ms">{{ product.title }}</h1>
    <p class="aside__tagline" data-reveal="rise" style="--reveal-delay: 180ms">{{ product.tagline }}</p>
    <p class="aside__description" data-reveal="rise" style="--reveal-delay: 240ms">{{ product.description }}</p>
    <MetaList :items="meta" data-reveal="wipe" style="--reveal-delay: 320ms" />
    <CopyCommand v-if="product.install" :command="product.install" data-reveal="rise" style="--reveal-delay: 380ms" />
    <ProductActions :product="product" data-reveal="tick" style="--reveal-delay: 440ms" />
  </aside>
</template>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.aside__back:hover {
  color: var(--text-primary);
}

.aside__counter {
  color: var(--accent);
}

.aside__title {
  font-size: var(--text-hero);
  line-height: 0.82;
}

.aside__tagline {
  margin-top: calc(var(--space-2) * -1);
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(1.75rem, 1.4rem + 1vw, 2.25rem);
  line-height: 1;
  color: var(--accent);
}

.aside__description {
  max-width: 28rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

@media (min-width: 900px) {
  .aside {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }
}
</style>
