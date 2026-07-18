<template>
  <main class="m-products">
    <MobilePageHero
      eyebrow="DIR // PRODUCTS"
      title="PRODUCTS"
      subtitle="ACTIVE DEPLOYMENTS"
    />

    <section class="list-section">
      <div v-if="pending" class="empty">
        <p>LOADING DEPLOYMENTS…</p>
      </div>
      <div v-else-if="products?.length" class="list">
        <NuxtLink
          v-for="(product, index) in products"
          :key="product.path"
          :to="product.path"
          class="row"
        >
          <div class="row-dither" aria-hidden="true">
            <DitherImage :src="hoverImage" :pixel-size="3.5" />
          </div>
          <div class="row-body">
            <span class="num">[{{ String(index + 1).padStart(2, '0') }}]</span>
            <h2 class="name">{{ product.title }}</h2>
            <p class="desc">
              {{ product.description || 'NO DESCRIPTION' }}
            </p>
            <div class="meta">
              <span>STATUS // {{ product.status || 'ONLINE' }}</span>
              <span v-if="product.version">V // {{ product.version }}</span>
              <span class="cta">ENTER -&gt;</span>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div v-else class="empty">
        <p>NO ACTIVE DEPLOYMENTS.</p>
        <AnimatedSlashes :count="10" />
      </div>
    </section>
  </main>
</template>

<script setup>
import roseDemonImg from '~/assets/rose-demon.png'
import { fetchProducts } from '~/utils/site-content'

const hoverImage = roseDemonImg

const { data: products, pending } = await useAsyncData('products-list', () => fetchProducts())
</script>

<style scoped>
.m-products {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: var(--bg-color);
  color: var(--fg-color);
}

.top-bar {
  padding: 0.85rem 1.25rem;
  border-bottom: 2px dashed var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.35rem;
}

.back {
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
}

.back:active {
  transform: scale(0.96);
  opacity: 0.8;
}

.hero {
  background: var(--fg-color);
  color: var(--bg-color);
  padding: 2rem 1.25rem 2.25rem;
  border-bottom: 2px dashed var(--bg-color);
}

.label {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.7;
  margin: 0;
  letter-spacing: 0.08em;
}

.title {
  font-family: 'VT323', monospace;
  font-size: clamp(2.6rem, 11vw, 3.5rem);
  line-height: 0.95;
  margin: 0.75rem 0 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.35rem;
  margin: 0.75rem 0 0;
  opacity: 0.8;
  text-transform: uppercase;
}

.slashes {
  margin-top: 1.25rem;
  display: block;
}

.list-section {
  padding: 0 1.25rem 2.5rem;
}

.list {
  display: flex;
  flex-direction: column;
}

.row {
  position: relative;
  display: block;
  border-top: 2px dashed var(--fg-color);
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  min-height: 44px;
  transition:
    background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 100ms ease-out;
}

.row:last-child {
  border-bottom: 2px dashed var(--fg-color);
}

.row:active {
  transform: scale(0.99);
  background: var(--fg-color);
  color: var(--bg-color);
}

.row-dither {
  position: absolute;
  inset: 0;
  opacity: 0.16;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(to left, black 5%, transparent 70%);
  -webkit-mask-image: linear-gradient(to left, black 5%, transparent 70%);
}

.row-dither :deep(.dither-container),
.row-dither :deep(canvas) {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

.row-body {
  position: relative;
  z-index: 1;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.num {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.65;
}

.name {
  font-family: 'VT323', monospace;
  font-size: clamp(1.85rem, 7vw, 2.4rem);
  margin: 0;
  line-height: 1.05;
  text-transform: uppercase;
}

.desc {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.8;
  line-height: 1.35;
  text-transform: uppercase;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem 1.1rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.7;
  margin-top: 0.35rem;
  text-transform: uppercase;
}

.cta {
  margin-left: auto;
  opacity: 0.85;
}

.empty {
  padding: 2rem 0;
  border-top: 2px dashed var(--fg-color);
  border-bottom: 2px dashed var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.35rem;
  text-transform: uppercase;
}
</style>
