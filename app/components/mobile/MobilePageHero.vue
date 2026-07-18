<script setup>
/**
 * Shared mobile page chrome:
 * - Light lavender back bar (matches TAOHQ nav)
 * - Black hero with title + optional subtitle/eyebrow
 * - Spinning logo anchored in the black box
 */
defineProps({
  /** Back destination */
  to: {
    type: String,
    default: '/',
  },
  /** Back link text */
  backLabel: {
    type: String,
    default: '<< RETURN',
  },
  /** Small label above title (e.g. DIR // WRITING) */
  eyebrow: {
    type: String,
    default: '',
  },
  /** Main hero title */
  title: {
    type: String,
    required: true,
  },
  /** Secondary line under title */
  subtitle: {
    type: String,
    default: '',
  },
  slashCount: {
    type: Number,
    default: 18,
  },
  /** Show spinning logo in black hero */
  logo: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="mph">
    <!-- Consistent light back bar -->
    <div class="mph-back">
      <NuxtLink :to="to" class="mph-back-link">{{ backLabel }}</NuxtLink>
      <slot name="back-extra" />
    </div>

    <!-- Black hero box -->
    <section class="mph-hero">
      <div class="mph-hero-inner">
        <p v-if="eyebrow" class="mph-eyebrow">{{ eyebrow }}</p>
        <h1 class="mph-title">
          <!-- support multi-line titles via \n or slot -->
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="subtitle" class="mph-subtitle">{{ subtitle }}</p>
        <slot name="hero-body" />
        <AnimatedSlashes :count="slashCount" class="mph-slashes" />
      </div>

      <div v-if="logo" class="mph-logo" aria-hidden="true">
        <div class="mph-logo-tilt">
          <img src="~/assets/logo.svg" alt="" class="mph-logo-spin" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mph {
  width: 100%;
  max-width: 100%;
}

/* —— Light back bar (always lavender / dark text) —— */
.mph-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 52px;
  padding: 0.75rem 1.25rem;
  background-color: var(--bg-color);
  color: var(--fg-color);
  border-bottom: 2px dashed var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.mph-back-link {
  color: var(--fg-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  transition: opacity 120ms ease-out, transform 100ms ease-out;
}

.mph-back-link:active {
  opacity: 0.75;
  transform: scale(0.96);
}

.mph-back-link:focus-visible {
  outline: 2px dashed var(--fg-color);
  outline-offset: 3px;
}

/* —— Black hero —— */
.mph-hero {
  position: relative;
  overflow: hidden;
  min-height: 240px;
  background-color: var(--fg-color);
  color: var(--bg-color);
  border-bottom: 2px dashed var(--bg-color);
}

.mph-hero-inner {
  position: relative;
  z-index: 2;
  padding: 1.75rem 1.25rem 2rem;
  padding-right: 5.25rem; /* room for spinning logo */
}

.mph-eyebrow {
  font-family: 'VT323', monospace;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  opacity: 0.7;
  margin: 0 0 0.65rem;
  text-transform: uppercase;
}

.mph-title {
  font-family: 'VT323', monospace;
  font-size: clamp(2.4rem, 10vw, 3.4rem);
  line-height: 0.95;
  margin: 0;
  text-transform: uppercase;
  text-wrap: balance;
}

.mph-subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  margin: 0.75rem 0 0;
  opacity: 0.8;
  text-transform: uppercase;
  line-height: 1.25;
}

.mph-slashes {
  display: block;
  margin-top: 1.25rem;
}

/* —— Spinning logo in black box (no frame / no rectangular border) —— */
.mph-logo {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  border: none;
  outline: none;
  background: transparent;
  box-shadow: none;
  animation: mph-float 5.7s ease-in-out infinite alternate;
}

.mph-logo-tilt {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  animation: mph-tilt 7.1s ease-in-out infinite alternate;
}

.mph-logo-spin {
  display: block;
  width: 48px;
  height: auto;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent;
  /* No drop-shadow: WebKit often paints a rectangular filter box */
  filter: none;
  /* Hide rectangular back-face of 3D plane during flip */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  opacity: 0.95;
  animation: mph-flip 4.3s linear infinite;
}

@keyframes mph-float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(4px); }
}

@keyframes mph-flip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes mph-tilt {
  0% { transform: rotateZ(-5deg) scale(1); }
  100% { transform: rotateZ(5deg) scale(1.05); }
}

@media (prefers-reduced-motion: reduce) {
  .mph-logo,
  .mph-logo-tilt,
  .mph-logo-spin {
    animation: none !important;
  }
}
</style>
