<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="16" right />
      </div>

      <div class="header-container mt-12">
        <h1 class="display-title">CORE PRINCIPLES</h1>
        <p class="subtitle mt-4">AXIOMS FOR DIGITAL CONSTRUCTION</p>
      </div>
      
      <div class="bento-grid mt-16">
        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .01</span>
          </div>
          <h2 class="item-title mt-4">Performance is non-negotiable.</h2>
          <p class="item-desc mt-2">Latency is a failure of architecture. Every millisecond must be fought for.</p>
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .02</span>
          </div>
          <h2 class="item-title mt-4">No Magic.</h2>
          <p class="item-desc mt-2">Explicit code over implicit behavior. If you do not understand the abstraction, do not use it.</p>
        </div>

        <div class="fixed-visual">
          <DitherImage :src="trangleSkullImg" :pixelSize="3" colorDark="#c4b5e3" colorLight="#151515" />
        </div>

        <div class="bento-item">
          <div class="item-header">
            <span class="axiom-num">AXIOM .03</span>
          </div>
          <h2 class="item-title mt-4">Radical Independence.</h2>
          <p class="item-desc mt-2">Own your infrastructure. Minimize third-party dependencies that introduce external risk.</p>
        </div>

        <div class="bento-item highlight">
          <div class="item-header">
            <span class="axiom-num">AXIOM .04</span>
          </div>
          <h2 class="item-title mt-4">Beauty Through Utility.</h2>
          <p class="item-desc mt-2">Form follows function. The interface should reflect the raw mechanics of the underlying system.</p>
        </div>
      </div>
    </BrutalistCard>
  </main>
</template>

<script setup>
import trangleSkullImg from '~/assets/trangle-skull.png'

useHead({
  title: 'PRINCIPLES // taohq'
})
</script>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
}
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--bg-color);
  text-decoration: none;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}
.header-container {
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 2rem;
}
.display-title {
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 1;
  margin: 0;
  font-weight: 400;
}
.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  letter-spacing: 4px;
}
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.bento-item {
  border: 2px solid var(--bg-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.bento-item.highlight {
  background-color: var(--bg-color);
  color: var(--fg-color);
}
.bento-item.image-item {
  padding: 0;
  border: none;
  overflow: hidden;
  background: var(--bg-color);
}
.item-header {
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.5rem;
}
.axiom-num {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
}
.item-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
}
.item-desc {
  font-size: 1.125rem;
  opacity: 0.8;
  margin-top: auto;
  padding-top: 2rem;
}
</style>
