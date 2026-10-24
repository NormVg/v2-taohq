<script setup lang="ts">
const { data: posts, error, refresh } = await useWritingList()

usePageSeo({
  title: 'Writing',
  description: 'Notes from taohq on the products we build and the ideas behind them.',
})
</script>

<template>
  <div>
    <PageIntro
      title="Writing"
      :crumbs="['Writing']"
      :count="error ? undefined : `${String(posts.length).padStart(2, '0')} posts`"
      lead="What we're building, why, and what we learn along the way."
    />
    <AppContainer class="list">
      <LoadError v-if="error" what="posts" @retry="refresh()" />
      <PostList v-else-if="posts.length" :posts="posts" />
      <p v-else class="empty">Nothing published yet. Check back soon.</p>
    </AppContainer>
  </div>
</template>

<style scoped>
.list {
  padding-bottom: var(--space-24);
}

.empty {
  color: var(--text-secondary);
}
</style>
