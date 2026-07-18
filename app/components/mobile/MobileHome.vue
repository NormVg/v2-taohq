<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import eyeWallImg from '~/assets/eye-wall.png'
import skull1Img from '~/assets/22skull.png'
import skull2Img from '~/assets/skull-flower.png'
import projImg1 from '~/assets/flower-moon.png'
import projImg2 from '~/assets/skull-arrow.png'
import projImg3 from '~/assets/crawl-hands.png'
import dither1 from '~/assets/2skull-arrow.png'
import dither2 from '~/assets/2face-demon.png'
import dither3 from '~/assets/skull-break.png'

import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'

const f1Num = ref('[01]')
const f2Num = ref('[02]')
let intervalF1 = null
let intervalF2 = null
const glyphs = ['/', '\\', '|', '-', '_', '+', '=', '*', 'x', '>', '<', ':', '0', '1']

onUnmounted(() => {
  clearInterval(intervalF1)
  clearInterval(intervalF2)
})

const triggerFeature1 = () => {
  clearInterval(intervalF1)
  intervalF1 = setInterval(() => {
    f1Num.value = '[' + glyphs[Math.floor(Math.random() * glyphs.length)] + glyphs[Math.floor(Math.random() * glyphs.length)] + ']'
  }, 40)
}
const resetFeature1 = () => {
  clearInterval(intervalF1)
  f1Num.value = '[01]'
}

const triggerFeature2 = () => {
  clearInterval(intervalF2)
  intervalF2 = setInterval(() => {
    f2Num.value = '[' + glyphs[Math.floor(Math.random() * glyphs.length)] + glyphs[Math.floor(Math.random() * glyphs.length)] + ']'
  }, 40)
}
const resetFeature2 = () => {
  clearInterval(intervalF2)
  f2Num.value = '[02]'
}
</script>

<template>
  <div class="mobile-home-container">
    
    <!-- 1. Hero Section (Inverted) -->
    <section class="mobile-section hero-section inverted-section border-b-dashed">
      <div class="hero-content">
        <p class="small-caps">Every pixel tells a story.</p>
        <h1 class="italiano-font mobile-logo">TheAlphaOnes</h1>
        <AnimatedSlashes :count="15" center />
      </div>
    </section>

    <!-- 2. Stats / Intro Section (Light) -->
    <section class="mobile-section stats-section border-b-dashed">
      <div class="mobile-section-content">
        <h2 class="mobile-heading">Building thoughtful software, systems, and lifestyle products.</h2>
        <div class="dither-wrapper my-8">
          <DitherImage :src="eyeWallImg" :pixelSize="4" />
        </div>
        <p class="body-text">TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.</p>
        <AnimatedSlashes :count="10" class="mt-4" />
      </div>
    </section>

    <!-- 3. Features Section (Inverted) -->
    <section class="mobile-section features-section inverted-section border-b-dashed">
      <div class="mobile-section-content features-stack">
        
        <!-- Feature 1 -->
        <div class="feature-card" @touchstart="triggerFeature1" @touchend="resetFeature1">
          <div class="feature-bg">
            <DitherImage :src="skull1Img" :pixelSize="3" class="opacity-dither" />
          </div>
          <div class="feature-content">
            <div class="feature-header">
              <h3>ORGANIZATION<br/>INFRASTRUCTURE</h3>
              <span class="feature-num">{{ f1Num }}</span>
            </div>
            <p class="body-text-small mt-4">
              We design systems that prioritize utility over disruption. Our infrastructure is built to remain invisible, operating with a quiet reliability that allows users to focus on their work rather than the tools they use.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card mt-8" @touchstart="triggerFeature2" @touchend="resetFeature2">
          <div class="feature-bg">
            <DitherImage :src="skull2Img" :pixelSize="3" class="opacity-dither" />
          </div>
          <div class="feature-content">
            <div class="feature-header">
              <h3>SCALABLE<br/>CRAFT</h3>
              <span class="feature-num">{{ f2Num }}</span>
            </div>
            <p class="body-text-small mt-4">
              Technical thoughtfulness means anticipating failure states and designing robust architectures. We believe in building digital products that withstand scale without sacrificing precision or performance.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. Projects Section (Light) -->
    <section class="mobile-section projects-section border-b-dashed">
      <div class="mobile-section-content pt-12 pb-12">
        <div class="section-title-wrapper mb-8">
          <h2 class="section-title">DIRECTORY OF DIGITAL ASSETS</h2>
          <AnimatedSlashes :count="12" class="mt-2" />
        </div>
        
        <div class="projects-stack">
          <!-- Proj 1 -->
          <NuxtLink to="/products" class="proj-card">
            <div class="proj-img-wrap">
              <DitherImage :src="projImg1" :pixelSize="4" />
            </div>
            <div class="proj-info">
              <div class="proj-id">ID: 001</div>
              <h3 class="proj-name">TAO-CANVAS</h3>
              <p class="proj-desc">DESKTOP-GRADE INFINITE CANVAS</p>
            </div>
          </NuxtLink>

          <!-- Proj 2 -->
          <NuxtLink to="/products" class="proj-card">
            <div class="proj-img-wrap">
              <DitherImage :src="projImg2" :pixelSize="4" />
            </div>
            <div class="proj-info">
              <div class="proj-id">ID: 002</div>
              <h3 class="proj-name">IDENT</h3>
              <p class="proj-desc">ZERO-TRUST AUTHENTICATION</p>
            </div>
          </NuxtLink>

          <!-- Proj 3 -->
          <NuxtLink to="/products" class="proj-card">
            <div class="proj-img-wrap">
              <DitherImage :src="projImg3" :pixelSize="4" />
            </div>
            <div class="proj-info">
              <div class="proj-id">ID: 003</div>
              <h3 class="proj-name">BRUTAL-UI</h3>
              <p class="proj-desc">COMPONENT ARCHITECTURE</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 5. System Info Section (Inverted) -->
    <section class="mobile-section system-section inverted-section">
      <!-- Marquee Header -->
      <div class="marquee-header border-b-dashed">
        <div class="marquee">
          <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
          <span class="m-text">"WE BELIEVE SOFTWARE SHOULD FEEL UNDERSTANDABLE, DURABLE, AND CALM." /// </span>
        </div>
      </div>

      <!-- Directory List -->
      <div class="directory-list">
        
        <a href="mailto:hello@taohq.org" class="dir-row group">
          <div class="dir-bg">
            <DitherImage :src="dither1" :pixelSize="3" class="opacity-dither" />
          </div>
          <div class="dir-content">
            <span class="dir-num">[01]</span>
            <span class="dir-title">E-MAIL TRANSMISSION</span>
            <span class="dir-value">HELLO@TAOHQ.ORG</span>
          </div>
        </a>

        <a href="https://x.com/TheNormVg" target="_blank" class="dir-row group">
          <div class="dir-bg">
            <DitherImage :src="dither2" :pixelSize="3" class="opacity-dither" />
          </div>
          <div class="dir-content">
            <span class="dir-num">[02]</span>
            <span class="dir-title">GLOBAL BROADCAST (X)</span>
            <span class="dir-value">@THENORMVG</span>
          </div>
        </a>

        <a href="https://github.com/TheAlphaOnes/" target="_blank" class="dir-row group">
          <div class="dir-bg">
            <DitherImage :src="dither3" :pixelSize="3" class="opacity-dither" />
          </div>
          <div class="dir-content">
            <span class="dir-num">[03]</span>
            <span class="dir-title">OPEN SOURCE REPOSITORY</span>
            <span class="dir-value">GITHUB.COM/THEALPHAONES</span>
          </div>
        </a>

      </div>
    </section>

  </div>
