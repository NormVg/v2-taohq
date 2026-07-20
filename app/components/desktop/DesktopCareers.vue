<script setup>
import skullBreakImg from '~/assets/skull-break.png'

useSeoMeta({
  title: 'CAREERS // TheAlphaOnes',
  description: 'Join us. Build what is necessary. Discard what is not.',
  ogTitle: 'CAREERS // TheAlphaOnes',
  ogDescription: 'Join us. Build what is necessary. Discard what is not.',
  ogImage: 'https://v2.taohq.org/og.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="page-wrapper">
    <BrutalistCard inverted dashed padding="4rem" class="careers-hero">
      <div class="top-nav">
        <NuxtLink to="/" class="back-link">&lt;&lt; RETURN</NuxtLink>
        <AnimatedSlashes :count="12" right />
      </div>
      <div class="grid-2-col mt-12">
        <div class="col-left">
          <p class="eyebrow">/// RECRUITMENT</p>
          <h1 class="giant-text">ABANDON<br/>MEDIOCRITY</h1>
          <p class="subtext">We are not looking for employees. We are looking for zealots. We build systems that outlive us. If you value durable engineering over startup hype, step forward.</p>
          <AnimatedSlashes :count="40" class="mt-4" />
        </div>
        <div class="col-right">
          <div class="image-wrapper">
             <DitherImage :src="skullBreakImg" :pixelSize="4.0" />
          </div>
        </div>
      </div>
    </BrutalistCard>

    <BrutalistCard padding="4rem" class="open-roles">
       <div class="roles-header">
         <h2>OPEN POSITIONS</h2>
         <AnimatedSlashes :count="20" right />
       </div>
       <div class="roles-grid">
         
         <div class="role-card inverted-role" v-hover-sound>
           <div class="role-meta">LEADERSHIP /// REMOTE</div>
           <h3>FOUNDING MEMBER (BUSINESS)</h3>
           <p>Shape the operational and business trajectory of TAOHQ. We have the engineering; we need the strategic mind to scale the organization without compromising the philosophy.</p>
           <a href="mailto:hello@tao.hq?subject=Founding Member Application" class="brutal-btn" v-sound v-hover-sound>TRANSMIT DOSSIER</a>
         </div>

         <div class="role-card" v-hover-sound>
           <div class="role-meta">CONTENT /// REMOTE</div>
           <h3>CONTENT STRATEGIST</h3>
           <p>You write like a technical architect. No marketing fluff. No buzzwords. You will document our research, philosophies, and product launches with clarity and authority.</p>
           <a href="mailto:hello@tao.hq?subject=Content Strategist Application" class="brutal-btn" v-sound v-hover-sound>TRANSMIT DOSSIER</a>
         </div>

         <div class="role-card" v-hover-sound>
           <div class="role-meta">COMMUNITY /// REMOTE</div>
           <h3>EVANGELIST</h3>
           <p>Bridge the gap between our infrastructure and the public domain. Build a community of engineers and designers who resonate with digital asceticism.</p>
           <a href="mailto:hello@tao.hq?subject=Evangelist Application" class="brutal-btn" v-sound v-hover-sound>TRANSMIT DOSSIER</a>
         </div>
         
      </div>
    </BrutalistCard>
  </main>
</template>

<style scoped>
.page-wrapper {
  background-color: var(--bg-color);
  color: var(--fg-color);
  min-height: 100vh;
}
.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.eyebrow {
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  opacity: 0.8;
}
.giant-text {
  font-size: clamp(4rem, 10vw, 8rem);
  line-height: 0.85;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
}
.subtext {
  font-size: 1.5rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 45ch;
  text-transform: uppercase;
}
.image-wrapper {
  border: 4px solid var(--bg-color);
  padding: 1rem;
  position: relative;
  height: 500px;
}
.image-wrapper :deep(canvas) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.open-roles {
  display: flex;
  flex-direction: column;
}
.roles-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 4px solid var(--fg-color);
  padding-bottom: 1rem;
  margin-bottom: 4rem;
}
.roles-header h2 {
  font-family: 'VT323', monospace;
  font-size: 3rem;
  margin: 0;
  line-height: 1;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.role-card {
  border: 4px solid var(--fg-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 100ms;
}
.role-card:hover {
  transform: scale(0.99);
}
.inverted-role {
  background: var(--fg-color);
  color: var(--bg-color);
  border-color: var(--bg-color);
}
.role-meta {
  font-family: 'VT323', monospace;
  font-size: 1.25rem;
  opacity: 0.7;
  border-bottom: 1px dashed currentColor;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
.role-card h3 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  text-transform: uppercase;
}
.role-card p {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  flex-grow: 1;
  text-transform: uppercase;
}

.brutal-btn {
  display: inline-block;
  background: transparent;
  color: currentColor;
  border: 2px solid currentColor;
  padding: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.role-card:not(.inverted-role) .brutal-btn:hover {
  background: var(--fg-color);
  color: var(--bg-color);
}
.inverted-role .brutal-btn:hover {
  background: var(--bg-color);
  color: var(--fg-color);
}

@media (max-width: 1024px) {
  .grid-2-col {
    grid-template-columns: 1fr;
    align-items: flex-start;
    gap: 1rem;
  }
  .roles-header h2 {
    font-size: 2.5rem;
  }
}
</style>
