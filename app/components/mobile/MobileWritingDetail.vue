<template>
  <div class="writing-mobile">
    <template v-if="page">
      <MobilePageHero
        to="/writing"
        back-label="<< WRITING"
        eyebrow="SYSTEM LOG"
        :title="page.title"
      >
        <template #hero-body>
          <div class="meta">
            <span>DATE // {{ page.date || 'XX.XX.XXXX' }}</span>
            <span>AUTHOR // {{ page.author || 'SYSTEM' }}</span>
          </div>
        </template>
      </MobilePageHero>

      <div class="content">
        <article class="prose">
          <ContentRenderer v-if="rawPage" :value="rawPage" />
        </article>
      </div>
    </template>

    <template v-else>
      <MobilePageHero
        to="/writing"
        back-label="<< WRITING"
        title="404 // LOG NOT FOUND"
        :logo="false"
      />
      <div class="content">
        <NuxtLink to="/writing" class="back-btn">&lt;&lt; BACK TO LOGS</NuxtLink>
      </div>
    </template>
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
  background: var(--bg-color);
  color: var(--fg-color);
}

.content {
  position: relative;
  z-index: 1;
  padding: 1.5rem 1.25rem 3rem;
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
