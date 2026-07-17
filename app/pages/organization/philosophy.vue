<template>
  <main class="page-wrapper">
    <BrutalistCard dashed>
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <span class="small-caps">PHILOSOPHY</span>
      </div>

      <div class="content-header mt-12">
        <h1 class="display-title">DIGITAL ASCETICISM</h1>
      </div>

      <div class="philosophy-grid mt-16">
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
    </BrutalistCard>

    <BrutalistCard inverted>
      <div class="quote-wrapper">
        <div class="bg-dither">
          <DitherImage :src="treeSkullImg" :pixelSize="4" />
        </div>
        <div class="center-quote">
          <h2 class="large-quote">"THE MACHINE MUST BE COLD, SO THE HUMAN CAN BE WARM."</h2>
          <AnimatedSlashes :count="30" class="mt-8" />
        </div>
      </div>
    </BrutalistCard>
  </main>
</template>

<script setup>
import treeSkullImg from '~/assets/skull-moon.png'

useHead({
  title: 'PHILOSOPHY // taohq'
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
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 1rem;
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--fg-color);
  text-decoration: none;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}
.small-caps {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  letter-spacing: 2px;
}
.content-header {
  text-align: center;
  padding: 4rem 0;
}
.display-title {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 400;
  line-height: 1;
  margin: 0;
}
.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}
@media (min-width: 1024px) {
  .philosophy-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.philosophy-block {
  border: 2px solid var(--fg-color);
  padding: 2rem;
  position: relative;
}
.block-number {
  font-family: 'VT323', monospace;
  font-size: 4rem;
  position: absolute;
  top: -2.5rem;
  left: 1rem;
  background: var(--bg-color);
  padding: 0 0.5rem;
  line-height: 1;
}
.block-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  border-bottom: 1px dashed var(--fg-color);
  padding-bottom: 1rem;
}
.body-copy {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.85;
}
.center-quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 50vh;
  position: relative;
  z-index: 10;
}
.quote-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.bg-dither {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 1;
  pointer-events: none;
}
.bg-dither :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.large-quote {
  font-family: 'VT323', monospace;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1.1;
  max-width: 800px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
}
</style>
