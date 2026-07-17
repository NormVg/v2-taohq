<template>
  <div>
    <MobileOrganizationAbout v-if="isMobile" />
    <DesktopOrganizationAbout v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationAbout from '~/components/desktop/organization/about.vue'
import MobileOrganizationAbout from '~/components/mobile/organization/about.vue'

const { isMobile } = useDevice()


</script>
