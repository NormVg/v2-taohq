<script setup>
import { onMounted } from 'vue'

useSeoMeta({
  title: 'TIMELINE // taohq',
  description: 'Explore TIMELINE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TIMELINE // taohq',
  ogDescription: 'Explore TIMELINE at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="mobile-page-wrapper">
    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">CHRONICLES</h1>
        <p class="subtitle mt-4">SYSTEM LOGS // TIMELINE</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </div>
    </section>
      
    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
      <div class="timeline-container mt-8">
          
          <div class="timeline-event">
            <div class="event-year">2021</div>
            <div class="event-content">
              <h3 class="event-title">INITIALIZATION</h3>
              <p class="event-desc mt-2">The syndicate is formed. The first repository is pushed. A collective vision for brutalist web architecture emerges.</p>
              <AnimatedSlashes :count="10" class="mt-4" />
            </div>
          </div>

          <div class="timeline-event">
            <div class="event-year">2023</div>
            <div class="event-content">
              <h3 class="event-title">FRAMEWORK V1</h3>
              <p class="event-desc mt-2">Release of the internal component library. Standardization of the aesthetic parameters and the semantic grid.</p>
              <AnimatedSlashes :count="15" class="mt-4" />
            </div>
          </div>

          <div class="timeline-event">
            <div class="event-year">2025</div>
            <div class="event-content">
              <h3 class="event-title">taohq PROTOCOL</h3>
              <p class="event-desc mt-2">Deployment of the public-facing terminal. Convergence of design philosophy and structural enforcement.</p>
              <AnimatedSlashes :count="20" class="mt-4" />
            </div>
          </div>

          <div class="timeline-event current">
            <div class="event-year">NOW</div>
            <div class="event-content">
              <h3 class="event-title">CONTINUOUS EXECUTION</h3>
              <p class="event-desc mt-2">We are compiling. We are building. The system is expanding.</p>
              <div class="blinking-cursor mt-4">_</div>
            </div>
          </div>

      </div>
    </div>
    </section>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" @click.prevent>
          <img src="~/assets/logo.svg" alt="TAO Logo" class="flipping-logo" />
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 1rem 0 0 0;
  opacity: 0.8;
}
.timeline-container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}
.timeline-event {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
}
.timeline-event::before {
  content: '';
  position: absolute;
  left: calc(100px + 1rem);
  top: 40px;
  bottom: -40px;
  width: 2px;
  background-color: var(--fg-color);
  border-left: 2px dashed var(--fg-color);
}
.timeline-event:last-child::before {
  display: none;
}
.event-year {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  width: 100px;
  flex-shrink: 0;
  text-align: right;
  opacity: 0.8;
}
.event-content {
  flex-grow: 1;
  padding-bottom: 2rem;
}
.event-title {
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
}
.event-desc {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  text-transform: uppercase;
}
.timeline-event.current .event-year {
  color: var(--bg-color);
  background-color: var(--fg-color);
  padding: 0.25rem;
  display: inline-block;
  height: fit-content;
  text-align: center;
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
@media (max-width: 768px) {
  .timeline-event {
    flex-direction: column;
    gap: 1rem;
  }
  .timeline-event::before {
    display: none;
  }
  .event-year {
    text-align: left;
    width: auto;
  }
}

.fixed-logo-wrapper {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 50;
  pointer-events: none;
  animation: float-complex 5.7s ease-in-out infinite alternate;
}

.logo-inner-anim {
  animation: slight-tilt 7.1s ease-in-out infinite alternate;
}

.logo-hover-target {
  display: block;
  pointer-events: auto;
  cursor: crosshair;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-hover-target:hover {
  transform: scale(1.3) translateY(-10px);
}

.flipping-logo {
  width: 60px;
  height: auto;
  animation: flip-y 4.3s linear infinite;
  transform-style: preserve-3d;
  opacity: 0.85;
  filter: drop-shadow(0 0 10px rgba(196, 181, 227, 0.5));
  transition: all 0.4s ease;
}

.logo-hover-target:hover .flipping-logo {
  opacity: 1;
  filter: drop-shadow(0 0 20px rgba(196, 181, 227, 1)) drop-shadow(0 0 40px rgba(196, 181, 227, 0.6));
  animation-duration: 0.6s;
}

@keyframes float-complex {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(5px); }
}

@keyframes flip-y {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes slight-tilt {
  0% { transform: rotateZ(-5deg) scale(1); }
  100% { transform: rotateZ(5deg) scale(1.05); }
}

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
</style>
