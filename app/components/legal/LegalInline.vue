<script setup lang="ts">
/** Renders inline legal text, turning link segments into links. */
import type { LegalInline } from '~/types/legal'

defineProps<{ content: LegalInline[] }>()
</script>

<template>
  <template v-for="(segment, index) in content" :key="index">
    <template v-if="typeof segment === 'string'">{{ segment }}</template>
    <AppLink v-else :to="segment.href" class="legal-link">{{ segment.label }}</AppLink>
  </template>
</template>

<style scoped>
.legal-link {
  display: inline;
  overflow-wrap: anywhere;
}
</style>
