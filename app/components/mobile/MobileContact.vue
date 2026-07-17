<script setup>
import skullFlower2 from '~/assets/skull-flower2.png'
import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
</script>

<template>
  <main class="mobile-page-wrapper">
    <div class="top-nav">
      <NuxtLink to="/" class="nav-link">< RETURN</NuxtLink>
    </div>

    <!-- Header block -->
    <section class="mobile-section inverted-section border-b-dashed">
      <div class="mobile-section-content header-container">
        <h1 class="display-title">INITIATE CONTACT</h1>
        <p class="subtitle mt-2">DIRECT FREQUENCIES ONLY.</p>
        <AnimatedSlashes :count="20" class="mt-4" />
      </div>
    </section>
      
    <!-- Contact Details -->
    <section class="mobile-section">
      <div class="mobile-section-content">
        <div class="visual-col mb-8">
          <div class="dither-wrap">
            <DitherImage :src="skullFlower2" />
          </div>
          <div class="overlay-text mt-4">
            <AnimatedSlashes :count="10" />
            <p class="mono-status mt-2">STATUS: ONLINE<br/>AWAITING SIGNAL</p>
          </div>
        </div>
        
        <div class="info-col">
          <p class="desc mb-8">We do not use contact forms. Reach out directly via the appropriate channel.</p>
          
          <div class="channel-group mb-8">
            <h2>DIRECT / FOUNDER</h2>
            <a href="mailto:vishnu@taohq.org" class="email-link">VISHNU@TAOHQ.ORG</a>
          </div>

          <div class="channel-group mb-8">
            <h2>SUPPORT & OPERATIONS</h2>
            <a href="mailto:support@taohq.org" class="email-link">SUPPORT@TAOHQ.ORG</a>
          </div>

          <div class="channel-group mb-8">
            <h2>GENERAL INQUIRIES</h2>
            <a href="mailto:hello@taohq.org" class="email-link">HELLO@TAOHQ.ORG</a>
          </div>

          <div class="channel-group">
            <h2>PGP PUBLIC KEY</h2>
            <div class="pgp-block mt-4">
              <pre>
-----BEGIN PGP KEY-----
... WAITING FOR KEY ...
-----END PGP KEY-----</pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

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

.nav-link {
  color: var(--fg-color);
  text-decoration: none;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.8;
}

.visual-col {
  display: flex;
  flex-direction: column;
}

.dither-wrap {
  border: 2px solid var(--fg-color);
  height: 300px;
  width: 100%;
}
.dither-wrap :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mono-status {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  margin: 0;
}

.info-col {
  display: flex;
  flex-direction: column;
}

.desc {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  text-transform: uppercase;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 1rem;
}

.channel-group h2 {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  opacity: 0.7;
}

.email-link {
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  color: var(--fg-color);
  text-decoration: none;
  border-bottom: 2px solid var(--fg-color);
}

.pgp-block pre {
  background: var(--fg-color);
  color: var(--bg-color);
  padding: 1rem;
  margin: 0;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  border: 2px dashed var(--bg-color);
}
</style>
