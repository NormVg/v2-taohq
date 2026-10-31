---
title: "How We Built opendraw"
date: "2026-10-30"
author: "taohq"
description: "One engine, five packages, four frameworks: how opendraw keeps its canvas core framework-free so every adapter stays a few hundred lines."
product: "opendraw"
---

Every architecture decision in opendraw comes from one constraint: the same editor has to run in Vue, Nuxt, React and Svelte, and we refuse to maintain four editors.

There's an obvious way to do this badly. You build the editor in your favourite framework, then "port" it, and now every bug is four bugs and every feature ships four times late. We've seen that movie. So we set a rule before writing a line of code: **everything below the framework line**. All state, all geometry, all gestures, all rendering logic lives in code that doesn't know what a component is.

## Three layers

The result is a pnpm monorepo in three layers.

**`@opendrawjs/core` is the engine.** The element model — ten element types, from rectangles to frames — a document and its undo history, geometry, hit testing, rough.js rendering, and PNG/SVG/JSON export. It has no DOM requirement and no framework imports. You can use it to generate a diagram server-side and never draw an interactive pixel.

**`@opendrawjs/editor` is the interactive editor.** A framework-free controller you create with `createEditor()`, and a `mountCanvas()` that wires every gesture, shortcut and the in-place text editor onto two stacked canvases you hand it. Tools, the action registry and persistence live here too. It knows about the DOM, but it still doesn't know about Vue or React.

**The adapters are the thin part.** `@opendrawjs/nuxt`, `@opendrawjs/react` and `@opendrawjs/svelte` each mount the canvas, mirror the controller's state into their framework's reactive primitives, and render the toolbar and panels around it. The React and Svelte adapters are a few hundred lines each — complete, readable references if you want to build one for Solid, Angular or plain JavaScript.

## The choice that made everything cheap

The single most load-bearing decision is that **elements are immutable**. Every mutation produces a new object — copy-on-write — instead of mutating a rectangle in place.

This sounds wasteful until you see what it buys. Undo history becomes trivially cheap: a snapshot is just references to the element objects, not a deep clone of the scene, so we store before/after snapshot pairs and cap the stack at a hundred. Reactivity gets honest: a framework can compare references instead of diffing trees. And rendering gets a cache: rough.js drawable generation is the expensive part of drawing a hand-drawn scene, so a `WeakMap` keyed by *element reference* caches the generated drawables — unchanged elements are simply replayed each frame, because an unchanged element is guaranteed to be the same object.

There's a second, quieter payoff. The hand-drawn look depends on randomness — but jitter that changes on every frame looks like static, not sketching. So every element carries a numeric seed, and rough.js generates its wobble from that seed through a small deterministic PRNG. Same element, same sketch, forever, including in exports.

## The look, honestly sourced

The sketch style is three libraries doing one job each: [rough.js](https://roughjs.com) draws geometry that looks drawn, [perfect-freehand](https://github.com/steveruizok/perfect-freehand) produces pressure-aware freedraw outlines (those strokes bypass rough.js entirely and fill as a single smoothed path), and [Excalifont](https://github.com/excalidraw/excalifont) is the hand-drawn text face. The elbow-arrow router, the laser pointer trail and the two-finger gestures were ported from Excalidraw's MIT source with their notices kept — we documented exactly what we took, because that's how open source should work.

## Testing it without losing our minds

One test suite, run everywhere it matters. Unit tests cover the core, editor and Nuxt package; typecheck covers every package, the playground and the e2e specs; and a single Playwright suite runs against the Nuxt demo, then against plain Vue, React and Svelte test apps. When the framework-free rule is followed, "does it work in React?" is mostly "does the adapter mount correctly?" — and that's the kind of question a browser test answers once, for everyone.

The lesson generalizes past whiteboards. When you're asked to support N frameworks, don't write N implementations — push your state and your logic below the framework line until the framework is a detail. Then the adapter is a few hundred lines, the test suite is one suite, and the next framework on the list is an afternoon.

The code is all here: [github.com/TheAlphaOnes/opendraw](https://github.com/TheAlphaOnes/opendraw). If you want the engine internals — the history, the cache, the two canvases — [we wrote that up too](/writing/inside-the-opendraw-engine).
