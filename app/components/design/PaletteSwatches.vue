<script setup lang="ts">
/** Palette as a proportional bar (60 / 30 / 10) plus a labelled swatch per colour. */
import type { Swatch } from '~/constants/design'

defineProps<{ swatches: Swatch[] }>()
</script>

<template>
  <div class="palette">
    <div class="palette__bar" aria-hidden="true">
      <span
        v-for="swatch in swatches"
        :key="swatch.name"
        class="palette__share"
        :style="{ flexGrow: swatch.share, background: swatch.hex }"
      />
    </div>
    <ul class="palette__list" role="list">
      <li v-for="swatch in swatches" :key="swatch.name" class="swatch">
        <span class="swatch__chip" :style="{ background: swatch.hex }" aria-hidden="true" />
        <span class="swatch__name">{{ swatch.name }}</span>
        <span class="swatch__meta">{{ swatch.hex }} · {{ swatch.share }}%</span>
        <span class="swatch__role">{{ swatch.role }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.palette {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.palette__bar {
  display: flex;
  height: 5rem;
  outline: 1px solid var(--line);
}

.palette__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
  gap: var(--space-6);
}

.swatch {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-1) var(--space-3);
  align-items: center;
}

.swatch__chip {
  grid-row: span 3;
  align-self: start;
  width: 2.5rem;
  height: 2.5rem;
  outline: 1px solid var(--line-strong);
}

.swatch__name {
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1;
}

.swatch__meta {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--accent);
}

.swatch__role {
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
