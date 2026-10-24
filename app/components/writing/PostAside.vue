<script setup lang="ts">
/** Sticky left column of a post: back link and the post's spec sheet. */
import type { Post } from '~/composables/useWriting'
import type { Product } from '~/utils/product'

const props = defineProps<{
  post: Post
  related?: Product | null
}>()

const meta = computed(() => [
  { label: 'Published', value: formatDate(props.post.date) },
  { label: 'Reading', value: `${readingMinutes(props.post.body)} min` },
  { label: 'By', value: props.post.author ?? 'taohq' },
])
</script>

<template>
  <aside v-reveal class="aside">
    <AppLabel data-reveal="fade">
      <NuxtLink to="/writing" class="aside__back">← Writing</NuxtLink>
    </AppLabel>
    <MetaList :items="meta" data-reveal="wipe" style="--reveal-delay: 120ms" />
    <NuxtLink v-if="related" :to="related.path" class="aside__related" data-reveal="rise" style="--reveal-delay: 240ms">
      <AppLabel>About</AppLabel>
      <span class="aside__related-title">{{ related.title }}</span>
      <DitherImage :src="related.art" :alt="related.artAlt" aspect="4 / 5" fit="contain" knockout />
    </NuxtLink>
  </aside>
</template>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.aside__back:hover {
  color: var(--text-primary);
}

.aside__related {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 12rem;
}

.aside__related-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1;
  transition: color var(--dur-hover) var(--ease-out);
}

.aside__related:hover .aside__related-title {
  color: var(--accent);
}

@media (min-width: 900px) {
  .aside {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }
}
</style>
