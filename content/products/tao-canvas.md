---
title: "TAO Canvas"
description: "High-performance WebGL canvas for infinite spatial organization."
status: "BETA"
version: "0.8.2"
heroMedia: "/images/eduardo_laptop.gif"
---

## ARCHITECTURE
TAO-CANVAS is our proprietary WebGL rendering context. It bypasses the DOM entirely for raw 60fps interaction.

## PHILOSOPHY
The browser's layout engine is slow. For complex, heavily interactive applications (like node graphs, visual programming, and high-fidelity mapping), depending on the DOM leads to unacceptable frame drops. We render directly to a canvas context, controlling the draw pipeline manually.

## PERFORMANCE
- **Render Target:** Single `<canvas>` element.
- **State Sync:** 16ms delta.
- **Memory Footprint:** < 50MB baseline.

![Canvas Render Demo](/images/scenery1.jpg)

## USAGE
TAO-CANVAS is utilized internally for our infrastructure topology visualizations and system monitoring dashboards.
