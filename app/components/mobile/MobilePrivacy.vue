<script setup lang="ts">
import MobilePageHero from '~/components/mobile/MobilePageHero.vue'
import PrivacyBlocks from '~/components/privacy/PrivacyBlocks.vue'
import { PRIVACY_POLICY_META, PRIVACY_POLICY_SECTIONS } from '~/constants/privacy-policy'

const sectionNumber = (index: number) => String(index).padStart(2, '0')
</script>

<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      :eyebrow="`DOC: ${PRIVACY_POLICY_META.documentId}`"
      title="PRIVACY POLICY"
      :subtitle="`UPDATED ${PRIVACY_POLICY_META.lastUpdated.toUpperCase()}`"
    />

    <section class="mobile-section">
      <div class="mobile-section-content legal-body">
        <section
          v-for="(section, index) in PRIVACY_POLICY_SECTIONS"
          :id="section.id"
          :key="section.id"
          class="legal-section"
        >
          <h2 class="sec-heading">{{ sectionNumber(index) }}. {{ section.title.toUpperCase() }}</h2>
          <PrivacyBlocks :blocks="section.blocks" class="sec-body" />
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
}
</style>