</template>

<style scoped>
.mobile-home-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  max-width: 100%;
}

.mobile-section {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-section-content {
  padding: 3rem 1.25rem;
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

/* 1. Hero */
.hero-section {
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.mobile-logo {
  font-size: 5rem;
  margin: 2rem 0;
  line-height: 1;
}

.small-caps {
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

/* Typography Shared */
.mobile-heading {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.body-text {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.4;
  opacity: 0.9;
}

.body-text-small {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.8;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 0;
  display: inline-block;
}

/* 3. Features */
.features-stack {
  display: flex;
  flex-direction: column;
}

.feature-card {
  position: relative;
  border: 2px solid var(--bg-color);
  padding: 2rem 1.5rem;
  overflow: hidden;
}

.feature-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.opacity-dither {
  opacity: 0.2;
  mix-blend-mode: screen;
}
.inverted-section .opacity-dither {
  opacity: 0.25;
}

.feature-content {
  position: relative;
  z-index: 2;
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 1rem;
}

.feature-header h3 {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.feature-num {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  color: var(--bg-color);
}

/* 4. Projects */
.projects-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.proj-card {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--fg-color);
  text-decoration: none;
  color: inherit;
}

.proj-img-wrap {
  width: 100%;
  aspect-ratio: 16/9;
  border-bottom: 2px solid var(--fg-color);
  background-color: var(--fg-color);
}

.proj-img-wrap :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.proj-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.proj-id {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.6;
  margin-bottom: 0.5rem;
}

.proj-name {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  margin: 0;
  line-height: 1;
}

.proj-desc {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
}

/* 5. System Info */
.marquee-header {
  width: 100%;
  overflow: hidden;
  padding: 1.5rem 0;
  background-color: var(--fg-color);
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  animation: scroll-left 15s linear infinite;
}

.m-text {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  padding-right: 2rem;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.directory-list {
  display: flex;
  flex-direction: column;
}

.dir-row {
  position: relative;
  display: flex;
  padding: 2rem 1.5rem;
  border-bottom: 2px solid var(--bg-color);
  text-decoration: none;
  color: var(--bg-color);
  overflow: hidden;
}

.dir-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.dir-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.dir-num {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  opacity: 0.7;
}

.dir-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  line-height: 1.1;
  margin: 0.5rem 0;
  text-transform: uppercase;
}

.dir-value {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  opacity: 0.6;
}
</style>
