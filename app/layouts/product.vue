<template>
  <div class="layout-wrapper">
    <main class="product-container">
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

.product-container {
  flex-grow: 1;
  padding: 8rem 4rem 4rem 4rem;
  width: 100%;
  color: var(--bg-color);
  font-family: monospace;
}
</style>
