<script setup lang="ts">
/**
 * The taohq cat: dithered, mirrored to face into the page, sitting on the
 * footer's baseline. Hover makes it yelp: a squash-and-stretch hop anchored
 * to the baseline while its dither re-develops.
 */
const art = ref<{ develop: () => void } | null>(null)
</script>

<template>
  <div class="cat" @mouseenter="art?.develop()">
    <DitherImage ref="art" class="cat__image" name="cat" alt="A pixel cat with its mouth wide open" />
  </div>
</template>

<style scoped>
.cat {
  width: 100%;
}

/* Mirrored so the cat looks back across the footer toward the wordmark.
   The flip lives on the image so the wrapper's entrance animation can't undo it. */
.cat__image {
  transform: scaleX(-1);
  transform-origin: bottom center;
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .cat:hover .cat__image {
    animation: yelp 520ms var(--ease-out);
  }
}

/* Feet never leave the line: every frame scales from the bottom edge. */
@keyframes yelp {
  0% { transform: scaleX(-1); }
  25% { transform: scaleX(-1) scale(1.04, 0.94); }
  55% { transform: scaleX(-1) scale(0.97, 1.07); }
  80% { transform: scaleX(-1) scale(1.01, 0.99); }
  100% { transform: scaleX(-1); }
}
</style>
