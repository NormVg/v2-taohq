<template>
  <div>
    <MobileOrganizationOpenSource v-if="isMobile" />
    <DesktopOrganizationOpenSource v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationOpenSource from '~/components/desktop/organization/open-source.vue'
import MobileOrganizationOpenSource from '~/components/mobile/organization/open-source.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'OPEN SOURCE // TheAlphaOnes',
  description: 'Explore OPEN SOURCE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'OPEN SOURCE // TheAlphaOnes',
  ogDescription: 'Explore OPEN SOURCE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
