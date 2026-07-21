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
  title: 'TEAM // TheAlphaOnes',
  description: 'Explore TEAM at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TEAM // TheAlphaOnes',
  ogDescription: 'Explore TEAM at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>
