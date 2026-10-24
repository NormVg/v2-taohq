/**
 * Frontmatter schemas for content/products/*.md and content/writing/*.md.
 * Validated on the server when files are read; a bad file fails the build
 * with its name in the error rather than rendering half-empty pages.
 */
import { z } from 'zod'
import { ART_NAMES } from '../constants/art-manifest'

export const PRODUCT_STATUSES = ['live', 'waitlist', 'in-development', 'open-source'] as const

export const productFrontmatterSchema = z.object({
  title: z.string(),
  /** Short hook shown under the name, e.g. "Journaling, but cool." */
  tagline: z.string(),
  description: z.string(),
  status: z.enum(PRODUCT_STATUSES),
  kind: z.enum(['app', 'library']),
  /** Display order across the site. Lower comes first. */
  order: z.number(),
  /** Pre-rendered dither artwork name (see scripts/build-art.mjs). */
  art: z.enum(ART_NAMES),
  artAlt: z.string(),
  platforms: z.array(z.string()).optional(),
  /** Short facts shown in the product hero, e.g. "Free", "Coming 2026". */
  facts: z.array(z.string()).optional(),
  links: z
    .object({
      waitlist: z.url().optional(),
      app: z.url().optional(),
      github: z.url().optional(),
      npm: z.url().optional(),
    })
    .optional(),
  /** Install command for libraries, shown as a copyable snippet. */
  install: z.string().optional(),
})

export const postFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  /** ISO date (YYYY-MM-DD). */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string().default('taohq'),
  /** Slug of a related product, if the post is about one. */
  product: z.string().optional(),
})

export type ProductFrontmatter = z.infer<typeof productFrontmatterSchema>
export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>
