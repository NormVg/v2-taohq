/**
 * Products and posts from markdown: validate frontmatter, render bodies,
 * sort for display. Lists omit bodies to stay light; details include HTML.
 */
import type { z } from 'zod'
import { postFrontmatterSchema, productFrontmatterSchema } from '#shared/schemas/content'
import type { Post, PostDetail, Product, ProductDetail } from '#shared/types/content'
import { listMarkdownFiles, readMarkdownFile, type Collection, type MarkdownFile } from '../repositories/content.repository'

/** Turns a bad frontmatter block into a build-stopping error that names the file. */
function validate<T extends z.ZodType>(schema: T, data: unknown, collection: Collection, slug: string): z.infer<T> {
  const result = schema.safeParse(data)
  if (!result.success) {
    const issues = result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join('; ')
    throw new Error(`Invalid frontmatter in content/${collection}/${slug}.md: ${issues}`)
  }
  return result.data
}

function toProduct(file: MarkdownFile): Product & { body: string } {
  const { data, body } = splitFrontmatter(file.source)
  const frontmatter = validate(productFrontmatterSchema, data, 'products', file.slug)
  return { ...frontmatter, slug: file.slug, path: `/products/${file.slug}`, body }
}

function toPost(file: MarkdownFile): Post & { body: string } {
  const { data, body } = splitFrontmatter(file.source)
  const frontmatter = validate(postFrontmatterSchema, data, 'writing', file.slug)
  return { ...frontmatter, slug: file.slug, path: `/writing/${file.slug}`, readingMinutes: readingMinutes(body), body }
}

function withoutBody<T extends { body: string }>({ body: _body, ...rest }: T): Omit<T, 'body'> {
  return rest
}

export async function listProducts(): Promise<Product[]> {
  const products = (await listMarkdownFiles('products')).map(toProduct)
  return products.sort((a, b) => a.order - b.order).map(withoutBody)
}

export async function getProduct(slug: string): Promise<ProductDetail | null> {
  const file = await readMarkdownFile('products', slug)
  if (!file) return null
  const { body, ...product } = toProduct(file)
  return { ...product, html: await renderMarkdown(body) }
}

export async function listPosts(): Promise<Post[]> {
  const posts = (await listMarkdownFiles('writing')).map(toPost)
  return posts.sort((a, b) => b.date.localeCompare(a.date)).map(withoutBody)
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  const file = await readMarkdownFile('writing', slug)
  if (!file) return null
  const { body, ...post } = toPost(file)
  return { ...post, html: await renderMarkdown(body) }
}
