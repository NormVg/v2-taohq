<script setup>
import { onMounted } from 'vue'
import uiUxImg from '~/assets/eye-wall.png'
import engImg from '~/assets/skull-break.png'
import brandImg from '~/assets/2face-demon.png'
import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import BrutalistCard from '~/components/BrutalistCard.vue'

// SEO Meta is already defined in app/pages/studio.vue, we don't need it here.
</script>

<template>
  <main class="mobile-page-wrapper">
    <!-- Breadcrumb -->
    <div class="top-nav mb-4">
      <NuxtLink to="/" class="nav-link">< ROOT</NuxtLink>
      <span class="nav-current">/STUDIO</span>
    </div>

    <!-- Header block -->
    <BrutalistCard inverted dashed class="mobile-card hero-card mb-8">
      <div class="header-container">
        <h1 class="display-title">STUDIO</h1>
        <p class="subtitle mt-2">WE ENGINEER HIGH-PERFORMANCE DIGITAL ASSETS.</p>
        <AnimatedSlashes :count="20" class="mt-4" />
      </div>
    </BrutalistCard>

    <!-- Manifesto / Intro -->
    <div class="manifesto-block mb-8">
      <h2 class="section-title">AGENCY SERVICES</h2>
      <p class="manifesto-text mt-4">
        We don't build websites. We forge digital machinery. Our studio partners with ambitious organizations to design, architect, and deploy uncompromising interfaces, impenetrable backend systems, and radical brand identities.
      </p>
    </div>

    <!-- Services Stack -->
    <div class="services-stack mb-8">
      
      <!-- Service 1: UI/UX -->
      <BrutalistCard padding="0" class="service-card group">
        <div class="service-bg-wrapper">
          <DitherImage :src="uiUxImg" :pixelSize="3" class="service-dither" />
        </div>
        <div class="service-content">
          <div class="service-header">
            <h3>INTERFACE & EXPERIENCE</h3>
            <AnimatedSlashes :count="6" />
          </div>
          <p class="service-desc">
            Brutalist, high-conversion interfaces engineered for speed and aesthetic dominance. We design user experiences that demand attention and optimize workflows down to the millisecond.
          </p>
          <ul class="service-list">
            <li>> UI/UX DESIGN</li>
            <li>> INTERACTION DESIGN</li>
            <li>> DESIGN SYSTEMS</li>
          </ul>
        </div>
      </BrutalistCard>

      <!-- Service 2: ENGINEERING -->
      <BrutalistCard padding="0" class="service-card group">
        <div class="service-bg-wrapper">
          <DitherImage :src="engImg" :pixelSize="3" class="service-dither" />
        </div>
        <div class="service-content">
          <div class="service-header">
            <h3>SYSTEM ARCHITECTURE</h3>
            <AnimatedSlashes :count="6" />
          </div>
          <p class="service-desc">
            Zero-latency APIs, resilient edge infrastructure, and robust full-stack applications. Built on Nuxt, Vue, and high-performance serverless architectures that never sleep.
          </p>
          <ul class="service-list">
            <li>> FULL-STACK DEVELOPMENT</li>
            <li>> BACKEND ARCHITECTURE</li>
            <li>> EDGE COMPUTE / DEVOPS</li>
          </ul>
        </div>
      </BrutalistCard>

      <!-- Service 3: BRAND IDENTITY -->
      <BrutalistCard padding="0" class="service-card group">
        <div class="service-bg-wrapper">
          <DitherImage :src="brandImg" :pixelSize="3" class="service-dither" />
        </div>
        <div class="service-content">
          <div class="service-header">
            <h3>BRAND IDENTITY</h3>
            <AnimatedSlashes :count="6" />
          </div>
          <p class="service-desc">
            Typography, geometry, and stark monochrome alignment. We construct bold, unapologetic visual identities that separate your brand from the noise of the modern web.
          </p>
          <ul class="service-list">
            <li>> LOGO DESIGN</li>
            <li>> BRAND GUIDELINES</li>
            <li>> VISUAL STRATEGY</li>
          </ul>
        </div>
      </BrutalistCard>

    </div>

    <!-- Capabilities Directory -->
    <BrutalistCard dashed class="mobile-card cta-terminal mb-8">
      <div class="terminal-header">
        <span>ROOT@TAO-HQ:~#</span>
        <AnimatedSlashes :count="5" right />
      </div>
      <div class="terminal-body mt-4">
        <p class="mb-4">> EXECUTING QUERY...</p>
        
        <div class="capabilities-grid mb-6">
          <ul class="cap-list">
            <li>> FULL STACK WEB DEVELOPMENT</li>
            <li>> CUSTOM SOFTWARE DEVELOPMENT</li>
            <li>> TRADING TOOL & ALGO DEVELOPMENT</li>
            <li>> SAAS PLATFORM ENGINEERING</li>
            <li>> AUTOMATION & SCRIPTING</li>
            <li>> UI/UX & INTERFACE DESIGN</li>
            <li>> HIGH-CONVERSION LANDING PAGES</li>
            <li>> BRAND IDENTITY & LOGO DESIGN</li>
            <li>> SYSTEM ARCHITECTURE</li>
            <li>> API & BACKEND INTEGRATION</li>
          </ul>
        </div>

        <p>> DEPLOY NEW ASSET?</p>
        <p class="mt-6 mb-4">
          <NuxtLink to="/contact" class="cta-btn">> INITIALIZE CONTACT</NuxtLink>
        </p>
        <p class="blink">_</p>
      </div>
    </BrutalistCard>
  </main>
</template>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-card {
  padding: 2rem 1.5rem;
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.nav-link {
  color: var(--fg-color);
  text-decoration: none;
  margin-right: 0.5rem;
}

.nav-current {
  opacity: 0.5;
}

/* Header */
.display-title {
  font-family: 'VT323', monospace;
  font-size: 4rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0;
  opacity: 0.8;
}

/* Manifesto */
.section-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
}

.manifesto-text {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  text-transform: uppercase;
}

/* Services */
.services-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--bg-color);
}

.service-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
}

.service-dither {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-content {
  position: relative;
  z-index: 10;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.service-header {
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.service-header h3 {
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  line-height: 1.1;
}

.service-desc {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  line-height: 1.4;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
}

.service-list li {
  margin-bottom: 0.5rem;
  color: var(--primary-color, #c4b5e3);
}

/* Terminal */
.cta-terminal {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.terminal-header {
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
}

.terminal-body {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
}

.terminal-body p {
  margin: 0 0 0.5rem 0;
}

.cap-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cap-list li {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  letter-spacing: 0px;
  color: var(--bg-color);
  text-transform: uppercase;
  border-bottom: 1px dashed var(--bg-color);
  padding-bottom: 0.5rem;
}

.cta-btn {
  display: inline-block;
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border: 2px solid var(--bg-color);
  font-weight: bold;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
