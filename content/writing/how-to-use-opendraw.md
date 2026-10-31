---
title: "How to Use opendraw"
date: "2026-10-29"
author: "taohq"
description: "From a four-line install to headless mode: props, events, the useOpenDraw() API, custom toolbars and the React and Svelte packages."
product: "opendraw"
---

opendraw meets you where you are. Four lines gets a working whiteboard; four paragraphs later you're driving it from code. This is the full path, stop wherever you like.

## Step 1: the four-line start

```bash
npm install @opendrawjs/nuxt
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@opendrawjs/nuxt'],
})
```

```vue
<template>
  <div style="height: 100vh">
    <OpenDraw />
  </div>
</template>
```

The one gotcha: **the editor fills its container**, so the container needs a height. Give it a sized div and you're done — the scene autosaves to `localStorage` and restores on reload.

Not on Nuxt? Plain Vue 3 imports the same components from `@opendrawjs/nuxt/vue`. React and Svelte have their own packages (Step 6).

## Step 2: learn the keys, not the menus

Press `?` inside the editor and it shows you every shortcut. The ones that matter daily: `V` select, `R` rectangle, `D` diamond, `O` ellipse, `A` arrow, `L` line, `P` freedraw, `T` text, `N` sticky note, `E` eraser, `F` frame, `K` laser pointer. Numbers do the same jobs (`1` through `0`) if you prefer keeping a hand on the keyboard.

Two keys people miss: `Q` locks the active tool so you can draw a dozen rectangles without re-arming the tool each time, and an arrow drawn with the arrow tool **binds to shapes** — drag either end onto a shape and the arrow follows that shape around forever.

## Step 3: tune it with props

`<OpenDraw>` is configured, not configured-around:

- `theme="light | dark | system"` — starting theme; a persisted theme wins.
- `ui="full | minimal | none"` — every island, just toolbar and zoom, or a bare canvas.
- `grid` — `true` shows the grid; a number sets the cell size.
- `initialElements` — a scene to open with when nothing is persisted yet.
- `persist` — autosave on by default; pass a string to make it a named key (`persist="team-board"`), or `false` to turn it off. Changing the key while mounted opens the scene saved under it.
- `menuLinks` — your own links or actions in the main menu.

Events cover the rest: `@change` fires with `{ elements, appState }` on every document change (persist anywhere you like), `@select` with the selected ids, and `@ready` hands you the `EditorController`. There are slots at `#top-left`, `#top-right` and `#footer` for your own buttons.

## Step 4: drive it from code

Any component inside `<OpenDraw>` can call `useOpenDraw()`:

```ts
const { selectedElements, changeStyle, exportPNG } = useOpenDraw()

changeStyle({ strokeColor: '#e03131' })
exportPNG('diagram')
```

The composable exposes the whole controller as computed refs: `elements`, `activeTool`, `canUndo`, `viewport`; commands like `setActiveTool`, `groupSelection`, `alignSelection`, `undo`, `zoomToFitAll`; and the file group — `serialize`, `openFile`, `saveToFile`, `exportPNG`, `exportSVG`, `clearCanvas`. Every command is undoable.

## Step 5: bring your own toolbar

When the built-in UI is too much, keep the canvas and draw your own chrome:

```vue
<script setup lang="ts">
const ctx = createOpenDrawContext()
provideOpenDraw(ctx)
</script>

<template>
  <div class="board">
    <OpenDrawCanvas />
    <nav class="my-toolbar">
      <button @click="ctx.setActiveTool('rectangle')">Rectangle</button>
      <button :disabled="!ctx.canUndo.value" @click="ctx.undo()">Undo</button>
    </nav>
  </div>
</template>
```

The canvas keeps every gesture, shortcut and the text editor. You only draw the buttons — `ui="none"` plus this pattern is how you make the whiteboard feel native to your product.

## Step 6: React and Svelte

```tsx
// React
import '@opendrawjs/react/styles.css'
import { OpenDraw } from '@opendrawjs/react'

<OpenDraw onChange={(state) => console.log(state.elements.length)} />
```

```svelte
<!-- Svelte 5 -->
<script lang="ts">
  import '@opendrawjs/svelte/styles.css'
  import { OpenDraw } from '@opendrawjs/svelte'
</script>

<OpenDraw onchange={(state) => console.log(state.elements.length)} />
```

Both also ship `<OpenDrawCanvas>` for custom UIs, and reactive state hooks: `useOpenDrawEditor()` and `useEditorState(editor, (e) => e.activeTool)` on React, `editorState(editor, getter).current` on Svelte.

## Step 7: many drawings

Set `files: true` (or use `<OpenDrawApp>` with `defineOpenDrawConfig`) and the editor becomes a small drawings app: a sidebar to create, open, rename, duplicate, delete and search drawings, each autosaving on its own with a preview, and the open one comes back after a reload. A scene saved before you turned files on becomes the first drawing.

## Step 8: other frameworks

Solid, Angular, Lit, plain JavaScript — same recipe, from `@opendrawjs/editor`:

```ts
import { createEditor, mountCanvas } from '@opendrawjs/editor'

const editor = createEditor()
const session = mountCanvas(editor, { host, staticCanvas, overlayCanvas })

editor.subscribe((ed) => render(ed.activeTool, ed.selectedElements, ed.canUndo))
// session.dispose() when the host goes away
```

Mount the two stacked canvases, subscribe, render your UI from the controller's getters. The React and Svelte packages are complete references for how little this actually takes.

Requirements: Nuxt 4, Vue 3.5, Node 20.19+. The [docs](https://opendraw.taohq.org) run all of this live, the [GitHub](https://github.com/TheAlphaOnes/opendraw) has the source, and if you want to know what the engine is doing under these APIs, [the deep dive is here](/writing/inside-the-opendraw-engine).
