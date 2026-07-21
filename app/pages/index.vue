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
  title: 'TheAlphaOnes — Digital Infrastructure & Software Design',
  description: 'TheAlphaOnes builds thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.',
  ogTitle: 'TheAlphaOnes — Digital Infrastructure & Software Design',
  ogDescription: 'TheAlphaOnes builds thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
