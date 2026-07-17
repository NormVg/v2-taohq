<template>
  <div>
    <MobileLegal v-if="isMobile" />
    <DesktopLegal v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopLegal from '~/components/desktop/DesktopLegal.vue'
import MobileLegal from '~/components/mobile/MobileLegal.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'LEGAL // Tao HQ',
  description: 'Terms, conditions, and legally binding doctrines.',
  ogTitle: 'LEGAL // Tao HQ',
  ogDescription: 'Terms, conditions, and legally binding doctrines.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
