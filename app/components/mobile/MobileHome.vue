<script setup>
import { ref, onMounted } from 'vue'
import eyeWallImg from '~/assets/eye-wall.png'
import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
</script>

<template>
  <div class="mobile-home-container">
    
    <!-- Hero Section -->
    <section class="mobile-section hero-section inverted-section">
      <div class="hero-content">
        <p class="small-caps">Every pixel tells a story.</p>
        <h1 class="italiano-font mobile-logo">TheAlphaOnes</h1>
        <AnimatedSlashes :count="15" />
      </div>
    </section>

    <!-- Stats / Intro Section -->
    <section class="mobile-section stats-section border-b-dashed">
      <div class="mobile-section-content">
        <h2 class="mobile-heading">Building thoughtful software, systems, and lifestyle products.</h2>
        <div class="dither-wrapper my-4">
          <DitherImage :src="eyeWallImg" />
        </div>
        <p class="body-text">TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.</p>
        <AnimatedSlashes :count="10" class="mt-4" />
      </div>
    </section>

    <!-- Navigation / Quick Links -->
    <section class="mobile-section nav-section inverted-section border-b-dashed">
      <div class="mobile-section-content flex-col gap-2">
        <h3 class="section-title mb-4">INDEX //</h3>
        <NuxtLink to="/products" class="mobile-nav-link">-> PRODUCTS</NuxtLink>
        <NuxtLink to="/studio" class="mobile-nav-link">-> STUDIO</NuxtLink>
        <NuxtLink to="/writing" class="mobile-nav-link">-> WRITING</NuxtLink>
        <NuxtLink to="/careers" class="mobile-nav-link">-> CAREERS</NuxtLink>
      </div>
    </section>

    <!-- Manifesto / Conclusion -->
    <section class="mobile-section manifesto-section">
      <div class="mobile-section-content">
        <h3 class="section-title mb-4">MANIFESTO //</h3>
        <p class="body-text">We build digital machinery. Brutalist interfaces, zero-latency APIs, and uncompromising brand identities.</p>
        <p class="body-text mt-4">For the ambitious, the bold, the alpha ones.</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.mobile-home-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
  max-width: 100%;
}

.mobile-section {
  width: 100%;
  display: flex;
  flex-direction: column;
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

/* Hero */
.hero-section {
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-bottom: 2px dashed var(--bg-color);
}

.mobile-logo {
  font-size: 5rem;
  margin: 2rem 0;
  line-height: 1;
}

.small-caps {
  font-family: 'VT323', monospace;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

/* Typography */
.mobile-heading {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.body-text {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  line-height: 1.4;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.5rem;
  display: inline-block;
}

/* Links */
.mobile-nav-link {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px dashed currentColor;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.gap-2 {
  gap: 1rem;
}

/* Dither specific */
.dither-wrapper {
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--fg-color);
}
</style>
