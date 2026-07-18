<template>
  <div id="app-root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSeoMeta, useSchemaOrg, defineWebSite, defineWebPage } from '#imports'

useSeoMeta({
  titleTemplate: '%s %separator %siteName',
  ogType: 'website',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://v2.taohq.org/og.png',
  themeColor: '#c4b5e3',
  author: 'The Alpha Ones',
  creator: 'The Alpha Ones',
  publisher: 'The Alpha Ones',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

useSchemaOrg([
  defineWebSite({
    name: 'The Alpha Ones (TAOHQ)',
    url: 'https://v2.taohq.org',
    description: 'Building thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.',
  }),
  defineWebPage()
])
</script>

<style>
/* Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
