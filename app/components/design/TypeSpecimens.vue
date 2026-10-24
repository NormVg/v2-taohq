<script setup lang="ts">
/** One line per typeface, set in that face, with its name and job. */
import type { Typeface } from '~/constants/design'

defineProps<{ faces: Typeface[] }>()
</script>

<template>
  <ul class="faces" role="list">
    <li v-for="face in faces" :key="face.name" class="face">
      <p
        class="face__sample"
        :style="{ fontFamily: `var(${face.token})`, fontStyle: face.italic ? 'italic' : 'normal' }"
      >
        {{ face.sample }}
      </p>
      <p class="face__meta">
        <span class="face__name">{{ face.name }}</span>
        <span>{{ face.role }}</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.faces {
  border-top: 1px solid var(--line);
}

.face {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-block: var(--space-6);
  border-bottom: 1px solid var(--line);
}

.face__sample {
  font-size: clamp(2rem, 1.4rem + 2.4vw, 3.5rem);
  line-height: 1.05;
  overflow-wrap: anywhere;
}

.face__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.face__name {
  color: var(--accent);
}
</style>
