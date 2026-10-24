<script setup lang="ts">
/** Turns UI sounds on/off. Icon swap uses a small spring so the state change is visible, not only audible. */
const { enabled, toggle, play } = useUISound()

function onClick() {
  toggle()
  if (enabled.value) play('toggle')
}
</script>

<template>
  <button
    type="button"
    class="sound-toggle"
    :aria-pressed="enabled"
    :title="enabled ? 'Sound on' : 'Sound off'"
    @click="onClick"
  >
    <span class="sr-only">Interface sounds</span>
    <Transition name="icon-swap" mode="out-in">
      <AppIcon :key="String(enabled)" :name="enabled ? 'sound-on' : 'sound-off'" :size="20" />
    </Transition>
  </button>
</template>

<style scoped>
.sound-toggle {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition:
    background-color var(--dur-hover) var(--ease-out),
    transform var(--dur-press) var(--ease-out);
}

.sound-toggle:hover {
  background: color-mix(in srgb, var(--text-primary) 8%, transparent);
}

.sound-toggle:active {
  transform: scale(0.94);
}

.icon-swap-enter-active {
  transition: transform var(--dur-state) var(--ease-spring), opacity var(--dur-state) var(--ease-out);
}

.icon-swap-leave-active {
  transition: transform var(--dur-exit) var(--ease-in), opacity var(--dur-exit) var(--ease-in);
}

.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
