<template>
  <div>
    <MobileOrganizationTeam v-if="isMobile" />
    <DesktopOrganizationTeam v-else />
  </div>
</template>

<script setup>
import { useDevice } from '#imports'
import DesktopOrganizationTeam from '~/components/desktop/organization/team.vue'
import MobileOrganizationTeam from '~/components/mobile/organization/team.vue'

const { isMobile } = useDevice()

useSeoMeta({
  title: 'TEAM // taohq',
  description: 'Explore TEAM at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TEAM // taohq',
  ogDescription: 'Explore TEAM at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
