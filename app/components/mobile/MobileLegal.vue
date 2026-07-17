<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import BrutalistCard from '~/components/BrutalistCard.vue'
</script>

<template>
  <main class="mobile-page-wrapper">
    <div class="top-nav mb-4">
      <NuxtLink to="/" class="nav-link">< RETURN</NuxtLink>
    </div>

    <BrutalistCard inverted dashed class="mobile-card mb-6">
      <div class="header-container">
        <p class="mono-label">DOC: LGL-001</p>
        <h1 class="display-title mt-2">LEGAL DOCTRINE</h1>
        <p class="subtitle mt-4">BINDING PROTOCOLS</p>
        <AnimatedSlashes :count="20" class="mt-4" />
      </div>
    </BrutalistCard>

    <BrutalistCard class="mobile-card mb-8">
      <div class="legal-body">
        
        <section id="section-1" class="legal-section">
          <h2 class="sec-heading">01. TERMS OF USE</h2>
          <p class="sec-body">By accessing this domain, you accept the reality of the systems we build. We provide infrastructure and aesthetic experiences. You agree to use them without malice, though we anticipate chaos. Your access is a privilege, revokable at any moment by our automated protocols.</p>
        </section>

        <section id="section-2" class="legal-section">
          <h2 class="sec-heading">02. DATA RETENTION</h2>
          <p class="sec-body">We log your presence. Telemetry is collected to optimize the void. We do not sell your data; we hoard it to understand human behavior in high-entropy environments. If you wish to erase your shadow, you must submit a formal cryptographic request.</p>
        </section>

        <section id="section-3" class="legal-section">
          <h2 class="sec-heading">03. LIABILITY</h2>
          <p class="sec-body">You assume all risks. If our code breaks your systems, induces existential dread, or corrupts your visual expectations, TAOHQ bears zero financial or moral liability. We deploy software as is, stripped of guarantees and artificial safety nets.</p>
        </section>

        <section id="section-4" class="legal-section">
          <h2 class="sec-heading">04. TERMINATION</h2>
          <p class="sec-body">We reserve the right to sever your connection at our discretion. If you violate our principles, your access will be abruptly and permanently terminated. There will be no appeal process. The system is final.</p>
        </section>

      </div>
    </BrutalistCard>
  </main>
</template>

<style scoped>
.mobile-page-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
}

.mobile-card {
  padding: 2rem 1.5rem;
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.nav-link {
  color: var(--fg-color);
  text-decoration: none;
}

.mono-label {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  margin: 0;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.8;
}

.legal-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.legal-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sec-heading {
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  margin: 0;
  border-bottom: 2px dashed var(--fg-color);
  padding-bottom: 0.5rem;
}

.sec-body {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  line-height: 1.4;
  opacity: 0.9;
  text-transform: uppercase;
}
</style>
