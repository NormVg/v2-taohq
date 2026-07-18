<template>
  <div class="product-mobile">
    <template v-if="page">
      <MobilePageHero
        to="/products"
        back-label="<< PRODUCTS"
        eyebrow="PRODUCT // DEPLOYMENT"
        :title="page.title"
      >
        <template #hero-body>
          <div class="meta">
            <span>STATUS // {{ page.status || 'ONLINE' }}</span>
            <span>VERSION // {{ page.version || '1.0.0' }}</span>
          </div>
        </template>
      </MobilePageHero>

      <div class="content">
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
      </div>
    </template>

    <template v-else>
      <MobilePageHero
        to="/products"
        back-label="<< PRODUCTS"
        title="404 // NOT FOUND"
        :logo="false"
      />
      <div class="content">
        <NuxtLink to="/products" class="back-btn">&lt;&lt; BACK TO PRODUCTS</NuxtLink>
      </div>
    </template>
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
  title: () => (page.value?.title ? `${page.value.title} // TheAlphaOnes` : 'PRODUCT // TheAlphaOnes'),
  description: () => page.value?.description || 'TheAlphaOnes product deployment.',
  ogTitle: () => (page.value?.title ? `${page.value.title} // TheAlphaOnes` : 'PRODUCT // TheAlphaOnes'),
  ogDescription: () => page.value?.description || 'TheAlphaOnes product deployment.',
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
  background: var(--bg-color);
  color: var(--fg-color);
}

.content {
  position: relative;
  z-index: 1;
  padding: 1.5rem 1.25rem 3rem;
  display: flex;
  flex-direction: column;
  background: var(--fg-color);
  color: var(--bg-color);
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.85;
  text-transform: uppercase;
  margin-top: 0.85rem;
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
