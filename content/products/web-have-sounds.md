---
title: "WEB-HAVE-SOUNDS"
description: "A zero-dependency JavaScript library for generating UI sound effects through math. No audio files. No network requests."
status: "OSS"
heroMedia: "/images/skull-book.png"
link: "https://github.com/NormVg/web-have-sound"
---

**We are building a sound library for web developers who want interactive audio feedback without the payload — pure math, native APIs, zero compromise.**

## The Problem

Adding sound to a web app has always felt like a slightly embarrassing trade-off. You either load a bunch of `.wav` or `.mp3` files that bloat your bundle, introduce network latency, and sometimes just don't play at all — or you skip audio entirely and ship an interface that feels a little quieter than it should.

The Web Audio API has been sitting in browsers for years, capable of generating rich sound entirely through code. But the mental overhead of working with it directly is real. Oscillators, gain nodes, buffer sources, timing — it's a lot to learn just to make a button go *click*.

We wanted a better path.

## The Solution

`@thenormvg/web-have-sounds` is a professional, open-source JavaScript and TypeScript library that generates UI sound effects entirely through mathematics. No audio files. No CDN. No network requests. Just the Web Audio API doing what it was always capable of, wrapped in a clean, minimal interface.

- **Zero Dependencies**: Extremely lightweight. Nothing to install beyond the library itself.
- **Instant Playback**: Because the sound is generated in real-time, there's no buffering, no decoding delay. It plays the moment you call it.
- **Nine Sound Types**: From crisp `click`s to ascending `success` chimes, to bubbling `pop`s and descending `drop`s — tailored to fit real interaction contexts, not just demos.
- **Themeable**: Nine distinct sonic palettes — *aero*, *arcade*, *glass*, and more — so the sound matches the feeling of your interface.
- **Framework Agnostic**: Works with React, Vue, Svelte, Vanilla JS. If it runs in a browser, this library runs in it.

## Getting Started

Install via your package manager of choice:

```bash
npm install @thenormvg/web-have-sounds
```

Then attach it to any user interaction:

```javascript
import { playUISound } from '@thenormvg/web-have-sounds';

document.querySelector('#submit-btn').addEventListener('click', () => {
  playUISound('pop');
});
```

One thing worth knowing: browsers require a user gesture before the Web Audio API will play anything. Call `playUISound` inside a click or keypress handler and you'll be fine. More details in the docs.

## Where to Find It

This is one of the first open-source tools we've shipped as [TheAlphaOnes](/organization/about). We believe in building in the open — not just for visibility, but because the best tools get sharper when more people use them.

- **npm**: [npmjs.com/package/@thenormvg/web-have-sounds](https://www.npmjs.com/package/@thenormvg/web-have-sounds)
- **GitHub**: [github.com/NormVg/web-have-sound](https://github.com/NormVg/web-have-sound)
- **Updates**: [X (Twitter)](https://twitter.com/TheNormVg)

If you use it in a project, we'd genuinely love to hear about it.
