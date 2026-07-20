<template>
  <BrutalistCard dashed class="section-4" padding="0">
    <div class="horizontal-scroll-container" ref="scrollContainer">
      <div class="scroll-wrapper">
        <div class="scroll-item group" @mouseenter="activeProject = 'FLOWER MOON [ARCHIVE 01]'" @mouseleave="activeProject = 'SELECT ASSET // ---'" v-sound.hover>
          <div class="ticker ticker-top">
            <div class="marquee"><span class="m-text">110010101110010010101001100101010010110111</span><span class="m-text">110010101110010010101001100101010010110111</span></div>
          </div>
          <div class="ticker ticker-bottom">
            <div class="marquee alt-scroll"><span class="m-text">101101001010001011001010100101101010010</span><span class="m-text">101101001010001011001010100101101010010</span></div>
          </div>
          <DitherImage :src="flowerMoonImg" class="card-img" />
        </div>
        <div class="scroll-item group" @mouseenter="activeProject = 'SKULL ARROW [ARCHIVE 02]'" @mouseleave="activeProject = 'SELECT ASSET // ---'" v-sound.hover>
          <div class="ticker ticker-top">
            <div class="marquee"><span class="m-text">101010110100101010100100101010101001110101</span><span class="m-text">101010110100101010100100101010101001110101</span></div>
          </div>
          <div class="ticker ticker-bottom">
            <div class="marquee alt-scroll"><span class="m-text">010010111010010100110101001011101001010</span><span class="m-text">010010111010010100110101001011101001010</span></div>
          </div>
          <DitherImage :src="img2" class="card-img" />
        </div>
        <div class="scroll-item group" @mouseenter="activeProject = 'CRAWL HANDS [ARCHIVE 03]'" @mouseleave="activeProject = 'SELECT ASSET // ---'" v-sound.hover>
          <div class="ticker ticker-top">
            <div class="marquee"><span class="m-text">011010010101011101001010010110101011010101</span><span class="m-text">011010010101011101001010010110101011010101</span></div>
          </div>
          <div class="ticker ticker-bottom">
            <div class="marquee alt-scroll"><span class="m-text">111010100010110100101010110100010101011</span><span class="m-text">111010100010110100101010110100010101011</span></div>
          </div>
          <DitherImage :src="crawlHandsImg" class="card-img" />
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="nav-controls">
        <button class="ascii-btn" @click="scroll('left')" @mouseenter="triggerPrev" @mouseleave="resetPrev" v-sound="'tick'">
          <span class="btn-bracket">[</span>
          <span class="btn-arrow left-arrow">&lt;</span>
          <span class="btn-text">{{ prevText }}</span>
          <span class="btn-bracket">]</span>
        </button>
        <button class="ascii-btn" @click="scroll('right')" @mouseenter="triggerNext" @mouseleave="resetNext" v-sound="'tick'">
          <span class="btn-bracket">[</span>
          <span class="btn-text">{{ nextText }}</span>
          <span class="btn-arrow right-arrow">&gt;</span>
          <span class="btn-bracket">]</span>
        </button>
      </div>
      <div class="slashes-wrapper">
        <div class="project-name-display">{{ activeProject }}</div>
        <AnimatedSlashes :count="25" right />
      </div>
    </div>
  </BrutalistCard>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import flowerMoonImg from '~/assets/flower-moon.png'
import img2 from '~/assets/skull-arrow.png'
import crawlHandsImg from '~/assets/crawl-hands.png'

const scrollContainer = ref(null)

const activeProject = ref('SELECT ASSET // ---')

const prevText = ref('PREV')
const nextText = ref('NEXT')
let intervalPrev = null
let intervalNext = null
const glyphs = ['/', '\\', '|', '-', '_', '+', '=', '*', 'x', '>', '<', ':', '0', '1']

onUnmounted(() => {
  clearInterval(intervalPrev)
  clearInterval(intervalNext)
})

const triggerPrev = () => {
  clearInterval(intervalPrev)
  intervalPrev = setInterval(() => {
    let scrambled = ''
    for(let i=0; i<4; i++) scrambled += glyphs[Math.floor(Math.random() * glyphs.length)]
    prevText.value = scrambled
  }, 40)
}
const resetPrev = () => {
  clearInterval(intervalPrev)
  prevText.value = 'PREV'
}

const triggerNext = () => {
  clearInterval(intervalNext)
  intervalNext = setInterval(() => {
    let scrambled = ''
    for(let i=0; i<4; i++) scrambled += glyphs[Math.floor(Math.random() * glyphs.length)]
    nextText.value = scrambled
  }, 40)
}
const resetNext = () => {
  clearInterval(intervalNext)
  nextText.value = 'NEXT'
}

