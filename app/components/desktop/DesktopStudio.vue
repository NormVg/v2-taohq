<template>
  <main class="page-wrapper pt-32 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
    <!-- Breadcrumb -->
    <div class="top-nav mb-8">
      <NuxtLink to="/" class="nav-link">← ROOT</NuxtLink>
      <span class="nav-current">/STUDIO</span>
    </div>

    <!-- Header block -->
    <BrutalistCard inverted dashed padding="4rem" class="mb-16">
      <div class="header-container mt-12">
        <h1 class="display-title">STUDIO</h1>
        <p class="subtitle mt-4">WE ENGINEER HIGH-PERFORMANCE DIGITAL ASSETS.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>

    <!-- Agency Services Section (light, non-inverted) -->
    <BrutalistCard dashed padding="4rem" class="mb-16">
      <!-- Manifesto / Intro -->
      <div class="manifesto-block mb-12">
        <h2 class="section-title-inv">AGENCY SERVICES</h2>
        <p class="manifesto-text mt-8">
          We don't build websites. We forge digital machinery. Our studio partners with ambitious organizations to design, architect, and deploy uncompromising interfaces, impenetrable backend systems, and radical brand identities.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid">
        
        <!-- Service 1: UI/UX -->
        <div class="service-card group" v-hover-sound>
          <!-- corner squares sit outside service-inner overflow -->
          <div class="sc-corner sc-tl"></div>
          <div class="sc-corner sc-tr"></div>
          <div class="sc-corner sc-bl"></div>
          <div class="sc-corner sc-br"></div>
          <div class="service-inner">
            <div class="service-bg-wrapper">
              <DitherImage :src="uiUxImg" :pixelSize="3" class="service-dither" />
            </div>
            <div class="service-content">
              <div class="service-header">
                <h3>INTERFACE & EXPERIENCE</h3>
                <AnimatedSlashes :count="8" />
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
          </div>
        </div>

        <!-- Service 2: ENGINEERING -->
        <div class="service-card group" v-hover-sound>
          <div class="sc-corner sc-tl"></div>
          <div class="sc-corner sc-tr"></div>
          <div class="sc-corner sc-bl"></div>
          <div class="sc-corner sc-br"></div>
          <div class="service-inner">
            <div class="service-bg-wrapper">
              <DitherImage :src="engImg" :pixelSize="3" class="service-dither" />
            </div>
            <div class="service-content">
              <div class="service-header">
                <h3>SYSTEM ARCHITECTURE</h3>
                <AnimatedSlashes :count="8" />
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
          </div>
        </div>

        <!-- Service 3: BRAND IDENTITY -->
        <div class="service-card group" v-hover-sound>
          <div class="sc-corner sc-tl"></div>
          <div class="sc-corner sc-tr"></div>
          <div class="sc-corner sc-bl"></div>
          <div class="sc-corner sc-br"></div>
          <div class="service-inner">
            <div class="service-bg-wrapper">
              <DitherImage :src="brandImg" :pixelSize="3" class="service-dither" />
            </div>
            <div class="service-content">
              <div class="service-header">
                <h3>BRAND IDENTITY</h3>
                <AnimatedSlashes :count="8" />
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
          </div>
        </div>

      </div>
    </BrutalistCard>

    <!-- Merged Terminal / Capabilities Directory -->
    <BrutalistCard dashed padding="3rem" class="cta-terminal mb-16">
      <div class="terminal-header">
        <span>ROOT@TAO-HQ:~# ./list_capabilities.sh</span>
        <AnimatedSlashes :count="10" right />
      </div>
      <div class="terminal-body">
        <p class="mb-8">> EXECUTING CAPABILITIES QUERY...</p>
        
        <div class="capabilities-grid mb-12">
          <ul class="cap-list">
            <li>> FULL STACK WEB DEVELOPMENT</li>
            <li>> CUSTOM SOFTWARE DEVELOPMENT</li>
            <li>> TRADING TOOL & ALGO DEVELOPMENT</li>
            <li>> SAAS PLATFORM ENGINEERING</li>
            <li>> AUTOMATION & SCRIPTING</li>
          </ul>
          <ul class="cap-list">
            <li>> UI/UX & INTERFACE DESIGN</li>
            <li>> HIGH-CONVERSION LANDING PAGES</li>
            <li>> BRAND IDENTITY & LOGO DESIGN</li>
            <li>> SYSTEM ARCHITECTURE</li>
            <li>> API & BACKEND INTEGRATION</li>
          </ul>
        </div>

        <p>> READY TO DEPLOY A NEW ASSET?</p>
        <p>> ESTABLISH SECURE CONNECTION TO DISCUSS YOUR PROJECT.</p>
        <p class="mt-8 mb-4">
          <NuxtLink to="/contact" class="cta-btn">> INITIALIZE CONTACT</NuxtLink>
        </p>
        <p class="blink">_</p>
      </div>
    </BrutalistCard>

    <!-- Global Spinning Logo -->
    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" aria-label="TheAlphaOnes logo" @click.prevent v-hover-sound="{ type: 'drop', feel: 'glass' }">
          <img src="~/assets/logo.svg" alt="TAO Logo" class="flipping-logo" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import uiUxImg from '~/assets/eye-wall.png'
