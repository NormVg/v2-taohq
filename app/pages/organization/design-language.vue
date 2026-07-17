<template>
  <div>
    <MobileOrganizationDesignLanguage v-if="isMobile" />
    <DesktopOrganizationDesignLanguage v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationDesignLanguage from '~/components/desktop/organization/design-language.vue'
import MobileOrganizationDesignLanguage from '~/components/mobile/organization/design-language.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'DESIGN LANGUAGE // taohq',
  description: 'Explore DESIGN LANGUAGE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'DESIGN LANGUAGE // taohq',
  ogDescription: 'Explore DESIGN LANGUAGE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
