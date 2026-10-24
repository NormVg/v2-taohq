<script setup lang="ts">
import { SITE } from '~/constants/site'

definePageMeta({ layout: 'field' })

const { data: products, error, refresh } = await useProducts()

usePageSeo({
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
  bareTitle: true,
})
</script>

<template>
  <AppContainer v-if="error" class="home-error">
    <LoadError what="our products" @retry="refresh()" />
  </AppContainer>
  <SpecimenField v-else :products="products" />
</template>

<style scoped>
.home-error {
  padding-top: calc(var(--header-h) + var(--space-24));
  min-height: 100dvh;
}
</style>
