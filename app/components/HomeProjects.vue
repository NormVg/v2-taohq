<template>
  <BrutalistCard dashed class="section-4" padding="0">
    <div class="horizontal-scroll-container" ref="scrollContainer">
      <div class="scroll-wrapper">
        <div class="scroll-item">
          <DitherImage src="/images/scenery1.jpg" />
        </div>
        <div class="scroll-item">
          <DitherImage src="/images/scenery2.jpg" />
        </div>
        <div class="scroll-item">
          <DitherImage src="/images/scenery3.jpg" />
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="nav-controls">
        <button class="ascii-btn" @click="scroll('left')">
          <span class="btn-bracket">[</span>
          <span class="btn-arrow left-arrow">&lt;</span>
          <span class="btn-text">PREV</span>
          <span class="btn-bracket">]</span>
        </button>
        <button class="ascii-btn" @click="scroll('right')">
          <span class="btn-bracket">[</span>
          <span class="btn-text">NEXT</span>
          <span class="btn-arrow right-arrow">&gt;</span>
          <span class="btn-bracket">]</span>
        </button>
      </div>
      <div class="slashes-wrapper">
        <AnimatedSlashes :count="25" right />
      </div>
    </div>
  </BrutalistCard>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

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
  height: 100%;
  aspect-ratio: 10/16;
  flex-shrink: 0;
  border: 2px solid var(--bg-color);
}
:deep(.brutalist-section:not(.inverted)) .scroll-item {
  border-color: var(--fg-color);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem 2rem 4rem;
}

.nav-controls {
  display: flex;
  gap: 1rem;
}

/* Brutalist ASCII Button */
.ascii-btn {
  position: relative;
  background: none;
  border: 2px solid var(--fg-color);
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: color 0.2s;
  z-index: 1;
}

/* The aggressive invert hover background */
.ascii-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--fg-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -1;
}

.ascii-btn:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.ascii-btn:hover {
  color: var(--bg-color);
}

.btn-bracket {
  opacity: 0.5;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s;
}

.btn-arrow {
  display: inline-block;
  font-weight: bold;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), letter-spacing 0.2s;
}

.btn-text {
  font-weight: bold;
  letter-spacing: 2px;
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
