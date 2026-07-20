<script setup>
import { onMounted } from 'vue'
import catImg from '~/assets/cat.png'

useSeoMeta({
  title: 'DESIGN LANGUAGE // TheAlphaOnes',
  description: 'Explore DESIGN LANGUAGE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'DESIGN LANGUAGE // TheAlphaOnes',
  ogDescription: 'Explore DESIGN LANGUAGE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
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
      <div class="header-container mt-12">
        <h1 class="display-title">DESIGN LANGUAGE</h1>
        <p class="subtitle mt-4">THE BRUTALIST STYLE GUIDE</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <BrutalistCard padding="4rem">
      <div class="content-blocks mt-8">
        
        <div class="block">
          <h2 class="sub-heading">01 // PHILOSOPHY</h2>
          <p class="body-text mt-4">
            Design exists to communicate, not to impress. Our interfaces must feel calm, intentional, and technically precise. 
            We rely on high-contrast brutalism, exposed grids, and raw data representation. 
            Whitespace is structural. Everything unnecessary is removed.
          </p>
        </div>

        <div class="block mt-16">
          <h2 class="sub-heading">02 // COLOR PALETTE</h2>
          <p class="body-text mt-4">A strict bi-color system. No gradients. No subtle grays.</p>
          <div class="color-grid mt-8">
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
        
        <div class="block mt-16">
          <h2 class="sub-heading">03 // TYPOGRAPHIC SCALE</h2>
          <p class="body-text mt-4">Typography carries the hierarchy. We use fixed scales and uppercase data rendering.</p>
          <div class="type-spec mt-8">
            <div class="type-row">
              <span class="label">DISPLAY TITLE</span>
              <span class="value display-title">TAOHQ AESTHETICS</span>
            </div>
            <div class="type-row">
              <span class="label">SUB-HEADING</span>
              <span class="value sub-heading">SECTION // 01</span>
            </div>
            <div class="type-row">
              <span class="label">MONOSPACE (VT323)</span>
              <span class="value mono-font">THE MACHINE MUST BE COLD.</span>
            </div>
            <div class="type-row">
              <span class="label">BODY TEXT (SANS)</span>
              <span class="value sans-font" style="text-transform: none;">We build software that people can rely on every day. Products should feel understandable, durable, and calm.</span>
            </div>
          </div>
        </div>

        <div class="block mt-16">
          <h2 class="sub-heading">04 // MATERIALS & INTERACTIONS</h2>
          <p class="body-text mt-4">
            Interactive elements must feel mechanical. We use 100ms cubic-bezier transitions (`0.16, 1, 0.3, 1`) 
            for instant, rigid feedback.
          </p>
          <div class="interaction-grid mt-8">
            <div class="interaction-card">
              <h3>HOVER STATE</h3>
              <p>Links and buttons invert colors or deploy dashed underlines. Backgrounds wipe in via scale transforms.</p>
              <button class="demo-btn mt-4">HOVER ME</button>
            </div>
            <div class="interaction-card">
              <h3>ACTIVE STATE</h3>
              <p>All clickable geometry physically depresses. `transform: scale(0.96)` creates a tactile, hardware-like button press.</p>
            </div>
            <div class="interaction-card dither-card">
              <div class="dither-bg">
                <DitherImage :src="catImg" :pixelSize="3.0" />
              </div>
              <div class="content-layer">
                <h3>DITHERING</h3>
                <p>Images are never displayed in full color. They are passed through a Bayer 4x4 shader to force monochrome conformity.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </BrutalistCard>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" aria-label="TheAlphaOnes logo" @click.prevent v-sound.hover="{ type: 'tick', feel: 'organic' }">
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
  max-width: 65ch;
  text-transform: uppercase;
}

/* Color Grid */
.color-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.color-swatch {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  border: 4px solid var(--fg-color);
}
.dark-swatch {
  background-color: var(--fg-color);
  color: var(--bg-color);
  border-color: var(--fg-color);
}
.light-swatch {
  background-color: var(--bg-color);
  color: var(--fg-color);
  border-color: var(--fg-color);
}
.hex {
  font-size: 3rem;
  font-weight: bold;
}
.usage {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
}

/* Typography Spec */
.type-spec {
  display: flex;
  flex-direction: column;
  border: 4px solid var(--fg-color);
}
.type-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 2rem;
  border-bottom: 2px solid var(--fg-color);
  align-items: center;
}
.type-row:last-child {
  border-bottom: none;
}
.label {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.7;
}
.mono-font {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-transform: uppercase;
}
.sans-font {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Interactions */
.interaction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.interaction-card {
  padding: 2rem;
  border: 4px solid var(--fg-color);
  background-color: var(--bg-color);
}
.interaction-card h3 {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.interaction-card p {
  font-size: 1rem;
  line-height: 1.4;
  text-transform: uppercase;
}
.demo-btn {
  background: transparent;
  color: var(--fg-color);
  border: 2px solid var(--fg-color);
  padding: 0.5rem 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
}
.demo-btn:hover {
  background: var(--fg-color);
  color: var(--bg-color);
}

@media (max-width: 768px) {
  .color-grid {
    grid-template-columns: 1fr;
  }
  .type-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.dither-card {
  position: relative;
  overflow: hidden;
}
.dither-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
  pointer-events: none;
}
.dither-bg :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dither-card:hover .dither-bg {
  opacity: 0.35;
}
.content-layer {
  position: relative;
  z-index: 1;
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
