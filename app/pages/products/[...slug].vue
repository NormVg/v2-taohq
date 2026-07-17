<template>
  <div>
    <MobileProductsSlug v-if="isMobile" />
    <DesktopProductsSlug v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopProductsSlug from '~/components/desktop/products/[...slug].vue'
import MobileProductsSlug from '~/components/mobile/products/[...slug].vue'

const { isMobile } = useDevice()


</script>
