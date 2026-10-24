<script setup lang="ts">
/**
 * The develop sequence of one artwork laid out side by side: the same
 * four frames DitherImage plays over time, shown as a contact sheet.
 */
import { ART_MANIFEST, ART_STEPS, type ArtName } from '~/constants/art-manifest'

const props = defineProps<{ name: ArtName, alt: string }>()

const size = computed(() => ART_MANIFEST[props.name])
const steps = computed(() => Array.from({ length: ART_STEPS }, (_, step) => ({
  step,
  src: `/art/${props.name}/${step}.png`,
  label: step === ART_STEPS - 1 ? 'Final' : `Pass ${step + 1}`,
})))
</script>

<template>
  <ol class="steps" role="list">
    <li v-for="item in steps" :key="item.step" class="step">
      <img
        class="step__img"
        :src="item.src"
        :alt="item.step === ART_STEPS - 1 ? alt : ''"
        :width="size.width"
        :height="size.height"
        loading="lazy"
        decoding="async"
      >
      <span class="step__label">{{ String(item.step + 1).padStart(2, '0') }} · {{ item.label }}</span>
    </li>
  </ol>
</template>

<style scoped>
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

.step {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.step__img {
  width: 100%;
  height: auto;
  image-rendering: pixelated;
}

.step__label {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (max-width: 639px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
