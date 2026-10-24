<script setup lang="ts">
/**
 * Studio services beside a sticky art panel.
 *
 * Desktop: the list scrolls on the left while one lavender panel stays
 * pinned on the right. Whichever service crosses the middle of the screen
 * (or is hovered / focused) becomes active, and its artwork develops in the
 * panel, so the picture always matches what you're reading.
 * Phones: no room for a side panel, so each service shows its own art inline.
 */
import type { StudioService } from '~/constants/studio'

const props = defineProps<{ services: StudioService[] }>()

type Developable = { develop: () => void } | null

const active = ref(0)
const rows = ref<HTMLElement[]>([])
const panels = ref<Developable[]>([])

function activate(index: number) {
  if (index === active.value) return
  active.value = index
  panels.value[index]?.develop()
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  // A thin band across the middle of the viewport: the row inside it is "current".
  observer = new IntersectionObserver((entries) => {
    const hit = entries.find(entry => entry.isIntersecting)
    if (hit) activate(rows.value.indexOf(hit.target as HTMLElement))
  }, { rootMargin: '-45% 0px -45% 0px' })
  rows.value.forEach(row => observer?.observe(row))
})

onBeforeUnmount(() => observer?.disconnect())

const current = computed(() => props.services[active.value])
</script>

<template>
  <div class="services">
    <ol class="list" role="list">
      <li
        v-for="(service, index) in services"
        :key="service.id"
        :ref="(el) => { if (el) rows[index] = el as HTMLElement }"
        class="service"
        :class="{ 'service--active': index === active }"
        tabindex="0"
        @mouseenter="activate(index)"
        @focus="activate(index)"
      >
        <DitherImage class="service__art" :name="service.art" :alt="service.artAlt" aspect="4 / 5" fit="cover" />
        <span class="service__no">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3 class="service__title">{{ service.title }}</h3>
        <p class="service__summary">{{ service.summary }}</p>
        <p class="service__includes">{{ service.includes.join(' · ') }}</p>
      </li>
    </ol>

    <aside class="stage" aria-hidden="true">
      <div class="stage__frame">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="stage__panel"
          :class="{ 'stage__panel--active': index === active }"
        >
          <DitherImage
            :ref="(el) => { panels[index] = el as Developable }"
            :name="service.art"
            :alt="service.artAlt"
            aspect="4 / 5"
            fit="cover"
          />
        </div>
      </div>
      <p v-if="current" class="stage__caption">
        <span class="stage__no">{{ String(active + 1).padStart(2, '0') }} / {{ String(services.length).padStart(2, '0') }}</span>
        {{ current.title }}
      </p>
    </aside>
  </div>
</template>

<style scoped>
.services {
  display: grid;
  gap: var(--space-8);
}

.list {
  border-top: 1px solid var(--line);
}

.service {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: var(--space-2) var(--space-3);
  padding-block: var(--space-8);
  border-bottom: 1px solid var(--line);
  outline: none;
}

.service:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 4px;
}

/* Phones: each service carries its own art (soft ink on lavender). */
.service__art {
  grid-column: 1 / -1;
  max-width: 20rem;
  margin-bottom: var(--space-4);
  background: var(--accent);
}

.service__art :deep(.art__img),
.stage__panel :deep(.art__img) {
  opacity: 0.42;
}

.service__no {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  line-height: 2.4;
  color: var(--text-muted);
  transition: color var(--dur-state) var(--ease-out);
}

.service__title {
  font-size: var(--text-h3);
  color: var(--text-secondary);
  transition: color var(--dur-state) var(--ease-out);
}

.service--active .service__no {
  color: var(--accent);
}

.service--active .service__title {
  color: var(--text-primary);
}

.service__summary,
.service__includes {
  grid-column: 2;
}

.service__summary {
  max-width: 34rem;
  font-size: var(--text-small);
  color: var(--text-secondary);
}

.service__includes {
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Sticky stage exists only where there's room beside the list. */
.stage {
  display: none;
}

@media (min-width: 900px) {
  .services {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: var(--space-12);
    align-items: start;
  }

  .service__art {
    display: none;
  }

  /* Rows tall enough that each one gets its moment in the middle band. */
  .service {
    min-height: 42vh;
    align-content: center;
  }

  .stage {
    position: sticky;
    top: calc(var(--header-h) + var(--space-8));
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .stage__frame {
    position: relative;
    aspect-ratio: 4 / 5;
    background: var(--accent);
    overflow: hidden;
  }

  .stage__panel {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity var(--dur-panel) var(--ease-out);
  }

  .stage__panel--active {
    opacity: 1;
  }

  .stage__caption {
    display: flex;
    gap: var(--space-3);
    font-size: var(--text-ui);
    letter-spacing: var(--tracking-ui);
    text-transform: uppercase;
    color: var(--text-secondary);
  }

  .stage__no {
    color: var(--accent);
  }
}
</style>
