<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const layoutWrapper = ref(null)

watch(() => route.path, async () => {
  await nextTick()
  if (layoutWrapper.value) {
    layoutWrapper.value.scrollTop = 0
  }
})
</script>

<template>
  <div class="layout-wrapper" ref="layoutWrapper">
    <slot />
    <AppFooter />
  </div>
</template>

<style scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  background-color: var(--fg-color);
}
</style>
