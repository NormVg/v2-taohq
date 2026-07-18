<template>
  <div>
    <MobileProductsIndex v-if="isMobile" />
    <DesktopProductsIndex v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopProductsIndex from '~/components/desktop/DesktopProductsIndex.vue'
import MobileProductsIndex from '~/components/mobile/MobileProductsIndex.vue'

const { isMobile } = useDevice()

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'PRODUCTS // TheAlphaOnes',
  description: 'Explore PRODUCTS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PRODUCTS // TheAlphaOnes',
  ogDescription: 'Explore PRODUCTS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
