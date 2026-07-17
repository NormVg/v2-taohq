<template>
  <div class="brutalist-section" :class="{ inverted: inverted }">
    <div class="inset-border" :class="{ 'dashed-border': dashed }">
      <div class="corner top-left"></div>
      <div class="corner top-right"></div>
      <div class="corner bottom-left"></div>
      <div class="corner bottom-right"></div>
      
      <div class="content-inner" :style="{ padding: padding }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  inverted: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: '4rem'
  }
})
</script>

<style scoped>
.brutalist-section {
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--bg-color);
  color: var(--fg-color);
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  position: relative;
}

/* Hack to allow scrolling in tall sections without getting trapped */
.brutalist-section::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  scroll-snap-align: end;
}

.brutalist-section.inverted {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.inset-border {
  position: relative;
  flex-grow: 1;
  width: 100%;
  border: 2px solid var(--fg-color);
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.dashed-border {
  border-style: dashed;
}

.brutalist-section.inverted .inset-border {
  border-color: var(--bg-color);
}

.corner {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: var(--fg-color);
}

.brutalist-section.inverted .corner {
  background-color: var(--bg-color);
}

/* Center the 12x12 squares on the corners of the 2px border */
/* The border is inset by 2px, so the center is at -5px */
.top-left { top: -6px; left: -6px; }
.top-right { top: -6px; right: -6px; }
.bottom-left { bottom: -6px; left: -6px; }
.bottom-right { bottom: -6px; right: -6px; }

.content-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
