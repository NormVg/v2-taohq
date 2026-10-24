<script setup lang="ts">
/**
 * Studio services: a triptych of the three artworks, then one row per
 * service. Hovering or focusing a service re-develops its artwork above,
 * tying each panel to its row without decorating the list itself.
 */
import type { StudioService } from '~/constants/studio'

const props = defineProps<{ services: StudioService[] }>()

const panels = ref<({ develop: () => void } | null)[]>([])
const active = ref<string | null>(null)

function highlight(index: number) {
  active.value = props.services[index]?.id ?? null
  panels.value[index]?.develop()
}
</script>

<template>
  <div class="services">
    <ul class="triptych" role="list" aria-hidden="true">
      <li
        v-for="(service, index) in services"
        :key="service.id"
        class="panel"
        :class="{ 'panel--dim': active && active !== service.id }"
      >
        <DitherImage
          :ref="(el) => { panels[index] = el as { develop: () => void } | null }"
          :name="service.art"
          :alt="service.artAlt"
          aspect="3 / 4"
          fit="cover"
        />
        <span class="panel__no">{{ String(index + 1).padStart(2, '0') }}</span>
      </li>
    </ul>

    <ol class="list" role="list" @mouseleave="active = null">
      <li
        v-for="(service, index) in services"
        :key="service.id"
        class="service"
        tabindex="0"
        @mouseenter="highlight(index)"
        @focus="highlight(index)"
        @blur="active = null"
      >
        <span class="service__no">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="service__title">{{ service.title }}</h3>
        <p class="service__summary">{{ service.summary }}</p>
        <p class="service__includes">{{ service.includes.join(' · ') }}</p>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.triptych {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.panel {
  position: relative;
  transition: opacity var(--dur-panel) var(--ease-out);
}

.panel--dim {
  opacity: 0.3;
}

.panel__no {
  position: absolute;
  left: var(--space-2);
  bottom: var(--space-2);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  color: var(--accent);
}

.list {
  border-top: 1px solid var(--line);
}

.service {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: var(--space-2) var(--space-3);
  padding-block: var(--space-6);
  border-bottom: 1px solid var(--line);
  outline: none;
}

.service:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 4px;
}

.service__no {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  line-height: 2.4;
  color: var(--accent);
}

.service__title {
  font-size: var(--text-h3);
  transition: color var(--dur-hover) var(--ease-out);
}

.service__summary,
.service__includes {
  grid-column: 2;
}

.service__summary {
  max-width: 36rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.service__includes {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (hover: hover) {
  .service:hover .service__title {
    color: var(--accent);
  }
}
</style>
