---
title: "Why UI Sound Matters"
date: "2026-08-05"
author: "taohq"
description: "Good interfaces talk back. On designing audio feedback that informs instead of annoys, and why synthesis beats shipping audio files."
product: "web-have-sounds"
---

Take stock of everything your screen does to talk to you. It's almost all light: something flashes, something turns green, a badge appears. One channel sits there almost unused — sound.

That's not because sound doesn't work. It's because sound is easy to do badly and embarrassing to do loudly, so most teams skip it. Done right, it's the difference between an interface that watches you and one that answers you.

## What sound is actually for

Audio feedback earns its place at exactly three moments:

- **Confirmation.** The button you clicked is doing the thing. A click costs nothing to hear and instantly tells you the press registered — before any visual change happens.
- **Completion.** A task that finishes while you're looking elsewhere. A short chime means you can stop waiting and stop checking.
- **Warning.** Something went wrong, and it should be findable without scanning the screen.

Notice what's missing: ambience, personality jingles, sound as decoration. If a sound isn't telling you something you'd otherwise miss, it's noise.

## The four rules we design by

**Gate it on a gesture.** Browsers require a user interaction before audio can play anyway — treat that policy as a design constraint, not an obstacle. Sound belongs inside a click, a keypress, a drag. Never on page load, never uninvited.

**Make it quiet by default.** The right volume for UI sound is the volume at which you'd notice its absence, not its presence. Anyone who wants it louder can turn it up; nobody forgives a loud default.

**Keep the mapping consistent.** The same event should always make the same sound, everywhere in the product. Sound is a learned language; inconsistent sound is noise with branding.

**Never let it carry the message alone.** Sound is one channel among sight, motion and text. Every piece of audio feedback needs a visual twin — for muted machines, for screen readers, for people who simply prefer silence.

## Why we synthesize instead of shipping files

The traditional cost of UI sound is a stack of `.wav` files: bytes in the bundle, a fetch before playback, decode latency on the first press, and an art pipeline to keep every variant in sync.

The Web Audio API can generate all of this in real time — oscillators, envelopes, filters, math. A click is a few milliseconds of shaped noise. A success chime is two sine tones with a fast decay. Nothing to download, nothing to decode, and the sound plays on the very frame you ask for it.

That's why we built [web-have-sounds](/products/web-have-sounds): nine sound types — click, pop, toggle, tick, drop, success, error, whoosh, notification — each tuned for a real interaction, and nine themes so the voice matches the interface. Zero dependencies, no audio files, no network requests:

```javascript
import { playUISound } from '@thenormvg/web-have-sounds'

button.addEventListener('click', () => {
  playUISound('pop')
})
```

## Try one sound

You don't adopt a sound design by decree. Pick one interaction in your product — the one people repeat most — and give it one quiet, gesture-gated sound. Live with it for a week. What you'll find is what we found: the sound isn't the feature. The feature is that your interface stopped being mute.

The [npm package](https://www.npmjs.com/package/@thenormvg/web-have-sounds) installs in seconds, and the [ship notes](/writing/we-shipped-web-have-sounds) cover the why in more detail.
