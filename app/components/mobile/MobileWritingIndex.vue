<template>
  <main class="m-writing">
    <div class="top-bar">
      <NuxtLink to="/" class="back">&lt;&lt; RETURN</NuxtLink>
    </div>

    <section class="hero">
      <p class="label">DIR // WRITING</p>
      <h1 class="title">SYSTEM LOGS</h1>
      <p class="subtitle">WRITING & RESEARCH</p>
      <AnimatedSlashes :count="18" class="slashes" />
    </section>

    <section class="list-section">
      <div v-if="pending" class="empty">
        <p>LOADING LOGS…</p>
      </div>
      <div v-else-if="logs?.length" class="list">
        <NuxtLink
          v-for="(article, index) in logs"
          :key="article.path"
          :to="article.path"
          class="row"
        >
          <div class="row-dither" aria-hidden="true">
            <DitherImage :src="hoverImage" :pixel-size="3.5" />
          </div>
          <div class="row-body">
            <div class="row-top">
              <span class="num">[{{ String(index + 1).padStart(2, '0') }}]</span>
              <span class="date">{{ article.date || 'XX.XX.XXXX' }}</span>
            </div>
            <h2 class="name">{{ article.title }}</h2>
            <div class="meta">
              <span v-if="article.author">{{ article.author }}</span>
              <span class="cta">READ -&gt;</span>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div v-else class="empty">
        <p>NO LOGS FOUND.</p>
        <AnimatedSlashes :count="10" />
      </div>
    </section>
  </main>
</template>

<script setup>
import skullWindowImg from '~/assets/skull-window.png'
import { fetchWriting } from '~/utils/site-content'

const hoverImage = skullWindowImg

const { data: logs, pending } = await useAsyncData('writing-list', () => fetchWriting())
</script>

<style scoped>
.m-writing {
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
  font-size: clamp(2.4rem, 10vw, 3.3rem);
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
  padding: 1.35rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.row-top {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.65;
}

.name {
  font-family: 'VT323', monospace;
  font-size: clamp(1.7rem, 6.5vw, 2.2rem);
  margin: 0;
  line-height: 1.1;
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
  text-transform: uppercase;
}

.cta {
  margin-left: auto;
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
