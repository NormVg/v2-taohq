<template>
  <main class="mobile-page-wrapper">
    <div class="top-nav">
      <NuxtLink to="/" class="back-link">< RETURN</NuxtLink>
    </div>

    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content header-container">
        <h1 class="display-title mt-4">CHRONICLES</h1>
        <p class="subtitle mt-4">SYSTEM LOGS // TIMELINE</p>
        <AnimatedSlashes :count="20" class="mt-8" />
      </div>
    </section>
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <div class="timeline-container mt-4">
            
            <div class="timeline-event">
              <div class="event-year">2021</div>
              <div class="event-content">
                <h3 class="event-title">INITIALIZATION</h3>
                <p class="event-desc mt-4">The syndicate is formed. The first repository is pushed. A collective vision for brutalist web architecture emerges.</p>
                <AnimatedSlashes :count="10" class="mt-4" />
              </div>
            </div>

            <div class="timeline-event">
              <div class="event-year">2023</div>
              <div class="event-content">
                <h3 class="event-title">FRAMEWORK V1</h3>
                <p class="event-desc mt-4">Release of the internal component library. Standardization of the aesthetic parameters and the semantic grid.</p>
                <AnimatedSlashes :count="15" class="mt-4" />
              </div>
            </div>

            <div class="timeline-event">
              <div class="event-year">2025</div>
              <div class="event-content">
                <h3 class="event-title">taohq PROTOCOL</h3>
                <p class="event-desc mt-4">Deployment of the public-facing terminal. Convergence of design philosophy and structural enforcement.</p>
                <AnimatedSlashes :count="20" class="mt-4" />
              </div>
            </div>

            <div class="timeline-event current">
              <div class="event-year">NOW</div>
              <div class="event-content">
                <h3 class="event-title">CONTINUOUS EXECUTION</h3>
                <p class="event-desc mt-4">We are compiling. We are building. The system is expanding.</p>
                <div class="blinking-cursor mt-6">_</div>
              </div>
            </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'

useSeoMeta({
  title: 'TIMELINE // taohq',
  description: 'Explore TIMELINE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TIMELINE // taohq',
  ogDescription: 'Explore TIMELINE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-section {
  width: 100%;
}

.mobile-section-content {
  padding: 2rem 1.25rem;
}

.inverted-section {
  background-color: var(--fg-color);
  color: var(--bg-color);
}

.border-b-dashed {
  border-bottom: 2px dashed var(--fg-color);
}
.inverted-section.border-b-dashed {
  border-bottom: 2px dashed var(--bg-color);
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem 1.25rem;
  border-bottom: 2px dashed var(--bg-color);
  background-color: var(--fg-color);
}

.back-link {
  color: var(--bg-color);
  text-decoration: none;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.8;
}

.timeline-container {
  display: flex;
  flex-direction: column;
}

.timeline-event {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 2rem;
  border-left: 2px dashed var(--fg-color);
}

.timeline-event:last-child {
  border-left: none;
  padding-left: 0;
}
.timeline-event:last-child::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: transparent;
  border-left: 2px dashed var(--fg-color);
}

.event-year {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  background-color: var(--bg-color);
  color: var(--fg-color);
  display: inline-block;
  padding: 0 0.5rem;
  margin-left: -2.5rem; /* pull it over the border line */
  margin-bottom: 1rem;
  line-height: 1;
}

.timeline-event.current .event-year {
  color: var(--bg-color);
  background-color: var(--fg-color);
}

.event-content {
  display: flex;
  flex-direction: column;
}

.event-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.event-desc {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.9;
  text-transform: uppercase;
}

.blinking-cursor {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
