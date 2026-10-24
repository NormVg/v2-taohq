<script setup lang="ts">
/**
 * Opening of every inner page, in the index style: a hairline row of tiny
 * crumbs and a counter, then the title (pixel type) beside a short lead.
 */
withDefaults(defineProps<{
  title: string
  /** Breadcrumb trail shown above, e.g. ['Products']. "taohq" is prepended. */
  crumbs?: string[]
  lead?: string
  /** Right-hand counter, e.g. "05 products". */
  count?: string
}>(), {
  crumbs: () => [],
})
</script>

<template>
  <AppContainer>
    <header v-reveal class="intro">
      <div class="intro__bar" data-reveal="wipe">
        <span class="intro__crumbs">
          <NuxtLink to="/" class="intro__crumb">taohq</NuxtLink>
          <template v-for="crumb in crumbs" :key="crumb">
            <span aria-hidden="true">/</span>
            <span>{{ crumb }}</span>
          </template>
        </span>
        <span v-if="count">{{ count }}</span>
      </div>
      <div class="intro__body">
        <h1 class="intro__title" data-reveal="rise-slow" style="--reveal-delay: 80ms">{{ title }}</h1>
        <div class="intro__side">
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
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
  padding-bottom: var(--space-16);
}

.intro__bar {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--line);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.intro__crumbs {
  display: flex;
  gap: var(--space-2);
}

.intro__crumb:hover {
  color: var(--text-primary);
}

.intro__body {
  display: grid;
  gap: var(--space-8);
}

.intro__title {
  font-size: var(--text-display);
  line-height: 0.9;
}

.intro__side {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 32rem;
}

.intro__lead {
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

@media (min-width: 900px) {
  .intro__body {
    grid-template-columns: 7fr 5fr;
    align-items: end;
  }
}
</style>
