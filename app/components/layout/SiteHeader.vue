<script setup lang="ts">
/**
 * Floating header: two small glass pills over the page, no bar.
 * Desktop: logo pill · nav pill. Mobile: logo pill · menu pill.
 */
const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
</script>

<template>
  <header class="header">
    <div class="pill pill--logo">
      <SiteLogo />
    </div>
    <SiteNav class="pill header__nav" />
    <button
      ref="menuButton"
      type="button"
      class="pill header__menu"
      aria-controls="site-menu"
      :aria-expanded="menuOpen"
      @click="menuOpen = true"
    >
      Menu
    </button>
    <SiteMenu v-model:open="menuOpen" @closed="menuButton?.focus()" />
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: var(--space-4) var(--gutter) auto;
  z-index: var(--z-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.pill {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 var(--space-2);
  border: 1px solid var(--line);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--ink-900) 62%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.pill--logo {
  padding: 0 var(--space-4) 0 var(--space-3);
}

.header__nav {
  display: none;
}

.header__menu {
  padding: 0 var(--space-4);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-primary);
  transition: transform var(--dur-press) var(--ease-out);
}

.header__menu:active {
  transform: scale(0.96);
}

@media (min-width: 900px) {
  .header__nav {
    display: inline-flex;
  }

  .header__menu {
    display: none;
  }
}
</style>
