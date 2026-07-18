<template>
  <div class="page-root">
    <div class="top-right-dither-bg">
      <DitherImage :src="bgImage" class="bg-dither-img" />
    </div>

    <div class="blog-post-wrapper">
      <template v-if="page">
        <header class="post-header">
          <h1 class="post-title">{{ page.title }}</h1>
          <div class="post-meta">
            <span>DATE // {{ meta?.date || page.meta?.date || page.date || 'XX.XX.XXXX' }}</span>
            <span>AUTHOR // {{ meta?.author || page.meta?.author || page.author || 'SYSTEM' }}</span>
          </div>
        </header>
        
        <AnimatedSlashes :count="30" class="slashes-divider" />
        
        <article class="prose">
          <ContentRenderer :value="page" />
        </article>
      </template>
      <div v-else class="post-not-found">
        <h1 class="post-title">404 // LOG NOT FOUND</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchDocByPath } from '~/utils/site-content'

const bgImage = '/images/scenery2.jpg'
const route = useRoute()

const { data: page } = await useAsyncData(`writing-raw-d-${route.path}`, async () => {
  try {
    return await queryCollection('content').path(route.path).first()
  } catch {
    return null
  }
})

const { data: meta } = await useAsyncData(`writing-doc-d-${route.path}`, () =>
  fetchDocByPath(route.path),
)

useSeoMeta({
  title: () => (meta.value?.title ? `${meta.value.title} // TheAlphaOnes` : 'WRITING // TheAlphaOnes'),
  description: () => meta.value?.description || 'TheAlphaOnes system log.',
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

.blog-post-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
}

.post-header {
  margin-bottom: 1rem;
}

.post-title {
  font-family: 'VT323', monospace;
  font-size: 5rem;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  color: var(--bg-color);
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 1rem;
}

.post-meta {
  display: flex;
  gap: 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  opacity: 0.8;
  margin-bottom: 3rem;
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
  text-transform: uppercase;
  color: rgba(196, 181, 227, 0.8);
}

:deep(.prose h2) {
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

:deep(.prose p) {
  margin-bottom: 2rem;
}

:deep(.prose ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

:deep(.prose li) {
  margin-bottom: 1rem;
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
  font-size: 1.2rem;
}

:deep(.prose pre) {
  background: var(--bg-color) !important;
  color: var(--fg-color) !important;
  padding: 2rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  border: 2px dashed var(--fg-color);
}

:deep(.prose pre code) {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
  font-family: 'Courier New', Courier, monospace;
}

:deep(.prose pre code span) {
  color: inherit !important;
}

:deep(.prose img) {
  width: 100%;
  height: auto;
  margin: 3rem 0;
  border: 2px dashed var(--bg-color);
  filter: grayscale(100%) contrast(150%);
  display: block;
}
</style>
