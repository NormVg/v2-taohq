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

    <!-- Manifesto / Intro -->
    <div class="manifesto-block mb-16">
      <h2 class="section-title">AGENCY SERVICES</h2>
      <p class="manifesto-text mt-8">
        We don't build websites. We forge digital machinery. Our studio partners with ambitious organizations to design, architect, and deploy uncompromising interfaces, impenetrable backend systems, and radical brand identities.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="services-grid mb-16">
      
      <!-- Service 1: UI/UX -->
      <BrutalistCard padding="0" class="service-card group">
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
      </BrutalistCard>

      <!-- Service 2: ENGINEERING -->
      <BrutalistCard padding="0" class="service-card group">
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
      </BrutalistCard>

      <!-- Service 3: BRAND IDENTITY -->
      <BrutalistCard padding="0" class="service-card group">
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
      </BrutalistCard>

    </div>

    <!-- CTA Terminal -->
    <BrutalistCard dashed padding="3rem" class="cta-terminal">
      <div class="terminal-header">
        <span>ROOT@TAO-HQ:~# INITIATE_PROTOCOL</span>
        <AnimatedSlashes :count="10" right />
      </div>
      <div class="terminal-body">
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
        <a href="#" class="logo-hover-target" @click.prevent>
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

useHead({
  title: 'STUDIO // taohq'
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

.manifesto-text {
  font-size: 1.5rem;
  line-height: 1.6;
  text-transform: uppercase;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: crosshair;
}

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
  opacity: 0.25;
}

.service-content {
  position: relative;
  z-index: 10;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  color: var(--primary-color, #c4b5e3);
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
