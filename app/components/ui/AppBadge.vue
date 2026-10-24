<script setup lang="ts">
/**
 * Compact status label. Monochrome on purpose: the style (filled, outlined,
 * dashed) carries meaning instead of extra colours.
 */
withDefaults(defineProps<{
  variant?: 'solid' | 'outline' | 'dashed'
  /** Shows a softly pulsing dot, e.g. for live products. */
  pulse?: boolean
}>(), {
  variant: 'outline',
  pulse: false,
})
</script>

<template>
  <span class="badge" :class="`badge--${variant}`">
    <span v-if="pulse" class="badge__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  height: 26px;
  padding: 0 var(--space-2);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-sm);
  font-family: var(--font-display);
  font-size: 1.125rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  color: var(--text-primary);
}

.badge--solid {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--on-accent);
}

.badge--dashed {
  border-style: dashed;
}

.badge__dot {
  width: 6px;
  height: 6px;
  background: currentColor;
  animation: badge-pulse 1.6s var(--ease-in-out) infinite;
}

@keyframes badge-pulse {
  50% { opacity: 0.25; }
}

@media (prefers-reduced-motion: reduce) {
  .badge__dot {
    animation: none;
  }
}
</style>
