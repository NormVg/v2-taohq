<script setup lang="ts">
/** Label / value pairs on hairlines, like a spec sheet. */
import type { MetaItem } from '~/types/ui'

defineProps<{ items: MetaItem[] }>()
</script>

<template>
  <dl class="meta">
    <div v-for="(item, i) in items" :key="i" class="meta__row">
      <dt>{{ item.label }}</dt>
      <dd>{{ item.value }}</dd>
    </div>
  </dl>
</template>

<style scoped>
.meta {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
}

.meta__row {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-2);
  border-bottom: 1px solid var(--line);
}

.meta__row:first-child {
  border-top: 1px solid var(--line);
}

dt {
  color: var(--text-muted);
}

dd {
  text-align: right;
  color: var(--text-primary);
}
</style>
