import { getProduct } from '../../services/content.service'

export default defineEventHandler(async (event) => {
  const product = await getProduct(requireSlug(event))
  if (!product) throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  return product
})
