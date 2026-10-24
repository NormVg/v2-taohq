<script setup lang="ts">
/** The taohq mark shown large on one of the two brand grounds. */
import logoUrl from '~/assets/logo.svg?url'

defineProps<{
  tone: 'ink' | 'lavender'
  caption: string
}>()
</script>

<template>
  <figure class="tile" :class="`tile--${tone}`">
    <span class="tile__mark" :style="{ '--logo-url': `url(${logoUrl})` }" role="img" :aria-label="`taohq mark, ${caption}`" />
    <figcaption class="tile__caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.tile {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  outline: 1px solid var(--line);
}

.tile--ink {
  background: var(--ink-900);
  color: var(--lilac-200);
}

.tile--lavender {
  background: var(--lilac-200);
  color: var(--ink-900);
}

.tile__mark {
  width: 34%;
  height: 46%;
  background: currentColor;
  mask: var(--logo-url) center / contain no-repeat;
}

.tile__caption {
  position: absolute;
  left: var(--space-3);
  bottom: var(--space-3);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
}
</style>
