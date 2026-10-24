import type { WritingCollectionItem } from '@nuxt/content'

export type Post = WritingCollectionItem

/** Posts, newest first. Pass a limit for teasers. */
export function useWritingList(limit?: number) {
  return useAsyncData(
    limit ? `writing:latest:${limit}` : 'writing:all',
    () => {
      const query = queryCollection('writing').order('date', 'DESC')
      return limit ? query.limit(limit).all() : query.all()
    },
    { default: (): Post[] => [] },
  )
}

/** One post by URL path; throws a real 404 when missing. */
export async function useWritingPost(path: string) {
  const { data, error } = await useAsyncData(
    `writing:${path}`,
    () => queryCollection('writing').path(path).first(),
  )

  if (error.value) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to load this post.', fatal: true })
  }
  if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
  }

  return data as Ref<Post>
}
