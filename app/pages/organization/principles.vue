<template>
  <div>
    <MobileOrganizationPrinciples v-if="isMobile" />
    <DesktopOrganizationPrinciples v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationPrinciples from '~/components/desktop/organization/principles.vue'
import MobileOrganizationPrinciples from '~/components/mobile/organization/principles.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'PRINCIPLES // TheAlphaOnes',
  description: 'Explore PRINCIPLES at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PRINCIPLES // TheAlphaOnes',
  ogDescription: 'Explore PRINCIPLES at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
