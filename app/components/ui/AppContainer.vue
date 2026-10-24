<script setup lang="ts">
/** Horizontal page frame: max width + responsive gutters. */
withDefaults(defineProps<{
  as?: string
  /** `narrow` caps width at a comfortable reading measure. */
  size?: 'default' | 'narrow'
}>(), {
  as: 'div',
  size: 'default',
})
</script>

<template>
  <component :is="as" class="container" :class="`container--${size}`">
    <slot />
  </component>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: calc(var(--container-max) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: max(var(--gutter), env(safe-area-inset-left));
}

.container--narrow {
  max-width: calc(var(--measure) + var(--gutter) * 2);
}
</style>
