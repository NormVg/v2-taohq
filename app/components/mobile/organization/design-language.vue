<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="DESIGN LANGUAGE"
      subtitle="THE BRUTALIST STYLE GUIDE"
    />
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <div class="content-blocks mt-4">
          
          <div class="block">
            <h2 class="sub-heading">01 // PHILOSOPHY</h2>
            <p class="body-text mt-4">
              Design exists to communicate, not to impress. Our interfaces must feel calm, intentional, and technically precise. 
              We rely on high-contrast brutalism, exposed grids, and raw data representation. 
              Whitespace is structural. Everything unnecessary is removed.
            </p>
          </div>

          <div class="block mt-12">
            <h2 class="sub-heading">02 // COLOR PALETTE</h2>
            <p class="body-text mt-4">A strict bi-color system. No gradients. No subtle grays.</p>
            <div class="color-stack mt-8">
              <div class="color-swatch dark-swatch">
                <span class="hex">#151515</span>
                <span class="usage">VAR(--FG-COLOR) // PRIMARY TEXT & BORDERS</span>
              </div>
              <div class="color-swatch light-swatch">
                <span class="hex">#C4B5E3</span>
                <span class="usage">VAR(--BG-COLOR) // BACKGROUND & ACCENTS</span>
              </div>
            </div>
          </div>
          
          <div class="block mt-12">
            <h2 class="sub-heading">03 // TYPOGRAPHIC SCALE</h2>
            <p class="body-text mt-4">Typography carries the hierarchy. We use fixed scales and uppercase data rendering.</p>
            <div class="type-spec mt-8">
              <div class="type-row">
                <span class="label">DISPLAY TITLE</span>
                <span class="value display-title-demo">TAOHQ AESTHETICS</span>
              </div>
              <div class="type-row">
                <span class="label">SUB-HEADING</span>
                <span class="value sub-heading-demo">SECTION // 01</span>
              </div>
              <div class="type-row">
                <span class="label">MONOSPACE (VT323)</span>
                <span class="value mono-font-demo">THE MACHINE MUST BE COLD.</span>
              </div>
              <div class="type-row">
                <span class="label">BODY TEXT (SANS)</span>
                <span class="value sans-font-demo">We build software that people can rely on every day. Products should feel understandable, durable, and calm.</span>
              </div>
            </div>
          </div>

          <div class="block mt-12">
            <h2 class="sub-heading">04 // MATERIALS</h2>
            <p class="body-text mt-4">
              Interactive elements must feel mechanical. We use 100ms cubic-bezier transitions (`0.16, 1, 0.3, 1`) 
              for instant, rigid feedback.
            </p>
            <div class="interaction-stack mt-8">
              <div class="interaction-card">
                <h3>HOVER STATE</h3>
                <p>Links and buttons invert colors or deploy dashed underlines.</p>
                <button class="demo-btn mt-4" v-sound v-hover-sound>HOVER ME</button>
              </div>
              <div class="interaction-card">
                <h3>ACTIVE STATE</h3>
                <p>All clickable geometry physically depresses with scale transform.</p>
              </div>
              <div class="interaction-card">
                <h3>DITHERING</h3>
                <p>Images are passed through a Bayer shader for monochrome conformity.</p>
                <div class="dither-bg mt-4">
                  <DitherImage :src="catImg" :pixelSize="3.0" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import catImg from '~/assets/cat.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'DESIGN LANGUAGE // TheAlphaOnes',
  description: 'Explore DESIGN LANGUAGE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'DESIGN LANGUAGE // TheAlphaOnes',
  ogDescription: 'Explore DESIGN LANGUAGE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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

.color-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.color-swatch {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  border: 4px solid var(--fg-color);
}

.dark-swatch {
  background-color: #151515;
  color: #c4b5e3;
}

.light-swatch {
  background-color: #c4b5e3;
  color: #151515;
}

.hex {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  line-height: 1;
}

.usage {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.8;
}

.type-spec {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.type-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px dashed var(--fg-color);
  padding-bottom: 1rem;
}

.type-row .label {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.6;
}

.display-title-demo {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1;
}

.sub-heading-demo {
  font-family: 'VT323', monospace;
  font-size: 2rem;
}

.mono-font-demo {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
}

.sans-font-demo {
  font-size: 1.1rem;
  line-height: 1.4;
}

.interaction-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.interaction-card {
  border: 4px solid var(--fg-color);
  padding: 1.5rem;
  background-color: var(--bg-color);
}

.interaction-card h3 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.interaction-card p {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
}

.demo-btn {
  background: transparent;
  color: var(--fg-color);
  border: 2px solid var(--fg-color);
  padding: 0.5rem 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.1s cubic-bezier(0.16, 1, 0.3, 1);
}

.demo-btn:hover {
  background: var(--fg-color);
  color: var(--bg-color);
}

.demo-btn:active {
  transform: scale(0.96);
}

.dither-bg {
  width: 100%;
  height: 200px;
  border: 2px solid var(--fg-color);
}
.dither-bg :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
