<script setup lang="ts">
/** Inline text link with an underline that draws in on hover. */
import type { IconName } from '~/types/ui'

const props = defineProps<{
  to: string
  icon?: IconName
}>()

const isExternal = computed(() => /^(https?:|mailto:)/.test(props.to))
const opensNewTab = computed(() => props.to.startsWith('http'))
</script>

<template>
  <NuxtLink
    :to="to"
    :external="isExternal"
    :target="opensNewTab ? '_blank' : undefined"
    :rel="opensNewTab ? 'noopener noreferrer' : undefined"
    class="link"
  >
    <span class="link__text"><slot /></span>
    <AppIcon v-if="icon" :name="icon" :size="16" class="link__icon" />
    <span v-if="opensNewTab" class="sr-only">(opens in a new tab)</span>
  </NuxtLink>
</template>

<style scoped>
.link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-weight: 500;
  color: var(--text-primary);
}

.link__text {
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--dur-state) var(--ease-out);
}

.link__icon {
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .link:hover .link__text {
    background-size: 0% 1px;
    background-position: 100% 100%;
  }

  .link:hover .link__icon {
    transform: translateX(3px);
  }
}
</style>
