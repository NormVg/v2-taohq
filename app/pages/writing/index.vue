<template>
  <div>
    <MobileWritingIndex v-if="isMobile" />
    <DesktopWritingIndex v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopWritingIndex from '~/components/desktop/DesktopWritingIndex.vue'
import MobileWritingIndex from '~/components/mobile/MobileWritingIndex.vue'

const { isMobile } = useDevice()

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'WRITING // TheAlphaOnes',
  description: 'Explore WRITING at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'WRITING // TheAlphaOnes',
  ogDescription: 'Explore WRITING at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
