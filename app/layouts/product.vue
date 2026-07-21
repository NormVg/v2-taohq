<script setup>
import { watch, nextTick } from 'vue'
import { useDevice } from '#imports'
import MobileNav from '~/components/mobile/MobileNav.vue'
import MobileFooter from '~/components/mobile/MobileFooter.vue'
import AppFooter from '~/components/AppFooter.vue'

const { isMobile } = useDevice()
const route = useRoute()

watch(() => route.path, async () => {
  await nextTick()
  if (isMobile) {
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 0)
  }
})
</script>

<template>
  <div v-if="isMobile" class="mobile-layout-wrapper">
    <MobileNav />
    <main class="mobile-main">
      <slot />
    </main>
    <MobileFooter />
  </div>
  <div v-else class="layout-wrapper">
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
  padding: 4rem;
  width: 100%;
  color: var(--bg-color);
  font-family: monospace;
}

.mobile-layout-wrapper {
  width: 100%;
  min-height: 100dvh;
  background-color: var(--fg-color);
  padding-top: 60px;
  overflow-x: hidden;
}

.mobile-main {
  min-height: calc(100dvh - 60px);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
