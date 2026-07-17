<template>
  <header class="app-header" v-show="$route.path !== '/'">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">
        <span class="glitch-text">taohq // 00</span>
      </NuxtLink>
      
      <nav class="nav-links">
        <NuxtLink to="/products" class="nav-link" active-class="active">[ PRODUCTS ]</NuxtLink>
        <NuxtLink to="/organization/about" class="nav-link" active-class="active">[ ORG ]</NuxtLink>
        <NuxtLink to="/writing" class="nav-link" active-class="active">[ WRITING ]</NuxtLink>
        <NuxtLink to="/careers" class="nav-link" active-class="active">[ CAREERS ]</NuxtLink>
        <NuxtLink to="/contact" class="nav-link" active-class="active">[ CONTACT ]</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: var(--bg-color);
  border-bottom: 2px solid var(--fg-color);
  padding: 1rem 2rem;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  mix-blend-mode: normal;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}

.logo {
  text-decoration: none;
  color: var(--fg-color);
  font-weight: bold;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--fg-color);
  padding: 0.25rem 0.5rem;
  transition: all 150ms cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-link:hover, .nav-link.active {
  background: var(--fg-color);
  color: var(--bg-color);
  transform: scale(1.05);
}
</style>
