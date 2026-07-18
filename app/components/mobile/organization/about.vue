<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero title="ABOUT // TAOHQ">
      <template #hero-body>
        <p class="about-hero-copy">
          We are a collective of digital architects constructing systems that outlive their creators.
          taohq is not a company. It is an ongoing experiment in structural permanence, brutalist aesthetics, and terminal-grade efficiency.
        </p>
        <p class="about-hero-status">SYSTEM STATUS: NOMINAL</p>
      </template>
    </MobilePageHero>

    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <h2 class="section-title">THE ARCHITECTURE</h2>
        <p class="body-copy mt-4">
          Our work discards the ephemeral. We build relying on raw protocols, semantic clarity, and uncompromising performance. We strip away the unnecessary until only the essential structure remains.
        </p>
        
        <div class="stats-box mt-8">
          <div class="stat-item">
            <span class="stat-num">01</span>
            <span class="stat-lbl">FOUNDATION</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">02</span>
            <span class="stat-lbl">EXECUTION</span>
          </div>
        </div>

        <div class="dither-wrapper mt-8">
          <DitherImage :src="pitPeopleImg" :pixelSize="4" colorDark="#000000" colorLight="#c4b5e3" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import pitPeopleImg from '~/assets/pit-people.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useHead({
  title: 'ABOUT // taohq',
  meta: [
    { name: 'description', content: 'About the Tao HQ collective.' }
  ]
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

.hero-content {
  display: flex;
  flex-direction: column;
}

.about-hero-copy {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 1rem 0 0;
  opacity: 0.9;
  text-transform: uppercase;
}

.about-hero-status {
  font-family: 'VT323', monospace;
  font-size: 1.05rem;
  letter-spacing: 0.06em;
  opacity: 0.7;
  margin: 1rem 0 0;
  text-transform: uppercase;
}

.body-copy {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  opacity: 0.9;
  text-transform: uppercase;
}

.small-caps {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  letter-spacing: 1px;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  text-transform: uppercase;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.stats-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 1.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  line-height: 1;
}

.stat-lbl {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.8;
  margin-top: 0.25rem;
}

.dither-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
  background-color: var(--fg-color);
}

.dither-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
