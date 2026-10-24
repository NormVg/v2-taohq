<!-- Editorial layout for inner pages: floating header, content, lavender footer. -->
<template>
  <div class="shell">
    <SkipLink />
    <SiteHeader />
    <main id="main" class="shell__main" tabindex="-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.shell__main {
  flex: 1;
  /* Clears the floating header pills. */
  padding-top: calc(var(--header-h) + var(--space-12));
  outline: none;
}
</style>
