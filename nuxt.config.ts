// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://taohq.org'
const SITE_NAME = 'TheAlphaOnes'
const SITE_DESCRIPTION =
  'TheAlphaOnes builds thoughtful software, developer tools, and digital infrastructure. Calm interfaces, durable systems, and long-term craft.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@vercel/analytics/nuxt',
    '@nuxtjs/device',
  ],



  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: SITE_NAME,
      titleTemplate: (title) => title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESCRIPTION },
        { name: 'author', content: SITE_NAME },
        { name: 'creator', content: SITE_NAME },
        { name: 'publisher', content: SITE_NAME },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        // AI / answer-engine friendly
        { name: 'ai-content-declaration', content: 'human-authored' },
        { name: 'llms', content: `${SITE_URL}/llms.txt` },

        // Open Graph
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: SITE_NAME },
        { property: 'og:description', content: SITE_DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: `${SITE_URL}/og.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${SITE_NAME} — thoughtful software & infrastructure` },
        { property: 'og:locale', content: 'en_US' },

        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@TheNormVg' },
        { name: 'twitter:creator', content: '@TheNormVg' },
        { name: 'twitter:title', content: SITE_NAME },
        { name: 'twitter:description', content: SITE_DESCRIPTION },
        { name: 'twitter:image', content: `${SITE_URL}/og.png` },

        // GEO (India HQ / global presence)
        { name: 'geo.region', content: 'IN' },
        { name: 'geo.placename', content: 'India' },
        { name: 'geo.position', content: '20.5937;78.9629' },
        { name: 'ICBM', content: '20.5937, 78.9629' },
        { name: 'language', content: 'English' },
        { name: 'coverage', content: 'Worldwide' },
        { name: 'distribution', content: 'global' },
        { name: 'rating', content: 'general' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'target', content: 'all' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'MobileOptimized', content: '320' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#c4b5e3' },
        { name: 'msapplication-TileColor', content: '#151515' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: SITE_URL },
        { rel: 'alternate', type: 'application/rss+xml', title: `${SITE_NAME} Writing`, href: `${SITE_URL}/writing` },
        // AI / LLM discovery
        { rel: 'describedby', href: `${SITE_URL}/llms.txt`, type: 'text/plain', title: 'llms.txt' },
        { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms.txt`, title: 'LLM context' },
        { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms-full.txt`, title: 'LLM full context' },
        { rel: 'sitemap', type: 'application/xml', href: `${SITE_URL}/sitemap.xml` },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/robots.txt',
        '/llms.txt',
        '/llms-full.txt',
      ],
      failOnError: false,
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
      siteName: SITE_NAME,
    },
  },
})
