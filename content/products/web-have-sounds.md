---
title: "WEB-HAVE-SOUNDS"
description: "Zero-dependency, math-driven audio generation."
status: "OSS"
heroMedia: "/images/skull-book.png"
link: "https://github.com/NormVg/web-have-sound"
---

**We are building a zero-dependency, math-driven audio library for web developers and UX engineers to generate interactive sonic feedback without relying on heavy asset files.**

## The Problem
Audio is a critical component of a rich, tactile user experience, yet adding sound to the web has historically been a terrible experience. Developers are forced to load bulky `.wav` or `.mp3` files, resulting in network latency, bloated bundle sizes, and sounds that fail to play precisely when a user clicks a button. We were tired of sacrificing performance for interactivity, and we wanted a way to synthesize perfect UI sounds instantaneously.

## The Solution
`@thenormvg/web-have-sounds` is a professional, open-source JavaScript/TypeScript library that generates UI sound effects entirely through mathematics using the native Web Audio API. 

- **Zero Asset Overhead**: No audio files to load. No network requests. Just pure procedural generation.
- **Zero Latency**: Because the sound is generated mathematically on the client, playback is instant, with absolutely no buffering or decoding delays.
- **Nine Contextual Categories**: From crisp `click`s to ascending `success` chimes, the library provides tailored sonic palettes (like *aero*, *arcade*, and *glass*) to fit any interaction.

## Getting Started
As strong believers in [Open Source](/organization/open-source), we've made this library freely available.

**Installation:**
```bash
npm install @thenormvg/web-have-sounds
```

**Usage:**
```javascript
import { playUISound } from '@thenormvg/web-have-sounds';

// Attach to a button click for an instant, math-generated pop
document.querySelector('#submit-btn').addEventListener('click', () => {
  playUISound('pop');
});
```

Join the development and view the full documentation on [GitHub](https://github.com/NormVg/web-have-sound), or connect with us on [X (Twitter)](https://twitter.com/NormVg).
