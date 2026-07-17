<template>
  <div>
    <MobileStudio v-if="isMobile" />
    <DesktopStudio v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopStudio from '~/components/desktop/DesktopStudio.vue'
import MobileStudio from '~/components/mobile/MobileStudio.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'STUDIO // Tao HQ',
  description: 'We partner with ambitious organizations to design, architect, and deploy uncompromising interfaces and brutalist systems.',
  ogTitle: 'STUDIO // Tao HQ',
  ogDescription: 'We partner with ambitious organizations to design, architect, and deploy uncompromising interfaces and brutalist systems.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
