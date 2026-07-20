<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="SYSTEMS"
      subtitle="INVISIBLE, RESILIENT, GLOBAL."
    />
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content mt-4">
        
        <h2 class="sub-heading">INVISIBLE INFRASTRUCTURE</h2>
        <p class="body-text mt-4">
          Good infrastructure is invisible. Users should never think about authentication, 
          state synchronization, storage persistence, or deployment pipelines. 
          We build systems that quietly and deterministically work.
        </p>
        
        <h2 class="sub-heading mt-8">DISTRIBUTED BY DEFAULT</h2>
        <p class="body-text mt-4">
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
        
        <div class="visual-content mt-12">
          <div class="dither-wrapper">
            <DitherImage :src="infraImg" :pixelSize="4.0" />
          </div>
          <div class="visual-caption mt-4">
            <AnimatedSlashes :count="10" />
            <span class="caption-text mt-2 block">OBSERVABILITY // TELEMETRY MONITORS</span>
          </div>
        </div>

      </div>
    </section>

    <!-- TECHNOLOGY GRID -->
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
      
        <div class="intro-block">
          <h2 class="sub-heading">ENGINEERING PHILOSOPHY</h2>
          <p class="body-text mt-4">
            Build infrastructure first. Reuse before rebuilding. Prefer reliability over cleverness. 
            Every product shares the same internal standards to ensure longevity and maintainability.
          </p>
        </div>

        <div class="tech-stack mt-12">
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
              <li>CLOUDFLARE // VERCEL // HOSTINGER</li>
              <li>QSTASH MESSAGING</li>
              <li>EVE AI // AI SDK</li>
            </ul>
            <p class="desc mt-4">Distributed hosting across Cloudflare, Vercel, Hostinger and raw VPS instances. QStash for reliable queues. Eve (by Vercel) and AI SDK for durable agent workflows.</p>
          </div>
        </div>

        <div class="terminal-block mt-12">
          <div class="terminal-header">
            <span>ROOT@TAO:~# SYS_STATUS</span>
          </div>
          <div class="terminal-body">
            <p>> INITIALIZING NUXT CLUSTER...</p>
            <p>> CONNECTING TO NEON DATABASES... [OK]</p>
            <p>> CONNECTING TO UPSTASH CACHE... [OK]</p>
            <p>> WAKING EVE AGENTS... [OK]</p>
            <p>> ALL SYSTEMS NOMINAL.</p>
            <p class="blink">_</p>
          </div>
        </div>
        
      </div>
    </section>
  </main>
</template>

<script setup>
import infraImg from '~/assets/half-skull.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'SYSTEMS // TheAlphaOnes',
  description: 'Explore SYSTEMS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'SYSTEMS // TheAlphaOnes',
  ogDescription: 'Explore SYSTEMS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-section {
  width: 100%;
}

.mobile-section-content {
  padding: 2rem 1.25rem;
}

.border-b-dashed {
  border-bottom: 2px dashed var(--fg-color);
}

.sub-heading {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  text-transform: uppercase;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.body-text {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  opacity: 0.9;
  text-transform: uppercase;
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.spec-list li {
  display: flex;
  flex-direction: column;
}
.spec-label {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.7;
}
.spec-value {
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-top: 0.2rem;
}

.visual-content {
  display: flex;
  flex-direction: column;
}

.dither-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
  background-color: var(--fg-color);
}

.dither-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-caption {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
}

.caption-text {
  opacity: 0.8;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-card {
  border: 4px solid var(--fg-color);
  padding: 1.5rem;
}
.tech-card h3 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}
.tech-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tech-card ul li {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.tech-card ul li::before {
  content: '>';
  margin-right: 0.5rem;
}
.tech-card .desc {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  line-height: 1.4;
  opacity: 0.8;
  margin-top: 1.5rem;
  text-transform: uppercase;
}

.terminal-block {
  background-color: var(--fg-color);
  color: var(--bg-color);
  border: 2px solid var(--bg-color);
}
.terminal-header {
  border-bottom: 2px dashed var(--bg-color);
  padding: 0.75rem 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
}
.terminal-body {
  padding: 1.5rem 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
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
</style>
