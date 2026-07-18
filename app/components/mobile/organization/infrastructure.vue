<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="INFRASTRUCTURE"
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
        
        <h2 class="sub-heading mt-8">EDGE DISTRIBUTION</h2>
        <p class="body-text mt-4">
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
  </main>
</template>

<script setup>
import infraImg from '~/assets/half-skull.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'INFRASTRUCTURE // TheAlphaOnes',
  description: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'INFRASTRUCTURE // TheAlphaOnes',
  ogDescription: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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
  font-size: 2rem;
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

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 4px solid var(--fg-color);
  padding-left: 1rem;
}

.spec-list li {
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 0.2rem;
}

.spec-value {
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  text-transform: uppercase;
}

.dither-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
}
.dither-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.visual-caption {
  font-family: 'VT323', monospace;
}

.caption-text {
  display: block;
  font-size: 1.2rem;
  opacity: 0.8;
}
</style>
