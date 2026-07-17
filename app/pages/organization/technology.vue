<script setup>
import { onMounted } from 'vue'

useSeoMeta({
  title: 'TECHNOLOGY // taohq',
  description: 'Explore TECHNOLOGY at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TECHNOLOGY // taohq',
  ogDescription: 'Explore TECHNOLOGY at Tao HQ. We believe software should feel understandable, durable, and calm.',
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
      <div class="hero mt-12">
        <h1 class="display-title">TECHNOLOGY</h1>
        <p class="subtitle mt-4">THE ARCHITECTURE OF TAOHQ</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <BrutalistCard padding="4rem">
      
      <div class="intro-block">
        <h2 class="sub-heading">ENGINEERING PHILOSOPHY</h2>
        <p class="body-text mt-4">
          Build infrastructure first. Reuse before rebuilding. Prefer reliability over cleverness. 
          Every product shares the same internal standards to ensure longevity and maintainability.
        </p>
      </div>

      <div class="tech-grid mt-12">
        <div class="tech-card">
          <h3>CORE STACK</h3>
          <ul>
            <li>NUXT 4 // VUE 3</li>
            <li>TYPESCRIPT</li>
            <li>NITRO SERVER</li>
          </ul>
          <p class="desc mt-4">We prefer server-side rendering for optimal performance and SEO. TypeScript is mandatory for type safety across the entire ecosystem.</p>
        </div>
        
        <div class="tech-card">
          <h3>DATA LAYER</h3>
          <ul>
            <li>POSTGRESQL</li>
            <li>APPWRITE</li>
            <li>REDIS CACHE</li>
          </ul>
          <p class="desc mt-4">Strictly structured relational data. Appwrite handles robust authentication and user management, allowing us to focus on the product.</p>
        </div>
        
        <div class="tech-card">
          <h3>COMPUTE</h3>
          <ul>
            <li>CLOUDFLARE WORKERS</li>
            <li>EDGE DEPLOYMENTS</li>
            <li>DURABLE OBJECTS</li>
          </ul>
          <p class="desc mt-4">Global edge execution for zero-latency APIs and resilient infrastructure. Durable objects handle real-time synchronization.</p>
        </div>
      </div>
      
      <div class="terminal-block mt-16">
        <div class="terminal-header">
          <span>ROOT@TAO-HQ:~# SYS_STATUS</span>
          <AnimatedSlashes :count="10" right />
        </div>
        <div class="terminal-body">
          <p>> INITIALIZING NUXT CLUSTER...</p>
          <p>> CONNECTING TO EDGE DATABASES... [OK]</p>
          <p>> COMPUTE NODES ONLINE: 4,096</p>
          <p>> ALL SYSTEMS NOMINAL.</p>
          <p class="blink">_</p>
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

.intro-block {
  max-width: 800px;
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-card {
  border: 4px solid var(--fg-color);
  padding: 2rem;
  background-color: var(--bg-color);
}

.tech-card h3 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
}

.tech-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tech-card .desc {
  font-size: 1rem;
  line-height: 1.4;
  text-transform: uppercase;
  opacity: 0.8;
  border-top: 1px dashed var(--fg-color);
  padding-top: 1rem;
}

.terminal-block {
  border: 4px solid var(--fg-color);
  background: var(--fg-color);
  color: var(--bg-color);
  font-family: 'VT323', monospace;
  box-shadow: 8px 8px 0 rgba(21, 21, 21, 0.2);
}

.terminal-header {
  border-bottom: 2px dashed var(--bg-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
}

.terminal-body {
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
}

.terminal-body p {
  margin: 0 0 0.5rem 0;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
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
