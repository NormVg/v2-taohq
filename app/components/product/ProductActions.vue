<script setup lang="ts">
/**
 * A product's buttons: the highest-priority outbound action as the primary
 * button (waitlist > app > GitHub > npm), the rest as outlines, and
 * optionally a link to the product page.
 */
import { productActions, type Product } from '~/utils/product'

const props = withDefaults(defineProps<{
  product: Product
  /** Also show a "Learn more" link to the product page. */
  showDetails?: boolean
  /** Limit how many outbound actions are shown. */
  max?: number
  size?: 'sm' | 'md' | 'lg'
}>(), {
  showDetails: false,
  max: 3,
  size: 'md',
})

const actions = computed(() => productActions(props.product).slice(0, props.max))
</script>

<template>
  <div class="actions">
    <AppButton
      v-for="(action, index) in actions"
      :key="action.kind"
      :href="action.href"
      :variant="index === 0 ? 'solid' : 'outline'"
      :size="size"
    >
      {{ action.label }}
    </AppButton>
    <AppButton v-if="showDetails" :to="product.path" variant="ghost" icon="arrow-right" :size="size">
      Learn more<span class="sr-only"> about {{ product.title }}</span>
    </AppButton>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
}
</style>
