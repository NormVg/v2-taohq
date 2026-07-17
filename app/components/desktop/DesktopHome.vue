<template>
  <div class="home-container">
    <HomeHero />
    <HomeStats />
    <HomeFeatures />
    <HomeProjects />
    <HomeSystemInfo />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Tao HQ | TheAlphaOnes',
  description: 'We build digital machinery. Brutalist interfaces, zero-latency APIs, and uncompromising brand identities.',
  ogTitle: 'Tao HQ | TheAlphaOnes',
  ogDescription: 'We build digital machinery. Brutalist interfaces, zero-latency APIs, and uncompromising brand identities.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* We let the layout-wrapper in default.vue handle the scrolling, 
     but we can apply scroll-snap here if we make it a full-height overflow container. */
}
</style>
