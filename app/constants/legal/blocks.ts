/** Shorthand builders for legal document blocks. */
import type { LegalBlock, LegalInline } from '~/types/legal'

export const paragraph = (...content: LegalInline[]): LegalBlock => ({ kind: 'paragraph', content })
export const list = (...items: LegalInline[][]): LegalBlock => ({ kind: 'list', items })
