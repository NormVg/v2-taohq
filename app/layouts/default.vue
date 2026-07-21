<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useDevice } from '#imports'
import MobileNav from '~/components/mobile/MobileNav.vue'
import MobileFooter from '~/components/mobile/MobileFooter.vue'
import AppFooter from '~/components/AppFooter.vue'

const { isMobile } = useDevice()
const route = useRoute()
const layoutWrapper = ref(null)

watch(() => route.path, async () => {
  await nextTick()
  if (!isMobile) {
    if (layoutWrapper.value) {
      layoutWrapper.value.scrollTop = 0
    }
  } else {
    window.scrollTo(0, 0)
  }
})
</script>

<template>
  <div>
    <template v-if="isMobile">
      <div class="mobile-layout-wrapper">
        <MobileNav />
        <main class="mobile-main">
          <slot />
        </main>
        <MobileFooter />
      </div>
    </template>
    
    <template v-else>
      <div class="layout-wrapper" ref="layoutWrapper">
        <slot />
        <AppFooter />
      </div>
    </template>
  </div>
</template>

<style scoped>
/* Desktop Layout */
.layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  background-color: var(--bg-color);
}

/* Mobile Layout */
.mobile-layout-wrapper {
  width: 100%;
  min-height: 100dvh;
  background-color: var(--bg-color);
  padding-top: 60px; /* Account for sticky header */
  overflow-x: hidden; /* Prevent mobile zoom-out bug */
}

.mobile-main {
  min-height: calc(100dvh - 60px);
}
</style>
