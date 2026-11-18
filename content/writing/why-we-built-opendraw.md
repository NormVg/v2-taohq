---
title: "Why We Built opendraw"
date: "2026-10-31"
author: "taohq"
description: "Excalidraw is a wonderful app you have to leave your app to use. The case for a hand-drawn whiteboard that ships as a component instead."
product: "opendraw"
---

Every builder knows this moment. You're explaining your product to someone — a teammate, a client, your future self — and at some point words stop being enough. You need a rectangle, an arrow, and a circle with a line through it. So you reach for a whiteboard.

[Excalidraw](https://excalidraw.com) nailed what that moment should feel like. The sketchy rendering, the arrows that stick to shapes, the keyboard shortcuts — it's the whiteboard against which all other whiteboards are measured, and we say that as grateful users. opendraw would not exist without it, and we've said so [in the repo](https://github.com/TheAlphaOnes/opendraw) too.

## The leaving part

Here's what bothered us. Using any whiteboard app means leaving the app you're actually building. You visit a site, you draw, you export a PNG, you paste the PNG. The moment the diagram leaves the whiteboard, it dies a little: it can't be edited, it can't be listened to, and it sits in your app as a picture of thinking rather than as thinking.

That's fine for a one-off sketch. It's not fine when the whiteboard *is* a feature. Planning flows inside your project tool. Diagrams attached to your docs. A canvas in your education app. For those, the whiteboard has to live where the work lives, feel like the rest of the product, and save where you decide — not on someone else's site.

## The two bad options

Until now, embedding a whiteboard meant choosing between two bad options.

**Option one: the iframe.** Embed a hosted board in a box. The drawing is technically on your page, but it's a foreign runtime: its own domain, its own login, its own styling that will never match yours, its own mobile experience inside a box inside your mobile experience. It works, the way a window into someone else's house works.

**Option two: build your own.** A canvas engine with hit testing, gesture handling, undo history, text editing, arrow binding, export... call it a few months. We know, because we did it.

## The third option

We wanted the thing that didn't exist: a whiteboard as a **native component**. No iframe, no foreign runtime. Mounts like any other component, renders in your theme, fires events you can persist anywhere, and — this was the real requirement — can also run *headless*, as just a canvas you drive yourself, for the times the full editor UI is not what your product needs.

That requirement forced the architecture: the engine and the interactive editor know nothing about any UI framework, and the Vue, React and Svelte packages are thin adapters over the same core. One engine, four frameworks, no duplication.

## Honest about lineage

opendraw follows Excalidraw's lead closely on purpose — how tools, selection, arrow binding, undo and shortcuts behave was studied from its source, so people who know Excalidraw feel at home immediately. Some parts are outright ported and adapted, with the MIT notices kept: the elbow-arrow router, the laser pointer's trail, the two-finger pinch and pan, and Excalifont for the hand-drawn text.

If you want a complete, collaborative whiteboard app, use excalidraw.com. opendraw is for the other case: putting a whiteboard *inside your own app*.

## Why open source

A component lives inside other people's codebases. Nobody should have to take that on faith — the source has to be readable, buildable and forkable, and the license has to let you ship it without calling us. So: MIT, no paid tier, no "cloud sync for teams" upsell hiding behind the component. What you mount is what you run.

We wrote more this week: [how the engine is built](/writing/how-we-built-opendraw), [a practical guide to using it](/writing/how-to-use-opendraw), and [a tour inside the engine](/writing/inside-the-opendraw-engine). And you can just go draw: [opendraw.taohq.org](https://opendraw.taohq.org).
