import type { PostFrontmatter, ProductFrontmatter } from '../schemas/content'

/** A product as listed (no body). */
export interface Product extends ProductFrontmatter {
  slug: string
  /** Site path, e.g. "/products/fold". */
  path: string
}

/** A product with its rendered markdown body. */
export interface ProductDetail extends Product {
  html: string
}

/** A post as listed (no body). */
export interface Post extends PostFrontmatter {
  slug: string
  path: string
  readingMinutes: number
}

/** A post with its rendered markdown body. */
export interface PostDetail extends Post {
  html: string
}
