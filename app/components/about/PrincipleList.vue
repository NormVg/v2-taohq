<script setup lang="ts">
/** Numbered principles, two columns on wide screens. */
import type { Principle } from '~/constants/about'

defineProps<{ principles: Principle[] }>()
</script>

<template>
  <ol class="principles" role="list">
    <li v-for="(principle, index) in principles" :key="principle.id" class="principle">
      <span class="principle__no">{{ String(index + 1).padStart(2, '0') }}</span>
      <h3 class="principle__title">{{ principle.title }}</h3>
      <p class="principle__body">{{ principle.body }}</p>
    </li>
  </ol>
</template>

<style scoped>
.principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: var(--space-8) var(--space-12);
}

.principle {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: var(--space-1) var(--space-3);
}

.principle__no {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  color: var(--accent);
  line-height: 2.2;
}

.principle__title {
  font-size: 1.75rem;
}

.principle__body {
  grid-column: 2;
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
