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
  title: 'TheAlphaOnes',
  description: 'TheAlphaOnes builds thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.',
  ogTitle: 'TheAlphaOnes',
  ogDescription: 'TheAlphaOnes builds thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.',
  ogImage: 'https://taohq.org/og.png',
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
