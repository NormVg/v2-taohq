<script setup lang="ts">
import { SITE } from '~/constants/site'

const route = useRoute()
const product = await useProduct(route.path)
const { data: products } = await useProducts()

const position = computed(() => products.value.findIndex(item => item.path === product.value.path))
const next = computed(() => products.value[(position.value + 1) % products.value.length])

usePageSeo(() => ({
  title: `${product.value.title}: ${product.value.tagline}`,
  description: product.value.description,
}))

useSchemaOrg([
  defineSoftwareApp({
    name: product.value.title,
    description: product.value.description,
    applicationCategory: product.value.kind === 'library' ? 'DeveloperApplication' : 'LifestyleApplication',
    operatingSystem: product.value.platforms?.join(', '),
    url: `${SITE.url}${product.value.path}`,
  }),
])
</script>

<template>
  <AppContainer>
    <div class="dossier">
      <ProductAside :product="product" :index="position + 1" :total="products.length" />
      <div class="dossier__main">
        <DitherImage class="dossier__art" :src="product.art" :alt="product.artAlt" aspect="4 / 5" priority />
        <ProseContent :value="product" />
      </div>
    </div>
    <NextProduct v-if="next && next.path !== product.path" :product="next" />
  </AppContainer>
</template>

<style scoped>
.dossier {
  display: grid;
  gap: var(--space-12);
  padding-bottom: var(--space-24);
}

.dossier__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  min-width: 0;
}

@media (min-width: 900px) {
  .dossier {
    grid-template-columns: 5fr 7fr;
    gap: var(--space-16);
  }
}
</style>
