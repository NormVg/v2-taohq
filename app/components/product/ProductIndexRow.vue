<script setup lang="ts">
/**
 * One product in the products index: a single sticky text column (meta
 * line, name, tagline, description, actions, spec sheet) beside large
 * dithered art that scrolls past it.
 */
import type { Product } from '~/utils/product'
import { productMeta } from '~/utils/product-meta'

const props = defineProps<{
  product: Product
  index: number
  total: number
  priority?: boolean
}>()

const counter = computed(() => `№ ${String(props.index).padStart(2, '0')} / ${String(props.total).padStart(2, '0')}`)
// Status already leads the row, so the spec sheet skips it.
const specs = computed(() => productMeta(props.product).filter(item => item.label !== 'Status'))
</script>

<template>
  <article v-reveal class="item">
    <div class="item__text">
      <div class="item__meta" data-reveal="wipe">
        <span class="item__counter">{{ counter }}</span>
        <span class="item__rule" aria-hidden="true" />
        <ProductStatus :status="product.status" />
      </div>

      <h2 class="item__title" data-reveal="rise-slow" style="--reveal-delay: 80ms">
        <NuxtLink v-sound="'tick'" :to="product.path">{{ product.title }}</NuxtLink>
      </h2>
      <p class="item__tagline" data-reveal="rise" style="--reveal-delay: 180ms">{{ product.tagline }}</p>
      <p class="item__description" data-reveal="rise" style="--reveal-delay: 240ms">{{ product.description }}</p>
      <ProductActions
        class="item__actions"
        :product="product"
        :max="1"
        :show-details="true"
        data-reveal="tick"
        style="--reveal-delay: 320ms"
      />
      <MetaList class="item__specs" :items="specs" data-reveal="fade" style="--reveal-delay: 400ms" />
    </div>

    <NuxtLink
      :to="product.path"
      class="item__art"
      tabindex="-1"
      aria-hidden="true"
      data-reveal="fade"
      style="--reveal-delay: 60ms; --reveal-duration: 900ms"
    >
      <DitherImage :name="product.art" :alt="product.artAlt" aspect="4 / 5" fit="cover" :priority="priority" />
    </NuxtLink>
  </article>
</template>

<style scoped>
.item {
  display: grid;
  gap: var(--space-8);
  padding-block: var(--space-8) var(--space-24);
}

.item__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 34rem;
}

.item__meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  margin-bottom: var(--space-8);
}

.item__counter {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  color: var(--accent);
}

.item__rule {
  flex: 1;
  height: 1px;
  background: var(--line);
}

.item__title {
  font-size: var(--text-display);
  line-height: 0.9;
}

.item__title a {
  transition: color var(--dur-hover) var(--ease-out);
}

.item__title a:hover {
  color: var(--accent);
}

.item__tagline {
  margin-top: var(--space-3);
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(1.5rem, 1.25rem + 0.8vw, 2rem);
  line-height: 1.15;
  color: var(--accent);
}

.item__description {
  margin-top: var(--space-6);
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.item__actions {
  margin-top: var(--space-8);
}

.item__specs {
  width: 100%;
  margin-top: var(--space-12);
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
    grid-template-columns: 5fr 7fr;
    gap: var(--space-16);
  }

  .item__text {
    position: sticky;
    top: calc(var(--header-h) + var(--space-12));
    align-self: start;
  }
}
</style>
