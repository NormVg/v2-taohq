<template>
  <div>
    <MobileWritingDetail v-if="isMobile" />
    <DesktopWritingDetail v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopWritingDetail from '~/components/desktop/DesktopWritingDetail.vue'
import MobileWritingDetail from '~/components/mobile/MobileWritingDetail.vue'

const { isMobile } = useDevice()

// blog.vue is device-aware (mobile nav/footer, desktop inverted shell)
definePageMeta({ layout: 'blog' })
</script>
