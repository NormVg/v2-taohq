<template>
  <main class="mobile-page-wrapper">
    <div class="top-nav">
      <NuxtLink to="/" class="back-link">< RETURN</NuxtLink>
    </div>

    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content header-container">
        <h1 class="display-title mt-4">CORE PRINCIPLES</h1>
        <p class="subtitle mt-4">AXIOMS FOR DIGITAL CONSTRUCTION</p>
        <AnimatedSlashes :count="16" class="mt-8" />
      </div>
    </section>
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content bento-stack">
        
        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .01</span>
          </div>
          <h2 class="item-title mt-4">Performance is non-negotiable.</h2>
          <p class="item-desc mt-4">Latency is a failure of architecture. Every millisecond must be fought for.</p>
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .02</span>
          </div>
          <h2 class="item-title mt-4">No Magic.</h2>
          <p class="item-desc mt-4">Explicit code over implicit behavior. If you do not understand the abstraction, do not use it.</p>
        </div>

        <div class="visual-wrapper">
          <DitherImage :src="trangleSkullImg" :pixelSize="3" colorDark="#c4b5e3" colorLight="#151515" />
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .03</span>
          </div>
          <h2 class="item-title mt-4">Radical Independence.</h2>
          <p class="item-desc mt-4">Own your infrastructure. Minimize third-party dependencies that introduce external risk.</p>
        </div>

        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .04</span>
          </div>
          <h2 class="item-title mt-4">Beauty Through Utility.</h2>
          <p class="item-desc mt-4">Form follows function. The interface should reflect the raw mechanics of the underlying system.</p>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import trangleSkullImg from '~/assets/trangle-skull.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'PRINCIPLES // taohq',
  description: 'Explore PRINCIPLES at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PRINCIPLES // taohq',
  ogDescription: 'Explore PRINCIPLES at Tao HQ. We believe software should feel understandable, durable, and calm.',
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
  font-size: 3.5rem;
  font-family: 'VT323', monospace;
  font-weight: 400;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.8;
}

.bento-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bento-item {
  border: 4px solid var(--fg-color);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.bento-item.highlight {
  background-color: var(--fg-color);
  color: var(--bg-color);
  border-color: var(--bg-color);
}

.item-header {
  border-bottom: 2px dashed currentColor;
  padding-bottom: 0.5rem;
}

.axiom-num {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
}

.item-title {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.1;
}

.item-desc {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  opacity: 0.9;
  line-height: 1.4;
  text-transform: uppercase;
}

.visual-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
  background: var(--bg-color);
}

.visual-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
