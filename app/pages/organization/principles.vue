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
  title: 'PRINCIPLES // taohq',
  description: 'Explore PRINCIPLES at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PRINCIPLES // taohq',
  ogDescription: 'Explore PRINCIPLES at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
