<template>
  <div class="layout-wrapper">
    <main class="content-container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: var(--fg-color);
  display: flex;
  flex-direction: column;
}

.content-container {
  flex-grow: 1;
  padding: 8rem 2rem 4rem 2rem; /* Give room for the fixed AppHeader */
  max-width: 800px;
  margin: 0 auto;
  color: var(--bg-color);
  font-family: monospace;
}
</style>
