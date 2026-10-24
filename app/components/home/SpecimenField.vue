<script setup lang="ts">
/**
 * The home page: a cabinet of dithered specimens floating in the dark.
 *
 * Pointer tracking writes CSS variables straight to the DOM inside a rAF
 * (no Vue reactivity per frame): --px/--py drive parallax on every
 * specimen, and the corner readout shows live cursor coordinates.
 * Hovering a specimen pulls the lavender moon-glow over to it.
 */
import { FIELD_IDLE_GLOW, FIELD_SLOTS, type FieldSlot } from '~/constants/field'
import { SITE } from '~/constants/site'
import type { Product } from '~/utils/product'

const props = defineProps<{ products: Product[] }>()

const field = ref<HTMLElement | null>(null)
const readout = ref<HTMLElement | null>(null)

const specimens = computed(() =>
  props.products.slice(0, FIELD_SLOTS.length).map((product, i) => ({ product, slot: FIELD_SLOTS[i]! })),
)

let frame = 0
let pointer = { x: 0.5, y: 0.5 }

function paint() {
  const el = field.value
  if (!el) return
  el.style.setProperty('--px', (pointer.x * 2 - 1).toFixed(3))
  el.style.setProperty('--py', (pointer.y * 2 - 1).toFixed(3))
  if (readout.value) {
    readout.value.textContent = `X ${pointer.x.toFixed(2)} · Y ${pointer.y.toFixed(2)}`
  }
}

function onPointerMove(event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  const rect = field.value!.getBoundingClientRect()
  pointer = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height }
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(paint)
}

function setGlow(x: number, y: number, strength: number) {
  const el = field.value
  if (!el) return
  el.style.setProperty('--glow-x', `${x}%`)
  el.style.setProperty('--glow-y', `${y}%`)
  el.style.setProperty('--glow-a', String(strength))
}

const onSpecimenFocus = (slot: FieldSlot) => setGlow(slot.x, slot.y, 0.3)
const onSpecimenBlur = () => setGlow(FIELD_IDLE_GLOW.x, FIELD_IDLE_GLOW.y, 0.14)

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <section ref="field" v-reveal class="field" aria-labelledby="field-title" @pointermove="onPointerMove">
    <div class="field__glow" aria-hidden="true" />
    <div class="field__grain" aria-hidden="true" />
    <span v-for="corner in ['tl', 'tr', 'bl', 'br']" :key="corner" class="field__mark" :class="`field__mark--${corner}`" aria-hidden="true" />

    <ul class="field__specimens" role="list" aria-label="Products">
      <Specimen
        v-for="({ product, slot }, i) in specimens"
        :key="product.path"
        :product="product"
        :slot="slot"
        :index="i + 1"
        :total="specimens.length"
        @focus="onSpecimenFocus"
        @blur="onSpecimenBlur"
      />
    </ul>

    <div class="field__caption" data-reveal="rise" style="--reveal-delay: 900ms">
      <h1 id="field-title" class="field__title">
        {{ SITE.name }} <span class="field__script">{{ SITE.tagline }}</span>
      </h1>
      <p class="field__sub">Independent software · {{ String(specimens.length).padStart(2, '0') }} products</p>
    </div>

    <div class="field__meta" data-reveal="fade" style="--reveal-delay: 1100ms" aria-hidden="true">
      <span class="field__hint">Hover a specimen to examine</span>
      <span ref="readout" class="field__readout">X 0.50 · Y 0.50</span>
    </div>
  </section>
</template>

<style scoped>
@property --glow-x { syntax: '<percentage>'; inherits: true; initial-value: 34%; }
@property --glow-y { syntax: '<percentage>'; inherits: true; initial-value: 48%; }
@property --glow-a { syntax: '<number>'; inherits: true; initial-value: 0.14; }

.field {
  position: relative;
  height: 100dvh;
  min-height: 640px;
  overflow: hidden;
  isolation: isolate;
  background: var(--ink-900);
  transition:
    --glow-x 1200ms var(--ease-out),
    --glow-y 1200ms var(--ease-out),
    --glow-a 700ms var(--ease-out);
}

.field__glow {
  position: absolute;
  inset: 0;
  z-index: -3;
  background:
    radial-gradient(circle at var(--glow-x) var(--glow-y), rgb(196 181 227 / var(--glow-a)) 0%, transparent 42%),
    radial-gradient(ellipse at 50% 120%, rgb(196 181 227 / 0.08) 0%, transparent 60%);
}

/* Static film grain: an SVG noise tile, composited once. */
.field__grain {
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.11;
  mix-blend-mode: overlay;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Registration marks: the field reads as a specimen board. */
.field__mark {
  position: absolute;
  width: 14px;
  height: 14px;
  opacity: 0.5;
  background:
    linear-gradient(var(--accent), var(--accent)) center / 1px 100% no-repeat,
    linear-gradient(var(--accent), var(--accent)) center / 100% 1px no-repeat;
}

.field__mark--tl { top: 88px; left: var(--gutter); }
.field__mark--tr { top: 88px; right: var(--gutter); }
.field__mark--bl { bottom: var(--space-4); left: var(--gutter); }
.field__mark--br { bottom: var(--space-4); right: var(--gutter); }

.field__specimens {
  position: absolute;
  inset: 0;
}

/* Others recede while one is examined. */
.field__specimens:has(:is(a:hover, a:focus-visible)) > :not(:has(:is(a:hover, a:focus-visible))) {
  opacity: 0.22;
}

.field__caption,
.field__meta {
  position: absolute;
  bottom: var(--space-12);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-muted);
}

.field__caption {
  left: var(--gutter);
  max-width: 24rem;
}

.field__title {
  font-family: var(--font-body);
  font-size: var(--text-ui);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: var(--tracking-ui);
  color: var(--text-primary);
}

.field__script {
  display: block;
  margin-top: var(--space-1);
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  color: var(--accent);
}

.field__sub {
  margin-top: var(--space-2);
}

.field__meta {
  right: var(--gutter);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-1);
}

.field__readout {
  font-variant-numeric: tabular-nums;
  color: var(--accent);
}

@media (hover: none) {
  .field__hint,
  .field__readout {
    display: none;
  }
}

/* Phones: the cabinet becomes a scroll of specimens in a loose zig-zag. */
@media (max-width: 767px) {
  .field {
    height: auto;
    min-height: 100dvh;
    padding: 112px var(--gutter) var(--space-12);
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
  }

  .field__specimens {
    position: static;
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
  }

  .field__specimens > :nth-child(even) {
    align-self: flex-end;
  }

  .field__caption {
    position: static;
    order: -1;
  }

  .field__meta {
    display: none;
  }

  .field__mark--tl,
  .field__mark--tr {
    top: 76px;
  }
}
</style>
