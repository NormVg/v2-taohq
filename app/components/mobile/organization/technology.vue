<template>
  <main class="mobile-page-wrapper">
    <div class="top-nav">
      <NuxtLink to="/" class="back-link">< RETURN</NuxtLink>
    </div>

    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content header-container">
        <h1 class="display-title mt-4">TECHNOLOGY</h1>
        <p class="subtitle mt-4">THE ARCHITECTURE OF TAOHQ</p>
        <AnimatedSlashes :count="20" class="mt-8" />
      </div>
    </section>
      
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
        
        <div class="terminal-block mt-12">
          <div class="terminal-header">
            <span>ROOT@TAO-HQ:~# SYS_STATUS</span>
            <AnimatedSlashes :count="10" right />
          </div>
          <div class="terminal-body mt-4">
            <p>> INITIALIZING NUXT CLUSTER...</p>
            <p>> CONNECTING TO EDGE DATABASES... [OK]</p>
            <p>> COMPUTE NODES ONLINE: 4,096</p>
            <p>> ALL SYSTEMS NOMINAL.</p>
            <p class="blink mt-4">_</p>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'

useSeoMeta({
  title: 'TECHNOLOGY // taohq',
  description: 'Explore TECHNOLOGY at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TECHNOLOGY // taohq',
  ogDescription: 'Explore TECHNOLOGY at Tao HQ. We believe software should feel understandable, durable, and calm.',
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

.inverted-section {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.border-b-dashed {
  border-bottom: 2px dashed var(--fg-color);
}
.inverted-section.border-b-dashed {
  border-bottom: 2px dashed var(--bg-color);
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem 1.25rem;
  border-bottom: 2px dashed var(--bg-color);
  background-color: var(--fg-color);
}

.back-link {
  color: var(--bg-color);
  text-decoration: none;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.8;
}

.sub-heading {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
}

.body-text {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.5;
  text-transform: uppercase;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-card {
  border: 4px solid var(--fg-color);
  padding: 1.5rem;
  background-color: var(--bg-color);
}

.tech-card h3 {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  margin-top: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
  text-transform: uppercase;
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

.tech-card ul li::before {
  content: '>';
  margin-right: 0.5rem;
  color: var(--fg-color);
}

.desc {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  opacity: 0.9;
  text-transform: uppercase;
}

.terminal-block {
  background-color: var(--fg-color);
  color: var(--bg-color);
  padding: 1.5rem;
  border: 4px solid var(--fg-color);
}

.terminal-header {
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
}

.terminal-body {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  line-height: 1.5;
}

.terminal-body p {
  margin: 0.5rem 0;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
