<script setup lang="ts">
/**
 * Full-screen mobile menu, teleported to <body>.
 * Esc closes, focus moves into the panel on open and back to the trigger
 * on close, background scroll is locked, and route changes close it.
 */
import { CONTACT_NAV, PRIMARY_NAV, SOCIAL_LINKS } from '~/constants/site'

const open = defineModel<boolean>('open', { required: true })
const emit = defineEmits<{ closed: [] }>()

const panel = ref<HTMLElement | null>(null)
const route = useRoute()
const { lock, unlock } = useSmoothScroll()
const items = [...PRIMARY_NAV, CONTACT_NAV]

function close() {
  open.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(open, async (isOpen) => {
  if (isOpen) lock()
  else unlock()
  if (isOpen) {
    await nextTick()
    panel.value?.querySelector<HTMLElement>('a')?.focus()
  }
  else {
    emit('closed')
  }
})

watch(() => route.fullPath, close)

onBeforeUnmount(() => {
  unlock()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="menu">
      <div
        v-if="open"
        id="site-menu"
        ref="panel"
        class="menu"
        data-tone="accent"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-lenis-prevent
        @keydown="onKeydown"
      >
        <div class="menu__bar">
          <SiteLogo />
          <button type="button" class="menu__close" @click="close">
            <AppIcon name="close" :size="24" label="Close menu" />
          </button>
        </div>

        <nav class="menu__nav" aria-label="Primary">
          <ul role="list">
            <li v-for="(item, index) in items" :key="item.to" class="menu__item" :style="{ '--i': index }">
              <NuxtLink v-sound="'tick'" :to="item.to" class="menu__link">
                <span class="menu__index">0{{ index + 1 }}</span>
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="menu__foot">
          <div class="menu__social">
            <AppLink v-for="link in SOCIAL_LINKS" :key="link.id" :to="link.href">{{ link.label }}</AppLink>
          </div>
          <SoundToggle />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-menu);
  display: flex;
  flex-direction: column;
  padding: 0 var(--gutter) max(var(--space-8), env(safe-area-inset-bottom));
  background: var(--surface-page);
  color: var(--text-primary);
  overflow-y: auto;
}

.menu__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
}

.menu__close {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: calc(var(--space-2) * -1);
}

.menu__nav {
  flex: 1;
  display: flex;
  align-items: center;
}

.menu__link {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-2) 0;
  font-family: var(--font-display);
  font-size: clamp(3rem, 14vw, 4.5rem);
  line-height: 1;
}

.menu__index {
  font-size: 1.25rem;
  color: var(--text-muted);
}

.menu__link.router-link-active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 8px;
}

.menu__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-8);
  border-top: 1px solid var(--line);
}

.menu__social {
  display: flex;
  gap: var(--space-6);
}

/* Panel slides down; each link rises on its own beat. */
.menu-enter-active {
  transition: clip-path var(--dur-panel) var(--ease-out);
}

.menu-leave-active {
  transition: clip-path var(--dur-exit) var(--ease-in), opacity var(--dur-exit) var(--ease-in);
}

.menu-enter-from {
  clip-path: inset(0 0 100% 0);
}

.menu-leave-to {
  clip-path: inset(0 0 100% 0);
  opacity: 0.6;
}

.menu-enter-active .menu__item {
  animation: menu-item var(--dur-enter) var(--ease-out) backwards;
  animation-delay: calc(120ms + var(--i) * 45ms);
}

.menu-enter-active .menu__foot {
  animation: menu-item var(--dur-enter-fast) var(--ease-out) 360ms backwards;
}

@keyframes menu-item {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .menu-enter-active,
  .menu-leave-active {
    transition: opacity var(--dur-exit) linear;
  }

  .menu-enter-from,
  .menu-leave-to {
    clip-path: none;
    opacity: 0;
  }

  .menu-enter-active .menu__item,
  .menu-enter-active .menu__foot {
    animation: none;
  }
}
</style>
