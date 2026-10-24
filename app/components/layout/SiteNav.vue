<script setup lang="ts">
/** Primary navigation as tiny editorial links. The current page carries a lavender square. */
import { PRIMARY_NAV } from '~/constants/site'
</script>

<template>
  <nav class="nav" aria-label="Primary">
    <ul class="nav__list" role="list">
      <li v-for="item in PRIMARY_NAV" :key="item.to">
        <NuxtLink v-sound="'tick'" :to="item.to" class="nav__link">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.nav__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 40px;
  padding: 0 var(--space-3);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: color var(--dur-hover) var(--ease-out);
}

/* Square marker: grows in for the active page, peeks in on hover. */
.nav__link::before {
  content: '';
  width: 5px;
  height: 5px;
  background: var(--accent);
  transform: scale(0);
  transition: transform var(--dur-state) var(--ease-spring);
}

.nav__link:hover {
  color: var(--text-primary);
}

.nav__link:hover::before {
  transform: scale(0.6);
}

.nav__link.router-link-active {
  color: var(--text-primary);
}

.nav__link.router-link-active::before {
  transform: scale(1);
}
</style>
