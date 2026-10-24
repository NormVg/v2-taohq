<script setup lang="ts">
/**
 * Lavender footer band (the 30% accent): link columns, the cat on its
 * dashed corner, a giant wordmark, and the legal line.
 */
import { CONTACT_NAV, LEGAL_NAV, PRIMARY_NAV, SITE, SOCIAL_LINKS } from '~/constants/site'

const { data: products } = useProducts()
const year = new Date().getFullYear()

const columns = computed(() => [
  { title: 'Products', links: products.value.map(product => ({ label: product.title, to: product.path })) },
  { title: 'taohq', links: [...PRIMARY_NAV.filter(item => item.to !== '/products'), CONTACT_NAV] },
  { title: 'Elsewhere', links: SOCIAL_LINKS.map(link => ({ label: `${link.label} ${link.handle}`, to: link.href })) },
])
</script>

<template>
  <footer class="footer" data-tone="accent">
    <AppContainer>
      <div v-reveal class="footer__top">
        <nav class="footer__columns" aria-label="Footer">
          <div
            v-for="(column, index) in columns"
            :key="column.title"
            class="footer__column"
            data-reveal="rise"
            :style="{ '--reveal-delay': `${index * 80}ms`, '--reveal-duration': `${480 + index * 90}ms` }"
          >
            <AppLabel as="h2" :index="String(index + 1).padStart(2, '0')">{{ column.title }}</AppLabel>
            <ul role="list">
              <li v-for="link in column.links" :key="link.to">
                <AppLink :to="link.to">{{ link.label }}</AppLink>
              </li>
            </ul>
          </div>
        </nav>
        <FooterCat class="footer__cat" data-reveal="rise-slow" style="--reveal-delay: 260ms" />
      </div>

      <p class="footer__wordmark" aria-hidden="true">{{ SITE.name }}</p>

      <div class="footer__bottom">
        <p>© {{ year }} {{ SITE.name }} · Operated by {{ SITE.legalName }}, India</p>
        <div class="footer__meta">
          <AppLink v-for="item in LEGAL_NAV" :key="item.to" :to="item.to">{{ item.label }}</AppLink>
          <SoundToggle />
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: var(--space-16);
  background: var(--surface-page);
  color: var(--text-primary);
  overflow: hidden;
}

.footer__top {
  display: grid;
  gap: var(--space-12);
  align-items: end;
}

.footer__columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: var(--space-8);
}

.footer__column ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-4);
  font-size: var(--text-small);
}

.footer__cat {
  justify-self: end;
  max-width: 12rem;
}

.footer__wordmark {
  margin-block: var(--space-8) var(--space-6);
  font-family: var(--font-display);
  font-size: clamp(6rem, 26vw, 24rem);
  /* Tight leading, but enough to keep the q's descender off the rule below. */
  line-height: 0.92;
  letter-spacing: -0.02em;
  user-select: none;
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-block: var(--space-4) var(--space-6);
  border-top: 1px solid var(--line);
  font-size: var(--text-ui);
  letter-spacing: var(--tracking-ui);
  text-transform: uppercase;
}

.footer__meta {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

@media (min-width: 900px) {
  .footer__top {
    grid-template-columns: 1fr auto;
  }

  .footer__cat {
    max-width: 14rem;
  }
}
</style>
