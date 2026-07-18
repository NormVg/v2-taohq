<template>
  <div class="product-mobile">
    <div class="top-bar">
      <NuxtLink to="/products" class="back">&lt;&lt; PRODUCTS</NuxtLink>
    </div>

    <div class="bg-dither" aria-hidden="true">
      <DitherImage :src="bgImage" />
    </div>

    <div class="content">
      <template v-if="page">
        <header class="header">
          <p class="label">PRODUCT // DEPLOYMENT</p>
          <h1 class="title">{{ page.title }}</h1>
          <div class="meta">
            <span>STATUS // {{ page.status || 'ONLINE' }}</span>
            <span>VERSION // {{ page.version || '1.0.0' }}</span>
          </div>
        </header>

        <div class="hero">
          <img
            v-if="isImage(page.heroMedia)"
            :src="page.heroMedia"
            class="hero-media"
            alt=""
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
          <div v-else class="missing">
            <span>[!] NO HERO MEDIA</span>
          </div>
        </div>

        <AnimatedSlashes :count="14" class="divider" />

        <article class="prose">
          <ContentRenderer v-if="rawPage" :value="rawPage" />
        </article>
      </template>

      <div v-else class="not-found">
        <h1 class="title">404 // NOT FOUND</h1>
        <NuxtLink to="/products" class="back-btn">&lt;&lt; BACK TO PRODUCTS</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchDocByPath } from '~/utils/site-content'

const bgImage = '/images/scenery1.jpg'
const route = useRoute()

const { data: rawPage } = await useAsyncData(`product-raw-${route.path}`, async () => {
  try {
    return await queryCollection('content').path(route.path).first()
  } catch {
    return null
  }
})

const { data: page } = await useAsyncData(`product-doc-${route.path}`, () =>
  fetchDocByPath(route.path),
)

function isImage(src) {
  return typeof src === 'string' && /\.(jpg|jpeg|png|gif|webp)$/i.test(src)
}

function isVideo(src) {
  return typeof src === 'string' && /\.(mp4|webm)$/i.test(src)
}

useSeoMeta({
  title: () => (page.value?.title ? `${page.value.title} // taohq` : 'PRODUCT // taohq'),
  description: () => page.value?.description || 'Tao HQ product deployment.',
  ogTitle: () => (page.value?.title ? `${page.value.title} // taohq` : 'PRODUCT // taohq'),
  ogDescription: () => page.value?.description || 'Tao HQ product deployment.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.product-mobile {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  background: var(--fg-color);
  color: var(--bg-color);
}

.top-bar {
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 0.85rem 1.25rem;
  border-bottom: 2px dashed var(--bg-color);
  background: var(--fg-color);
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

.bg-dither {
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 42vh;
  z-index: 0;
  opacity: 0.14;
  pointer-events: none;
  mask-image: radial-gradient(circle at top right, black 0%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at top right, black 0%, transparent 75%);
}

.bg-dither :deep(.dither-container),
.bg-dither :deep(canvas) {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 1;
  padding: 1.5rem 1.25rem 3rem;
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 1.25rem;
}

.label {
  font-family: 'VT323', monospace;
  font-size: 1.05rem;
  opacity: 0.7;
  margin: 0 0 0.65rem;
  letter-spacing: 0.06em;
}

.title {
  font-family: 'VT323', monospace;
  font-size: clamp(2.2rem, 9vw, 3.1rem);
  margin: 0 0 0.85rem;
  line-height: 0.95;
  text-transform: uppercase;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.55rem;
  text-wrap: balance;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.8;
  text-transform: uppercase;
}

.hero {
  width: 100%;
  margin: 0.5rem 0 1.25rem;
}

.hero-media {
  width: 100%;
  height: auto;
  max-height: 52vh;
  object-fit: cover;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(120%);
  display: block;
}

.missing {
  width: 100%;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 120, 120, 0.85);
  background: rgba(255, 0, 0, 0.08);
  color: #ff9a9a;
  font-family: 'VT323', monospace;
  font-size: 1.15rem;
  text-align: center;
  padding: 1rem;
}

.divider {
  margin-bottom: 1.25rem;
  opacity: 0.55;
}

.prose {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 100%;
  text-transform: uppercase;
  color: rgba(196, 181, 227, 0.88);
  overflow-wrap: anywhere;
  word-break: break-word;
}

:deep(.prose h2),
:deep(.prose h3),
:deep(h2),
:deep(h3) {
  font-family: 'VT323', monospace;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  color: var(--bg-color);
  display: inline-block;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.2rem;
  max-width: 100%;
}

:deep(.prose p),
:deep(p) {
  margin-bottom: 1.15rem;
}

:deep(.prose ul),
:deep(ul) {
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-bottom: 1.15rem;
}

:deep(.prose li),
:deep(li) {
  margin-bottom: 0.4rem;
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
  padding: 0.12rem 0.35rem;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  word-break: break-word;
}

:deep(.prose pre),
:deep(pre) {
  background: var(--bg-color) !important;
  color: var(--fg-color) !important;
  padding: 0.9rem;
  margin-bottom: 1.15rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 2px dashed var(--fg-color);
  max-width: 100%;
}

:deep(.prose pre code),
:deep(pre code) {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.88rem;
  white-space: pre;
}

:deep(.prose img),
:deep(img) {
  width: 100%;
  height: auto;
  max-width: 100%;
  margin: 1.35rem 0;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(140%);
  display: block;
}

.not-found {
  padding: 1rem 0 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 1.25rem;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  color: var(--bg-color);
  text-decoration: none;
  border: 2px solid var(--bg-color);
  padding: 0.5rem 0.9rem;
}

.back-btn:active {
  transform: scale(0.96);
  background: var(--bg-color);
  color: var(--fg-color);
}
</style>
