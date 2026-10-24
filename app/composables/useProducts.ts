import type { Product } from '~/utils/product'

/** All products, in display order. */
export function useProducts() {
  return useAsyncData(
    'products',
    () => queryCollection('products').order('order', 'ASC').all(),
    { default: (): Product[] => [] },
  )
}

/** A product by slug when it may not exist (e.g. a post's related product). Resolves to null if missing. */
export function useProductBySlug(slug: string | undefined) {
  return useAsyncData(
    `product-by-slug:${slug ?? 'none'}`,
    async () => (slug ? await queryCollection('products').path(`/products/${slug}`).first() : null),
  )
}

/**
 * One product by URL path. Throws a real 404 when it does not exist,
 * so missing pages are never served (or indexed) as 200s.
 */
export async function useProduct(path: string) {
  const { data, error } = await useAsyncData(
    `product:${path}`,
    () => queryCollection('products').path(path).first(),
  )

  if (error.value) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to load this product.', fatal: true })
  }
  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
  }

  return data as Ref<Product>
}
