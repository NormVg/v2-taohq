// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@vercel/analytics/nuxt', '@nuxtjs/seo'],
  site: {
    url: 'https://v2.taohq.org',
    name: 'Tao HQ | TheAlphaOnes',
    description: 'We believe software should feel understandable, durable, and calm.',
    defaultLocale: 'en',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'TheAlphaOnes | taohq.org',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'We believe software should feel understandable, durable, and calm.' },
        { property: 'og:title', content: 'Tao HQ | TheAlphaOnes' },
        { property: 'og:description', content: 'We believe software should feel understandable, durable, and calm.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://v2.taohq.org' },
        { property: 'og:image', content: 'https://v2.taohq.org/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tao HQ | TheAlphaOnes' },
        { name: 'twitter:description', content: 'We believe software should feel understandable, durable, and calm.' },
        { name: 'twitter:image', content: 'https://v2.taohq.org/og.png' },
        { name: 'geo.region', content: 'IN' },
        { name: 'geo.placename', content: 'Global' },
        { name: 'geo.position', content: '20.5937;78.9629' },
        { name: 'ICBM', content: '20.5937, 78.9629' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
