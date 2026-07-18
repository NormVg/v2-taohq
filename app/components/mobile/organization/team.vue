<template>
  <main class="mobile-page-wrapper">
    <MobilePageHero title="TEAM // TAOHQ" :slash-count="24">
      <template #hero-body>
        <p class="team-manifesto-hero">
          An aggregate of independent nodes, synchronized by a shared terminal. We do not have titles. We have functions.
        </p>
      </template>
    </MobilePageHero>

    <section class="mobile-section">
      <div class="mobile-section-content">
        
        <div class="single-profile">
          <div class="profile-image-container">
            <DitherImage :src="vishnuPlaceholderImg" :pixelSize="4" />
          </div>
          
          <div class="profile-data mt-6">
            <div class="roster-row primary-node">
              <div class="col-id">001</div>
              <div class="col-name">VISHNU</div>
              <div class="col-role mt-2">FOUNDER // SOLE ARCHITECT</div>
              <div class="col-status mt-2">
                <span class="status-indicator active"></span> ONLINE
              </div>
            </div>
            
            <div class="bio-text mt-6">
              <p class="body-copy">
                The singular operational node behind TAOHQ. Dictating system architecture, brutalist design enforcement, and full-stack deployment from a centralized terminal.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import vishnuPlaceholderImg from '~/assets/team-vishnu.png'
import AnimatedSlashes from '~/components/AnimatedSlashes.vue'
import DitherImage from '~/components/DitherImage.vue'

useSeoMeta({
  title: 'TEAM // TheAlphaOnes',
  description: 'Explore TEAM at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogTitle: 'TEAM // TheAlphaOnes',
  ogDescription: 'Explore TEAM at TheAlphaOnes. We believe software should feel understandable, durable, and calm.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

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

.border-b-dashed {
  border-bottom: 2px dashed var(--fg-color);
}

.top-nav {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1rem 1.25rem;
  border-bottom: 2px dashed var(--fg-color);
}

.back-link {
  color: var(--fg-color);
  text-decoration: none;
}

.display-title {
  font-size: 4rem;
  font-family: 'VT323', monospace;
  font-weight: 400;
  margin: 0;
  line-height: 1;
}

.team-manifesto-hero {
  font-family: 'VT323', monospace;
  font-size: 1.15rem;
  line-height: 1.4;
  text-transform: uppercase;
  margin: 1rem 0 0;
  opacity: 0.9;
}

.team-manifesto {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.4;
  text-transform: uppercase;
}

.profile-image-container {
  width: 100%;
  aspect-ratio: 1;
  border: 4px solid var(--fg-color);
}
.profile-image-container :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.roster-row {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 2px dashed var(--fg-color);
}

.col-id {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  opacity: 0.5;
}

.col-name {
  font-family: 'VT323', monospace;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.col-role {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--fg-color);
}

.col-status {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: transparent;
  border: 1px solid var(--fg-color);
}
.status-indicator.active {
  background-color: var(--fg-color);
  animation: pulse 2s infinite;
}

.body-copy {
  font-family: 'VT323', monospace;
  font-size: 1.3rem;
  line-height: 1.5;
  text-transform: uppercase;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.2; }
  100% { opacity: 1; }
}
</style>
