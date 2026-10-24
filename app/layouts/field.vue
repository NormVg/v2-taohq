<!-- Full-bleed layout for the home cabinet: floating header, no footer. -->
<template>
  <div>
    <SkipLink />
    <SiteHeader />
    <main id="main" class="main" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main {
  outline: none;
}
</style>
