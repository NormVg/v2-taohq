<script setup lang="ts">
/**
 * Editorial top row, no chrome: three columns of tiny type on the page grid.
 *   wordmark · primary links · contact
 * A soft ink fade sits behind it so it stays legible over scrolling content.
 * Phones: wordmark · Menu.
 */
import { CONTACT_NAV } from '~/constants/site'

const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
</script>

<template>
  <header class="header">
    <AppContainer class="header__row">
      <SiteLogo />
      <SiteNav class="header__nav" />
      <NuxtLink v-sound="'tick'" :to="CONTACT_NAV.to" class="header__contact">
        {{ CONTACT_NAV.label }} <span aria-hidden="true">↗</span>
      </NuxtLink>
      <button
        ref="menuButton"
        type="button"
        class="header__menu"
        aria-controls="site-menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = true"
      >
        Menu
      </button>
    </AppContainer>
    <SiteMenu v-model:open="menuOpen" @closed="menuButton?.focus()" />
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: var(--z-header);
  padding-block: var(--space-4) var(--space-12);
  /* Solid behind the text, then a short fade so content slips underneath. */
  background: linear-gradient(
    to bottom,
    var(--surface-page) 0%,
    var(--surface-page) 52%,
    transparent 100%
  );
  pointer-events: none;
}

.header__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.header__row > * {
  pointer-events: auto;
}

.header__contact,
.header__menu {
  font-size: var(--text-ui);
  line-height: 1.5;
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
}

.header__nav {
  display: none;
}

.header__contact {
  display: none;
  min-height: 40px;
  align-items: center;
  gap: var(--space-1);
  color: var(--text-primary);
  transition: color var(--dur-hover) var(--ease-out);
}

.header__contact:hover,
.header__contact.router-link-active {
  color: var(--accent);
}

.header__menu {
  min-height: 44px;
  padding-left: var(--space-4);
  color: var(--text-primary);
}

/* Desktop: logo · links · contact on a 3 / 7 / 2 grid. */
@media (min-width: 900px) {
  .header__row {
    display: grid;
    grid-template-columns: 3fr 7fr 2fr;
    align-items: center;
    gap: var(--space-8);
  }


  .header__nav {
    display: block;
    margin-left: calc(var(--space-3) * -1);
  }

  .header__contact {
    display: inline-flex;
    justify-self: end;
  }

  .header__menu {
    display: none;
  }
}
</style>
