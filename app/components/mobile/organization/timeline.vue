<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      title="CHRONICLES"
      subtitle="SYSTEM LOGS // TIMELINE"
    />

    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <div class="timeline-container">
          <div
            v-for="(event, index) in events"
            :key="event.year"
            class="timeline-event"
            :class="{ current: event.current, last: index === events.length - 1 }"
          >
            <div class="rail" aria-hidden="true">
              <span class="dot" />
              <span v-if="index !== events.length - 1" class="line" />
            </div>

            <div class="event-body">
              <div class="event-year" :class="{ current: event.current }">
                {{ event.year }}
              </div>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-desc">{{ event.desc }}</p>
              <AnimatedSlashes
                v-if="!event.current"
                :count="event.slashes"
                class="event-slashes"
              />
              <div v-else class="blinking-cursor">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'

const events = [
  {
    year: '2021',
    title: 'INITIALIZATION',
    desc: 'The syndicate is formed. The first repository is pushed. A collective vision for brutalist web architecture emerges.',
    slashes: 10,
  },
  {
    year: '2023',
    title: 'FRAMEWORK V1',
    desc: 'Release of the internal component library. Standardization of the aesthetic parameters and the semantic grid.',
    slashes: 15,
  },
  {
    year: '2025',
    title: 'taohq PROTOCOL',
    desc: 'Deployment of the public-facing terminal. Convergence of design philosophy and structural enforcement.',
    slashes: 20,
  },
  {
    year: 'NOW',
    title: 'CONTINUOUS EXECUTION',
    desc: 'We are compiling. We are building. The system is expanding.',
    current: true,
    slashes: 0,
  },
]

useSeoMeta({
  title: 'TIMELINE // TheAlphaOnes',
  description: 'Explore TIMELINE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TIMELINE // TheAlphaOnes',
  ogDescription: 'Explore TIMELINE at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-section {
  width: 100%;
  background: var(--bg-color);
  color: var(--fg-color);
}

.mobile-section-content {
  padding: 1.75rem 1.25rem 2.5rem;
}

.border-b-dashed {
  border-bottom: 2px dashed var(--fg-color);
}

.timeline-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
}

.timeline-event {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 0.9rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

.rail {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.55rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 0;
  background: var(--fg-color);
  border: 2px solid var(--fg-color);
  flex-shrink: 0;
  z-index: 1;
}

.timeline-event.current .dot {
  background: var(--bg-color);
  box-shadow: inset 0 0 0 2px var(--fg-color);
  outline: 2px solid var(--fg-color);
}

.line {
  flex: 1;
  width: 0;
  min-height: 2rem;
  margin-top: 0.35rem;
  border-left: 2px dashed var(--fg-color);
}

.event-body {
  min-width: 0;
  padding-bottom: 2.25rem;
}

.timeline-event.last .event-body {
  padding-bottom: 0.25rem;
}

.event-year {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  letter-spacing: 0.06em;
  display: inline-block;
  padding: 0.2rem 0.55rem;
  margin: 0 0 0.65rem;
  line-height: 1.1;
  background: var(--fg-color);
  color: var(--bg-color);
  text-transform: uppercase;
  /* Never pull outside the viewport */
  max-width: 100%;
}

.event-year.current {
  background: var(--fg-color);
  color: var(--bg-color);
  box-shadow: 0 0 0 2px var(--bg-color), 0 0 0 4px var(--fg-color);
}

.event-title {
  font-family: 'VT323', monospace;
  font-size: clamp(1.7rem, 6.5vw, 2.15rem);
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.45rem;
  line-height: 1.05;
  overflow-wrap: anywhere;
}

.event-desc {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.45;
  opacity: 0.9;
  text-transform: uppercase;
  margin: 0.85rem 0 0;
}

.event-slashes {
  display: block;
  margin-top: 0.85rem;
}

.blinking-cursor {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin-top: 1rem;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .blinking-cursor {
    animation: none;
  }
}
</style>
