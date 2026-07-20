---
title: "We Shipped web-have-sounds"
date: "21.07.2026"
author: "TheAlphaOnes"
---

A few weeks ago, we quietly put `@thenormvg/web-have-sounds` on npm. No launch post, no product hunt, just pushed it and started using it ourselves. We're writing this now because we think it's worth explaining — both what it does and why we built it.

## The Friction

We'd been building UIs for a while, and there was always this moment in the process where you'd want to add a small audio cue — a click when you press a button, a soft chime when something completes, a subtle drop when a modal closes — and the process of actually doing it felt disproportionately annoying.

Your options were roughly: load a `.wav` file (suddenly your bundle has audio assets and a loading problem), use a third-party library (dependencies and size), or dig into the Web Audio API yourself (which is powerful and also genuinely not fun to work with for simple use cases).

We wanted none of those options. We wanted to write one line of code and hear a sound.

## What We Built

`@thenormvg/web-have-sounds` generates UI sounds through mathematics. No audio files. No network requests. No dependencies. It uses the Web Audio API — which is already in your browser — to synthesize sound in real time, exactly when you call it.

```bash
npm install @thenormvg/web-have-sounds
```

```javascript
import { playUISound } from '@thenormvg/web-have-sounds';

button.addEventListener('click', () => {
  playUISound('click');
});
```

That's it. The sound plays instantly, because it's generated at call time rather than loaded from somewhere.

## What It Can Do

Nine sound types, nine sonic themes. You can use `click`, `pop`, `toggle`, `tick`, `drop`, `success`, `error`, `whoosh`, or `notification` — each tuned for specific UI contexts. And you can switch themes like `aero`, `arcade`, `glass`, and more to match the personality of whatever you're building.

If you want to go deeper, everything is parameterizable. You can pass your own mathematical parameters and sculpt something entirely custom. But the defaults are already pretty good.

## Why Open Source

We build open source because the tools we rely on most are open source. It feels right to put something back.

We also think this specific library fills a gap that nobody else has filled particularly well. Sound in web apps is underused, partly because the tooling is bad. Maybe this makes it a little easier for someone who would have otherwise skipped it.

The [GitHub is here](https://github.com/NormVg/web-have-sound). The [npm package is here](https://www.npmjs.com/package/@thenormvg/web-have-sounds). Issues and PRs welcome.

If you build something with it, tell us on [X (Twitter)](https://twitter.com/TheNormVg). We're curious what people make.
