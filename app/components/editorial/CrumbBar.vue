<script setup lang="ts">
/**
 * The first line of every inner page: breadcrumb trail on the left, a
 * counter or date on the right, a hairline underneath. "taohq" always leads.
 */
import type { Crumb } from '~/types/ui'

defineProps<{
  crumbs: Crumb[]
  count?: string
}>()
</script>

<template>
  <div v-reveal class="bar" data-reveal="wipe">
    <nav class="bar__trail" aria-label="Breadcrumb">
      <NuxtLink to="/" class="bar__link">taohq</NuxtLink>
      <template v-for="(crumb, i) in crumbs" :key="crumb.label">
        <span aria-hidden="true">/</span>
        <NuxtLink v-if="crumb.to" :to="crumb.to" class="bar__link">{{ crumb.label }}</NuxtLink>
        <span v-else :aria-current="i === crumbs.length - 1 ? 'page' : undefined" class="bar__current">{{ crumb.label }}</span>
      </template>
    </nav>
    <span v-if="count" class="bar__count">{{ count }}</span>
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--line);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.bar__trail {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  min-width: 0;
}

.bar__link {
  transition: color var(--dur-hover) var(--ease-out);
}

.bar__link:hover {
  color: var(--text-primary);
}

.bar__current {
  color: var(--text-secondary);
}

.bar__count {
  flex-shrink: 0;
  color: var(--accent);
}
</style>
