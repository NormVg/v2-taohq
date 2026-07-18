<template>
  <div>
    <MobileOrganizationTechnology v-if="isMobile" />
    <DesktopOrganizationTechnology v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationTechnology from '~/components/desktop/organization/technology.vue'
import MobileOrganizationTechnology from '~/components/mobile/organization/technology.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'TECHNOLOGY // TheAlphaOnes',
  description: 'Explore TECHNOLOGY at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TECHNOLOGY // TheAlphaOnes',
  ogDescription: 'Explore TECHNOLOGY at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
