<template>
  <div id="app-root">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// No artificial splash screen needed. The site loads instantly.
</script>

<style>
/* Global Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
