<script setup lang="ts">
/**
 * Opening of every inner page, always the same shape:
 *   crumb bar
 *   title (pixel type), lead, actions: one left edge, stacked
 */
withDefaults(defineProps<{
  title: string
  /** Trail after "taohq", e.g. ['Products']. */
  crumbs?: string[]
  lead?: string
  /** Right side of the crumb bar, e.g. "05 products". */
  count?: string
}>(), {
  crumbs: () => [],
})
</script>

<template>
  <AppContainer>
    <header class="intro">
      <CrumbBar :crumbs="crumbs.map(label => ({ label }))" :count="count" />
      <div v-reveal class="intro__body">
        <h1 class="intro__title" data-reveal="rise-slow" style="--reveal-delay: 80ms">{{ title }}</h1>
        <div v-if="lead || $slots.default" class="intro__side">
          <p v-if="lead" class="intro__lead" data-reveal="rise" style="--reveal-delay: 220ms">{{ lead }}</p>
          <div v-if="$slots.default" class="intro__actions" data-reveal="tick" style="--reveal-delay: 340ms">
            <slot />
          </div>
        </div>
      </div>
    </header>
  </AppContainer>
</template>

<style scoped>
.intro {
  padding-bottom: var(--space-16);
}

.intro__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-top: var(--space-12);
}

.intro__title {
  font-size: var(--text-display);
  line-height: 0.9;
}

.intro__side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-6);
}

.intro__lead {
  max-width: 36rem;
  font-size: var(--text-small);
  line-height: 1.8;
  color: var(--text-secondary);
}

.intro__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
}

</style>
