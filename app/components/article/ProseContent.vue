<script setup lang="ts">
/** Long-form markdown typography for product pages and posts. */
import type { ProductsCollectionItem, WritingCollectionItem } from '@nuxt/content'

defineProps<{ value: ProductsCollectionItem | WritingCollectionItem }>()
</script>

<template>
  <div class="prose">
    <ContentRenderer :value="value" />
  </div>
</template>

<style scoped>
.prose {
  max-width: var(--measure);
  font-size: 0.9375rem;
  line-height: 1.85;
  color: var(--text-secondary);
}

.prose :deep(strong),
.prose :deep(h2),
.prose :deep(h3) {
  color: var(--text-primary);
}

.prose :deep(> * + *) {
  margin-top: var(--space-6);
}

.prose :deep(h2) {
  margin-top: var(--space-12);
  font-size: 2rem;
  line-height: 1;
}

.prose :deep(h3) {
  margin-top: var(--space-12);
  font-size: 1.75rem;
}

.prose :deep(h2 a),
.prose :deep(h3 a) {
  color: inherit;
  text-decoration: none;
}

.prose :deep(h2 + *),
.prose :deep(h3 + *) {
  margin-top: var(--space-4);
}

.prose :deep(p strong:only-child) {
  display: block;
  font-size: var(--text-lead);
  font-weight: 500;
  line-height: 1.6;
}

.prose :deep(a) {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
  transition: text-decoration-thickness var(--dur-hover) var(--ease-out);
}

.prose :deep(a:hover) {
  text-decoration-thickness: 2px;
}

.prose :deep(ul),
.prose :deep(ol) {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-left: var(--space-6);
}

.prose :deep(ul li::marker) {
  content: '— ';
  color: var(--text-muted);
}

.prose :deep(code) {
  padding: 0.1em 0.35em;
  border-radius: var(--radius-sm);
  background: var(--surface-raised);
  font-size: 0.9em;
}

.prose :deep(pre) {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  color: var(--text-primary);
  overflow-x: auto;
  font-size: var(--text-small);
  line-height: 1.6;
}

.prose :deep(pre code) {
  padding: 0;
  background: none;
}

.prose :deep(blockquote) {
  padding-left: var(--space-6);
  border-left: 2px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.75rem;
  line-height: 1.25;
}

.prose :deep(hr) {
  border: 0;
  border-top: 1px solid var(--line);
  margin-block: var(--space-12);
}
</style>
