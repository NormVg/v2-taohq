/** Shared shape for legal documents (privacy policy, terms) rendered by LegalDocument.vue. */

export interface LegalLink {
  label: string
  href: string
}

/** Inline text: plain strings interleaved with links. */
export type LegalInline = string | LegalLink

export type LegalBlock =
  | { kind: 'paragraph', content: LegalInline[] }
  | { kind: 'list', items: LegalInline[][] }

export interface LegalSection {
  id: string
  title: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  title: string
  summary: string
  lastUpdated: string
  /** ISO date for <time datetime>. */
  lastUpdatedIso: string
  sections: LegalSection[]
}
