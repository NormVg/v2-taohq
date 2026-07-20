<script setup>
import catImg from '~/assets/cat.png'
import grimReaperImg from '~/assets/grim-reaper.png'
import { useUISound } from '~/composables/useUISound'

const { isSoundEnabled, toggleSound } = useUISound()
</script>

<template>
  <BrutalistCard dashed class="app-footer">
    <div class="full-height-flex">
      
      <div class="center-banner">
        <div class="logo-hover-dither">
          <DitherImage :src="grimReaperImg" />
        </div>
        <div class="banner-inner">
          <img src="~/assets/logo.svg" class="logo-icon" alt="TheAlphaOnes Logo" />
          <h1 class="logo-text-large">taohq</h1>
        </div>
      </div>
      
      <div class="bottom-line">
        <p class="text-right small-caps">Build what is necessary. Discard what is not.</p>
        <AnimatedSlashes :count="80" right class="mt-2" />
      </div>

      <div class="footer-links-grid mt-4">
        <!-- Core Navigation -->
        <div class="footer-col">
          <NuxtLink to="/" v-sound>Home //</NuxtLink>
          <NuxtLink to="/studio" v-sound>Studio //</NuxtLink>
          <NuxtLink to="/products" v-sound>Products //</NuxtLink>
          <NuxtLink to="/writing" v-sound>Writing //</NuxtLink>
        </div>
        
        <!-- Organization / Foundation -->
        <div class="footer-col">
          <NuxtLink to="/organization/about" v-sound>About //</NuxtLink>
          <NuxtLink to="/organization/team" v-sound>Team //</NuxtLink>
          <NuxtLink to="/organization/timeline" v-sound>Timeline //</NuxtLink>
          <NuxtLink to="/organization/infrastructure" v-sound>Systems //</NuxtLink>
          <NuxtLink to="/careers" v-sound>Careers //</NuxtLink>
        </div>

        <!-- Systems & Assets -->
        <div class="footer-col">
          <NuxtLink to="/organization/design-language" v-sound>Design //</NuxtLink>
          <NuxtLink to="/organization/open-source" v-sound>Open Source //</NuxtLink>
          <NuxtLink to="/organization/brand-assets" v-sound>Brand Assets //</NuxtLink>
          <NuxtLink to="/legal" v-sound>Legal //</NuxtLink>
        </div>

        <!-- External & Comms -->
        <div class="footer-col">
          <NuxtLink to="/contact" v-sound>Contact //</NuxtLink>
          <a href="mailto:hello@taohq.org" v-sound>Communicate //</a>
          <a href="https://github.com/TheAlphaOnes/" target="_blank" v-sound>GitHub //</a>
          <a href="https://x.com/TheNormVg" target="_blank" v-sound>X (Twitter) //</a>
          
          <div class="sound-toggle-container mt-4">
            <button class="sound-toggle" @click="toggleSound" v-sound="'pop'">
              Sound: {{ isSoundEnabled ? 'ON' : 'OFF' }} //
            </button>
          </div>
        </div>
      </div>

      <div class="footer-cat-container">
        <DitherImage :src="catImg" class="footer-cat-dither" />
      </div>
    </div>
  </BrutalistCard>
</template>

<style scoped>
.app-footer {
  /* To ensure consistent margin/padding if used outside index.vue */
  min-height: 100vh;
  position: relative;
  z-index: 10;
}
.full-height-flex {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.center-banner {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: var(--fg-color);
  color: var(--bg-color);
  padding: 4rem 4rem;
  border-top: 4px solid var(--fg-color);
  border-bottom: 4px solid var(--fg-color);
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}

.logo-hover-dither {
  position: absolute;
  top: 50%;
  right: 4rem;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  pointer-events: none;
}

.center-banner:hover .logo-hover-dither {
  opacity: 0.8;
}

.banner-inner {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  transition: transform 150ms cubic-bezier(0.19, 1, 0.22, 1);
}

.center-banner:hover .banner-inner {
  transform: scale(1.02);
}

.logo-icon {
  width: 100px;
  height: 100px;
  margin-right: 4rem;
}
.logo-text-large {
  font-size: 12vw;
  margin: 0;
  letter-spacing: -5px;
}

.bottom-line {
  margin-top: 2rem;
}
.small-caps {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hr-line {
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 2px;
  font-size: 1rem;
}
.text-right {
  text-align: right;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 4rem 4rem 2rem 280px;
  text-align: left;
}
.footer-cat-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: multiply;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-col a {
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-decoration: none;
  transition: opacity 0.2s;
  text-transform: uppercase;
  white-space: nowrap;
}
.footer-col a:hover {
  opacity: 0.5;
}
.sound-toggle {
  background: none;
  border: none;
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-decoration: none;
  transition: opacity 0.2s;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0;
  text-align: left;
  cursor: crosshair;
}
.sound-toggle:hover {
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .logo-icon {
    width: 60px;
    height: 60px;
    margin-right: 2rem;
  }
  .banner-inner {
    padding: 1rem 2rem;
  }
  .footer-links-grid {
    grid-template-columns: 1fr;
    padding: 2rem 2rem 260px 2rem;
  }
}
</style>
