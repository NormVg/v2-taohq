<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed class="hero-section">
      <div class="watermark-bg">ABOUT</div>
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      
      <div class="hero-content">
        <h1 class="display-title">ABOUT // TAOHQ</h1>
        <div class="mission-statement mt-8">
          <p class="body-copy">
            We are a collective of digital architects constructing systems that outlive their creators. 
            taohq is not a company. It is an ongoing experiment in structural permanence, brutalist aesthetics, and terminal-grade efficiency.
          </p>
        </div>
      </div>
      
      <div class="bottom-ornament">
        <span class="small-caps">SYSTEM STATUS: NOMINAL</span>
        <AnimatedSlashes :count="40" class="mt-2" />
      </div>
    </BrutalistCard>

    <BrutalistCard padding="6rem">
      <div class="split-grid">
        <div class="grid-left">
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
        </div>
        <div class="grid-right">
          <div class="dither-wrapper">
            <DitherImage :src="pitPeopleImg" :pixelSize="4" colorDark="#000000" colorLight="#c4b5e3" />
          </div>
        </div>
      </div>
    </BrutalistCard>
  </main>
</template>

<script setup>
import pitPeopleImg from '~/assets/pit-people.png'

useHead({
  title: 'ABOUT // taohq',
  meta: [
    { name: 'description', content: 'About the Tao HQ collective.' }
  ]
})
</script>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}
.hero-section {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.watermark-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20vw;
  font-weight: 700;
  color: rgba(196, 181, 227, 0.03); /* subtle invert */
  z-index: 0;
  pointer-events: none;
}
.top-nav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--bg-color);
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}
.hero-content {
  position: relative;
  z-index: 10;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.display-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -2px;
}
.mission-statement {
  max-width: 65ch;
}
.body-copy {
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
}
.bottom-ornament {
  position: relative;
  z-index: 10;
  margin-top: auto;
}
.small-caps {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  letter-spacing: 2px;
}
.split-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 768px) {
  .split-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.section-title {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
  margin: 0;
}
.stats-box {
  display: flex;
  gap: 3rem;
  border-top: 2px dashed var(--fg-color);
  padding-top: 2rem;
}
.stat-item {
  display: flex;
  flex-direction: column;
}
.stat-num {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1;
}
.stat-lbl {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0.6;
  margin-top: 0.5rem;
}
.dither-wrapper {
  aspect-ratio: 1;
  border: 2px solid var(--fg-color);
  padding: 1rem;
  background-color: var(--fg-color);
}
</style>
