// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = 'https://v2.taohq.org'
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
    '@nuxtjs/seo',
    '@nuxtjs/device',
  ],

  // —— Core site identity (used by sitemap, robots, schema.org, OG) ——
  site: {
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    defaultLocale: 'en',
    indexable: true,
    trailingSlash: false,
  },

  // —— Robots: allow full crawl + AI scrapers ——
  robots: {
    // Explicitly allow indexing in all environments once deployed
    // (dev still blocks unless mockProductionEnv — intentional)
    disallow: [],
    allow: ['/'],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    // Do not block non-SEO bots (AI scrapers allowed via groups below)
    blockNonSeoBots: false,
    groups: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [],
      },
      // Explicit AI / LLM crawlers (allowed)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'Google-Extended',
          'GoogleOther',
          'anthropic-ai',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'meta-externalagent',
          'FacebookBot',
          'cohere-ai',
          'Diffbot',
          'ImagesiftBot',
          'Omgilibot',
          'Amazonbot',
        ],
        allow: ['/'],
        disallow: [],
      },
    ],
  },

  // —— Sitemap: disabled — served as a static file at public/sitemap.xml ——
  sitemap: false,

  // —— Schema.org Organization (GEO + knowledge graph) ——
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: SITE_NAME,
      alternateName: ['TAO', 'TAOHQ', 'Tao HQ', 'The Alpha Ones'],
      url: SITE_URL,
      logo: `${SITE_URL}/og.png`,
      description: SITE_DESCRIPTION,
      email: 'hello@taohq.org',
      sameAs: [
        'https://github.com/TheAlphaOnes/',
        'https://x.com/TheNormVg',
      ],
    },
  },

  // —— OG image signing secret hint (set NUXT_OG_IMAGE_SECRET in prod) ——
  ogImage: {
    enabled: true,
    defaults: {
      component: undefined,
    },
  },

  // —— SEO utils ——
  seo: {
    meta: {
      description: SITE_DESCRIPTION,
      themeColor: [
        { content: '#c4b5e3', media: '(prefers-color-scheme: light)' },
        { content: '#151515', media: '(prefers-color-scheme: dark)' },
      ],
      colorScheme: 'light dark',
      author: SITE_NAME,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      googlebot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: SITE_NAME,
      // Avoid "TheAlphaOnes · TheAlphaOnes" on home; pages set their own full titles
      titleTemplate: '%s',
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