import engImg from '~/assets/skull-break.png'
import brandImg from '~/assets/2face-demon.png'

useSeoMeta({
  title: 'STUDIO // TheAlphaOnes',
  description: 'We partner with ambitious organizations to design, architect, and deploy uncompromising interfaces and brutalist systems.',
  ogTitle: 'STUDIO // TheAlphaOnes',
  ogDescription: 'We partner with ambitious organizations to design, architect, and deploy uncompromising interfaces and brutalist systems.',
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

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.nav-link {
  color: var(--fg-color);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
  margin-right: 1rem;
}
.nav-link:hover {
  border-color: var(--fg-color);
}
.nav-current {
  opacity: 0.5;
}

.header-container {
  display: flex;
  flex-direction: column;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: clamp(4rem, 8vw, 8rem);
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 1rem 0 0 0;
  opacity: 0.8;
}

.manifesto-block {
  max-width: 900px;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
}

.section-title-inv {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
  color: var(--fg-color);
}

.manifesto-text {
  font-size: 1.5rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: var(--fg-color);
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 8px; /* room for -6px corner bleed */
}

.service-card {
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  cursor: crosshair;
}

/* Inner bordered box */
.service-inner {
  position: relative;
  flex: 1;
  border: 2px solid var(--fg-color);
  display: flex;
  flex-direction: column;
  min-height: 400px;
  overflow: hidden;
  background-color: var(--bg-color);
}

/* Corner markers */
.sc-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--fg-color);
  z-index: 20;
}
.sc-tl { top: -6px; left: -6px; }
.sc-tr { top: -6px; right: -6px; }
.sc-bl { bottom: -6px; left: -6px; }
.sc-br { bottom: -6px; right: -6px; }

.service-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}
.service-card:hover .service-bg-wrapper {
  opacity: 0.3;
}

.service-content {
  position: relative;
  z-index: 10;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--fg-color);
}

.service-header {
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.service-header h3 {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  line-height: 1.1;
}

.service-desc {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  flex-grow: 1;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
}

.service-list li {
  margin-bottom: 0.5rem;
  color: var(--fg-color);
  opacity: 0.7;
}

.capabilities-card {
  background-color: var(--bg-color);
}

.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .capabilities-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.cap-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cap-list li {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: var(--bg-color);
  text-transform: uppercase;
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 0.5rem;
}

/* CTA Terminal */
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
  font-size: 1.5rem;
}

.terminal-body {
  padding-top: 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.5;
}

.terminal-body p {
  margin: 0 0 0.5rem 0;
}

.cta-btn {
  display: inline-block;
  background-color: var(--bg-color);
  color: var(--fg-color);
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid var(--bg-color);
}
.cta-btn:hover {
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0 var(--bg-color);
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Fixed Logo */
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
