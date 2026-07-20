<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="BRAND ASSETS"
      subtitle="DO NOT ALTER THE GEOMETRY."
    />
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <div class="assets-stack mt-4">
          
          <div class="asset-card" v-sound.hover="{ type: 'wind', feel: 'ghost' }">
            <div class="preview">
              <DitherImage :src="logoSvg" :pixelSize="1.0" colorLight="#151515" colorDark="#151515" />
            </div>
            <div class="details">
              <span class="label">PRIMARY MARK</span>
              <span class="desc">THE GEOMETRIC LOGO</span>
              <a :href="logoSvg" class="download mt-4" download>DL SVG</a>
            </div>
          </div>
          
          <div class="asset-card" v-sound.hover="{ type: 'wind', feel: 'ghost' }">
            <div class="preview logo-text-preview">
              <span class="italiano-font">TheAlphaOnes</span>
            </div>
            <div class="details">
              <span class="label">WORDMARK</span>
              <span class="desc">ITALIANNO SCRIPT</span>
              <span class="download disabled mt-4">FONT FILE ONLY</span>
            </div>
          </div>
          
          <div class="asset-card" v-sound.hover="{ type: 'wind', feel: 'ghost' }">
            <div class="preview">
              <DitherImage :src="catImg" :pixelSize="3.0" />
            </div>
            <div class="details">
              <span class="label">MASCOT</span>
              <span class="desc">DITHERED FELINE</span>
              <a :href="catImg" class="download mt-4" download>DL PNG</a>
            </div>
          </div>
        </div>
        
        <div class="rules mt-12">
          <h2 class="rules-heading">USAGE RULES</h2>
          <ul class="rules-list mt-8">
            <li>
              <span class="rule-num">01</span>
              <p>MAINTAIN MINIMUM CLEAR SPACE OF 40PX AROUND ALL LOGOMARKS.</p>
            </li>
            <li>
              <span class="rule-num">02</span>
              <p>DO NOT INVERT COLORS OUTSIDE OF THE APPROVED DESIGN LANGUAGE PALETTE.</p>
            </li>
            <li>
              <span class="rule-num">03</span>
              <p>DO NOT STRETCH, ROTATE, OR DISTORT THE GEOMETRY OF ANY ASSET.</p>
            </li>
            <li>
              <span class="rule-num">04</span>
              <p>THE MASCOT MUST ONLY BE RENDERED IN DITHERED MONOCHROME USING THE WEBG/BAYER SHADER.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import logoSvg from '~/assets/logo.svg'
import catImg from '~/assets/cat.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'BRAND ASSETS // TheAlphaOnes',
  description: 'Explore BRAND ASSETS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'BRAND ASSETS // TheAlphaOnes',
  ogDescription: 'Explore BRAND ASSETS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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

.assets-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.asset-card {
  border: 4px solid var(--fg-color);
  display: flex;
  flex-direction: column;
}

.preview {
  height: 250px;
  border-bottom: 4px solid var(--fg-color);
  position: relative;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview :deep(canvas), .preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2rem;
}

.logo-text-preview {
  font-size: 3.5rem;
  color: var(--fg-color);
}

.details {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
}

.label {
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.desc {
  font-size: 1.1rem;
  opacity: 0.8;
  text-transform: uppercase;
}

.download {
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  color: var(--fg-color);
  text-decoration: none;
  border: 2px solid var(--fg-color);
  padding: 0.5rem;
  text-align: center;
  display: inline-block;
}

.download.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.rules {
  margin-top: 3rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 2rem;
}

.rules-heading {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  margin: 0;
}

.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.rules-list li {
  display: flex;
  flex-direction: column;
}

.rule-num {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  opacity: 0.5;
  margin-bottom: 0.25rem;
  line-height: 1;
}

.rules-list p {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  margin: 0;
}
</style>
