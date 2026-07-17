<template>
  <div class="home-container">
    <HomeHero />
    <HomeStats />
    <HomeFeatures />
    <HomeProjects />
    <HomeSystemInfo />
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* We let the layout-wrapper in default.vue handle the scrolling, 
     but we can apply scroll-snap here if we make it a full-height overflow container. */
}
</style>
