<template>
  <main class="page-wrapper">
    <BrutalistCard dashed padding="4rem">
      <div class="header-split">
        <div class="left">
          <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
          <h1 class="display-title mt-8">TEAM // TAOHQ</h1>
        </div>
        <div class="right">
          <AnimatedSlashes :count="24" right />
          <p class="team-manifesto mt-8">
            An aggregate of independent nodes, synchronized by a shared terminal. We do not have titles. We have functions.
          </p>
        </div>
      </div>

      <div class="single-profile mt-16">
        <div class="profile-image-container">
          <!-- Placeholder image for Vishnu's profile. You can replace this with your own photo later! -->
          <DitherImage :src="vishnuPlaceholderImg" :pixelSize="4" />
        </div>
        <div class="profile-data">
          <div class="roster-row primary-node">
            <div class="col-id">001</div>
            <div class="col-name" style="font-size: 2rem;">VISHNU</div>
            <div class="col-role">FOUNDER // SOLE ARCHITECT</div>
            <div class="col-status"><span class="status-indicator active"></span> ONLINE</div>
          </div>
          <div class="bio-text mt-8">
            <p class="body-copy">
              The singular operational node behind TAOHQ. Dictating system architecture, brutalist design enforcement, and full-stack deployment from a centralized terminal.
            </p>
          </div>
        </div>
      </div>
    </BrutalistCard>
  </main>
</template>

<script setup>
import vishnuPlaceholderImg from '~/assets/team-vishnu.png'

useHead({
  title: 'TEAM // taohq'
})
</script>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}
.header-split {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-bottom: 2px solid var(--fg-color);
  padding-bottom: 4rem;
}
@media (min-width: 768px) {
  .header-split {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
.back-link {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  color: var(--fg-color);
  text-decoration: none;
  white-space: nowrap;
}
.back-link:hover {
  opacity: 0.7;
}
.display-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  margin: 0;
  line-height: 1;
}
.team-manifesto {
  font-size: 1.25rem;
  max-width: 400px;
  text-align: left;
}
@media (min-width: 768px) {
  .team-manifesto {
    text-align: right;
  }
}

.roster-list {
  display: flex;
  flex-direction: column;
}
.roster-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 2rem 0;
  border-bottom: 1px dashed var(--fg-color);
  align-items: center;
  transition: background-color 0.2s;
}
@media (min-width: 768px) {
  .roster-row {
    grid-template-columns: 80px 2fr 2fr 1fr;
    padding: 2rem 1rem;
  }
}
.roster-row:hover {
  background-color: rgba(21, 21, 21, 0.05);
}
.col-id {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  opacity: 0.5;
}
.col-name {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.col-role {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  text-transform: uppercase;
}
.col-status {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
@media (min-width: 768px) {
  .col-status {
    justify-content: flex-end;
  }
}
.status-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.status-indicator.active {
  background-color: var(--fg-color);
  box-shadow: 0 0 8px var(--fg-color);
  animation: pulse 2s infinite;
}
.status-indicator.inactive {
  background-color: transparent;
  border: 1px solid var(--fg-color);
}
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* Single Profile Styles */
.single-profile {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
@media (min-width: 1024px) {
  .single-profile {
    flex-direction: row;
    align-items: flex-start;
  }
}
.profile-image-container {
  flex: 0 0 auto;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  border: 2px solid var(--fg-color);
  overflow: hidden;
}
.profile-data {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.primary-node {
  border-bottom: 2px solid var(--fg-color);
}
.bio-text {
  max-width: 600px;
}
</style>
