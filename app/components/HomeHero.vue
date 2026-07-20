<script setup>
import { ref, onMounted } from 'vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 1600)
})
</script>

<template>
  <BrutalistCard inverted dashed class="section-1">
    
    <Transition name="splash">
      <div v-if="showSplash" class="splash-screen">
        <div class="splash-mark">
          <img src="~/assets/logo.svg" alt="TAO Logo" class="splash-logo-img" />
        </div>
      </div>
    </Transition>

    <div class="watermark-bg">TheAlphaOnes</div>
    
    <div class="top-text">
      <p class="small-caps">Every pixel tells a story.</p>
      <AnimatedSlashes :count="25" right class="mt-2" />
    </div>
    <div class="center-content">
      <div class="hero-logo-container">
        <h1 class="italiano-font logo-main">TheAlphaOnes</h1>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-links-row">
        <NuxtLink to="/products" class="nav-link-brutal" v-sound v-hover-sound>PRODUCTS</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/organization/about" class="nav-link-brutal" v-sound v-hover-sound>ORGANIZATION</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/writing" class="nav-link-brutal" v-sound v-hover-sound>WRITING</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/careers" class="nav-link-brutal" v-sound v-hover-sound>CAREERS</NuxtLink>
        <span class="slash-separator">///</span>
        <NuxtLink to="/contact" class="nav-link-brutal" v-sound v-hover-sound>CONTACT</NuxtLink>
      </div>
      <AnimatedSlashes :count="50" class="mt-2" />
    </div>
  </BrutalistCard>
</template>

<style scoped>
.section-1 {
  position: relative;
  overflow: hidden;
}
.watermark-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15vw;
  font-weight: bold;
  color: rgba(196, 181, 227, 0.05); /* var(--bg-color) inverted faint */
  z-index: 0;
  pointer-events: none;
  white-space: nowrap;
}
.top-text {
  position: absolute;
  top: 4rem;
  right: 4rem;
  text-align: right;
  z-index: 10;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  z-index: 2;
}
.hero-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 2rem;
  z-index: 10;
}

.logo-main {
  font-size: 15vw;
  margin: 0;
  line-height: 0.8;
  font-weight: 400;
}


.bottom-nav {
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.nav-links-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1rem;
  letter-spacing: 1px;
}

.nav-link-brutal {
  color: var(--bg-color);
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.nav-link-brutal:hover {
  opacity: 1;
}

.slash-separator {
  opacity: 0.5;
}

/* SPLASH SCREEN STYLES */
.splash-screen {
  position: absolute;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
  background-color: var(--bg-color); /* Light background for contrast against dark hero */
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.splash-mark {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.1); /* Make the purple logo dark */
  animation: logo-breathe 2s ease-in-out infinite alternate;
}

@keyframes logo-breathe {
  0% { transform: scale(0.95); opacity: 0.8; }
  100% { transform: scale(1.05); opacity: 1; }
}

.splash-leave-active {
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.splash-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
