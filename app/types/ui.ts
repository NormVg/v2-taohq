/** Names of the icons available in components/ui/AppIcon.vue. */
export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'sound-on'
  | 'sound-off'
  | 'copy'
  | 'check'
  | 'github'
  | 'x'

/** One label / value pair in components/editorial/MetaList.vue. */
export interface MetaItem {
  label: string
  value: string
}

/** One step in components/editorial/CrumbBar.vue. Omit `to` for the current page. */
export interface Crumb {
  label: string
  to?: string
}
