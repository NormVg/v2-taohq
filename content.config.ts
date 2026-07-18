import { defineContentConfig, defineCollection, z } from '@nuxt/content'

/**
 * Explicit schema so custom frontmatter (status, version, heroMedia, date, author)
 * is queryable and typed, not only stuffed into opaque meta.
 */
const pageSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
  heroMedia: z.string().optional(),
  date: z.string().optional(),
  author: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['**/node_modules/**'],
      },
      schema: pageSchema,
    }),
  },
})
