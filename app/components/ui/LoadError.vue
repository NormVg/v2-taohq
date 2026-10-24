<script setup lang="ts">
/** Shown when data fails to load: a plain explanation and a retry, never a fake empty state. */
withDefaults(defineProps<{ what?: string }>(), { what: 'this' })

const emit = defineEmits<{ retry: [] }>()
</script>

<template>
  <div class="error" role="alert">
    <p class="error__text">Unable to load {{ what }}. Please try again.</p>
    <AppButton variant="outline" size="sm" @click="emit('retry')">Try again</AppButton>
  </div>
</template>

<style scoped>
.error {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-6);
  padding-block: var(--space-8);
  border-top: 1px solid var(--line);
}

.error__text {
  font-size: var(--text-small);
  color: var(--text-secondary);
}
</style>
