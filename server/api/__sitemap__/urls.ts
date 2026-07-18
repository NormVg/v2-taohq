import { serverQueryCollection } from '#content/server'

/**
 * Explicit sitemap URLs for all public pages + Nuxt Content routes.
 * Keeps /sitemap.xml reliable in production even if auto-crawl misses dynamic content.
 */
export default defineEventHandler(async (event) => {
  const now = new Date().toISOString()

  const staticRoutes = [
    { loc: '/', changefreq: 'weekly', priority: 1.0, lastmod: now },
    { loc: '/studio', changefreq: 'weekly', priority: 0.9, lastmod: now },
    { loc: '/products', changefreq: 'weekly', priority: 0.9, lastmod: now },
    { loc: '/writing', changefreq: 'weekly', priority: 0.9, lastmod: now },
    { loc: '/careers', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: now },
    { loc: '/legal', changefreq: 'yearly', priority: 0.3, lastmod: now },
    { loc: '/organization/about', changefreq: 'monthly', priority: 0.8, lastmod: now },
    { loc: '/organization/philosophy', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/principles', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/team', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/timeline', changefreq: 'monthly', priority: 0.6, lastmod: now },
    { loc: '/organization/technology', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/infrastructure', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/design-language', changefreq: 'monthly', priority: 0.7, lastmod: now },
    { loc: '/organization/brand-assets', changefreq: 'monthly', priority: 0.6, lastmod: now },
    { loc: '/organization/open-source', changefreq: 'monthly', priority: 0.7, lastmod: now },
  ]

  const contentFallback = [
    '/products/tao-canvas',
    '/products/tao-identity',
    '/products/rose-demon',
    '/writing/01-first-log',
    '/writing/good-infrastructure-is-invisible',
    '/writing/the-case-for-brutalist-architecture',
  ]

  let contentPaths: string[] = []
  try {
    const docs = await serverQueryCollection(event, 'content').all()
    contentPaths = (docs || [])
      .map((doc: { path?: string }) => doc.path)
      .filter((p): p is string => typeof p === 'string' && p.length > 1)
  }
  catch {
    contentPaths = contentFallback
  }

  if (!contentPaths.length) {
    contentPaths = contentFallback
  }

  const contentRoutes = contentPaths.map((loc) => ({
    loc,
    changefreq: loc.startsWith('/products') ? 'weekly' : 'monthly',
    priority: loc.startsWith('/products') ? 0.85 : 0.75,
    lastmod: now,
  }))

  const map = new Map<string, { loc: string, changefreq: string, priority: number, lastmod: string }>()
  for (const entry of [...staticRoutes, ...contentRoutes]) {
    map.set(entry.loc, entry)
  }

  return Array.from(map.values())
})
