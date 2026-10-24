<!-- Home layout: the full-screen cabinet first, then the footer below the fold. -->
<template>
  <div>
    <SkipLink />
    <SiteHeader />
    <main id="main" class="main" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.main {
  outline: none;
}
</style>
