<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      eyebrow="PHILOSOPHY // 01"
      title="DIGITAL ASCETICISM"
    />

    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content philosophy-stack">
        
        <div class="philosophy-block">
          <div class="block-number">01</div>
          <h2 class="block-title">SUBTRACTION</h2>
          <p class="body-copy mt-4">
            Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. We discard bloat, excessive tooling, and ephemeral trends in favor of raw computational truth.
          </p>
        </div>
        
        <div class="philosophy-block">
          <div class="block-number">02</div>
          <h2 class="block-title">DURABILITY</h2>
          <p class="body-copy mt-4">
            Code should not rot. We architect systems designed to withstand the inevitable entropy of the web. Immutability, static guarantees, and fundamental protocols over abstracted magic.
          </p>
        </div>
        
        <div class="philosophy-block">
          <div class="block-number">03</div>
          <h2 class="block-title">AESTHETICS</h2>
          <p class="body-copy mt-4">
            Visual output is a reflection of structural integrity. Brutalism is not merely an aesthetic choice; it is an ideological commitment to transparency. We do not hide the wires.
          </p>
        </div>

      </div>
    </section>

    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content center-quote-wrapper">
        <div class="bg-dither">
          <DitherImage :src="treeSkullImg" :pixelSize="4" />
        </div>
        <div class="quote-content mt-8">
          <h2 class="large-quote">"THE MACHINE MUST BE COLD, SO THE HUMAN CAN BE WARM."</h2>
          <AnimatedSlashes :count="20" center class="mt-8" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import treeSkullImg from '~/assets/2skull-arrow.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'PHILOSOPHY // taohq',
  description: 'Explore PHILOSOPHY at Tao HQ. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'PHILOSOPHY // taohq',
  ogDescription: 'Explore PHILOSOPHY at Tao HQ. We believe software should feel understandable, durable, and calm.',
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
  border-bottom: 2px dashed var(--fg-color);
}

.back-link {
  color: var(--fg-color);
  text-decoration: none;
}

.small-caps {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  letter-spacing: 2px;
}

.content-header {
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.display-title {
  font-size: 4rem;
  font-family: 'VT323', monospace;
  font-weight: 400;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.philosophy-stack {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 3rem;
}

.philosophy-block {
  border: 4px solid var(--fg-color);
  padding: 2rem 1.5rem;
  position: relative;
  background-color: var(--bg-color);
}

.block-number {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  position: absolute;
  top: -1.8rem;
  left: 1rem;
  background: var(--bg-color);
  padding: 0 0.5rem;
  line-height: 1;
}

.block-title {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 1rem 0 0 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.body-copy {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  line-height: 1.5;
  text-transform: uppercase;
  opacity: 0.9;
}

.center-quote-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.bg-dither {
  width: 100%;
  aspect-ratio: 1;
  mix-blend-mode: screen;
}

.bg-dither :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.quote-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.large-quote {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
}
</style>
