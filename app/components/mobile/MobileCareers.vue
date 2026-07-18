<script setup>
import skullBreakImg from '~/assets/skull-break.png'
import DitherImage from '~/components/DitherImage.vue'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
</script>

<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero
      eyebrow="/// RECRUITMENT"
      subtitle="We are not looking for employees. We are looking for zealots."
      title="ABANDON MEDIOCRITY"
    >
      <template #title>ABANDON<br>MEDIOCRITY</template>
    </MobilePageHero>

    <section class="mobile-section border-b-dashed">
      <div class="mobile-section-content">
        <div class="image-wrapper">
          <DitherImage :src="skullBreakImg" :pixelSize="4.0" />
        </div>
      </div>
    </section>

    <section class="mobile-section">
      <div class="mobile-section-content">
        <div class="roles-header mb-6">
          <h2 class="section-title">OPEN POSITIONS</h2>
          <AnimatedSlashes :count="10" class="mt-2" />
        </div>
        
        <div class="roles-stack">
          
          <div class="role-card inverted-role">
            <div class="role-meta">LEADERSHIP /// REMOTE</div>
            <h3>FOUNDING MEMBER (BUSINESS)</h3>
            <p class="role-desc">Shape the operational and business trajectory of TAOHQ. We have the engineering; we need the strategic mind to scale the organization without compromising the philosophy.</p>
            <a href="mailto:hello@taohq.org?subject=Founding Member Application" class="brutal-btn mt-4">TRANSMIT DOSSIER</a>
          </div>

          <div class="role-card">
            <div class="role-meta">CONTENT /// REMOTE</div>
            <h3>CONTENT STRATEGIST</h3>
            <p class="role-desc">You write like a technical architect. No marketing fluff. No buzzwords. You will document our research, philosophies, and product launches with clarity and authority.</p>
            <a href="mailto:hello@taohq.org?subject=Content Strategist Application" class="brutal-btn mt-4">TRANSMIT DOSSIER</a>
          </div>

          <div class="role-card">
            <div class="role-meta">COMMUNITY /// REMOTE</div>
            <h3>EVANGELIST</h3>
            <p class="role-desc">Bridge the gap between our infrastructure and the public domain. Build a community of engineers and designers who resonate with digital asceticism.</p>
            <a href="mailto:hello@taohq.org?subject=Evangelist Application" class="brutal-btn mt-4">TRANSMIT DOSSIER</a>
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

.eyebrow {
  font-family: 'VT323', monospace;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin: 0;
  opacity: 0.8;
}

.display-title {
  font-family: 'VT323', monospace;
  font-size: 3.5rem;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
}

.subtitle {
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 0;
  opacity: 0.9;
  text-transform: uppercase;
}

.image-wrapper {
  border: 2px solid var(--fg-color);
  height: 350px;
  width: 100%;
}
.image-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-title {
  font-family: 'VT323', monospace;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 0.5rem;
  margin: 0;
  text-transform: uppercase;
  display: inline-block;
}

.roles-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.role-card {
  border: 2px solid var(--fg-color);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.inverted-role {
  background: var(--fg-color);
  color: var(--bg-color);
  border-color: var(--bg-color);
}

.role-meta {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  opacity: 0.8;
  border-bottom: 1px dashed currentColor;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.role-card h3 {
  font-family: 'VT323', monospace;
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  text-transform: uppercase;
}

.role-desc {
  font-family: 'VT323', monospace;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  flex-grow: 1;
  text-transform: uppercase;
}

.brutal-btn {
  display: block;
  background: transparent;
  color: currentColor;
  border: 2px solid currentColor;
  padding: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
