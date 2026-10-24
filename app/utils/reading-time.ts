/**
 * Estimated reading time for a Nuxt Content page body.
 * Bodies are stored as "minimark": nested arrays of `[tag, props, ...children]`
 * with plain strings as text leaves.
 */

const WORDS_PER_MINUTE = 220

type MinimarkNode = string | [string, Record<string, unknown>, ...MinimarkNode[]]

function countWords(node: MinimarkNode): number {
  if (typeof node === 'string') {
    return node.split(/\s+/).filter(Boolean).length
  }
  const [, , ...children] = node
  return children.reduce((total, child) => total + countWords(child), 0)
}

export function readingMinutes(body: unknown): number {
  const nodes = (body as { value?: MinimarkNode[] } | null)?.value
  if (!Array.isArray(nodes)) return 1
  const words = nodes.reduce((total, node) => total + countWords(node), 0)
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

/** "2026-07-21" → "21 Jul 2026" */
export function formatDate(iso: string): string {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`))
}
