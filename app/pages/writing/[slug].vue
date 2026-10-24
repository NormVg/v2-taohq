<script setup lang="ts">
import { SITE } from '~/constants/site'

const route = useRoute()
const post = await useWritingPost(route.path)
const { data: related } = await useProductBySlug(post.value.product)

usePageSeo(() => ({
  title: post.value.title,
  description: post.value.description,
  type: 'article',
}))

useSchemaOrg([
  defineArticle({
    headline: post.value.title,
    description: post.value.description,
    datePublished: post.value.date,
    author: { name: SITE.name, url: SITE.url },
  }),
])
</script>

<template>
  <AppContainer>
    <article class="post">
      <PostAside :post="post" :related="related" />
      <div v-reveal class="post__main">
        <h1 class="post__title" data-reveal="rise-slow">{{ post.title }}</h1>
        <p class="post__summary" data-reveal="rise" style="--reveal-delay: 160ms">{{ post.description }}</p>
        <ProseContent :value="post" data-reveal="fade" style="--reveal-delay: 280ms" />
      </div>
    </article>
  </AppContainer>
</template>

<style scoped>
.post {
  display: grid;
  gap: var(--space-12);
  padding-bottom: var(--space-24);
}

.post__main {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  min-width: 0;
}

.post__title {
  font-size: var(--text-h1);
}

.post__summary {
  max-width: var(--measure);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--line);
  font-family: var(--font-script);
  font-size: 2rem;
  line-height: 1.1;
  color: var(--accent);
}

@media (min-width: 900px) {
  .post {
    grid-template-columns: 3fr 9fr;
    gap: var(--space-8);
  }
}
</style>
