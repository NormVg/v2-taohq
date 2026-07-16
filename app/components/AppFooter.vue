<template>
  <BrutalistCard dashed class="app-footer">
    <div class="full-height-flex">
      
      <div class="center-banner">
        <div class="banner-inner">
          <div class="logo-icon"></div>
          <h1 class="logo-text-large">TAO.HQ</h1>
        </div>
      </div>
      
      <div class="bottom-line">
        <p class="text-right small-caps">Build what is necessary. Discard what is not.</p>
        <AnimatedSlashes :count="80" right class="mt-2" />
      </div>

      <div class="footer-links-grid mt-4">
        <div class="footer-col">
          <a href="https://github.com" target="_blank">GitHub //</a>
          <a href="https://x.com" target="_blank">X (Twitter) //</a>
          <a href="mailto:hello@taohq.org">Communicate //</a>
        </div>
      </div>

    </div>
  </BrutalistCard>
</template>

<style scoped>
.app-footer {
  /* To ensure consistent margin/padding if used outside index.vue */
  min-height: 100vh;
}
.full-height-flex {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.center-banner {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-inner {
  display: flex;
  align-items: center;
  background-color: var(--fg-color);
  color: var(--bg-color);
  padding: 2rem 4rem;
  width: 100%;
  border-top: 4px solid var(--fg-color);
  border-bottom: 4px solid var(--fg-color);
}
.logo-icon {
  width: 100px;
  height: 100px;
  background-color: var(--bg-color);
  margin-right: 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 60% 40%, 60% 100%, 0 100%);
}
.logo-text-large {
  font-size: 12vw;
  margin: 0;
  letter-spacing: -5px;
}

.bottom-line {
  margin-top: 2rem;
}
.small-caps {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.hr-line {
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 2px;
  font-size: 1rem;
}
.text-right {
  text-align: right;
}

.footer-links-grid {
  display: flex;
  justify-content: flex-end;
  padding: 4rem 4rem 2rem 4rem;
}
.footer-col {
  display: flex;
  gap: 2rem;
}
.footer-col a {
  color: var(--fg-color);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  text-decoration: none;
  transition: opacity 0.2s;
  text-transform: uppercase;
}
.footer-col a:hover {
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .logo-icon {
    width: 60px;
    height: 60px;
    margin-right: 2rem;
  }
  .banner-inner {
    padding: 1rem 2rem;
  }
  .footer-links-grid {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}
</style>
