<template>
  <div>
    <MobileOrganizationBrandAssets v-if="isMobile" />
    <DesktopOrganizationBrandAssets v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationBrandAssets from '~/components/desktop/organization/brand-assets.vue'
import MobileOrganizationBrandAssets from '~/components/mobile/organization/brand-assets.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'BRAND ASSETS // TheAlphaOnes',
  description: 'Explore BRAND ASSETS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'BRAND ASSETS // TheAlphaOnes',
  ogDescription: 'Explore BRAND ASSETS at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
