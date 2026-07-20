<script setup>
import { onMounted } from 'vue'
import uiUxImg from '~/assets/eye-wall.png'
import engImg from '~/assets/skull-break.png'
import brandImg from '~/assets/2face-demon.png'
import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
</script>

<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="STUDIO"
      subtitle="WE ENGINEER HIGH-PERFORMANCE DIGITAL ASSETS."
    >
      <template #back-extra>
        <span class="studio-path">/STUDIO</span>
      </template>
    </MobilePageHero>

    <!-- Manifesto / Intro -->
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content manifesto-block">
        <h2 class="section-title">AGENCY SERVICES</h2>
        <p class="manifesto-text mt-4">
          We don't build websites. We forge digital machinery. Our studio partners with ambitious organizations to design, architect, and deploy uncompromising interfaces, impenetrable backend systems, and radical brand identities.
        </p>
      </div>
    </section>

    <!-- Services Stack -->
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content services-stack">
        
        <!-- Service 1: UI/UX -->
        <div class="service-card group" v-sound.hover="{ type: 'tick', feel: 'organic' }">
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
          </div>
        </div>

        <!-- Service 2: ENGINEERING -->
        <div class="service-card group" v-sound.hover="{ type: 'tick', feel: 'organic' }">
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
          </div>
        </div>

        <!-- Service 3: BRAND IDENTITY -->
        <div class="service-card group" v-sound.hover="{ type: 'tick', feel: 'organic' }">
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
          </div>
        </div>

      </div>
    </section>

    <!-- Capabilities Directory -->
    <section class="mobile-section inverted-section">
      <div class="mobile-section-content cta-terminal">
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
      </div>
    </section>
  </main>
</template>

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

.studio-path {
  font-family: 'VT323', monospace;
  font-size: 1.15rem;
  opacity: 0.55;
  letter-spacing: 0.06em;
}

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
  display: inline-block;
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
  gap: 2rem;
}

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.service-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--bg-color);
  border: 2px solid var(--fg-color);
  min-height: 300px;
}

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
  color: inherit;
}

.terminal-header {
  border-bottom: 2px dashed currentColor;
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
  color: inherit;
  text-transform: uppercase;
  border-bottom: 1px dashed currentColor;
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
