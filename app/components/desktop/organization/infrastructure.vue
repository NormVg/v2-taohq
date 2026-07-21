<script setup>
import infraImg from '~/assets/half-skull.png'

useSeoMeta({
  title: 'SYSTEMS // TheAlphaOnes',
  description: 'Explore SYSTEMS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'SYSTEMS // TheAlphaOnes',
  ogDescription: 'Explore SYSTEMS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="page-wrapper">
    <!-- HERO SECTION -->
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link" v-sound v-hover-sound>&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">SYSTEMS</h1>
        <p class="subtitle mt-4">INVISIBLE, RESILIENT, GLOBAL.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <!-- INFRASTRUCTURE SECTION -->
    <BrutalistCard padding="4rem">
      <div class="grid-layout mt-8">
        
        <div class="text-content">
          <h2 class="sub-heading">INVISIBLE INFRASTRUCTURE</h2>
          <p class="body-text mt-6">
            Good infrastructure is invisible. Users should never think about authentication, 
            state synchronization, storage persistence, or deployment pipelines. 
            We build systems that quietly and deterministically work.
          </p>
          
          <h2 class="sub-heading mt-12">DISTRIBUTED BY DEFAULT</h2>
          <p class="body-text mt-6">
            We do not rely on single monolithic servers. Our computing layer is distributed 
            globally across the edge. APIs execute within milliseconds of the user, while 
            highly available databases and object storage handle localized state coordination and real-time syncing.
          </p>

          <ul class="spec-list mt-8">
            <li>
              <span class="spec-label">EXECUTION:</span> 
              <span class="spec-value">EDGE & SERVERLESS COMPUTE</span>
            </li>
            <li>
              <span class="spec-label">STORAGE:</span> 
              <span class="spec-value">DISTRIBUTED RELATIONAL (POSTGRES)</span>
            </li>
            <li>
              <span class="spec-label">STATE:</span> 
              <span class="spec-value">REDIS MEMORY POOLS</span>
            </li>
            <li>
              <span class="spec-label">AGENTS:</span> 
              <span class="spec-value">DURABLE AI WORKFLOWS</span>
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

    <!-- TECHNOLOGY GRID -->
    <BrutalistCard dashed padding="4rem">
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
            <li>VUE 3 // NUXT 4</li>
            <li>TYPESCRIPT</li>
            <li>DRIZZLE ORM</li>
          </ul>
          <p class="desc mt-4">We prefer server-side rendering for optimal performance and SEO. TypeScript is mandatory for type safety. Drizzle provides deterministic database queries.</p>
        </div>
        
        <div class="tech-card">
          <h3>DATA & STATE</h3>
          <ul>
            <li>NEON POSTGRES</li>
            <li>UPSTASH REDIS</li>
            <li>APPWRITE</li>
          </ul>
          <p class="desc mt-4">Strictly structured relational data via Neon. Upstash handles low-latency caching and rate limiting. Appwrite handles robust authentication and user management.</p>
        </div>
        
        <div class="tech-card">
          <h3>EDGE & AI</h3>
          <ul>
            <li>CLOUDFLARE // VERCEL // VPS // HOSTINGER</li>
            <li>QSTASH MESSAGING</li>
            <li>EVE AI // AI SDK</li>
          </ul>
          <p class="desc mt-4">Distributed hosting across Cloudflare, Vercel, Hostinger and raw VPS instances. QStash for reliable queues. Eve (by Vercel) and AI SDK for durable agent workflows.</p>
        </div>
      </div>
      
    </BrutalistCard>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" aria-label="TheAlphaOnes logo" @click.prevent v-hover-sound="{ type: 'drop', feel: 'glass' }">
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

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--bg-color);
  text-decoration: none;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}

.display-title {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}
.subtitle {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 1rem 0 0 0;
  opacity: 0.8;
  text-transform: uppercase;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (min-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.sub-heading {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 1rem;
}

.body-text {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.spec-list li {
  display: flex;
  flex-direction: column;
}
.spec-label {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  opacity: 0.6;
}
.spec-value {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.visual-content {
  display: flex;
  flex-direction: column;
}

.dither-wrapper {
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
  padding: 1rem;
  background-color: var(--fg-color);
}
.dither-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-caption {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  opacity: 0.7;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.tech-card {
  border: 2px solid var(--fg-color);
  padding: 2rem;
}
.tech-card h3 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  border-bottom: 1px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}
.tech-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tech-card ul li {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.tech-card ul li::before {
  content: '>';
  margin-right: 0.5rem;
  font-family: 'VT323', monospace;
  color: var(--fg-color);
}
.tech-card .desc {
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.8;
  margin-top: 1.5rem;
}

.terminal-block {
  background-color: var(--fg-color);
  color: var(--bg-color);
  border-radius: 4px;
  overflow: hidden;
}
.terminal-header {
  background-color: rgba(255,255,255,0.1);
  padding: 0.5rem 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
.terminal-body {
  padding: 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.4;
}
.terminal-body p {
  margin: 0;
}
.blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
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
