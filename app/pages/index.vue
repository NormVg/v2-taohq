<template>
  <main class="page-container">
    <HomeHero />
    <HomeStats />
    <HomeFeatures />
    <HomeProjects />
    <HomeSystemInfo />
    <AppFooter />
  </main>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  background-color: var(--fg-color);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}
</style>
