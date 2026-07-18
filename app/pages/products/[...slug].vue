<template>
  <div>
    <MobileProductDetail v-if="isMobile" />
    <DesktopProductDetail v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopProductDetail from '~/components/desktop/DesktopProductDetail.vue'
import MobileProductDetail from '~/components/mobile/MobileProductDetail.vue'

const { isMobile } = useDevice()

// product.vue is device-aware: mobile gets MobileNav/Footer, desktop gets inverted shell
definePageMeta({ layout: 'product' })
</script>
