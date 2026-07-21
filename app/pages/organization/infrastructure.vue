<template>
  <div>
    <MobileOrganizationInfrastructure v-if="isMobile" />
    <DesktopOrganizationInfrastructure v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationInfrastructure from '~/components/desktop/organization/infrastructure.vue'
import MobileOrganizationInfrastructure from '~/components/mobile/organization/infrastructure.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'INFRASTRUCTURE // TheAlphaOnes',
  description: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'INFRASTRUCTURE // TheAlphaOnes',
  ogDescription: 'Explore INFRASTRUCTURE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
