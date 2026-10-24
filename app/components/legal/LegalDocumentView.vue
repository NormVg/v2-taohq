<script setup lang="ts">
/** A legal document as editorial rows: one numbered row per section. */
import type { LegalDocument } from '~/types/legal'

defineProps<{ document: LegalDocument }>()
</script>

<template>
  <div>
    <PageIntro :title="document.title" :crumbs="['Legal']" :lead="document.summary" :count="`Updated ${document.lastUpdated}`" />
    <EditorialRow
      v-for="(section, index) in document.sections"
      :id="section.id"
      :key="section.id"
      :label="section.title"
      :index="String(index + 1).padStart(2, '0')"
    >
      <div class="section">
        <template v-for="(block, blockIndex) in section.blocks" :key="blockIndex">
          <p v-if="block.kind === 'paragraph'"><LegalInline :content="block.content" /></p>
          <ul v-else class="section__list" role="list">
            <li v-for="(item, itemIndex) in block.items" :key="itemIndex"><LegalInline :content="item" /></li>
          </ul>
        </template>
      </div>
    </EditorialRow>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: var(--measure);
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.section__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.section__list li {
  position: relative;
  padding-left: var(--space-6);
}

.section__list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
}
</style>
