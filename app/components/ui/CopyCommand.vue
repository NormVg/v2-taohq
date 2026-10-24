<script setup lang="ts">
/** A shell command with a copy button and visible + announced feedback. */
const props = defineProps<{ command: string }>()

const status = ref<'idle' | 'copied' | 'failed'>('idle')
let resetTimer: number | undefined

const { play } = useUISound()

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command)
    status.value = 'copied'
    play('success')
  }
  catch {
    status.value = 'failed'
  }
  window.clearTimeout(resetTimer)
  resetTimer = window.setTimeout(() => (status.value = 'idle'), 1800)
}

onBeforeUnmount(() => window.clearTimeout(resetTimer))

const buttonLabel = computed(() => {
  if (status.value === 'copied') return 'Copied'
  if (status.value === 'failed') return 'Copy failed'
  return 'Copy'
})
</script>

<template>
  <div class="command">
    <code class="command__text"><span class="command__prompt" aria-hidden="true">$</span> {{ command }}</code>
    <button type="button" class="command__copy" :data-status="status" @click="copy">
      <AppIcon :name="status === 'copied' ? 'check' : 'copy'" :size="16" />
      <span>{{ buttonLabel }}</span>
    </button>
    <span class="sr-only" aria-live="polite">{{ status === 'idle' ? '' : buttonLabel }}</span>
  </div>
</template>

<style scoped>
.command {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 52px;
  padding: var(--space-1) var(--space-1) var(--space-1) var(--space-4);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  font-size: var(--text-small);
}

.command__text {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  font-family: var(--font-body);
}

.command__prompt {
  color: var(--text-muted);
}

.command__copy {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0 var(--space-3);
  border-radius: var(--radius-sm);
  font-size: var(--text-caption);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition:
    background-color var(--dur-hover) var(--ease-out),
    transform var(--dur-press) var(--ease-out);
}

.command__copy:hover {
  background: color-mix(in srgb, var(--text-primary) 10%, transparent);
}

.command__copy:active {
  transform: scale(0.96);
}
</style>
