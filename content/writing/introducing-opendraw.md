---
title: "Introducing opendraw"
date: "2026-11-01"
author: "taohq"
description: "We shipped a free, open-source hand-drawn whiteboard that drops into Vue, Nuxt, React and Svelte as one component. Here's what it does and how to try it."
product: "opendraw"
---

Today opendraw is live at [opendraw.taohq.org](https://opendraw.taohq.org), and the whole thing — engine, editor and every framework adapter — is on [GitHub](https://github.com/TheAlphaOnes/opendraw) under the MIT license.

opendraw is a hand-drawn whiteboard that lives inside your app as a native component. Not an iframe. Not a third-party embed with its own login screen. One component, `<OpenDraw />`, that brings the canvas, the toolbar, the properties panel, keyboard shortcuts, dark mode and autosave with it — for Vue, Nuxt, React and Svelte.

## The whole quick start

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

That's the entire integration. The editor fills its container and saves the scene to `localStorage` as you draw, so a reload puts everything back. If you're not on Nuxt, the same editor ships as `@opendrawjs/react` and `@opendrawjs/svelte`, and plain Vue 3 works through `@opendrawjs/nuxt/vue`.

## What's in the box

- **Thirteen tools**: selection, hand, rectangle, diamond, ellipse, arrow, line, freedraw, text, sticky note, image, frame, eraser and a laser pointer — each with a keyboard shortcut, plus a tool lock for drawing many of the same shape.
- **Arrows that connect**: bind an arrow to shapes and it follows them when they move. Straight, curved or elbowed around whatever sits between them.
- **Frames**: group content into frames that carry and clip their children.
- **Files**: autosave, many named drawings in one browser with a sidebar to manage them, `.opendraw` files you can open and save, and PNG or SVG export.
- **Themes**: light and dark, with the hand-drawn ink inverting while your canvas background stays exactly as you chose it.
- **Responsive and accessible**: on phones the toolbar moves to the bottom and the properties panel becomes a sheet; every control is a real, labelled, keyboard-navigable element.

The hand-drawn look is the point, not a gimmick. Sketchy rendering lowers the stakes: nobody expects a rough rectangle to be a commitment, which is exactly the mental state you want people in while they're thinking. That look comes from [rough.js](https://roughjs.com) for the geometry, [perfect-freehand](https://github.com/steveruizok/perfect-freehand) for pressure-aware strokes and [Excalifont](https://github.com/excalidraw/excalifont) for the text.

## The demo is the docs

[opendraw.taohq.org](https://opendraw.taohq.org) is itself an opendraw component. Draw on it, press `?` for every shortcut, and when you want the longer version, the `/docs` page covers the headless API, custom UI, and building an adapter for a framework we don't ship.

We also wrote four companion pieces this week:

- [Why we built it](/writing/why-we-built-opendraw) — the gap between a whiteboard app and a whiteboard component.
- [How we built it](/writing/how-we-built-opendraw) — a framework-free engine, five packages, one test suite.
- [How to use it](/writing/how-to-use-opendraw) — the practical guide, from install to custom toolbars.
- [Inside the engine](/writing/inside-the-opendraw-engine) — immutable elements, seeded wobble and cheap undo.

opendraw stands on the shoulders of [Excalidraw](https://excalidraw.com), which defined how a hand-drawn whiteboard should feel; several of its algorithms are ported into opendraw with their MIT notices kept. If you want a complete, collaborative whiteboard app, use Excalidraw. opendraw is for putting a whiteboard inside your own.

It's MIT, it runs everywhere we could test, and issues and pull requests are welcome. If you draw something with it, we'd genuinely love to see it.
