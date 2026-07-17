<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">PRODUCTS</h1>
        <p class="subtitle mt-4">ACTIVE DEPLOYMENTS</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>

    <BrutalistCard padding="4rem">
      <div class="products-grid mt-8">
        <div v-for="product in products" :key="product.path" class="product-card">
          <NuxtLink :to="product.path" class="product-link">
            <div class="product-hover-dither">
              <DitherImage :src="hoverImage" class="hover-dither-img" />
            </div>
            <div class="product-content">
              <h2 class="product-name">{{ product.title }}</h2>
              <p class="product-desc">{{ product.description || product.meta?.description || 'NO DESCRIPTION' }}</p>
              <div class="product-meta">
                <span>STATUS // {{ product.meta?.status || 'ONLINE' }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </BrutalistCard>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" @click.prevent>
          <img src="~/assets/logo.svg" alt="TAO Logo" class="flipping-logo" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import roseDemonImg from '~/assets/rose-demon.png'

const hoverImage = roseDemonImg

const { data: products } = await useAsyncData('products', () => {
  return queryCollection('content').where('path', 'LIKE', '/products%').all()
})
definePageMeta({ layout: 'default' })

useHead({
  title: 'PRODUCTS // taohq'
})
</script>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 1rem 0 0 0;
  opacity: 0.8;
}

.products-grid {
  display: flex;
  flex-direction: column;
}

.product-card {
  border-top: 2px dashed var(--fg-color);
}

.product-card:last-child {
  border-bottom: 2px dashed var(--fg-color);
}

.product-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 3rem 0;
  color: var(--fg-color);
  text-decoration: none;
  transition: padding-left 0.2s ease-out;
  overflow: hidden;
}

.product-link:hover {
  padding-left: 2rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.product-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pointer-events: none;
}

.product-hover-dither {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 60%;
  z-index: 1;
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  mask-image: linear-gradient(to left, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to left, black 0%, transparent 100%);
  pointer-events: none;
}

.product-link:hover .product-hover-dither {
  opacity: 0.35;
  transform: translateX(0);
}

.hover-dither-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-name {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  margin: 0;
  text-transform: uppercase;
}

.product-desc {
  font-family: monospace;
  font-size: 1.2rem;
  opacity: 0.8;
  margin: 0;
  max-width: 600px;
}

.product-meta {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  justify-content: space-between;
  opacity: 0.6;
}

.fixed-logo-wrapper {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 50;
  pointer-events: none;
  animation: float-complex 5.7s ease-in-out infinite alternate;
}

.logo-inner-anim {
  animation: slight-tilt 7.1s ease-in-out infinite alternate;
}

.logo-hover-target {
  display: block;
  pointer-events: auto;
  cursor: crosshair;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-hover-target:hover {
  transform: scale(1.3) translateY(-10px);
}

.flipping-logo {
  width: 60px;
  height: auto;
  animation: flip-y 4.3s linear infinite;
  transform-style: preserve-3d;
  opacity: 0.85;
  /* Add base glow */
  filter: drop-shadow(0 0 10px rgba(196, 181, 227, 0.5));
  transition: all 0.4s ease;
}

.logo-hover-target:hover .flipping-logo {
  opacity: 1;
  /* Intense neon glow on hover */
  filter: drop-shadow(0 0 20px rgba(196, 181, 227, 1)) drop-shadow(0 0 40px rgba(196, 181, 227, 0.6));
  animation-duration: 0.6s; /* Spin extremely fast */
}

@keyframes float-complex {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(5px); }
}

@keyframes flip-y {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes slight-tilt {
  0% { transform: rotateZ(-5deg) scale(1); }
  100% { transform: rotateZ(5deg) scale(1.05); }
}
</style>
