<script setup>
useSeoMeta({
  title: 'PRIVACY // TheAlphaOnes',
  description: 'Universal privacy policy and data doctrines.',
  ogTitle: 'PRIVACY // TheAlphaOnes',
  ogDescription: 'Universal privacy policy and data doctrines.',
  ogImage: 'https://taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem" class="legal-hero">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="legal-header mt-12">
        <div class="left-mark">
          <p class="mono-label">DOCUMENT NO: PRV-001</p>
          <AnimatedSlashes :count="15" />
        </div>
        <h1 class="display-title">PRIVACY DOCTRINE</h1>
        <p class="doc-desc mt-4">UNIVERSAL DATA AND TELEMETRY POLICY</p>
      </div>
    </BrutalistCard>

    <BrutalistCard padding="4rem">
      <div class="legal-body">
        <div class="sidebar">
          <ul class="toc">
            <li><a href="#welcome" v-sound v-hover-sound>00_WELCOME</a></li>
            <li><a href="#collection" v-sound v-hover-sound>01_COLLECTION</a></li>
            <li><a href="#telemetry" v-sound v-hover-sound>02_TELEMETRY</a></li>
            <li><a href="#third-party" v-sound v-hover-sound>03_THIRD_PARTY</a></li>
            <li><a href="#erasure" v-sound v-hover-sound>04_ERASURE</a></li>
          </ul>
        </div>
        <div class="content">
          <section id="welcome" class="legal-section">
            <h2 class="sec-heading">00. WELCOME</h2>
            <p>This is our universal privacy doctrine. It applies to all domains, applications, and digital machinery built and maintained by TheAlphaOnes. We respect your data, but we do not sugarcoat reality. Read carefully.</p>
          </section>

          <section id="collection" class="legal-section">
            <h2 class="sec-heading">01. COLLECTION</h2>
            <p>We log what is necessary to keep the systems running. Authentication tokens, basic identity parameters, and essential configurations are stored securely. We do not hoard personal details beyond what you willingly provide to use our infrastructure.</p>
          </section>

          <section id="telemetry" class="legal-section">
            <h2 class="sec-heading">02. TELEMETRY</h2>
            <p>Telemetry is collected to optimize the void. We track system performance, crash reports, and interface interactions to ensure brutal efficiency. This data is anonymized where possible. You are a metric in the machine, helping it evolve.</p>
          </section>

          <section id="third-party" class="legal-section">
            <h2 class="sec-heading">03. THIRD PARTY</h2>
            <p>We do not sell your data. We have no interest in ad-tech or behavioral manipulation. However, our infrastructure relies on external providers (e.g., Cloudflare, Vercel). Your data traverses their networks, subject to their respective security doctrines.</p>
          </section>

          <section id="erasure" class="legal-section">
            <h2 class="sec-heading">04. ERASURE</h2>
            <p>You have the right to disappear. If you wish to erase your shadow from our databases, submit a formal request. We will obliterate your existence from our active systems, leaving only cryptographic ghosts where legally mandated.</p>
          </section>
        </div>
      </div>
    </BrutalistCard>

    <div class="fixed-logo-wrapper">
      <div class="logo-inner-anim">
        <a href="#" class="logo-hover-target" aria-label="TheAlphaOnes logo" @click.prevent v-hover-sound="{ type: 'drop', feel: 'glass' }">
          <img src="~/assets/logo.svg" alt="TAO Logo" class="flipping-logo" />
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
}
.legal-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 50vh;
}
.mono-label {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--bg-color);
}
.doc-title {
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 0.8;
  margin: 2rem 0;
  text-transform: uppercase;
}
.doc-desc {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  opacity: 0.7;
}

.legal-body {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 4rem;
  align-items: start;
}
.sidebar {
  position: sticky;
  top: 2rem;
  border-right: 2px solid var(--fg-color);
  padding-right: 2rem;
}
.toc {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.toc a {
  display: block;
  padding: 0.5rem 0;
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  color: var(--fg-color);
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
}
.toc a:hover {
  opacity: 1;
}
.toc a:active {
  transform: scale(0.96);
  transform-origin: left;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.legal-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.sec-heading {
  font-family: 'VT323', monospace;
  font-size: 2rem;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}
.legal-section p {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 70ch;
}

@media (max-width: 900px) {
  .legal-body {
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: static;
    border-right: none;
    border-bottom: 2px solid var(--fg-color);
    padding-right: 0;
    padding-bottom: 2rem;
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
</style>
