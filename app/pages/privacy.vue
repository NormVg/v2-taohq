<template>
  <div>
    <MobilePrivacy v-if="isMobile" />
    <DesktopPrivacy v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopPrivacy from '~/components/desktop/DesktopPrivacy.vue'
import MobilePrivacy from '~/components/mobile/MobilePrivacy.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'PRIVACY // TheAlphaOnes',
  description: 'Universal privacy policy and data doctrines.',
  ogTitle: 'PRIVACY // TheAlphaOnes',
  ogDescription: 'Universal privacy policy and data doctrines.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
