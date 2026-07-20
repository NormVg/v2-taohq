<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div>
    <!-- Sticky Header -->
    <header class="mobile-header">
      <NuxtLink to="/" class="logo" @click="closeMenu" v-sound>TAOHQ</NuxtLink>
      <button class="hamburger" @click="toggleMenu" v-sound="'toggle'">
        {{ menuOpen ? '[X]' : '[=]' }}
      </button>
    </header>

    <!-- Fullscreen Overlay Menu -->
    <div v-if="menuOpen" class="mobile-menu-overlay">
      <nav class="mobile-nav-links">
        <NuxtLink to="/" @click="closeMenu" v-sound>HOME //</NuxtLink>
        <NuxtLink to="/studio" @click="closeMenu" v-sound>STUDIO //</NuxtLink>
        <NuxtLink to="/products" @click="closeMenu" v-sound>PRODUCTS //</NuxtLink>
        <NuxtLink to="/writing" @click="closeMenu" v-sound>WRITING //</NuxtLink>

        <NuxtLink to="/contact" @click="closeMenu" v-sound>CONTACT //</NuxtLink>
        <NuxtLink to="/legal" @click="closeMenu" v-sound>LEGAL //</NuxtLink>
        
        <div class="menu-divider"></div>
        
        <NuxtLink to="/organization/about" @click="closeMenu" v-sound>ABOUT //</NuxtLink>
        <NuxtLink to="/organization/team" @click="closeMenu" v-sound>TEAM //</NuxtLink>
        <NuxtLink to="/organization/infrastructure" @click="closeMenu" v-sound>SYSTEMS //</NuxtLink>
      </nav>
      
      <div class="menu-footer">
        <a href="https://github.com/TheAlphaOnes/" target="_blank" v-sound>GITHUB //</a>
        <a href="https://x.com/TheNormVg" target="_blank" v-sound>X (TWITTER) //</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--bg-color);
  color: var(--fg-color);
  border-bottom: 2px dashed var(--fg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
}

.logo {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-decoration: none;
  color: var(--fg-color);
}

.hamburger {
  background: none;
  border: none;
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 2rem;
  cursor: pointer;
}

.mobile-menu-overlay {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100dvh - 60px);
  background-color: var(--bg-color);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-links a {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  color: var(--fg-color);
  text-decoration: none;
  text-transform: uppercase;
}

.menu-divider {
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(to right, var(--fg-color) 0, var(--fg-color) 10px, transparent 10px, transparent 20px);
  margin: 1rem 0;
}

.menu-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
}

.menu-footer a {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--fg-color);
  text-decoration: none;
}
</style>
