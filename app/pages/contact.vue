<template>
  <div>
    <MobileContact v-if="isMobile" />
    <DesktopContact v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopContact from '~/components/desktop/DesktopContact.vue'
import MobileContact from '~/components/mobile/MobileContact.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'CONTACT // TheAlphaOnes',
  description: 'Direct communication channels.',
  ogTitle: 'CONTACT // TheAlphaOnes',
  ogDescription: 'Direct communication channels.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
