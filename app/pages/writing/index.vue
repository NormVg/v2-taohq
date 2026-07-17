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
              <span class="log-date">[{{ article.meta?.date || 'XX.XX.XXXX' }}]</span>
              <span class="log-title">{{ article.title }}</span>
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
import skullWindowImg from '~/assets/skull-window.png'

const hoverImage = skullWindowImg

const { data: logs } = await useAsyncData('writing', () => {
  return queryCollection('content').where('path', 'LIKE', '/writing%').all()
})
definePageMeta({ layout: 'default' })

useHead({
  title: 'WRITING // taohq'
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

.logs-list {
  display: flex;
  flex-direction: column;
}

.log-entry {
  border-top: 2px dashed var(--fg-color);
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
  transition: padding-left 0.2s ease-out;
  overflow: hidden;
}

.log-link:hover {
  padding-left: 2rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.log-content {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 2rem;
  pointer-events: none;
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

@media (max-width: 768px) {
  .log-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
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