const scroll = (direction) => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const item = container.querySelector('.scroll-item')
  if (!item) return
  
  // item width + 2rem gap (approx 32px)
  const scrollAmount = item.offsetWidth + 32
  
  container.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.horizontal-scroll-container {
  width: 100%;
  flex-grow: 1;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 2rem 0;
  min-width: 0;
  /* hide scrollbar for sleekness */
  scrollbar-width: none; /* Firefox */
}
.horizontal-scroll-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.scroll-wrapper {
  display: flex;
  height: 70vh;
  gap: 2rem;
  width: max-content;
  padding: 0 4rem;
}
.scroll-item {
  position: relative;
  height: 100%;
  aspect-ratio: 10/16;
  flex-shrink: 0;
  border: 2px solid var(--bg-color);
  cursor: crosshair;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-item:hover {
  box-shadow: 8px 8px 0 var(--bg-color);
}

:deep(.brutalist-section:not(.inverted)) .scroll-item {
  border-color: var(--fg-color);
}
:deep(.brutalist-section:not(.inverted)) .scroll-item:hover {
  box-shadow: 8px 8px 0 var(--fg-color);
}

.scroll-item:hover .card-img {
  transform: scale(1.05);
}

:deep(.card-img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Ticker Styles */
.ticker {
  position: absolute;
  left: 0;
  width: 100%;
  background-color: var(--fg-color);
  color: var(--bg-color);
  font-family: 'VT323', monospace;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.25rem 0;
  z-index: 10;
  display: flex;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border-top: 2px solid var(--bg-color);
  border-bottom: 2px solid var(--bg-color);
}

.ticker-top {
  top: 0;
  transform: translateY(-100%);
}

.ticker-bottom {
  bottom: 0;
  transform: translateY(100%);
  background-color: var(--bg-color);
  color: var(--fg-color);
  border-color: var(--fg-color);
}

.scroll-item:hover .ticker-top,
.scroll-item:hover .ticker-bottom {
  transform: translateY(0);
}

.marquee {
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: scroll-left 5s linear infinite;
}

.marquee.alt-scroll {
  animation: scroll-right 6s linear infinite;
}

.m-text {
  display: inline-block;
  padding-right: 1rem;
  flex-shrink: 0;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 4rem 2rem 4rem;
}

.slashes-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.project-name-display {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: var(--fg-color);
}

.nav-controls {
  display: flex;
  gap: 1.5rem;
}

/* Brutalist ASCII Button */
.ascii-btn {
  position: relative;
  background: var(--bg-color);
  border: 3px solid var(--fg-color);
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
  box-shadow: 6px 6px 0 var(--fg-color);
}

/* The aggressive striped invert hover background */
.ascii-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    -45deg,
    var(--fg-color),
    var(--fg-color) 4px,
    transparent 4px,
    transparent 8px
  );
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -1;
}

.ascii-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0 var(--fg-color);
}

.ascii-btn:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0 var(--fg-color);
}

.ascii-btn:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.ascii-btn:hover .btn-text,
.ascii-btn:hover .btn-bracket,
.ascii-btn:hover .btn-arrow {
  color: var(--bg-color);
  /* Brutalist text shadow so it pops over the stripes */
  text-shadow: 2px 2px 0 var(--fg-color), -2px -2px 0 var(--fg-color), 2px -2px 0 var(--fg-color), -2px 2px 0 var(--fg-color);
}

.btn-bracket {
  opacity: 0.7;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s, color 0.2s;
}

.btn-arrow {
  display: inline-block;
  font-weight: bold;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s;
}

.btn-text {
  font-weight: bold;
  letter-spacing: 2px;
  width: 3.5rem; /* fixed width to prevent jitter when scrambling */
  text-align: center;
  transition: color 0.2s;
}

/* Left Button Hover Micro-Interaction */
.ascii-btn:hover .left-arrow {
  transform: translateX(-4px) scaleX(1.5);
}
.ascii-btn:hover .btn-bracket:first-child {
  transform: translateX(-4px);
  opacity: 1;
}

/* Right Button Hover Micro-Interaction */
.ascii-btn:hover .right-arrow {
  transform: translateX(4px) scaleX(1.5);
}
.ascii-btn:hover .btn-bracket:last-child {
  transform: translateX(4px);
  opacity: 1;
}

.slashes-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
