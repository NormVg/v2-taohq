<script setup>
import skullFlower2 from '~/assets/skull-flower2.png'

useSeoMeta({
  title: 'CONTACT // Tao HQ',
  description: 'Direct communication channels.',
  ogTitle: 'CONTACT // Tao HQ',
  ogDescription: 'Direct communication channels.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
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
        <h1 class="display-title">INITIATE CONTACT</h1>
        <p class="subtitle mt-4">DIRECT FREQUENCIES ONLY.</p>
        <AnimatedSlashes :count="40" class="mt-8" />
      </div>
    </BrutalistCard>
      
    <BrutalistCard padding="4rem">
      <div class="contact-grid mt-8">
        <div class="visual-col">
          <div class="dither-wrap">
            <DitherImage :src="skullFlower2" />
          </div>
          <div class="overlay-text mt-4">
            <AnimatedSlashes :count="20" />
            <p class="mono-status mt-2">STATUS: ONLINE /// AWAITING SIGNAL</p>
          </div>
        </div>
        
        <div class="info-col">
          <p class="desc mb-12">We do not use contact forms. Reach out directly via the appropriate channel.</p>
          
          <div class="channel-group mb-12">
            <h2>GENERAL INQUIRIES</h2>
            <a href="mailto:hello@tao.hq" class="email-link">HELLO@TAO.HQ</a>
          </div>

          <div class="channel-group mb-12">
            <h2>SECURITY & INFRASTRUCTURE</h2>
            <a href="mailto:security@tao.hq" class="email-link">SECURITY@TAO.HQ</a>
          </div>

          <div class="channel-group">
            <h2>PGP PUBLIC KEY</h2>
            <div class="pgp-block mt-4">
              <pre>
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGI... [SECURE BLOCK INCOMPLETE] ...
... WAITING FOR KEY GENERATION ...
-----END PGP PUBLIC KEY BLOCK-----</pre>
            </div>
          </div>

        </div>
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

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 1rem 0 0 0;
  opacity: 0.8;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.visual-col {
  display: flex;
  flex-direction: column;
}

.dither-wrap {
  border: 4px solid var(--fg-color);
  height: 500px;
}
.dither-wrap :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mono-status {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0;
}

.info-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.desc {
  font-size: 1.5rem;
  line-height: 1.6;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    border-right: none;
    padding-right: 0;
  }
  .visual-col {
    border-right: none;
    padding-right: 0;
    border-bottom: 2px dashed var(--fg-color);
    padding-bottom: 2rem;
  }
}

.pgp-block pre {
  background: var(--fg-color);
  color: var(--bg-color);
  padding: 1.5rem;
  margin: 0;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  white-space: pre-wrap;
  word-break: break-all;
  border: 2px dashed var(--bg-color);
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
