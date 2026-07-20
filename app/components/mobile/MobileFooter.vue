<script setup>
import { useUISound } from '~/composables/useUISound'
const { isSoundEnabled, toggleSound } = useUISound()
</script>

<template>
  <footer class="mobile-footer">
    <div class="footer-brand mb-12">
      <h2 class="display-title">TAO HQ</h2>
      <p class="small-caps mt-2">Build what is necessary. Discard what is not.</p>
    </div>

    <div class="footer-links-grid">
      <!-- Core -->
      <div class="footer-group">
        <h3 class="footer-heading">CORE //</h3>
        <div class="footer-links">
          <NuxtLink to="/" v-sound v-hover-sound>Home</NuxtLink>
          <NuxtLink to="/studio" v-sound v-hover-sound>Studio</NuxtLink>
          <NuxtLink to="/products" v-sound v-hover-sound>Products</NuxtLink>
          <NuxtLink to="/writing" v-sound v-hover-sound>Writing</NuxtLink>
          <NuxtLink to="/careers" v-sound v-hover-sound>Careers</NuxtLink>
          <NuxtLink to="/contact" v-sound v-hover-sound>Contact</NuxtLink>
        </div>
      </div>

      <!-- Foundation -->
      <div class="footer-group">
        <h3 class="footer-heading">FOUNDATION //</h3>
        <div class="footer-links">
          <NuxtLink to="/organization/about" v-sound v-hover-sound>About</NuxtLink>
          <NuxtLink to="/organization/team" v-sound v-hover-sound>Team</NuxtLink>
          <NuxtLink to="/organization/infrastructure" v-sound v-hover-sound>Systems</NuxtLink>
        </div>
      </div>

      <!-- Systems -->
      <div class="footer-group">
        <h3 class="footer-heading">SYSTEMS //</h3>
        <div class="footer-links">
          <NuxtLink to="/organization/design-language" v-sound v-hover-sound>Design</NuxtLink>
          <NuxtLink to="/organization/open-source" v-sound v-hover-sound>Open Source</NuxtLink>
          <NuxtLink to="/organization/brand-assets" v-sound v-hover-sound>Brand Assets</NuxtLink>
        </div>
      </div>
      
      <!-- Connect -->
      <div class="footer-group">
        <h3 class="footer-heading">CONNECT //</h3>
        <div class="footer-links">
          <a href="https://github.com/TheAlphaOnes/" target="_blank" v-sound v-hover-sound>GitHub</a>
          <a href="https://x.com/TheNormVg" target="_blank" v-sound v-hover-sound>X (Twitter)</a>
          <a href="mailto:hello@taohq.org" v-sound v-hover-sound>Communicate</a>
          <button class="sound-toggle mt-2" @click="toggleSound" v-sound v-hover-sound="'pop'">
            Sound: {{ isSoundEnabled ? 'ON' : 'OFF' }}
          </button>
        </div>
      </div>
    </div>
    
    <div class="footer-divider"></div>
    
    <div class="footer-bottom">
      <NuxtLink to="/legal" class="legal-link">LEGAL //</NuxtLink>
      <p class="copyright">© 2026 TAOHQ.<br>ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>

<style scoped>
.mobile-footer {
  padding: 4rem 1.5rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
  font-family: 'VT323', monospace;
}

.footer-brand {
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 2rem;
  margin-bottom: 3rem;
}

.display-title {
  font-size: 3.5rem;
  margin: 0;
  line-height: 1;
  letter-spacing: -2px;
}

.small-caps {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  margin: 0;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 1.5rem;
}

.footer-group {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 1.25rem;
  text-transform: uppercase;
  margin: 0 0 1.5rem 0;
  opacity: 0.5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--bg-color);
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.footer-links a:hover,
.footer-links a:active {
  opacity: 1;
  text-decoration: underline;
}

.sound-toggle {
  background: none;
  border: none;
  color: var(--bg-color);
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.9;
  transition: opacity 0.2s;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.sound-toggle:hover,
.sound-toggle:active {
  opacity: 1;
  text-decoration: underline;
}

.footer-divider {
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(to right, var(--bg-color) 0, var(--bg-color) 10px, transparent 10px, transparent 20px);
  margin: 3rem 0;
  opacity: 0.5;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.1rem;
}

.legal-link {
  color: var(--bg-color);
  text-decoration: none;
  font-size: 1.4rem;
}

.copyright {
  margin: 0;
  opacity: 0.6;
  text-align: right;
  line-height: 1.4;
}
</style>
