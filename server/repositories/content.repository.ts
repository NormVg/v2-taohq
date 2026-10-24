/**
 * Raw access to the markdown files in content/. They are bundled into the
 * server as Nitro server assets (see nuxt.config), so this works the same in
 * dev, prerendering and production, with no database involved.
 */

export type Collection = 'products' | 'writing'

export interface MarkdownFile {
  slug: string
  source: string
}

const storage = () => useStorage('assets:content')

export async function listMarkdownFiles(collection: Collection): Promise<MarkdownFile[]> {
  const keys = (await storage().getKeys(collection)).filter(key => key.endsWith('.md'))
  return Promise.all(keys.map(async (key) => ({
    slug: key.split(':').pop()!.replace(/\.md$/, ''),
    source: String(await storage().getItem(key)),
  })))
}

export async function readMarkdownFile(collection: Collection, slug: string): Promise<MarkdownFile | null> {
  const source = await storage().getItem(`${collection}:${slug}.md`)
  return source === null ? null : { slug, source: String(source) }
}
