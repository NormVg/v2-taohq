<template>
  <BrutalistCard dashed class="section-stats">
    <div class="stats-grid">
      <!-- Top Section: Intro -->
      <div class="grid-cell intro-cell" v-sound>
        <div class="hover-dither-bg">
          <DitherImage :src="eyeWallImg" />
        </div>
        <h2 class="huge-heading">Building thoughtful software, systems, and lifestyle products.</h2>
      </div>
      
      <div class="grid-cell description-cell" v-sound>
        <div class="ascii-rain-bg">
          {{ asciiRain }}
        </div>
        <div class="content-wrapper">
          <p class="body-text">TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.</p>
          <AnimatedSlashes :count="25" class="mt-4" />
        </div>
      </div>
    </div>
  </BrutalistCard>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import eyeWallImg from '~/assets/eye-wall.png'

const asciiRain = ref('')
const glyphs = ['/', '\\', '|', '-', '_', '+', '=', '*', 'x', '>', '<', ':', '0', '1']

onMounted(() => {
  // Generate a giant string of ASCII for the background
  let rain = ''
  for(let i=0; i<15000; i++) {
    rain += glyphs[Math.floor(Math.random() * glyphs.length)]
  }
  asciiRain.value = rain
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 4px solid var(--fg-color);
  background-color: rgba(21, 21, 21, 0.03);
  flex-grow: 1;
}

.grid-cell {
  padding: 3rem;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-wrapper {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* === Intro Cell === */
.intro-cell {
  grid-column: 1 / 2;
  border-right: 4px solid var(--fg-color);
  display: flex;
  align-items: center;
}

.hover-dither-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  opacity: 0;
  transform: scale(1.1) rotate(2deg);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
  pointer-events: none;
}
.intro-cell:hover .hover-dither-bg {
  opacity: 0.25;
  transform: scale(1) rotate(0deg);
}

.huge-heading {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.intro-cell:hover .huge-heading {
  transform: skewX(-5deg) scale(1.05);
  text-shadow: 4px 4px 0 var(--bg-color), -2px -2px 0 var(--bg-color);
}

/* === Description Cell === */
.description-cell {
  grid-column: 2 / 3;
  justify-content: center;
}
.description-cell .content-wrapper {
  justify-content: center;
}

.ascii-rain-bg {
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.1;
  color: var(--fg-color);
  opacity: 0;
  word-wrap: break-word;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s;
}

.description-cell:hover .ascii-rain-bg {
  opacity: 0.06;
  animation: matrix-scroll 2s infinite linear;
}

@keyframes matrix-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-5%); }
}

.description-cell:hover .body-text {
  background-color: var(--fg-color);
  color: var(--bg-color);
  transform: scale(1.05);
  box-shadow: 10px 10px 0 var(--fg-color);
}

.body-text {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.6;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1.5rem;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .intro-cell, .description-cell {
    grid-column: 1 / 2;
  }
  .intro-cell {
    border-right: none;
    border-bottom: 4px solid var(--fg-color);
  }
}
</style>
