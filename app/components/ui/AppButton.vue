<script setup lang="ts">
/**
 * The one button: a pixel button. Renders a NuxtLink for `to`, an external
 * <a> for `href`, or a <button> otherwise.
 *
 * Anatomy (solid):
 *   .btn__shadow  dithered checker "print" offset behind the face
 *   .btn__face    stepped pixel corners; lifts on hover, sinks on press
 *   .btn__face::after  dither pattern that wipes across on hover
 * Each part runs on its own timing so the interaction feels physical.
 */
import type { IconName } from '~/types/ui'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconName
  type?: 'button' | 'submit'
  disabled?: boolean
}>(), {
  variant: 'solid',
  size: 'md',
  type: 'button',
  disabled: false,
})

const NuxtLink = resolveComponent('NuxtLink')

const isLink = computed(() => Boolean(props.to || props.href))
const isExternal = computed(() => Boolean(props.href && /^https?:/.test(props.href)))
const trailingIcon = computed<IconName | undefined>(() => props.icon ?? (isExternal.value ? 'arrow-up-right' : undefined))

const elementAttrs = computed(() => isLink.value
  ? {
      to: props.to ?? props.href,
      external: isExternal.value,
      target: isExternal.value ? '_blank' : undefined,
      rel: isExternal.value ? 'noopener noreferrer' : undefined,
    }
  : { type: props.type, disabled: props.disabled })
</script>

<template>
  <component
    :is="isLink ? NuxtLink : 'button'"
    v-sound
    v-bind="elementAttrs"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <span v-if="variant === 'solid'" class="btn__shadow" aria-hidden="true" />
    <span class="btn__face">
      <span class="btn__label"><slot /></span>
      <AppIcon v-if="trailingIcon" :name="trailingIcon" :size="16" class="btn__icon" :data-external="isExternal || undefined" />
    </span>
    <span v-if="isExternal" class="sr-only">(opens in a new tab)</span>
  </component>
</template>

<style scoped>
.btn {
  /* Pixel corner step size. */
  --step: 3px;
  --lift: 0px;
  --pixel-shape: polygon(
    0 var(--step), var(--step) var(--step), var(--step) 0,
    calc(100% - var(--step)) 0, calc(100% - var(--step)) var(--step), 100% var(--step),
    100% calc(100% - var(--step)), calc(100% - var(--step)) calc(100% - var(--step)), calc(100% - var(--step)) 100%,
    var(--step) 100%, var(--step) calc(100% - var(--step)), 0 calc(100% - var(--step))
  );

  position: relative;
  display: inline-flex;
  isolation: isolate;
  font-family: var(--font-body);
  font-size: var(--text-ui);
  font-weight: 500;
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  outline-offset: 6px;
}

.btn__face {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0 var(--space-4);
  clip-path: var(--pixel-shape);
  transform: translate(var(--lift), var(--lift));
  transition: transform var(--dur-hover) var(--ease-out);
}

.btn--sm .btn__face {
  min-height: 36px;
  padding: 0 var(--space-3);
}

.btn--lg .btn__face {
  min-height: 52px;
  padding: 0 var(--space-6);
}

/* Small buttons keep a 44px hit target. */
.btn--sm::before {
  content: '';
  position: absolute;
  inset: -4px;
}

/* ── solid: face over a dithered print ───────────────── */
.btn--solid .btn__face {
  background: var(--accent);
  color: var(--on-accent);
}

.btn__shadow {
  position: absolute;
  inset: 0;
  z-index: -1;
  clip-path: var(--pixel-shape);
  transform: translate(4px, 4px);
  /* 2px checkerboard: the same ordered-dither texture as the art. */
  background-image: conic-gradient(var(--accent) 25%, transparent 0 50%, var(--accent) 0 75%, transparent 0);
  background-size: 4px 4px;
  opacity: 0.7;
}

/* Dither wipe across the face on hover. */
.btn--solid .btn__face::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: conic-gradient(var(--on-accent) 25%, transparent 0 50%, var(--on-accent) 0 75%, transparent 0);
  background-size: 4px 4px;
  opacity: 0.12;
  clip-path: inset(0 100% 0 0);
  transition: clip-path var(--dur-panel) var(--ease-in-out);
}

/* ── outline: same pixel shape, hairline frame ────────── */
.btn--outline .btn__face {
  color: var(--text-primary);
  background:
    linear-gradient(var(--line-strong), var(--line-strong)) top / 100% 1px no-repeat,
    linear-gradient(var(--line-strong), var(--line-strong)) bottom / 100% 1px no-repeat,
    linear-gradient(var(--line-strong), var(--line-strong)) left / 1px 100% no-repeat,
    linear-gradient(var(--line-strong), var(--line-strong)) right / 1px 100% no-repeat;
  transition:
    transform var(--dur-hover) var(--ease-out),
    background-color var(--dur-hover) var(--ease-out);
}

/* ── ghost: just the label ───────────────────────────── */
.btn--ghost .btn__face {
  padding-inline: var(--space-2);
  color: var(--text-primary);
}

.btn__icon {
  transition: transform var(--dur-state) var(--ease-spring);
}

@media (hover: hover) {
  .btn--solid:hover {
    --lift: -2px;
  }

  .btn--solid:hover .btn__face::after {
    clip-path: inset(0 0 0 0);
  }

  .btn--outline:hover .btn__face {
    background-color: color-mix(in srgb, var(--text-primary) 8%, transparent);
  }

  .btn:hover .btn__icon {
    transform: translateX(3px);
  }

  .btn:hover .btn__icon[data-external] {
    transform: translate(2px, -2px);
  }
}

/* Press: the face sinks into its print. */
.btn--solid:active {
  --lift: 3px;
}

.btn--outline:active,
.btn--ghost:active {
  --lift: 1px;
}

.btn:active .btn__face {
  transition-duration: var(--dur-press);
}

.btn:disabled {
  opacity: 0.4;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    --lift: 0px !important;
  }

  .btn--solid .btn__face::after {
    transition: none;
  }
}
</style>
