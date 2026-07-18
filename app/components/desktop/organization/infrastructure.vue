<script setup>
import { onMounted } from 'vue'
import infraImg from '~/assets/half-skull.png'

useSeoMeta({
  title: 'INFRASTRUCTURE // TheAlphaOnes',
  description: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'INFRASTRUCTURE // TheAlphaOnes',
  ogDescription: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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
        <h1 class="display-title">INFRASTRUCTURE</h1>
        <p class="subtitle mt-4">INVISIBLE, RESILIENT, GLOBAL.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <BrutalistCard padding="4rem">
      <div class="grid-layout mt-8">
        
        <div class="text-content">
          <h2 class="sub-heading">INVISIBLE INFRASTRUCTURE</h2>
          <p class="body-text mt-6">
            Good infrastructure is invisible. Users should never think about authentication, 
            state synchronization, storage persistence, or deployment pipelines. 
            We build systems that quietly and deterministically work.
          </p>
          
          <h2 class="sub-heading mt-12">EDGE DISTRIBUTION</h2>
          <p class="body-text mt-6">
            We do not rely on centralized monolithic servers. Our computing layer is distributed 
            globally across the edge. APIs execute within milliseconds of the user, while 
            Durable Objects handle localized state coordination and real-time syncing.
          </p>

          <ul class="spec-list mt-8">
            <li>
              <span class="spec-label">EXECUTION:</span> 
              <span class="spec-value">EDGE COMPUTE (V8 ISOLATES)</span>
            </li>
            <li>
              <span class="spec-label">STORAGE:</span> 
              <span class="spec-value">DISTRIBUTED RELATIONAL (POSTGRES)</span>
            </li>
            <li>
              <span class="spec-label">STATE:</span> 
              <span class="spec-value">DURABLE OBJECTS</span>
            </li>
            <li>
              <span class="spec-label">AUTH:</span> 
              <span class="spec-value">MANAGED EDGE IDENTITY</span>
            </li>
          </ul>
        </div>
        
        <div class="visual-content">
          <div class="dither-wrapper">
            <DitherImage :src="infraImg" :pixelSize="4.0" />
          </div>
          <div class="visual-caption mt-2">
            <AnimatedSlashes :count="15" />
            <span>OBSERVABILITY // TELEMETRY MONITORS</span>
          </div>
        </div>

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

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.sub-heading {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
}

.body-text {
  font-size: 1.25rem;
  line-height: 1.6;
  text-transform: uppercase;
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 4px solid var(--fg-color);
  padding-left: 1.5rem;
}

.spec-list li {
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: baseline;
}

.spec-label {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.8;
}

.spec-value {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
}

.visual-content {
  display: flex;
  flex-direction: column;
}

.dither-wrapper {
  border: 4px solid var(--fg-color);
  background-color: transparent;
  height: 500px;
  position: relative;
}

.dither-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-caption {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
  .dither-wrapper {
    height: 350px;
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
