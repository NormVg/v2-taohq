<script setup lang="ts">
/** Primary navigation as tiny editorial links. The current page carries a lavender dot. */
import { CONTACT_NAV, PRIMARY_NAV } from '~/constants/site'

const items = [...PRIMARY_NAV, CONTACT_NAV]
</script>

<template>
  <nav class="nav" aria-label="Primary">
    <ul class="nav__list" role="list">
      <li v-for="item in items" :key="item.to">
        <NuxtLink v-sound="'tick'" :to="item.to" class="nav__link">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__list {
  display: flex;
  align-items: center;
}

.nav__link {
  position: relative;
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

.nav__link.router-link-active {
  color: var(--text-primary);
}

.nav__link.router-link-active::before {
  transform: scale(1);
}
</style>
