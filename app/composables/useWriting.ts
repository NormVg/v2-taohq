import type { Post } from '#shared/types/content'

/** Posts, newest first (no bodies). */
export function useWritingList() {
  return useFetch('/api/writing', {
    key: 'writing',
    default: (): Post[] => [],
  })
}

/** One post, with its rendered body, from its page path; throws a real 404 when missing. */
export async function useWritingPost(path: string) {
  const slug = path.split('/').pop() ?? ''
  const { data, error } = await useFetch(`/api/writing/${slug}`, { key: `post:${slug}` })

  if (error.value?.statusCode === 404 || error.value?.statusCode === 400) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
  }
  if (error.value || !data.value) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to load this post.', fatal: true })
  }

  return data as Ref<NonNullable<typeof data.value>>
}
