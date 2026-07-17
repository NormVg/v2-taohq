<script setup>
import { onMounted } from 'vue'

useSeoMeta({
  title: 'OPEN SOURCE // taohq',
  description: 'Explore OPEN SOURCE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'OPEN SOURCE // taohq',
  ogDescription: 'Explore OPEN SOURCE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">OPEN SOURCE</h1>
        <p class="subtitle mt-4">THE CODE BELONGS TO THE COLLECTIVE.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>

    <BrutalistCard padding="4rem">
      
      <div class="intro mt-8">
        <p class="body-text">
          We build in the public domain because obfuscation is for the weak. 
          Our internal tools, design systems, and edge infrastructure utilities 
          are available for public scrutiny and adoption.
        </p>
      </div>

      <div class="repo-list mt-12">
        <div class="repo-item">
          <div class="repo-meta">
            <h2>TAO-BRUTALIST-UI</h2>
            <AnimatedSlashes :count="15" />
          </div>
          <div class="repo-desc">
            <p>The exact Vue 3 component library powering this interface. Raw, unstyled DOM nodes with rigid geometric borders. Built for Nuxt 4.</p>
            <div class="stats">
              <span>★ 1,402</span>
              <span>⑂ 340</span>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
        
        <div class="repo-item">
          <div class="repo-meta">
            <h2>NITRO-EDGE-LOGGER</h2>
            <AnimatedSlashes :count="15" />
          </div>
          <div class="repo-desc">
            <p>Zero-latency telemetry ingestion for Nitro servers deployed on Cloudflare Workers. Flushes logs to Axiom without blocking the main thread.</p>
            <div class="stats">
              <span>★ 890</span>
              <span>⑂ 120</span>
              <span>v1.0.4</span>
            </div>
          </div>
        </div>
        
        <div class="repo-item">
          <div class="repo-meta">
            <h2>BAYER-DITHER-WEBGL</h2>
            <AnimatedSlashes :count="15" />
          </div>
          <div class="repo-desc">
            <p>A highly optimized WebGL fragment shader for 4x4 ordered dithering. Used to enforce strict monochrome color palettes on dynamic images.</p>
            <div class="stats">
              <span>★ 2,105</span>
              <span>⑂ 505</span>
              <span>v3.0.1</span>
            </div>
          </div>
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

.intro {
  max-width: 800px;
}

.body-text {
  font-size: 1.25rem;
  line-height: 1.6;
  text-transform: uppercase;
  margin: 0;
}

.repo-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.repo-item {
  border: 4px solid var(--fg-color);
  background: var(--bg-color);
  display: grid;
  grid-template-columns: 300px 1fr;
  transition: transform 100ms ease-out;
}
.repo-item:hover {
  transform: scale(0.99);
}

.repo-meta {
  padding: 2rem;
  border-right: 4px solid var(--fg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.repo-meta h2 {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  margin: 0;
}

.repo-desc {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.25rem;
  line-height: 1.5;
  text-transform: uppercase;
}
.repo-desc p {
  margin: 0;
}

.stats {
  display: flex;
  gap: 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 1rem;
  margin-top: 2rem;
}

@media (max-width: 1024px) {
  .repo-item {
    grid-template-columns: 1fr;
  }
  .repo-meta {
    border-right: none;
    border-bottom: 4px solid var(--fg-color);
    gap: 2rem;
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
