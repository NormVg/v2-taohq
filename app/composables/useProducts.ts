import type { Product } from '#shared/types/content'

/** All products, in display order (no bodies). */
export function useProducts() {
  return useFetch('/api/products', {
    key: 'products',
    default: (): Product[] => [],
  })
}

/** A product by slug when it may not exist (e.g. a post's related product). Resolves to null if missing. */
export function useProductBySlug(slug: string | undefined) {
  return useAsyncData(
    `product-by-slug:${slug ?? 'none'}`,
    async () => (slug ? await $fetch(`/api/products/${slug}`).catch(() => null) : null),
  )
}

/**
 * One product, with its rendered body, from its page path ("/products/fold").
 * Throws a real 404 when it does not exist, so missing pages are never
 * served (or indexed) as 200s.
 */
export async function useProduct(path: string) {
  const slug = path.split('/').pop() ?? ''
  const { data, error } = await useFetch(`/api/products/${slug}`, { key: `product:${slug}` })

  if (error.value?.statusCode === 404 || error.value?.statusCode === 400) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
  }
  if (error.value || !data.value) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to load this product.', fatal: true })
  }

  return data as Ref<NonNullable<typeof data.value>>
}
