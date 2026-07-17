<script setup>
import { onMounted } from 'vue'
import logoSvg from '~/assets/logo.svg'
import catImg from '~/assets/cat.png'

useHead({
  title: 'BRAND ASSETS // taohq'
})
</script>

<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="header-container mt-12">
        <h1 class="display-title">BRAND ASSETS</h1>
        <p class="subtitle mt-4">DO NOT ALTER THE GEOMETRY.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <BrutalistCard padding="4rem">
      <div class="assets-grid mt-8">
        
        <div class="asset-card">
          <div class="preview">
            <DitherImage :src="logoSvg" :pixelSize="1.0" colorLight="#151515" colorDark="#151515" />
          </div>
          <div class="details">
            <span class="label">PRIMARY MARK</span>
            <span class="desc">THE GEOMETRIC LOGO</span>
            <a :href="logoSvg" class="download" download>DL SVG</a>
          </div>
        </div>
        
        <div class="asset-card">
          <div class="preview logo-text-preview">
            <span class="italiano-font">TheAlphaOnes</span>
          </div>
          <div class="details">
            <span class="label">WORDMARK</span>
            <span class="desc">ITALIANNO SCRIPT</span>
            <span class="download disabled">FONT FILE ONLY</span>
          </div>
        </div>
        
        <div class="asset-card">
          <div class="preview">
            <DitherImage :src="catImg" :pixelSize="3.0" />
          </div>
          <div class="details">
            <span class="label">MASCOT</span>
            <span class="desc">DITHERED FELINE</span>
            <a :href="catImg" class="download" download>DL PNG</a>
          </div>
        </div>
      </div>
      
      <div class="rules mt-16">
        <h2 class="rules-heading">USAGE RULES</h2>
        <ul class="rules-list mt-8">
          <li>
            <span class="rule-num">01</span>
            <p>MAINTAIN MINIMUM CLEAR SPACE OF 40PX AROUND ALL LOGOMARKS.</p>
          </li>
          <li>
            <span class="rule-num">02</span>
            <p>DO NOT INVERT COLORS OUTSIDE OF THE APPROVED <NuxtLink to="/organization/design-language">DESIGN LANGUAGE</NuxtLink> PALETTE.</p>
          </li>
          <li>
            <span class="rule-num">03</span>
            <p>DO NOT STRETCH, ROTATE, OR DISTORT THE GEOMETRY OF ANY ASSET.</p>
          </li>
          <li>
            <span class="rule-num">04</span>
            <p>THE MASCOT MUST ONLY BE RENDERED IN DITHERED MONOCHROME USING THE WEBG/BAYER SHADER.</p>
          </li>
        </ul>
      </div>
    </BrutalistCard>

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
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}

.assets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.asset-card {
  border: 4px solid var(--fg-color);
  display: flex;
  flex-direction: column;
}

.preview {
  height: 250px;
  border-bottom: 4px solid var(--fg-color);
  position: relative;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview :deep(canvas), .preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2rem;
}

.logo-text-preview {
  font-size: 4rem;
  color: var(--fg-color);
}

.details {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--bg-color);
}

.label {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
}
.desc {
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 0.8;
}

.download {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-style: dashed;
  color: var(--fg-color);
  align-self: flex-start;
  margin-top: 1rem;
}
.download.disabled {
  text-decoration: none;
  opacity: 0.5;
  cursor: not-allowed;
}
.download:not(.disabled):hover {
  background-color: var(--fg-color);
  color: var(--bg-color);
  text-decoration: none;
}

.rules-heading {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
}

.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.rules-list li {
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: start;
  font-size: 1.2rem;
  line-height: 1.4;
  text-transform: uppercase;
}
.rule-num {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--fg-color);
}
.rules-list p {
  margin: 0;
}
.rules-list a {
  text-decoration: underline;
  text-decoration-style: dashed;
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
</style>
