---
title: "Inside the opendraw Engine"
date: "2026-10-28"
author: "taohq"
description: "Immutable elements, reference-keyed caches and seeded wobble: the four systems that keep a hand-drawn canvas fast, and what they teach about canvas apps generally."
product: "opendraw"
---

A hand-drawn whiteboard looks like a toy and behaves like a database. Under the sketchy lines there are four systems that have to work together every frame: a data model, an undo history, a renderer and an input layer. This is a tour of how opendraw's work — and the reasoning is more reusable than the code.

## The model: elements are immutable

Everything in a scene — rectangles, arrows, sticky notes, frames, all ten element types — is a plain, frozen record. `x` and `y` anchor the un-rotated top-left corner, `angle` rotates around the center, and style lives on the element itself. When you drag a shape, opendraw doesn't mutate it. It produces a new object with new coordinates.

This one decision is load-bearing for everything downstream:

- **Undo becomes cheap.** A snapshot of the scene is just references to element objects, not a deep clone. There is nothing to copy, because nothing ever changes in place.
- **Reactivity becomes honest.** Vue, React and Svelte all have fast paths for "is this the same object?" Copy-on-write means reference equality is a correct answer.
- **Rendering gets a cache for free.** Hold that thought; it's the next section.

The trade is allocation: dragging a rectangle creates a new object per pointer event. Modern JavaScript engines eat that cost without noticing, and what it buys is worth far more than what it costs.

## History: snapshots, not deltas

Excalidraw, whose scene model opendraw follows, moved from per-entry snapshots to inverse deltas — because their scenes are huge and shared with collaborators, and storing full snapshots for every keystroke doesn't scale there.

opendraw keeps snapshots. The reasoning, from the history module's own comments: elements are already immutable, so a snapshot is two cheap references, and correctness is trivial to reason about. An undo stack of a hundred entries is a hundred pairs of references. When your data model makes the naive solution cheap, take the naive solution — naive code that's obviously right beats clever code you have to debug.

One rule keeps the stack meaningful: **only scene changes become history entries**. Changing which tool is armed, what's selected, what style is pending — those never touch history. So undo always means "my drawing went back a step," never "the UI went back a step."

## Rendering: cache keyed by identity

The expensive part of hand-drawn rendering is not drawing — it's generating the rough.js drawables that decide where every wobbly stroke lands. Do that for every element every frame and you'll feel it.

opendraw's renderer keeps a module-level `WeakMap` keyed by **element reference**. First time an element is seen, its drawables are generated and cached; every later frame, unchanged elements are simply replayed. This cache is only correct because elements are immutable — if a rectangle could mutate in place, the cache would silently serve stale geometry. Immutability isn't a style choice here; it's what makes the cache sound.

Two details worth stealing:

- The cache entry records the theme it was colored for, so switching themes regenerates each drawable exactly once and then hits again.
- Freedraw strokes skip rough.js entirely — perfect-freehand produces the outline, filled as one smoothed `Path2D`. Sketchy geometry is for shapes; a hand-drawn stroke is already hand-drawn.

## The wobble is seeded, not random

Hand-drawn jitter that changes every frame doesn't look sketchy; it looks like a broken TV. rough.js takes a numeric seed per shape, and opendraw feeds each element a seed through mulberry32, a tiny deterministic PRNG. Same element, same seed, same wobble — across frames, across reloads, across exports. Determinism is also what makes the SVG you export match the PNG you exported before.

## Two canvases, split by how often they change

The editor mounts two stacked canvases. The **static canvas** below renders the scene: background, grid, every element. The **overlay canvas** above renders what changes on top of it — selection boxes and handles, arrows being drafted, the laser pointer's fading trail. Selection changes are the highest-frequency visual event in a whiteboard; keeping them on their own layer means selecting and deselecting never forces a scene re-render.

It's the same principle as the WeakMap, one level up: separate what changes often from what doesn't, and make the expensive thing happen rarely.

## Input and export

Pointer events go through hit testing against element bounds and geometry — which shape you grabbed, which handle, which end of which arrow — with two-finger pinch and pan for touch (ported from Excalidraw, along with the elbow-arrow router and the laser's trail). Export is pure core: the same element list that renders to screen serializes to `.opendraw` JSON, or renders to an SVG, or rasterizes to a PNG. One model, many outputs, no rendering special cases.

## What generalizes

Three of these ideas travel well beyond whiteboards:

1. **Immutability first.** It's not React dogma — it makes undo, caching and change detection all trivially correct at once.
2. **Key caches by identity.** If your objects are immutable, a reference is a perfect cache key, and invalidation happens by construction.
3. **Split surfaces by change frequency.** Two cheap canvases beat one clever one.

That's the engine. If you'd rather use it than read it: [opendraw.taohq.org](https://opendraw.taohq.org) runs it live, [the guide](/writing/how-to-use-opendraw) covers the APIs, and [the source](https://github.com/TheAlphaOnes/opendraw) is short on ceremony and long on comments.
