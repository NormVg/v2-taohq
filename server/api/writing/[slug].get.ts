import { getPost } from '../../services/content.service'

export default defineEventHandler(async (event) => {
  const post = await getPost(requireSlug(event))
  if (!post) throw createError({ statusCode: 404, statusMessage: 'Post not found' })
  return post
})
