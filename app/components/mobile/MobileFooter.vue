<template>
  <footer class="mobile-footer">
    <div class="footer-brand mb-12">
      <h2 class="display-title">TAO HQ</h2>
      <p class="small-caps mt-2">Build what is necessary. Discard what is not.</p>
    </div>

    <div class="footer-links-grid">
      <!-- Core -->
      <div class="footer-group">
        <h3 class="footer-heading">CORE //</h3>
        <div class="footer-links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/studio">Studio</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/writing">Writing</NuxtLink>
          <NuxtLink to="/careers">Careers</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>

      <!-- Foundation -->
      <div class="footer-group">
        <h3 class="footer-heading">FOUNDATION //</h3>
        <div class="footer-links">
          <NuxtLink to="/organization/about">About</NuxtLink>
          <NuxtLink to="/organization/philosophy">Philosophy</NuxtLink>
          <NuxtLink to="/organization/principles">Principles</NuxtLink>
          <NuxtLink to="/organization/team">Team</NuxtLink>
          <NuxtLink to="/organization/timeline">Timeline</NuxtLink>
          <NuxtLink to="/organization/infrastructure">Infrastructure</NuxtLink>
        </div>
      </div>

      <!-- Systems -->
      <div class="footer-group">
        <h3 class="footer-heading">SYSTEMS //</h3>
        <div class="footer-links">
          <NuxtLink to="/organization/design-language">Design</NuxtLink>
          <NuxtLink to="/organization/technology">Technology</NuxtLink>
          <NuxtLink to="/organization/open-source">Open Source</NuxtLink>
          <NuxtLink to="/organization/brand-assets">Brand Assets</NuxtLink>
        </div>
      </div>
      
      <!-- Connect -->
      <div class="footer-group">
        <h3 class="footer-heading">CONNECT //</h3>
        <div class="footer-links">
          <a href="https://github.com/TheAlphaOnes/" target="_blank">GitHub</a>
          <a href="https://x.com/TheNormVg" target="_blank">X (Twitter)</a>
          <a href="mailto:hello@taohq.org">Communicate</a>
        </div>
      </div>
    </div>
    
    <div class="footer-divider"></div>
    
    <div class="footer-bottom">
      <NuxtLink to="/legal" class="legal-link">LEGAL //</NuxtLink>
      <p class="copyright">© 2026 TAOHQ.<br>ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>

<style scoped>
.mobile-footer {
  padding: 4rem 1.5rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
  font-family: 'VT323', monospace;
}

.footer-brand {
  border-bottom: 2px dashed var(--bg-color);
  padding-bottom: 2rem;
  margin-bottom: 3rem;
}

.display-title {
  font-size: 3.5rem;
  margin: 0;
  line-height: 1;
  letter-spacing: -2px;
}

.small-caps {
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  margin: 0;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem 1.5rem;
}

.footer-group {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 1.25rem;
  text-transform: uppercase;
  margin: 0 0 1.5rem 0;
  opacity: 0.5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--bg-color);
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: uppercase;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.footer-links a:hover,
.footer-links a:active {
  opacity: 1;
  text-decoration: underline;
}

.footer-divider {
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(to right, var(--bg-color) 0, var(--bg-color) 10px, transparent 10px, transparent 20px);
  margin: 3rem 0;
  opacity: 0.5;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.1rem;
}

.legal-link {
  color: var(--bg-color);
  text-decoration: none;
  font-size: 1.4rem;
}

.copyright {
  margin: 0;
  opacity: 0.6;
  text-align: right;
  line-height: 1.4;
}
</style>
