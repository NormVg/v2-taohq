/**
 * Robust content loaders for products + writing.
 * Nuxt Content path filters can vary by version/index state — always fall back safely.
 */

export type SiteDoc = {
  path: string
  title: string
  description?: string
  status?: string
  version?: string
  heroMedia?: string
  date?: string
  author?: string
  link?: string
  stem?: string
  meta?: Record<string, unknown>
  body?: unknown
  [key: string]: unknown
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

/** Normalize a Content v3 page into a flat, phone-safe shape */
export function normalizeSiteDoc(raw: Record<string, unknown> | null | undefined): SiteDoc | null {
  if (!raw) return null

  const meta = (raw.meta && typeof raw.meta === 'object' ? raw.meta : {}) as Record<string, unknown>
  const stem = asString(raw.stem) || ''
  let path = asString(raw.path) || ''

  // Build path from stem when missing (e.g. products/tao-canvas → /products/tao-canvas)
  if (!path && stem) {
    path = stem.startsWith('/') ? stem : `/${stem}`
  }
  if (!path) return null

  // Ensure leading slash for NuxtLink
  if (!path.startsWith('/')) path = `/${path}`

  const title =
    asString(raw.title) ||
    asString(meta.title) ||
    path.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').toUpperCase() ||
    'UNTITLED'

  return {
    ...raw,
    path,
    stem,
    title,
    description: asString(raw.description) || asString(meta.description),
    status: asString(raw.status) || asString(meta.status),
    version: asString(raw.version) || asString(meta.version),
    heroMedia: asString(raw.heroMedia) || asString(meta.heroMedia),
    date: asString(raw.date) || asString(meta.date),
    author: asString(raw.author) || asString(meta.author),
    link: asString(raw.link) || asString(meta.link),
    meta,
  }
}

function isUnder(prefix: string, doc: SiteDoc): boolean {
  const p = doc.path || ''
  const s = doc.stem || ''
  return (
    p === prefix ||
    p.startsWith(`${prefix}/`) ||
    s === prefix.replace(/^\//, '') ||
    s.startsWith(`${prefix.replace(/^\//, '')}/`)
  )
}

function isIndexOnly(prefix: string, doc: SiteDoc): boolean {
  const p = doc.path || ''
  const s = doc.stem || ''
  const bare = prefix.replace(/^\//, '')
  return p === prefix || p === `${prefix}/` || s === bare
}

/**
 * Fetch all docs under a URL prefix (e.g. /products, /writing).
 * Multi-strategy so empty indexes don't happen when markdown exists.
 */
export async function fetchDocsUnder(prefix: string): Promise<SiteDoc[]> {
  const bare = prefix.replace(/^\//, '') // products | writing
  let raw: Record<string, unknown>[] = []

  // 1) Path LIKE /products%
  try {
    const byPath = await queryCollection('content')
      .where('path', 'LIKE', `${prefix}%`)
      .all()
    if (byPath?.length) raw = byPath as Record<string, unknown>[]
  } catch {
    /* continue */
  }

  // 2) Stem LIKE products%
  if (!raw.length) {
    try {
      const byStem = await queryCollection('content')
        .where('stem', 'LIKE', `${bare}%`)
        .all()
      if (byStem?.length) raw = byStem as Record<string, unknown>[]
    } catch {
      /* continue */
    }
  }

  // 3) Full scan + filter
  if (!raw.length) {
    try {
      const all = await queryCollection('content').all()
      raw = (all || []).filter((item) => {
        const doc = normalizeSiteDoc(item as Record<string, unknown>)
        return doc ? isUnder(prefix, doc) : false
      }) as Record<string, unknown>[]
    } catch {
      raw = []
    }
  }

  // 4) Known product/writing slugs (last resort if index is empty but files exist)
  if (!raw.length) {
    const known =
      bare === 'products'
        ? ['/products/bubbles-space', '/products/bubbles-mail', '/products/web-have-sounds', '/products/kraken', '/products/maya-ui']
        : bare === 'writing'
          ? [
              '/writing/01-first-log',
              '/writing/good-infrastructure-is-invisible',
              '/writing/the-case-for-brutalist-architecture',
            ]
          : []

    const fetched = await Promise.all(
      known.map(async (path) => {
        try {
          return await queryCollection('content').path(path).first()
        } catch {
          return null
        }
      }),
    )
    raw = fetched.filter(Boolean) as Record<string, unknown>[]
  }

  return raw
    .map((item) => normalizeSiteDoc(item))
    .filter((doc): doc is SiteDoc => {
      if (!doc) return false
      if (!isUnder(prefix, doc)) return false
      if (isIndexOnly(prefix, doc)) return false
      return true
    })
    .sort((a, b) => a.path.localeCompare(b.path))
}

export async function fetchDocByPath(path: string): Promise<SiteDoc | null> {
  const normalized = path.startsWith('/') ? path : `/${path}`

  try {
    const direct = await queryCollection('content').path(normalized).first()
    const doc = normalizeSiteDoc(direct as Record<string, unknown> | null)
    if (doc) return doc
  } catch {
    /* continue */
  }

  // Try without leading slash variants / trailing slash
  const variants = [
    normalized,
    normalized.replace(/\/$/, ''),
    normalized.endsWith('/') ? normalized : `${normalized}/`,
  ]

  for (const v of variants) {
    try {
      const hit = await queryCollection('content').path(v).first()
      const doc = normalizeSiteDoc(hit as Record<string, unknown> | null)
      if (doc) return doc
    } catch {
      /* continue */
    }
  }

  // Full scan match by path or stem
  try {
    const all = await queryCollection('content').all()
    const stem = normalized.replace(/^\//, '')
    for (const item of all || []) {
      const doc = normalizeSiteDoc(item as Record<string, unknown>)
      if (!doc) continue
      if (doc.path === normalized || doc.stem === stem || doc.path?.endsWith(stem)) {
        return doc
      }
    }
  } catch {
    /* ignore */
  }

  return null
}

export function fetchProducts() {
  return fetchDocsUnder('/products')
}

export function fetchWriting() {
  return fetchDocsUnder('/writing')
}
