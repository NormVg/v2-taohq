<template>
  <a href="#main" class="skip-link">Skip to content</a>
</template>

<style scoped>
.skip-link {
  position: fixed;
  top: var(--space-2);
  left: var(--space-2);
  z-index: calc(var(--z-menu) + 1);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  background: var(--accent);
  color: var(--on-accent);
  transform: translateY(-200%);
  transition: transform var(--dur-state) var(--ease-out);
}

.skip-link:focus-visible {
  transform: none;
}
</style>
