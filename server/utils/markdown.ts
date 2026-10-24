/**
 * Markdown → HTML for content files: YAML frontmatter, GitHub-flavoured
 * markdown via marked, and code blocks highlighted by Shiki in the site's
 * own theme. Runs on the server only; pages receive finished HTML.
 */
import { Marked } from 'marked'
import { createHighlighter, type Highlighter } from 'shiki'
import { parse as parseYaml } from 'yaml'
import { CODE_THEME } from './code-theme'

const CODE_LANGS = ['bash', 'js', 'ts', 'vue', 'json', 'html', 'css'] as const
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
const WORDS_PER_MINUTE = 220

let renderer: Promise<Marked> | null = null

function createRenderer(highlighter: Highlighter): Marked {
  const loaded = new Set<string>(highlighter.getLoadedLanguages())
  return new Marked({
    gfm: true,
    renderer: {
      code({ text, lang }) {
        const language = lang && loaded.has(lang) ? lang : 'text'
        return highlighter.codeToHtml(text, { lang: language, theme: CODE_THEME.name! })
      },
    },
  })
}

/** One highlighter + parser per server process. */
function getRenderer(): Promise<Marked> {
  renderer ??= createHighlighter({ themes: [CODE_THEME], langs: [...CODE_LANGS] }).then(createRenderer)
  return renderer
}

export function splitFrontmatter(source: string): { data: unknown, body: string } {
  const match = FRONTMATTER.exec(source)
  if (!match) return { data: {}, body: source }
  return { data: parseYaml(match[1]!), body: source.slice(match[0].length) }
}

export async function renderMarkdown(body: string): Promise<string> {
  const marked = await getRenderer()
  return marked.parse(body)
}

export function readingMinutes(body: string): number {
  const words = body.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
