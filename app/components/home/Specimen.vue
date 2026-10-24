<script setup lang="ts">
/**
 * One product in the cabinet: dithered art floating at its slot, with a
 * museum-style tag on a leader line. Hover or focus re-develops the art
 * (coarse → fine) and unfolds the tag.
 *
 * Three nested layers keep motions independent:
 *   .specimen        position + cursor parallax (CSS vars from the field)
 *   .specimen__drift idle float (keyframes, per-slot cycle)
 *   .specimen__art   hover scale
 */
import type { FieldSlot } from '~/constants/field'
import type { Product } from '~/utils/product'
import { productStatusLabel } from '~/utils/product'

const props = defineProps<{
  product: Product
  slot: FieldSlot
  index: number
  total: number
}>()

const emit = defineEmits<{ focus: [slot: FieldSlot], blur: [] }>()

const art = ref<{ develop: () => void } | null>(null)
let lastDevelop = 0

const number = computed(() => String(props.index).padStart(2, '0'))
const of = computed(() => String(props.total).padStart(2, '0'))

function activate() {
  emit('focus', props.slot)
  const now = performance.now()
  if (now - lastDevelop > 900) {
    lastDevelop = now
    art.value?.develop()
  }
}
</script>

<template>
  <li
    class="specimen"
    :class="`specimen--tag-${slot.tag}`"
    :style="{
      '--x': `${slot.x}%`,
      '--y': `${slot.y}%`,
      '--size': slot.size,
      '--depth': slot.depth,
      '--drift': `${slot.drift}s`,
      '--reveal-delay': `${180 + index * 140}ms`,
      '--reveal-duration': `${700 + index * 110}ms`,
    }"
  >
    <NuxtLink
      v-sound="'tick'"
      :to="product.path"
      class="specimen__link"
      data-reveal="tick"
      @mouseenter="activate"
      @focus="activate"
      @mouseleave="emit('blur')"
      @blur="emit('blur')"
    >
      <div class="specimen__drift">
        <DitherImage
          ref="art"
          class="specimen__art"
          :name="product.art"
          :alt="product.artAlt"
          aspect="4 / 5"
          priority
        />
      </div>

      <span class="specimen__tag">
        <span class="specimen__leader" aria-hidden="true" />
        <span class="specimen__card">
          <span class="specimen__no">№ {{ number }} / {{ of }}</span>
          <span class="specimen__name">{{ product.title }}</span>
          <span class="specimen__line">{{ product.tagline }}</span>
          <span class="specimen__status">{{ productStatusLabel(product.status) }}</span>
        </span>
      </span>
    </NuxtLink>
  </li>
</template>

<style scoped>
.specimen {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  transform: translate(
    calc(-50% + var(--px, 0) * var(--depth) * -28px),
    calc(-50% + var(--py, 0) * var(--depth) * -20px)
  );
  transition:
    transform 900ms var(--ease-out),
    opacity var(--dur-panel) var(--ease-out);
  will-change: transform;
}

.specimen__link {
  position: relative;
  display: block;
  outline: none;
}

.specimen__drift {
  animation: drift var(--drift) var(--ease-in-out) infinite alternate;
}

/* Soft vignette so every piece floats as a specimen, not a rectangle. */
.specimen__art {
  mask-image: radial-gradient(closest-side, #000 72%, transparent 100%);
  -webkit-mask-image: radial-gradient(closest-side, #000 72%, transparent 100%);
  transition: transform var(--dur-panel) var(--ease-spring);
}

.specimen__link:hover .specimen__art,
.specimen__link:focus-visible .specimen__art {
  transform: scale(1.06);
}

/* ── tag ─────────────────────────────────────────────── */
.specimen__tag {
  position: absolute;
  top: 38%;
  display: flex;
  align-items: flex-start;
  pointer-events: none;
}

.specimen--tag-right .specimen__tag {
  left: 88%;
}

.specimen--tag-left .specimen__tag {
  right: 88%;
  flex-direction: row-reverse;
}

.specimen__leader {
  width: clamp(40px, 5vw, 88px);
  height: 1px;
  margin-top: 0.6em;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--dur-panel) var(--ease-out);
}

.specimen--tag-left .specimen__leader {
  transform-origin: right;
}

.specimen__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  width: max-content;
  max-width: 20rem;
  padding: 0 var(--space-3);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.specimen--tag-left .specimen__card {
  align-items: flex-end;
  text-align: right;
}

.specimen__no {
  color: var(--accent);
}

.specimen__name {
  font-family: var(--font-display);
  font-size: 2.25rem;
  line-height: 0.9;
  letter-spacing: 0.01em;
  text-transform: none;
  white-space: nowrap;
  color: var(--text-primary);
}

.specimen__line {
  text-transform: none;
  letter-spacing: 0;
  font-size: var(--text-small);
}

/* Tag parts unfold on their own beats: number, name, line, status. */
.specimen__card > * {
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity var(--dur-state) var(--ease-out),
    transform var(--dur-state) var(--ease-out);
}

.specimen__link:is(:hover, :focus-visible) .specimen__leader {
  transform: scaleX(1);
}

.specimen__link:is(:hover, :focus-visible) .specimen__card > * {
  opacity: 1;
  transform: none;
}

.specimen__link:is(:hover, :focus-visible) .specimen__card > :nth-child(1) { transition-delay: 120ms; }
.specimen__link:is(:hover, :focus-visible) .specimen__card > :nth-child(2) { transition-delay: 170ms; transition-duration: 320ms; }
.specimen__link:is(:hover, :focus-visible) .specimen__card > :nth-child(3) { transition-delay: 240ms; }
.specimen__link:is(:hover, :focus-visible) .specimen__card > :nth-child(4) { transition-delay: 300ms; transition-duration: 160ms; }

@keyframes drift {
  from { transform: translateY(-6px) rotate(-0.8deg); }
  to { transform: translateY(8px) rotate(0.8deg); }
}

/* Phones: specimens leave their slots and drift down the page in a loose zig-zag. */
@media (max-width: 767px) {
  .specimen {
    position: relative;
    left: auto;
    top: auto;
    width: min(72vw, 20rem);
    transform: none;
  }
}

/* Touch screens and phones: no hover, so tags are always shown under the art. */
@media (hover: none), (max-width: 767px) {
  .specimen__tag {
    position: static;
    margin-top: calc(var(--space-2) * -1);
  }

  .specimen__leader {
    display: none;
  }

  .specimen__card,
  .specimen--tag-left .specimen__card {
    align-items: flex-start;
    text-align: left;
    min-width: 0;
    padding: 0;
  }

  .specimen__card > * {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .specimen__drift {
    animation: none;
  }

  .specimen {
    transition: opacity var(--dur-panel) linear;
  }
}
</style>
