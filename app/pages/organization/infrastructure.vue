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
  title: 'INFRASTRUCTURE // taohq',
  description: 'Explore INFRASTRUCTURE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'INFRASTRUCTURE // taohq',
  ogDescription: 'Explore INFRASTRUCTURE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
