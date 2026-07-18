<template>
  <div>
    <MobileHome v-if="isMobile" />
    <DesktopHome v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopHome from '~/components/desktop/DesktopHome.vue'
import MobileHome from '~/components/mobile/MobileHome.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'TheAlphaOnes',
  description: 'We build digital machinery. Brutalist interfaces, zero-latency APIs, and uncompromising brand identities.',
  ogTitle: 'TheAlphaOnes',
  ogDescription: 'We build digital machinery. Brutalist interfaces, zero-latency APIs, and uncompromising brand identities.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
