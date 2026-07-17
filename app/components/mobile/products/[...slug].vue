<template>
  <div class="mobile-page-wrapper inverted-section">
    <div class="top-nav">
      <NuxtLink to="/products" class="nav-link">< PRODUCTS</NuxtLink>
    </div>

    <div class="top-right-dither-bg">
      <DitherImage :src="bgImage" class="bg-dither-img" />
    </div>

    <div class="product-page-content">
      <template v-if="page">
        <header class="product-header">
          <h1 class="product-title">{{ page.title }}</h1>
          <div class="product-meta">
            <span>STATUS // {{ page.meta?.status || 'ONLINE' }}</span>
            <span>VERSION // {{ page.meta?.version || '1.0.0' }}</span>
          </div>
        </header>
        
        <div class="hero-media-container">
          <img v-if="page.meta?.heroMedia?.match(/\.(jpg|jpeg|png|gif)$/i)" :src="page.meta?.heroMedia" class="hero-media" alt="Product Hero" />
          <video v-else-if="page.meta?.heroMedia?.match(/\.(mp4|webm)$/i)" :src="page.meta?.heroMedia" class="hero-media" autoplay loop muted playsinline></video>
          <div v-else class="missing-media">
            <span>[!] NO HERO MEDIA</span>
          </div>
        </div>

        <AnimatedSlashes :count="15" class="slashes-divider" />
        
        <article class="prose">
          <ContentRenderer :value="page" />
        </article>
      </template>
      <div v-else class="product-not-found">
        <h1 class="product-title">404 // NOT FOUND</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
const bgImage = '/images/scenery1.jpg'
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

definePageMeta({ layout: 'product' })
</script>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

.inverted-section {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem 1.25rem;
  border-bottom: 2px dashed var(--bg-color);
  position: relative;
  z-index: 2;
}

.nav-link {
  color: var(--bg-color);
  text-decoration: none;
}

.top-right-dither-bg {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 50vh;
  z-index: 0;
  opacity: 0.2;
  pointer-events: none;
  mask-image: radial-gradient(circle at top right, black 0%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at top right, black 0%, transparent 80%);
}

.bg-dither-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-page-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.25rem;
}

.product-header {
  margin-bottom: 2rem;
}

.product-title {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  line-height: 1;
  color: var(--bg-color);
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.5rem;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.8;
}

.hero-media-container {
  width: 100%;
  margin: 1rem 0 2rem 0;
}

.hero-media {
  width: 100%;
  height: auto;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(120%);
  display: block;
}

.missing-media {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed red;
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
}

.slashes-divider {
  margin-bottom: 2rem;
  opacity: 0.5;
}

.prose {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 100%;
  text-transform: uppercase;
  color: rgba(196, 181, 227, 0.8);
}

:deep(.prose h2) {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--bg-color);
  display: inline-block;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.25rem;
}

:deep(.prose p) {
  margin-bottom: 1.5rem;
}

:deep(.prose ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(.prose li) {
  margin-bottom: 0.5rem;
}

:deep(.prose strong) {
  color: var(--bg-color);
  font-weight: bold;
}

:deep(.prose a) {
  color: var(--bg-color);
  text-decoration: underline;
  text-decoration-style: dashed;
}

:deep(.prose code) {
  background: var(--bg-color);
  color: var(--fg-color);
  padding: 0.2rem 0.4rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
}

:deep(.prose pre) {
  background: var(--bg-color) !important;
  color: var(--fg-color) !important;
  padding: 1rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  border: 2px dashed var(--fg-color);
}

:deep(.prose pre code) {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
}

:deep(.prose pre code span) {
  color: inherit !important;
}

:deep(.prose img) {
  width: 100%;
  height: auto;
  margin: 2rem 0;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(150%);
  display: block;
}
</style>
