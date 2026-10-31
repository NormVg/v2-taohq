---
title: "What a Workspace OS Actually Means"
date: "2026-09-16"
author: "taohq"
description: "Not another app to open, but an environment to exist in. The thinking behind Bubbles.space's spatial canvas and its resident assistant."
product: "bubbles-space"
---

"Workspace OS" is the kind of phrase that sounds like it means something until you ask anyone to define it. So let's define it.

An operating system, in the original sense, is the environment your work *lives in*. You don't open the OS to do a task; you exist inside it while doing every task. Things live somewhere, they're arranged by relevance, and the system itself handles the plumbing — memory, scheduling, what's where.

By that definition, most people's actual workspace is fifteen browser tabs, three chat apps, and a notes app where half the notes are links to the other half. Their tools don't form an environment. They form a commute.

## The tab that was supposed to fix it

The optimistic take was that AI would consolidate all of this. Instead, AI became the sixteenth tab — [a chatbox you visit](/writing/the-future-of-ai-is-proactive), where you paste context in, carry an answer out, and lose the thread the moment the tab closes. It's intelligence, but as a place you go rather than a thing that lives where you work.

That's the gap [Bubbles.space](/products/bubbles-space) is aimed at: not a better chat, but an actual environment — a workspace where your notes, your projects, your data and your AI all occupy the same room.

## Why spatial

The canvas is the whole bet, so it's worth defending. Lists pretend thinking is linear. It isn't. When you think about a project, you don't think in a scroll — you think in clusters, connections and proximity. This is next to that. This depends on that. This is unfinished, so it stays at the edge of attention.

A zoomable spatial canvas takes that structure seriously. You arrange your thinking the way it actually sits in your head — clusters grouped by project, loose ideas parked at the margins, connections drawn where they exist — and zoom becomes attention: in for detail, out for the whole day's shape. Nobody has to learn this; it's how physical desks have always worked. Software just forgot it in favor of the scroll.

The things on the canvas are widgets that live there natively: documents, graphs, diagrams, timers, web content — not files opened in another app, but objects sitting in the room, next to each other, next to you.

## The resident, not the popup

The assistant — Bubbles — is the other half of the definition, and the difference is residency. A chatbot is a popup: summoned, asked, dismissed, forgetful. Bubbles is a native presence in the workspace. It sees the canvas because the canvas is its home too. It recalls context from past sessions, understands what you're working on, and moves things forward without waiting to be asked.

That's what earns the word "proactive": the work of organizing, summarizing and nudging happens around you, continuously, instead of being a task you perform with a prompt.

## The plumbing, honestly

An environment has to persist and stay in sync or it's just a toy. Bubbles.space is built on Nuxt 4 for the app, Neon Postgres for durable storage, Ably for real-time sync, and Eve for the agent layer — chosen so that the canvas you leave is the canvas you come back to, on any device, and so people can co-exist in the same workspace the way they co-exist in a room, because that's how real work happens.

## The endgame

We've [written before](/writing/introducing-bubbles) about wanting AI that does the carrying for you. Bubbles.space is where that stops being an essay and becomes an environment. The measure of success isn't time in the app — a workspace that works well should, in a strange way, be *opening fewer apps*, not more.

It's in development. Follow along on [X](https://x.com/TheNormVg), or watch the [product page](/products/bubbles-space) as it takes shape.
