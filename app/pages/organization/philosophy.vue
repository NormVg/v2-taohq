<template>
  <div>
    <MobileOrganizationPhilosophy v-if="isMobile" />
    <DesktopOrganizationPhilosophy v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationPhilosophy from '~/components/desktop/organization/philosophy.vue'
import MobileOrganizationPhilosophy from '~/components/mobile/organization/philosophy.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'PHILOSOPHY // TheAlphaOnes',
  description: 'Explore PHILOSOPHY at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PHILOSOPHY // TheAlphaOnes',
  ogDescription: 'Explore PHILOSOPHY at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
