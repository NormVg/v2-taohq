<script setup lang="ts">
const { data: products, error, refresh } = await useProducts()

usePageSeo({
  title: 'Products',
  description: 'Everything taohq is building: Fold, Bottles, Bubbles.space, Bubbles.mail and web-have-sounds.',
})
</script>

<template>
  <div>
    <PageIntro
      title="Products"
      :crumbs="['Products']"
      :count="error ? undefined : `${String(products.length).padStart(2, '0')} products`"
      lead="A small lineup, each made with the same care. Some are live, some are on the way."
    />
    <AppContainer>
      <LoadError v-if="error" what="products" @retry="refresh()" />
      <ProductIndexRow
        v-for="(product, i) in products"
        :key="product.path"
        :product="product"
        :index="i + 1"
        :total="products.length"
        :priority="i === 0"
      />
    </AppContainer>
  </div>
</template>
