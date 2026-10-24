<script setup lang="ts">
/** The taohq cat: dithered, sitting in a dashed corner frame on the footer's baseline. */
</script>

<template>
  <div class="cat">
    <DitherImage class="cat__image" src="/art/cat.webp" alt="A pixel cat with its mouth wide open" aspect="1 / 1" fit="contain" />
    <span class="cat__corner" aria-hidden="true" />
  </div>
</template>

<style scoped>
.cat {
  position: relative;
  width: 100%;
  max-width: 15rem;
  padding: 0 0 0 var(--space-4);
  border-left: 2px dashed var(--text-primary);
  border-bottom: 2px dashed var(--text-primary);
}

.cat__image {
  transform-origin: bottom center;
  transition: transform var(--dur-panel) var(--ease-spring);
}

.cat__corner {
  position: absolute;
  left: -7px;
  bottom: -7px;
  width: 12px;
  height: 12px;
  background: var(--text-primary);
}

@media (hover: hover) {
  .cat:hover .cat__image {
    transform: scale(1.04) rotate(-2deg);
  }
}
</style>
