<template>
  <div>
    <MobileCareers v-if="isMobile" />
    <DesktopCareers v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopCareers from '~/components/desktop/DesktopCareers.vue'
import MobileCareers from '~/components/mobile/MobileCareers.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'CAREERS // Tao HQ',
  description: 'Join us. Build what is necessary. Discard what is not.',
  ogTitle: 'CAREERS // Tao HQ',
  ogDescription: 'Join us. Build what is necessary. Discard what is not.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
