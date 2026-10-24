<script setup lang="ts">
/**
 * Product status as a tiny label with a square marker:
 * solid + pulsing for things you can act on now (live, waitlist),
 * hollow for everything else.
 */
import { productStatusLabel, type ProductStatus } from '~/utils/product'

const props = defineProps<{ status: ProductStatus }>()

const active = computed(() => props.status === 'live' || props.status === 'waitlist')
</script>

<template>
  <span class="status" :class="{ 'status--active': active }">
    <span class="status__mark" aria-hidden="true" />
    {{ productStatusLabel(status) }}
  </span>
</template>

<style scoped>
.status {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--text-secondary);
}

.status__mark {
  width: 7px;
  height: 7px;
  border: 1px solid var(--accent);
}

.status--active {
  color: var(--text-primary);
}

.status--active .status__mark {
  background: var(--accent);
  animation: status-pulse 1.8s var(--ease-in-out) infinite;
}

@keyframes status-pulse {
  50% { opacity: 0.3; }
}

@media (prefers-reduced-motion: reduce) {
  .status--active .status__mark {
    animation: none;
  }
}
</style>
