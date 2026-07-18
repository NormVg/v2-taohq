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
  title: 'WRITING // taohq',
  description: 'Explore WRITING at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'WRITING // taohq',
  ogDescription: 'Explore WRITING at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
