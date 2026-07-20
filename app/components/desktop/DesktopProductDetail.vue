<template>
  <div class="page-root">
    <div class="top-right-dither-bg">
      <DitherImage :src="bgImage" class="bg-dither-img" />
    </div>

    <div class="product-page-wrapper">
      <template v-if="page">
        <header class="product-header">
          <h1 class="product-title">{{ page.title }}</h1>
          <div class="product-meta">
            <span>STATUS // {{ page.status || 'ONLINE' }}</span>
            <span>VERSION // {{ page.version || '1.0.0' }}</span>
            <a v-if="page.link" :href="page.link" target="_blank" rel="noopener noreferrer" class="product-link-out">GITHUB // OPEN -></a>
          </div>
        </header>

        <div v-if="page.heroMedia" class="hero-media-container">
          <img
            v-if="isImage(page.heroMedia)"
            :src="page.heroMedia"
            class="hero-media"
            alt="Product Hero"
          />
          <video
            v-else-if="isVideo(page.heroMedia)"
            :src="page.heroMedia"
            class="hero-media"
            autoplay
            loop
            muted
            playsinline
          />
          <div v-else class="missing-media">
            <span>[!] SYSTEM WARNING: COMPULSORY HERO MEDIA MISSING. PLEASE ATTACH MEDIA EXECUTABLE.</span>
          </div>
        </div>

        <AnimatedSlashes :count="30" class="slashes-divider" />

        <article class="prose">
          <ContentRenderer v-if="rawPage" :value="rawPage" />
        </article>
      </template>
      <div v-else class="product-not-found">
        <h1 class="product-title">404 // PRODUCT NOT FOUND</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchDocByPath } from '~/utils/site-content'

const bgImage = '/images/scenery1.jpg'
const route = useRoute()

const { data: rawPage } = await useAsyncData(`product-raw-d-${route.path}`, async () => {
  try {
    return await queryCollection('content').path(route.path).first()
  } catch {
    return null
  }
})

const { data: page } = await useAsyncData(`product-doc-d-${route.path}`, () =>
  fetchDocByPath(route.path),
)

function isImage(src) {
  return typeof src === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(src)
}

function isVideo(src) {
  return typeof src === 'string' && /\.(mp4|webm)$/i.test(src)
}

useSeoMeta({
  title: () => (page.value?.title ? `${page.value.title} // TheAlphaOnes` : 'PRODUCT // TheAlphaOnes'),
  description: () => page.value?.description || 'TheAlphaOnes product deployment.',
})
</script>

<style scoped>
.page-root {
  position: relative;
  width: 100%;
}

.top-right-dither-bg {
  position: fixed;
  top: 0;
  right: 0;
  width: 70vw;
  height: 90vh;
  z-index: 0;
  opacity: 0.2;
  pointer-events: none;
  mask-image: radial-gradient(circle at top right, black 0%, transparent 60%);
  -webkit-mask-image: radial-gradient(circle at top right, black 0%, transparent 60%);
}

.bg-dither-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-page-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
}

.product-header {
  margin-bottom: 2rem;
}

.product-title {
  font-family: 'VT323', monospace;
  font-size: 5rem;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  color: var(--bg-color);
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 1rem;
}

.product-meta {
  display: flex;
  gap: 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  opacity: 0.8;
}

.product-link-out {
  color: var(--bg-color);
  text-decoration: underline;
  text-decoration-style: dashed;
  text-underline-offset: 4px;
}

.product-link-out:hover {
  background-color: var(--bg-color);
  color: var(--fg-color);
  text-decoration: none;
}

.hero-media-container {
  width: 100%;
  margin: 2rem 0;
}

.hero-media {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(120%);
  display: block;
}

.missing-media {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed red;
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-align: center;
  padding: 2rem;
}

.slashes-divider {
  margin-bottom: 4rem;
  opacity: 0.5;
}

.prose {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  line-height: 2;
  max-width: 100%;
  color: rgba(196, 181, 227, 0.8);
}

:deep(.prose h2),
:deep(h2) {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: var(--bg-color);
  display: inline-block;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.25rem;
}

:deep(.prose p),
:deep(p) {
  margin-bottom: 2rem;
}

:deep(.prose ul),
:deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

:deep(.prose li),
:deep(li) {
  margin-bottom: 1rem;
}

:deep(.prose strong),
:deep(strong) {
  color: var(--bg-color);
  font-weight: bold;
}

:deep(.prose a),
:deep(a) {
  color: var(--bg-color);
  text-decoration: underline;
  text-decoration-style: dashed;
}

:deep(.prose code),
:deep(code) {
  background: var(--bg-color);
  color: var(--fg-color);
  padding: 0.2rem 0.4rem;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
}

:deep(.prose pre),
:deep(pre) {
  background: var(--bg-color) !important;
  color: var(--fg-color) !important;
  padding: 2rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  border: 2px dashed var(--fg-color);
}

:deep(.prose pre code),
:deep(pre code) {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  font-family: 'Courier New', Courier, monospace;
}

:deep(.prose pre code span),
:deep(pre code span) {
  color: inherit !important;
}

:deep(.prose img),
:deep(img) {
  width: 100%;
  height: auto;
  margin: 3rem 0;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(150%);
  display: block;
}
</style>
