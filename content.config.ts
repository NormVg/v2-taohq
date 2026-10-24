import { defineContentConfig, defineCollection, z } from '@nuxt/content'

/**
 * Two typed collections instead of one catch-all: every field a page renders
 * is declared here, so components never dig through untyped `meta`.
 */

export const PRODUCT_STATUSES = ['live', 'waitlist', 'in-development', 'open-source'] as const

const productSchema = z.object({
  title: z.string(),
  /** Short hook shown under the name, e.g. "Journaling, but cool." */
  tagline: z.string(),
  description: z.string(),
  status: z.enum(PRODUCT_STATUSES),
  kind: z.enum(['app', 'library']),
  /** Display order across the site. Lower comes first. */
  order: z.number(),
  /** Path under /public, rendered through the dither shader. */
  art: z.string(),
  artAlt: z.string(),
  platforms: z.array(z.string()).optional(),
  /** Short facts shown in the product hero, e.g. "Free", "Coming 2026". */
  facts: z.array(z.string()).optional(),
  links: z
    .object({
      waitlist: z.string().url().optional(),
      app: z.string().url().optional(),
      github: z.string().url().optional(),
      npm: z.string().url().optional(),
    })
    .optional(),
  /** Install command for libraries, shown as a copyable snippet. */
  install: z.string().optional(),
})

const writingSchema = z.object({
  title: z.string(),
  description: z.string(),
  /** ISO date (YYYY-MM-DD). */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string().default('taohq'),
  /** Slug of a related product, if the post is about one. */
  product: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: 'page',
      source: 'products/*.md',
      schema: productSchema,
    }),
    writing: defineCollection({
      type: 'page',
      source: 'writing/*.md',
      schema: writingSchema,
    }),
  },
})
