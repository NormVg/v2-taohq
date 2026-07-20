<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">SYSTEM LOGS</h1>
        <p class="subtitle mt-4">WRITING & RESEARCH</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>

    <BrutalistCard padding="4rem">
      <div class="logs-list mt-8">
        <div v-for="article in logs" :key="article.path" class="log-entry">
          <NuxtLink :to="article.path" class="log-link">
            <div class="log-hover-dither">
              <DitherImage :src="hoverImage" class="hover-dither-img" />
            </div>
            <div class="log-content">
              <span class="log-date">[{{ article.date || 'XX.XX.XXXX' }}]</span>
              <span class="log-title">{{ article.title }}</span>
            </div>
          </NuxtLink>
        </div>
        <div v-if="!logs?.length" class="empty">NO LOGS FOUND.</div>
      </div>
    </BrutalistCard>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" aria-label="TheAlphaOnes logo" @click.prevent>
          <img src="~/assets/logo.svg" alt="TAO Logo" class="flipping-logo" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import skullWindowImg from '~/assets/skull-window.png'
import { fetchWriting } from '~/utils/site-content'

const hoverImage = skullWindowImg

const { data: logs } = await useAsyncData('writing-list', () => fetchWriting())
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

.logs-list {
  display: flex;
  flex-direction: column;
  /* Fill remaining card space and scroll internally */
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
}

.logs-list::-webkit-scrollbar {
  display: none; /* Safari / Chrome */
}

.log-entry {
  border-top: 2px dashed var(--fg-color);
  /* Isolate hover interactions from triggering scroll-snap recalculations */
  contain: layout style;
}

.log-entry:last-child {
  border-bottom: 2px dashed var(--fg-color);
}

.log-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  color: var(--fg-color);
  text-decoration: none;
  font-family: 'VT323', monospace;
  font-size: 2rem;
  overflow: hidden;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
}

.log-link:hover {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.log-content {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 2rem;
  pointer-events: none;
  transition: transform 0.2s ease-out;
}

.log-link:hover .log-content {
  transform: translateX(2rem);
}

.log-hover-dither {
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

.log-link:hover .log-hover-dither {
  opacity: 0.35;
  transform: translateX(0);
}

.hover-dither-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.log-date {
  opacity: 0.6;
  white-space: nowrap;
}

.empty {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  padding: 2rem 0;
  opacity: 0.7;
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
  filter: drop-shadow(0 0 10px rgba(196, 181, 227, 0.5));
  transition: all 0.4s ease;
}

.logo-hover-target:hover .flipping-logo {
  opacity: 1;
  filter: drop-shadow(0 0 20px rgba(196, 181, 227, 1)) drop-shadow(0 0 40px rgba(196, 181, 227, 0.6));
  animation-duration: 0.6s;
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
