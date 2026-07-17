---
title: "TAO-CANVAS"
description: "High-performance WebGL rendering engine."
status: "BETA"
---

## ARCHITECTURE
TAO-CANVAS is our proprietary WebGL rendering context. It bypasses the DOM entirely for raw 60fps interaction.

## PHILOSOPHY
The browser's layout engine is slow. For complex, heavily interactive applications (like node graphs, visual programming, and high-fidelity mapping), depending on the DOM leads to unacceptable frame drops. We render directly to a canvas context, controlling the draw pipeline manually.

## PERFORMANCE
- **Render Target:** Single `<canvas>` element.
- **State Sync:** 16ms delta.
- **Memory Footprint:** < 50MB baseline.

## USAGE
TAO-CANVAS is utilized internally for our infrastructure topology visualizations and system monitoring dashboards.
