<script setup lang="ts">
import { SITE } from '~/constants/site'

definePageMeta({ layout: 'field' })

const { data: products } = await useProducts()

usePageSeo({
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
  bareTitle: true,
})
</script>

<template>
  <SpecimenField :products="products" />
</template>
