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
  title: 'CAREERS // TheAlphaOnes',
  description: 'Join us. Build what is necessary. Discard what is not.',
  ogTitle: 'CAREERS // TheAlphaOnes',
  ogDescription: 'Join us. Build what is necessary. Discard what is not.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
