<script setup>
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import MobilePageHero from '~/components/mobile/MobilePageHero.vue'
</script>

<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      eyebrow="DOC: PRV-001"
      title="PRIVACY DOCTRINE"
      subtitle="DATA AND TELEMETRY"
    />

    <section class="mobile-section">
      <div class="mobile-section-content legal-body">
        
        <section id="welcome" class="legal-section">
          <h2 class="sec-heading">00. WELCOME</h2>
          <p class="sec-body">This is our universal privacy doctrine. It applies to all domains, applications, and digital machinery built and maintained by TheAlphaOnes. We respect your data, but we do not sugarcoat reality. Read carefully.</p>
        </section>

        <section id="collection" class="legal-section">
          <h2 class="sec-heading">01. COLLECTION</h2>
          <p class="sec-body">We log what is necessary to keep the systems running. Authentication tokens, basic identity parameters, and essential configurations are stored securely. We do not hoard personal details beyond what you willingly provide to use our infrastructure.</p>
        </section>

        <section id="telemetry" class="legal-section">
          <h2 class="sec-heading">02. TELEMETRY</h2>
          <p class="sec-body">Telemetry is collected to optimize the void. We track system performance, crash reports, and interface interactions to ensure brutal efficiency. This data is anonymized where possible. You are a metric in the machine, helping it evolve.</p>
        </section>

        <section id="third-party" class="legal-section">
          <h2 class="sec-heading">03. THIRD PARTY</h2>
          <p class="sec-body">We do not sell your data. We have no interest in ad-tech or behavioral manipulation. However, our infrastructure relies on external providers (e.g., Cloudflare, Vercel). Your data traverses their networks, subject to their respective security doctrines.</p>
        </section>

        <section id="erasure" class="legal-section">
          <h2 class="sec-heading">04. ERASURE</h2>
          <p class="sec-body">You have the right to disappear. If you wish to erase your shadow from our databases, submit a formal request. We will obliterate your existence from our active systems, leaving only cryptographic ghosts where legally mandated.</p>
        </section>

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
