<template>
  <div 
    class="animated-slashes" 
    :class="{ 'align-right': right, 'align-center': center }"
    @mouseenter="triggerScramble"
  >
    <span 
      v-for="(char, n) in chars" 
      :key="n" 
      class="slash"
      :class="{ 'is-scrambling': isScrambling[n] }"
    >{{ char }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  count: { type: Number, default: 40 },
  right: { type: Boolean, default: false },
  center: { type: Boolean, default: false }
});

const chars = ref(Array(props.count).fill('/'));
const isScrambling = ref(Array(props.count).fill(false));
const isHovering = ref(false);

// Techy/system glyphs for the scramble effect
const glyphs = ['/', '\\', '|', '-', '_', '+', '=', '*', 'x', '>', '<', ':'];

let intervals = [];

function triggerScramble() {
  if (isHovering.value) return;
  isHovering.value = true;
  
  // Clean up any stray intervals
  intervals.forEach(clearInterval);
  intervals = [];
  
  chars.value.forEach((_, i) => {
    isScrambling.value[i] = true;
    
    // Break animation down into small segments that complete at different rates
    const settleTime = 150 + Math.random() * 650; // Settles between 150ms and 800ms
    
    const interval = setInterval(() => {
      // Pick a random glyph
      chars.value[i] = glyphs[Math.floor(Math.random() * glyphs.length)];
    }, 40); // Update every 40ms for a fast hardware terminal feel
    
    intervals.push(interval);
    
    // Schedule this specific character to settle
    setTimeout(() => {
      clearInterval(interval);
      chars.value[i] = '/';
      isScrambling.value[i] = false;
    }, settleTime);
  });
  
  // Unlock hover trigger after the longest possible animation finishes
  setTimeout(() => {
    isHovering.value = false;
  }, 900);
}

let autoScrambleTimer = null;

onMounted(() => {
  // Trigger once initially after a small delay
  setTimeout(triggerScramble, 500 + Math.random() * 1000);
  
  // And then automatically every 3 to 5 seconds to make the app feel alive
  autoScrambleTimer = setInterval(() => {
    // Only trigger if not currently hovering
    if (!isHovering.value) {
      triggerScramble();
    }
  }, 3000 + Math.random() * 2000);
});

onBeforeUnmount(() => {
  clearInterval(autoScrambleTimer);
  intervals.forEach(clearInterval);
});
</script>

<style scoped>
.animated-slashes {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
  letter-spacing: 2px;
  width: 100%;
  cursor: crosshair; /* Brutalist touch */
  /* Ensure characters don't cause layout shift during scramble */
  font-family: 'VT323', monospace, 'Courier New', Courier;
}

.animated-slashes.align-right {
  justify-content: flex-end;
}

.animated-slashes.align-center {
  justify-content: center;
}

.slash {
  display: inline-block;
  opacity: 0.5;
  color: inherit;
  width: 0.6em; /* Fixed width to prevent jitter during character swaps */
  text-align: center;
  transition: opacity 0.2s, color 0.2s;
}

.slash.is-scrambling {
  opacity: 1;
  color: #fff; /* Flash white while scrambling */
}
</style>
