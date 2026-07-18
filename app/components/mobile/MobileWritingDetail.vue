<template>
  <div class="writing-mobile">
    <div class="top-bar">
      <NuxtLink to="/writing" class="back">&lt;&lt; WRITING</NuxtLink>
    </div>

    <div class="bg-dither" aria-hidden="true">
      <DitherImage :src="bgImage" />
    </div>

    <div class="content">
      <template v-if="page">
        <header class="header">
          <p class="label">SYSTEM LOG</p>
          <h1 class="title">{{ page.title }}</h1>
          <div class="meta">
            <span>DATE // {{ page.date || 'XX.XX.XXXX' }}</span>
            <span>AUTHOR // {{ page.author || 'SYSTEM' }}</span>
          </div>
        </header>

        <AnimatedSlashes :count="14" class="divider" />

        <article class="prose">
          <ContentRenderer v-if="rawPage" :value="rawPage" />
        </article>
      </template>
      <div v-else class="not-found">
        <h1 class="title">404 // LOG NOT FOUND</h1>
        <NuxtLink to="/writing" class="back-btn">&lt;&lt; BACK TO LOGS</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchDocByPath } from '~/utils/site-content'

const bgImage = '/images/scenery2.jpg'
const route = useRoute()

const { data: rawPage } = await useAsyncData(`writing-raw-${route.path}`, async () => {
  try {
    return await queryCollection('content').path(route.path).first()
  } catch {
    return null
  }
})

const { data: page } = await useAsyncData(`writing-doc-${route.path}`, () =>
  fetchDocByPath(route.path),
)

useSeoMeta({
  title: () => (page.value?.title ? `${page.value.title} // taohq` : 'WRITING // taohq'),
  description: () => page.value?.description || 'Tao HQ system log.',
})
</script>

<style scoped>
.writing-mobile {
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
}

.header {
  margin-bottom: 1.15rem;
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
  font-size: clamp(2.1rem, 8.5vw, 3rem);
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

:deep(h2),
:deep(h3) {
  font-family: 'VT323', monospace;
  font-size: 1.65rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  color: var(--bg-color);
  display: inline-block;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.2rem;
}

:deep(p) {
  margin-bottom: 1.15rem;
}

:deep(ul) {
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-bottom: 1.15rem;
}

:deep(code) {
  background: var(--bg-color);
  color: var(--fg-color);
  padding: 0.12rem 0.35rem;
  font-family: 'VT323', monospace;
}

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

:deep(pre code) {
  background: transparent !important;
  padding: 0 !important;
}

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
