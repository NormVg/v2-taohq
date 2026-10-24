<script setup lang="ts">
/** Writing index as an editorial table: № · date · title + summary · read time. Each row is one link. */
import type { Post } from '~/composables/useWriting'

defineProps<{ posts: Post[] }>()
</script>

<template>
  <ol v-reveal class="posts" role="list">
    <li
      v-for="(post, index) in posts"
      :key="post.path"
      class="post"
      data-reveal="rise"
      :style="{ '--reveal-delay': `${index * 90}ms`, '--reveal-duration': `${520 + index * 80}ms` }"
    >
      <span class="post__meta post__no">{{ String(index + 1).padStart(2, '0') }}</span>
      <time class="post__meta" :datetime="post.date">{{ formatDate(post.date) }}</time>
      <div class="post__text">
        <h2 class="post__title">
          <NuxtLink v-sound="'tick'" :to="post.path" class="post__link">{{ post.title }}</NuxtLink>
        </h2>
        <p class="post__summary">{{ post.description }}</p>
      </div>
      <span class="post__meta post__read">
        {{ readingMinutes(post.body) }} min
        <AppIcon name="arrow-right" :size="14" class="post__arrow" />
      </span>
    </li>
  </ol>
</template>

<style scoped>
.post {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-2) var(--space-6);
  padding: var(--space-6) 0;
  border-top: 1px solid var(--line);
}

.post:last-child {
  border-bottom: 1px solid var(--line);
}

.post__meta {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.post__no {
  color: var(--accent);
}

.post__text {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.post__title {
  font-size: var(--text-h3);
  transition: color var(--dur-hover) var(--ease-out), transform var(--dur-panel) var(--ease-out);
}

.post__link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.post__link:focus-visible {
  outline: none;
}

.post:has(:focus-visible) {
  outline: 2px solid var(--focus-ring);
  outline-offset: 4px;
}

.post__summary {
  max-width: 36rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.post__read {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.post__arrow {
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .post:hover .post__title {
    color: var(--accent);
    transform: translateX(var(--space-2));
  }

  .post:hover .post__arrow {
    transform: translateX(4px);
  }
}

@media (min-width: 900px) {
  .post {
    grid-template-columns: 3rem 8rem 1fr auto;
    align-items: baseline;
    gap: var(--space-8);
  }

  .post__text {
    grid-column: auto;
  }
}
</style>
