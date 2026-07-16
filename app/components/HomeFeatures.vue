<template>
  <BrutalistCard inverted dashed class="section-features">
    <div class="features-grid">
      <div class="grid-cell feature-cell" @mouseenter="triggerFeature1" @mouseleave="resetFeature1">
        <div class="dither-wipe-bg">
          <DitherImage :src="skull1Img" class="feature-dither" />
        </div>
        <div class="content-wrapper">
          <div class="feature-header">
            <h3>Organization<br/>Infrastructure</h3>
            <span class="feature-num">{{ f1Num }}</span>
          </div>
          <p class="body-text-small">
            We design systems that prioritize utility over disruption. Our infrastructure is built to remain invisible, operating with a quiet reliability that allows users to focus on their work rather than the tools they use.
          </p>
        </div>
      </div>
      
      <div class="grid-cell feature-cell" @mouseenter="triggerFeature2" @mouseleave="resetFeature2">
        <div class="dither-wipe-bg">
          <DitherImage :src="skull2Img" class="feature-dither" />
        </div>
        <div class="content-wrapper">
          <div class="feature-header">
            <h3>Scalable<br/>Craft</h3>
            <span class="feature-num">{{ f2Num }}</span>
          </div>
          <p class="body-text-small">
            Technical thoughtfulness means anticipating failure states and designing robust architectures. We believe in building digital products that withstand scale without sacrificing precision or performance.
          </p>
        </div>
      </div>
    </div>
  </BrutalistCard>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import skull1Img from '~/assets/22skull.png'
import skull2Img from '~/assets/skull-flower.png'

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

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 4px solid var(--bg-color); /* Updated for inverted */
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

.feature-cell {
  gap: 1.5rem;
}
.feature-cell .content-wrapper {
  gap: 1.5rem;
}

.feature-cell:first-of-type {
  border-right: 4px solid var(--bg-color); /* Updated for inverted */
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 4px,
    var(--bg-color) 4px,
    var(--bg-color) 8px
  );
}

/* Dither wipe effect on hover */
.dither-wipe-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: var(--bg-color);
  transform: translateY(-100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
  overflow: hidden;
}

.feature-dither {
  opacity: 0.15;
  mix-blend-mode: multiply;
  transform: scale(1.1);
  transition: all 0.5s ease-out;
}

.feature-cell:hover .feature-dither {
  transform: scale(1);
}

.feature-cell:hover .dither-wipe-bg {
  transform: translateY(0);
}

.feature-cell:hover .content-wrapper {
  color: var(--fg-color); /* Invert text color to black over the purple hover background */
}

.feature-cell:hover .feature-num {
  background-color: var(--fg-color);
  color: var(--bg-color);
  transform: scale(1.3) rotate(2deg);
}

.feature-cell:hover h3 {
  letter-spacing: 2px;
  transform: translateX(10px);
}

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px dashed var(--bg-color); /* Updated for inverted */
  padding-bottom: 1rem;
  transition: border-color 0.3s;
}
.feature-cell:hover .feature-header {
  border-bottom: 2px solid var(--fg-color); /* Update dashed line to black on hover */
}

.feature-header h3 {
  font-size: 2rem;
  margin: 0;
  line-height: 1.1;
  text-transform: uppercase;
  transition: all 0.3s;
}

.feature-num {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  background-color: var(--bg-color); /* Updated for inverted */
  color: var(--fg-color); /* Updated for inverted */
  padding: 0 0.5rem;
  transition: all 0.1s;
  display: inline-block;
}

.feature-cell:first-of-type .feature-num {
  /* For the striped box, we want the number box to stand out solidly */
  border: 2px solid var(--bg-color);
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.feature-cell:first-of-type .content-wrapper {
  /* To ensure text is readable over stripes, though in inverted brutalism, raw text over stripes is often used */
  text-shadow: 2px 2px 0 var(--fg-color), -2px -2px 0 var(--fg-color), 2px -2px 0 var(--fg-color), -2px 2px 0 var(--fg-color);
}
.feature-cell:first-of-type:hover .content-wrapper {
  text-shadow: none;
}

.body-text-small {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  transition: opacity 0.3s;
}
.feature-cell:hover .body-text-small {
  opacity: 1;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .feature-cell:first-of-type {
    border-right: none;
    border-bottom: 4px solid var(--bg-color); /* Updated for inverted */
  }
}
</style>
