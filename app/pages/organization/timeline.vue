<template>
  <div>
    <MobileOrganizationTimeline v-if="isMobile" />
    <DesktopOrganizationTimeline v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationTimeline from '~/components/desktop/organization/timeline.vue'
import MobileOrganizationTimeline from '~/components/mobile/organization/timeline.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'TIMELINE // TheAlphaOnes',
  description: 'Explore TIMELINE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TIMELINE // TheAlphaOnes',
  ogDescription: 'Explore TIMELINE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
