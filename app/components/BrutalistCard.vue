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
  flex-grow: 1;
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
}
</style>
