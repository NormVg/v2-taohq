<template>
  <div>
    <MobileWritingSlug v-if="isMobile" />
    <DesktopWritingSlug v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopWritingSlug from '~/components/desktop/writing/[...slug].vue'
import MobileWritingSlug from '~/components/mobile/writing/[...slug].vue'

const { isMobile } = useDevice()


</script>
