<script setup lang="ts">
/**
 * Small inline icon set. Square line caps and joins keep the strokes crisp
 * next to the pixel display type. Decorative by default (aria-hidden);
 * pass `label` when the icon is the only content of a control.
 */
import type { IconName } from '~/types/ui'

const props = withDefaults(defineProps<{
  name: IconName
  size?: number
  label?: string
}>(), {
  size: 20,
})

const PATHS: Record<IconName, string[]> = {
  'arrow-right': ['M4 12h15', 'M13 6l6 6-6 6'],
  'arrow-up-right': ['M7 17L17 7', 'M8 7h9v9'],
  'menu': ['M3 7h18', 'M3 12h18', 'M3 17h18'],
  'close': ['M5 5l14 14', 'M19 5L5 19'],
  'sound-on': ['M4 9v6h4l5 4V5L8 9H4z', 'M16 9.5a3.5 3.5 0 010 5', 'M18.5 7a7 7 0 010 10'],
  'sound-off': ['M4 9v6h4l5 4V5L8 9H4z', 'M16 9.5l5 5', 'M21 9.5l-5 5'],
  'copy': ['M8 8h12v12H8z', 'M4 16V4h12'],
  'check': ['M4 12.5l5 5L20 6.5'],
  'github': ['M9 19c-4 1.5-4-2-6-2.5', 'M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6.2 0C6.6 3.8 5.6 4.1 5.6 4.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.2 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22'],
  'x': ['M4 4l16 16', 'M20 4L4 20'],
}

const paths = computed(() => PATHS[props.name])
</script>

<template>
  <svg
    class="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="square"
    stroke-linejoin="miter"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    focusable="false"
  >
    <path v-for="d in paths" :key="d" :d="d" />
  </svg>
</template>

<style scoped>
.icon {
  flex-shrink: 0;
}
</style>
