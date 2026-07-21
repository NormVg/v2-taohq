<template>
  <main class="mobile-page-wrapper">
    <!-- ABOUT HERO -->
    <MobilePageHero title="ABOUT // TAOHQ">
      <template #hero-body>
        <p class="about-hero-copy">
          TheAlphaOnes is an independent software organization dedicated to designing thoughtful software, developer tools, AI systems, productivity products, and digital infrastructure.
        </p>
        <p class="about-hero-status">SYSTEM STATUS: NOMINAL</p>
      </template>
    </MobilePageHero>

    <!-- VISION & MISSION -->
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <h2 class="section-title">VISION & MISSION</h2>
        <p class="body-copy mt-4">
          Technology has become increasingly noisy. Modern software constantly competes for attention through notifications, complexity, and growth-driven design. We believe software should instead become calmer.
        </p>
        <p class="body-copy mt-4">
          Our goal is not to maximize engagement. Our goal is to maximize usefulness. We build software that people can rely on every day.
        </p>
        
        <div class="stats-box mt-8">
          <div class="stat-item">
            <span class="stat-num">01</span>
            <span class="stat-lbl">DURABILITY</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">02</span>
            <span class="stat-lbl">UTILITY</span>
          </div>
        </div>

        <div class="dither-wrapper mt-8">
          <DitherImage :src="pitPeopleImg" :pixelSize="4" colorDark="#000000" colorLight="#c4b5e3" />
        </div>
      </div>
    </section>

    <!-- CORE PHILOSOPHY -->
    <section class="mobile-section border-b-dashed">
      <div class="content-header">
        <h1 class="display-title">CORE PHILOSOPHY</h1>
      </div>
      <div class="mobile-section-content philosophy-stack" style="padding-top: 0;">
        <div class="philosophy-block">
          <div class="block-number">01</div>
          <h2 class="block-title">CALM</h2>
          <p class="body-copy mt-4">
            Software should reduce cognitive load. Interfaces should never feel overwhelming. Users should immediately understand what is happening.
          </p>
        </div>
        
        <div class="philosophy-block">
          <div class="block-number">02</div>
          <h2 class="block-title">THOUGHTFUL</h2>
          <p class="body-copy mt-4">
            Every interaction should exist for a reason. Avoid unnecessary complexity. Avoid decoration that adds no value. Every pixel should have intent.
          </p>
        </div>
        
        <div class="philosophy-block">
          <div class="block-number">03</div>
          <h2 class="block-title">DURABLE</h2>
          <p class="body-copy mt-4">
            Products should continue working for years. Avoid rebuilding for trends. Build stable systems that withstand the inevitable entropy of the web.
          </p>
        </div>
      </div>
    </section>

    <!-- PRINCIPLES / AXIOMS -->
    <section class="mobile-section inverted-section border-b-dashed axioms-section">
      <div class="mobile-section-content bento-stack">
        <div class="bento-item highlight" v-sound.hover="{ type: 'tick', feel: 'organic' }">
          <div class="item-header">
            <span class="axiom-num">AXIOM .01</span>
          </div>
          <h2 class="item-title mt-4">INVISIBLE INFRASTRUCTURE</h2>
          <p class="item-desc mt-4">Good infrastructure is invisible. Users should never think about authentication, syncing, storage, deployment, or internal architecture.</p>
        </div>

        <div class="bento-item" v-sound.hover="{ type: 'tick', feel: 'organic' }">
          <div class="item-header">
            <span class="axiom-num">AXIOM .02</span>
          </div>
          <h2 class="item-title mt-4">NO MAGIC</h2>
          <p class="item-desc mt-4">We build products that should still make sense five years from now. We value permanence over novelty.</p>
        </div>

        <div class="visual-wrapper">
          <DitherImage :src="trangleSkullImg" :pixelSize="3" colorDark="#151515" colorLight="#c4b5e3" />
        </div>

        <div class="bento-item" v-sound.hover="{ type: 'tick', feel: 'organic' }">
          <div class="item-header">
            <span class="axiom-num">AXIOM .03</span>
          </div>
          <h2 class="item-title mt-4">REUSE BEFORE REBUILDING</h2>
          <p class="item-desc mt-4">Every product shares internal standards to ensure longevity and maintainability across the ecosystem.</p>
        </div>

        <div class="bento-item highlight" v-sound.hover="{ type: 'tick', feel: 'organic' }">
          <div class="item-header">
            <span class="axiom-num">AXIOM .04</span>
          </div>
          <h2 class="item-title mt-4">SUBSTANCE OVER HYPE</h2>
          <p class="item-desc mt-4">We prioritize clarity over cleverness, and honesty over marketing. We document ideas rather than promote them.</p>
        </div>
      </div>
    </section>

    <!-- QUOTE SECTION -->
    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content center-quote-wrapper">
        <div class="bg-dither">
          <DitherImage :src="treeSkullImg" :pixelSize="4" />
        </div>
        <div class="quote-content mt-8">
          <h2 class="large-quote">"THE MACHINE MUST BE COLD, SO THE HUMAN CAN BE WARM."</h2>
          <AnimatedSlashes :count="20" center class="mt-8" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import pitPeopleImg from '~/assets/pit-people.png'
import trangleSkullImg from '~/assets/trangle-skull.png'
import treeSkullImg from '~/assets/2skull-arrow.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useHead({
  title: 'ABOUT // TheAlphaOnes',
  meta: [
    { name: 'description', content: 'Explore ABOUT at TheAlphaOnes. We believe software should feel understandable, durable, and calm.' }
  ]
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

.about-hero-copy {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 1rem 0 0;
  opacity: 0.9;
  text-transform: uppercase;
}

.about-hero-status {
  font-family: 'VT323', monospace;
  font-size: 1.05rem;
  letter-spacing: 0.06em;
  opacity: 0.7;
  margin: 1rem 0 0;
  text-transform: uppercase;
}

.body-copy {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  opacity: 0.9;
  text-transform: uppercase;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  text-transform: uppercase;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.stats-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  line-height: 1;
}

.stat-lbl {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
  margin-top: 0.25rem;
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

.content-header {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.display-title {
  font-size: 3.5rem;
  font-family: 'VT323', monospace;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.philosophy-stack {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.philosophy-block {
  border: 4px solid var(--fg-color);
  padding: 2rem 1.5rem;
  position: relative;
  background-color: var(--bg-color);
}

.block-number {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  position: absolute;
  top: -1.8rem;
  left: 1rem;
  background: var(--bg-color);
  padding: 0 0.5rem;
  line-height: 1;
}

.block-title {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 1rem 0 0 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
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
.axioms-section .bento-item {
  border-color: var(--bg-color);
}
.axioms-section .bento-item.highlight {
  background-color: var(--bg-color);
  color: var(--fg-color);
  border-color: var(--bg-color);
}
.axioms-section .visual-wrapper {
  background: transparent;
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
}

.visual-wrapper {
  padding: 0;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-quote-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bg-dither {
  width: 100%;
  aspect-ratio: 1;
  mix-blend-mode: screen;
}

.bg-dither :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.quote-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.large-quote {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
}
</style>
