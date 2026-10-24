<script setup lang="ts">
/** Studio services as numbered entries, each with a small floating specimen beside it. */
import type { StudioService } from '~/constants/studio'

defineProps<{ services: StudioService[] }>()
</script>

<template>
  <ol class="services" role="list">
    <li v-for="(service, index) in services" :key="service.id" class="service">
      <div class="service__text">
        <AppLabel :index="String(index + 1).padStart(2, '0')" />
        <h3 class="service__title">{{ service.title }}</h3>
        <p class="service__summary">{{ service.summary }}</p>
        <p class="service__includes">{{ service.includes.join(' · ') }}</p>
      </div>
      <DitherImage class="service__art" :src="service.art" :alt="service.artAlt" aspect="4 / 5" fit="contain" knockout />
    </li>
  </ol>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
}

.service {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-6);
  align-items: center;
  padding-block: var(--space-8);
  border-bottom: 1px solid var(--line);
}

.service:first-child {
  padding-top: 0;
}

.service__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.service__title {
  font-size: var(--text-h2);
}

.service__summary {
  max-width: 34rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.service__includes {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--accent);
}

.service__art {
  width: clamp(80px, 12vw, 160px);
  transition: transform var(--dur-panel) var(--ease-spring);
}

@media (hover: hover) {
  .service:hover .service__art {
    transform: rotate(-4deg) scale(1.06);
  }
}
</style>
