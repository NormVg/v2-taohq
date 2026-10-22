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
  title: 'Privacy Policy',
  description: 'How TheAlphaOnes and taohq.org collect, use, store, share, and delete your data, including Google user data.',
  ogTitle: 'Privacy Policy // TheAlphaOnes',
  ogDescription: 'How TheAlphaOnes and taohq.org collect, use, store, share, and delete your data, including Google user data.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
