import os

DESKTOP_ABOUT_PATH = "/Users/vishnu_mac/Desktop/room/tao.hq/v2.taohq/app/components/desktop/organization/about.vue"

desktop_about_content = """<template>
  <main class="page-wrapper">
    <!-- ABOUT HERO -->
    <BrutalistCard inverted dashed class="hero-section">
      <div class="watermark-bg">TAOHQ</div>
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      
      <div class="hero-content">
        <h1 class="display-title">ABOUT // TAOHQ</h1>
        <div class="mission-statement mt-8">
          <p class="body-copy">
            TheAlphaOnes is an independent software organization dedicated to designing thoughtful software, developer tools, AI systems, productivity products, and digital infrastructure.
          </p>
          <p class="body-copy mt-4">
            We exist to build software that remains useful for years—not software that exists solely to chase trends.
          </p>
        </div>
      </div>
      
      <div class="bottom-ornament">
        <span class="small-caps">SYSTEM STATUS: NOMINAL</span>
        <AnimatedSlashes :count="40" class="mt-2" />
      </div>
    </BrutalistCard>

    <!-- VISION & MISSION -->
    <BrutalistCard padding="6rem">
      <div class="split-grid">
        <div class="grid-left">
          <h2 class="section-title">VISION & MISSION</h2>
          <p class="body-copy mt-4">
            Technology has become increasingly noisy. Modern software constantly competes for attention through notifications, complexity, and growth-driven design. We believe software should instead become calmer.
          </p>
          <p class="body-copy mt-4">
            Our goal is not to maximize engagement. Our goal is to maximize usefulness. We build software that people can rely on every day. We invest in infrastructure before features, and we prefer longevity over trends.
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
        </div>
        <div class="grid-right">
          <div class="dither-wrapper">
            <DitherImage :src="pitPeopleImg" :pixelSize="4" colorDark="#000000" colorLight="#c4b5e3" />
          </div>
        </div>
      </div>
    </BrutalistCard>

    <!-- CORE PHILOSOPHY -->
    <BrutalistCard dashed padding="4rem">
      <div class="content-header mt-8">
        <h1 class="display-title-secondary">CORE PHILOSOPHY</h1>
      </div>

      <div class="philosophy-grid mt-16">
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
    </BrutalistCard>

    <!-- PRINCIPLES / AXIOMS -->
    <BrutalistCard padding="4rem">
      <div class="bento-grid">
        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .01</span>
          </div>
          <h2 class="item-title mt-4">INVISIBLE INFRASTRUCTURE</h2>
          <p class="item-desc mt-2">Good infrastructure is invisible. Users should never think about authentication, syncing, storage, deployment, or internal architecture.</p>
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .02</span>
          </div>
          <h2 class="item-title mt-4">LONG-TERM THINKING</h2>
          <p class="item-desc mt-2">We build products that should still make sense five years from now. We value permanence over novelty.</p>
        </div>

        <div class="fixed-visual">
          <DitherImage :src="trangleSkullImg" :pixelSize="3" colorDark="#c4b5e3" colorLight="#151515" />
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .03</span>
          </div>
          <h2 class="item-title mt-4">REUSE BEFORE REBUILDING</h2>
          <p class="item-desc mt-2">Every product shares internal standards to ensure longevity and maintainability across the ecosystem.</p>
        </div>

        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .04</span>
          </div>
          <h2 class="item-title mt-4">SUBSTANCE OVER HYPE</h2>
          <p class="item-desc mt-2">We prioritize clarity over cleverness, and honesty over marketing. We document ideas rather than promote them.</p>
        </div>
      </div>
    </BrutalistCard>

    <!-- QUOTE SECTION -->
    <BrutalistCard inverted>
      <div class="quote-wrapper">
        <div class="bg-dither">
          <DitherImage :src="treeSkullImg" :pixelSize="4" />
        </div>
        <div class="center-quote">
          <h2 class="large-quote">"THE MACHINE MUST BE COLD, SO THE HUMAN CAN BE WARM."</h2>
          <AnimatedSlashes :count="30" center class="mt-8" />
        </div>
      </div>
    </BrutalistCard>
  </main>
</template>

<script setup>
import pitPeopleImg from '~/assets/pit-people.png'
import trangleSkullImg from '~/assets/trangle-skull.png'
import treeSkullImg from '~/assets/2skull-arrow.png'

useSeoMeta({
  title: 'ABOUT // TheAlphaOnes',
  description: 'Explore ABOUT at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'ABOUT // TheAlphaOnes',
  ogDescription: 'Explore ABOUT at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}
.hero-section {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.watermark-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20vw;
  font-weight: 700;
  color: rgba(196, 181, 227, 0.03);
  z-index: 0;
  pointer-events: none;
}
.top-nav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--bg-color);
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}
.hero-content {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.display-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -2px;
}
.display-title-secondary {
  font-size: clamp(3rem, 6vw, 5rem);
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -1px;
}
.mission-statement {
  max-width: 65ch;
}
.body-copy {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
}
.bottom-ornament {
  position: relative;
  z-index: 10;
  margin-top: auto;
}
.small-caps {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  letter-spacing: 2px;
}
.split-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 768px) {
  .split-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.section-title {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0;
}
.stats-box {
  display: flex;
  gap: 3rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 2rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
}
.stat-num {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1;
}
.stat-lbl {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.6;
  margin-top: 0.5rem;
}
.dither-wrapper {
  aspect-ratio: 1;
  border: 2px solid var(--fg-color);
  padding: 1rem;
  background-color: var(--fg-color);
}
.content-header {
  text-align: center;
  padding: 2rem 0;
}
.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (min-width: 1024px) {
  .philosophy-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.philosophy-block {
  border: 2px solid var(--fg-color);
  padding: 2rem;
  position: relative;
}
.block-number {
  font-family: 'VT323', monospace;
  font-size: 4rem;
  position: absolute;
  top: -2.5rem;
  left: 1rem;
  background: var(--bg-color);
  padding: 0 0.5rem;
  line-height: 1;
}
.block-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-bottom: 1px dashed var(--fg-color);
  padding-bottom: 1rem;
}
.center-quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
  position: relative;
  z-index: 10;
}
.quote-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.bg-dither {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
  mix-blend-mode: screen;
}
.bg-dither :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.large-quote {
  font-family: 'VT323', monospace;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.1;
  max-width: 800px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
}
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.bento-item {
  border: 2px solid var(--fg-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.bento-item.highlight {
  background-color: var(--fg-color);
  color: var(--bg-color);
}
.fixed-visual {
  padding: 0;
  border: none;
  overflow: hidden;
  background: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-header {
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.5rem;
}
.axiom-num {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
}
.item-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
}
.item-desc {
  font-size: 1.125rem;
  opacity: 0.8;
  margin-top: auto;
  padding-top: 2rem;
}
</style>
"""

with open(DESKTOP_ABOUT_PATH, "w") as f:
    f.write(desktop_about_content)

print("Created merged desktop about.vue")
