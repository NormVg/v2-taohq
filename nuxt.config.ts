// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE } from './app/constants/site'

const FONT_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&family=VT323&display=swap'

/** Old URLs from the previous site, kept alive so links and search results never 404. */
const LEGACY_REDIRECTS = {
  '/organization/**': { redirect: { to: '/about', statusCode: 301 } },
  '/careers': { redirect: { to: '/about', statusCode: 301 } },
  '/products/tao-canvas': { redirect: { to: '/products', statusCode: 301 } },
  '/products/tao-identity': { redirect: { to: '/products', statusCode: 301 } },
  '/products/rose-demon': { redirect: { to: '/products', statusCode: 301 } },
  '/writing/01-first-log': { redirect: { to: '/writing', statusCode: 301 } },
  '/writing/good-infrastructure-is-invisible': { redirect: { to: '/writing', statusCode: 301 } },
  '/writing/the-case-for-brutalist-architecture': { redirect: { to: '/writing', statusCode: 301 } },
} as const

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  // Folders group components by layer (ui/, layout/, product/…); names come from the file alone.
  components: [{ path: '~/components', pathPrefix: false }],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@vercel/analytics/nuxt',
  ],

  /** Read by every @nuxtjs/seo sub-module (sitemap, robots, schema.org, meta). */
  site: {
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    defaultLocale: SITE.locale,
  },

  seo: {
    meta: {
      themeColor: '#c4b5e3',
      twitterSite: '@TheNormVg',
      twitterCreator: '@TheNormVg',
    },
  },

  // A static /og.png is shared by every page; per-page generated images are not needed yet.
  ogImage: { enabled: false },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: SITE.name,
      alternateName: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/favicon.svg`,
      email: SITE.email,
      sameAs: ['https://x.com/TheNormVg', 'https://github.com/NormVg'],
    },
  },

  linkChecker: { enabled: false },

  content: {
    build: {
      markdown: {
        // rose-pine: muted ink + iris (#c4a7e7, near our lavender). Nuxt Content only
        // loads Shiki's bundled themes by name, so this is the closest stock match.
        highlight: { theme: 'rose-pine', langs: ['bash', 'js', 'ts', 'vue', 'json', 'html', 'css'] },
      },
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: SITE.locale },
      titleTemplate: '%s %separator %siteName',
      templateParams: { separator: '·' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: FONT_STYLESHEET },
        { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'llms.txt' },
      ],
      script: [
        // Runs before first paint so reveal animations start hidden instead of flashing.
        // Failsafe: if the app hasn't booted within 3s (slow network, blocked JS),
        // drop the class so all content shows without animation.
        {
          innerHTML: 'document.documentElement.classList.add(\'js\');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove(\'js\')},3000)',
          tagPosition: 'head',
        },
      ],
    },
  },

  routeRules: {
    ...LEGACY_REDIRECTS,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt', '/llms.txt', '/llms-full.txt'],
    },
  },
})
