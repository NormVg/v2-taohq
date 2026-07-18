<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="TECHNOLOGY"
      subtitle="THE ARCHITECTURE OF TAOHQ"
    />
      
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

/* Black hero: hold text + spinning logo in the same box */
.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.header-container {
  position: relative;
  z-index: 2;
  padding-right: 5.5rem; /* room for logo */
  padding-bottom: 1rem;
}

.hero-logo-wrap {
  position: absolute;
  right: 1.15rem;
  bottom: 1.25rem;
  z-index: 1;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  animation: float-complex 5.7s ease-in-out infinite alternate;
}

.logo-inner-anim {
  animation: slight-tilt 7.1s ease-in-out infinite alternate;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flipping-logo {
  width: 52px;
  height: auto;
  animation: flip-y 4.3s linear infinite;
  transform-style: preserve-3d;
  opacity: 0.9;
  /* Soft glow on dark hero so mark reads clearly */
  filter: drop-shadow(0 0 8px rgba(196, 181, 227, 0.55));
}

@keyframes float-complex {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(4px); }
}

@keyframes flip-y {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes slight-tilt {
  0% { transform: rotateZ(-5deg) scale(1); }
  100% { transform: rotateZ(5deg) scale(1.05); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-logo-wrap,
  .logo-inner-anim,
  .flipping-logo {
    animation: none !important;
  }
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
</style>
