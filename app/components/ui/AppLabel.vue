<script setup lang="ts">
/** Small uppercase pixel-type label used for eyebrows, indexes and meta. */
withDefaults(defineProps<{
  as?: string
  /** Optional leading index, e.g. "01". */
  index?: string
}>(), {
  as: 'span',
})
</script>

<template>
  <component :is="as" class="label">
    <span v-if="index" class="label__index">{{ index }}</span>
    <slot />
  </component>
</template>

<style scoped>
.label {
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-ui);
  line-height: 1.4;
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.label__index {
  color: var(--accent);
}
</style>
