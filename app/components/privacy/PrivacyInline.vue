<script setup lang="ts">
/** Renders inline policy text, turning link segments into anchors. */
import type { PolicyInline } from '~/constants/privacy-policy'

defineProps<{ content: PolicyInline[] }>()

const isExternal = (href: string) => href.startsWith('http')
</script>

<template>
  <template v-for="(segment, index) in content" :key="index">
    <template v-if="typeof segment === 'string'">{{ segment }}</template>
    <a
      v-else
      :href="segment.href"
      class="policy-link"
      :target="isExternal(segment.href) ? '_blank' : undefined"
      :rel="isExternal(segment.href) ? 'noopener noreferrer' : undefined"
    >{{ segment.label }}</a>
  </template>
</template>

<style scoped>
.policy-link {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  overflow-wrap: anywhere;
}
.policy-link:hover {
  opacity: 0.7;
}
.policy-link:focus-visible {
  outline: 2px dashed currentColor;
  outline-offset: 2px;
}
</style>
