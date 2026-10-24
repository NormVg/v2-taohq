import type { ThemeRegistration } from 'shiki'

/**
 * Shiki theme for markdown code blocks, drawn from the site palette:
 * paper text on raised ink, lavender strings and keywords, muted comments.
 * Literal colours (Shiki can't read CSS variables); keep in sync with tokens.css.
 */
export const CODE_THEME: ThemeRegistration = {
  name: 'taohq',
  type: 'dark',
  colors: {
    'editor.background': '#201e25',
    'editor.foreground': '#ece8f3',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#8a8494', fontStyle: 'italic' } },
    { scope: ['string', 'string.quoted', 'markup.inline.raw'], settings: { foreground: '#c4b5e3' } },
    { scope: ['keyword', 'storage', 'storage.type', 'keyword.control', 'keyword.operator.new'], settings: { foreground: '#b2a0d8' } },
    { scope: ['entity.name.function', 'support.function', 'meta.function-call'], settings: { foreground: '#ece8f3' } },
    { scope: ['constant', 'constant.numeric', 'constant.language', 'support.constant'], settings: { foreground: '#d9cfee' } },
    { scope: ['variable', 'variable.other', 'meta.definition.variable'], settings: { foreground: '#ece8f3' } },
    { scope: ['entity.name.type', 'support.type', 'entity.name.class'], settings: { foreground: '#d9cfee' } },
    { scope: ['punctuation', 'meta.brace', 'keyword.operator'], settings: { foreground: '#a39dad' } },
    { scope: ['entity.name.tag', 'support.class.component'], settings: { foreground: '#c4b5e3' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#b2a0d8' } },
  ],
}
