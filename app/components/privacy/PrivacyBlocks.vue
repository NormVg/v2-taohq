<script setup lang="ts">
/**
 * Renders the paragraphs and lists of one privacy policy section.
 * Typography (font, size, case) is inherited from the parent view so the
 * desktop and mobile layouts keep their own voice.
 */
import type { PolicyBlock } from '~/constants/privacy-policy'
import PrivacyInline from '~/components/privacy/PrivacyInline.vue'

defineProps<{ blocks: PolicyBlock[] }>()
</script>

<template>
  <div class="policy-blocks">
    <template v-for="(block, blockIndex) in blocks" :key="blockIndex">
      <p v-if="block.kind === 'paragraph'">
        <PrivacyInline :content="block.content" />
      </p>
      <ul v-else class="policy-list">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          <PrivacyInline :content="item" />
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.policy-blocks {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.policy-blocks p {
  margin: 0;
}
.policy-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}
.policy-list li {
  position: relative;
  padding-left: 1.5em;
}
.policy-list li::before {
  content: '//';
  position: absolute;
  left: 0;
  font-family: 'VT323', monospace;
  opacity: 0.5;
}
</style>
