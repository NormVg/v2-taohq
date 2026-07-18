<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="OPEN SOURCE"
      subtitle="THE CODE BELONGS TO THE COLLECTIVE."
    />

    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        
        <div class="intro mt-4">
          <p class="body-text">
            We build in the public domain because obfuscation is for the weak. 
            Our internal tools, design systems, and edge infrastructure utilities 
            are available for public scrutiny and adoption.
          </p>
        </div>

        <div class="repo-stack mt-8">
          
          <div class="repo-card">
            <div class="repo-meta">
              <h2>TAO-BRUTALIST-UI</h2>
              <AnimatedSlashes :count="10" />
            </div>
            <div class="repo-desc">
              <p>The exact Vue 3 component library powering this interface. Raw, unstyled DOM nodes with rigid geometric borders. Built for Nuxt 4.</p>
              <div class="stats mt-4">
                <span>★ 1,402</span>
                <span>⑂ 340</span>
                <span>v2.1.0</span>
              </div>
            </div>
          </div>
          
          <div class="repo-card">
            <div class="repo-meta">
              <h2>NITRO-EDGE-LOGGER</h2>
              <AnimatedSlashes :count="10" />
            </div>
            <div class="repo-desc">
              <p>Zero-latency telemetry ingestion for Nitro servers deployed on Cloudflare Workers. Flushes logs to Axiom without blocking the main thread.</p>
              <div class="stats mt-4">
                <span>★ 890</span>
                <span>⑂ 120</span>
                <span>v1.0.4</span>
              </div>
            </div>
          </div>
          
          <div class="repo-card">
            <div class="repo-meta">
              <h2>BAYER-DITHER-WEBGL</h2>
              <AnimatedSlashes :count="10" />
            </div>
            <div class="repo-desc">
              <p>A highly optimized WebGL fragment shader for 4x4 ordered dithering. Used to enforce strict monochrome color palettes on dynamic images.</p>
              <div class="stats mt-4">
                <span>★ 2,105</span>
                <span>⑂ 505</span>
                <span>v3.0.1</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'

useSeoMeta({
  title: 'OPEN SOURCE // TheAlphaOnes',
  description: 'Explore OPEN SOURCE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'OPEN SOURCE // TheAlphaOnes',
  ogDescription: 'Explore OPEN SOURCE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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

.body-text {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.5;
  text-transform: uppercase;
  margin: 0;
}

.repo-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.repo-card {
  border: 4px solid var(--fg-color);
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
}

.repo-meta {
  padding: 1.5rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
  display: flex;
  flex-direction: column;
}

.repo-meta h2 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  line-height: 1;
}

.repo-desc {
  padding: 1.5rem;
}

.repo-desc p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
}

.stats {
  display: flex;
  gap: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  border-top: 1px dashed var(--fg-color);
  padding-top: 1rem;
}

.stats span {
  opacity: 0.8;
}
</style>
