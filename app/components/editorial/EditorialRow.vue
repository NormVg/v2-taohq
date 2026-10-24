<script setup lang="ts">
/**
 * The building block of every inner page: a hairline, a tiny label column
 * on the left (optionally sticky), and the content on the right.
 */
withDefaults(defineProps<{
  label: string
  /** Leading number, e.g. "01". */
  index?: string
  /** Keep the label pinned while long content scrolls past. */
  sticky?: boolean
  id?: string
}>(), {
  sticky: false,
})
</script>

<template>
  <AppContainer>
    <section :id="id" v-reveal class="row" :aria-label="label">
      <div class="row__label" :class="{ 'row__label--sticky': sticky }" data-reveal="fade">
        <AppLabel :index="index">{{ label }}</AppLabel>
      </div>
      <div class="row__content" data-reveal="rise" style="--reveal-delay: 90ms">
        <slot />
      </div>
    </section>
  </AppContainer>
</template>

<style scoped>
.row {
  display: grid;
  gap: var(--space-6);
  padding-block: var(--space-8) var(--space-16);
  border-top: 1px solid var(--line);
}

.row__content {
  min-width: 0;
}

@media (min-width: 900px) {
  .row {
    grid-template-columns: 3fr 9fr;
    gap: var(--space-8);
  }

  .row__label--sticky {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    align-self: start;
  }
}
</style>
