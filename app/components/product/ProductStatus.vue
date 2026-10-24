<script setup lang="ts">
/** Maps a product status to the right badge style and label. */
import { productStatusLabel, type ProductStatus } from '~/utils/product'

const props = defineProps<{ status: ProductStatus }>()

const variant = computed(() => {
  if (props.status === 'live') return 'solid'
  if (props.status === 'in-development') return 'dashed'
  return 'outline'
})
</script>

<template>
  <AppBadge :variant="variant" :pulse="status === 'live' || status === 'waitlist'">
    {{ productStatusLabel(status) }}
  </AppBadge>
</template>
