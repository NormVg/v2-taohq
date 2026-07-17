<template>
  <footer class="mobile-footer">
    <div class="footer-links">
      <NuxtLink to="/">Home //</NuxtLink>
      <NuxtLink to="/studio">Studio //</NuxtLink>
      <NuxtLink to="/products">Products //</NuxtLink>
      <NuxtLink to="/writing">Writing //</NuxtLink>
      <NuxtLink to="/careers">Careers //</NuxtLink>
      <NuxtLink to="/contact">Contact //</NuxtLink>
      <NuxtLink to="/legal">Legal //</NuxtLink>
    </div>
    
    <div class="footer-divider"></div>
    
    <div class="footer-bottom">
      <p class="copyright">© 2026 TAOHQ. ALL RIGHTS RESERVED.</p>
      <a href="mailto:hello@taohq.org">HELLO@TAOHQ.ORG</a>
    </div>
  </footer>
</template>

<style scoped>
.mobile-footer {
  padding: 3rem 1.5rem;
  background-color: var(--fg-color);
  color: var(--bg-color);
  font-family: 'VT323', monospace;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links a {
  color: var(--bg-color);
  font-size: 1.8rem;
  text-decoration: none;
  text-transform: uppercase;
}

.footer-divider {
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(to right, var(--bg-color) 0, var(--bg-color) 10px, transparent 10px, transparent 20px);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
}

.footer-bottom a {
  color: var(--bg-color);
  text-decoration: none;
}

.copyright {
  margin: 0;
  opacity: 0.8;
}
</style>
