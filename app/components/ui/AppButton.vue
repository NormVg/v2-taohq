<script setup lang="ts">
/**
 * The one button. Renders a NuxtLink for `to`, an external <a> for `href`,
 * or a <button> otherwise. Every call to action on the site goes through here.
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

const isExternal = computed(() => Boolean(props.href && /^https?:/.test(props.href)))
const trailingIcon = computed<IconName | undefined>(() => props.icon ?? (isExternal.value ? 'arrow-up-right' : undefined))
</script>

<template>
  <NuxtLink
    v-if="to || href"
    v-sound
    :to="to ?? href"
    :external="isExternal"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <span class="btn__label"><slot /></span>
    <AppIcon v-if="trailingIcon" :name="trailingIcon" :size="18" class="btn__icon" :data-external="isExternal || undefined" />
    <span v-if="isExternal" class="sr-only">(opens in a new tab)</span>
  </NuxtLink>
  <button
    v-else
    v-sound
    :type="type"
    :disabled="disabled"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <span class="btn__label"><slot /></span>
    <AppIcon v-if="trailingIcon" :name="trailingIcon" :size="18" class="btn__icon" />
  </button>
</template>

<style scoped>
.btn {
  --btn-bg: transparent;
  --btn-fg: var(--text-primary);
  --btn-border: transparent;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0 var(--space-4);
  border: 1px solid var(--btn-border);
  border-radius: var(--radius-md);
  background: var(--btn-bg);
  color: var(--btn-fg);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: 0.01em;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background-color var(--dur-hover) var(--ease-out),
    border-color var(--dur-hover) var(--ease-out),
    color var(--dur-hover) var(--ease-out),
    transform var(--dur-press) var(--ease-out);
}

.btn--sm {
  min-height: 36px;
  padding: 0 var(--space-4);
  border-radius: var(--radius-sm);
}

/* Keeps a 44px hit target while the button itself stays compact. */
.btn--sm::after {
  content: '';
  position: absolute;
  inset: -4px;
}

.btn--lg {
  min-height: 52px;
  padding: 0 var(--space-6);
  font-size: var(--text-body);
}

.btn--solid {
  --btn-bg: var(--accent);
  --btn-fg: var(--on-accent);
}

.btn--outline {
  --btn-border: var(--line-strong);
}

.btn--ghost {
  padding-inline: var(--space-2);
}

@media (hover: hover) {
  .btn--solid:hover {
    --btn-bg: var(--accent-hover);
  }

  .btn--outline:hover {
    --btn-border: var(--text-primary);
    --btn-bg: color-mix(in srgb, var(--text-primary) 6%, transparent);
  }

  .btn--ghost:hover {
    --btn-bg: color-mix(in srgb, var(--text-primary) 8%, transparent);
  }

  .btn:hover .btn__icon {
    transform: translateX(2px);
  }

  .btn:hover .btn__icon[data-external] {
    transform: translate(2px, -2px);
  }
}

.btn:active:not(:disabled) {
  transform: scale(0.96);
}

.btn:disabled {
  opacity: 0.4;
  pointer-events: none;
}

.btn__icon {
  transition: transform var(--dur-state) var(--ease-spring);
}
</style>
