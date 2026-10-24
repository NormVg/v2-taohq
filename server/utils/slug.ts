import { z } from 'zod'

/** Content slugs: lowercase letters, digits and hyphens only. */
const slugSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)

/** Reads and validates the `slug` route param, or responds 400. */
export function requireSlug(event: Parameters<typeof getRouterParam>[0]): string {
  const result = slugSchema.safeParse(getRouterParam(event, 'slug'))
  if (!result.success) throw createError({ statusCode: 400, statusMessage: 'Invalid slug' })
  return result.data
}
