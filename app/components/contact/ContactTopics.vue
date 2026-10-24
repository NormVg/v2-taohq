<script setup lang="ts">
/** What to write to us about. Each row is one mailto link with the subject pre-filled. */
import type { ContactTopic } from '~/constants/site'

defineProps<{ topics: ContactTopic[] }>()
</script>

<template>
  <ul class="topics" role="list">
    <li v-for="topic in topics" :key="topic.id">
      <a v-sound :href="mailtoHref(topic.subject)" class="topic">
        <span class="topic__label">{{ topic.label }}</span>
        <span class="topic__description">{{ topic.description }}</span>
        <AppIcon name="arrow-up-right" :size="18" class="topic__icon" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.topics {
  border-top: 1px solid var(--line);
}

.topic {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-1) var(--space-6);
  padding-block: var(--space-4);
  border-bottom: 1px solid var(--line);
}

.topic__label {
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1;
  transition: color var(--dur-hover) var(--ease-out), transform var(--dur-panel) var(--ease-out);
}

.topic__description {
  grid-column: 1;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.topic__icon {
  grid-row: 1 / span 2;
  grid-column: 2;
  align-self: center;
  color: var(--accent);
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .topic:hover .topic__label {
    color: var(--accent);
    transform: translateX(var(--space-2));
  }

  .topic:hover .topic__icon {
    transform: translate(3px, -3px);
  }
}

@media (min-width: 900px) {
  .topic {
    grid-template-columns: 16rem 1fr auto;
    align-items: baseline;
  }

  .topic__description {
    grid-column: 2;
  }

  .topic__icon {
    grid-row: 1;
    grid-column: 3;
  }
}
</style>
