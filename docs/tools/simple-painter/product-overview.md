---
id: product-overview
title: Overview
sidebar_position: 1
description: Simple Painter (Simple Paint 3D) is a runtime 3D texture-painting toolkit for Unity — multi-channel PBR painting, layers, six stroke methods, five input devices and physically-simulated fluid paint.
keywords:
  - unity texture painting
  - runtime paint tool unity
  - simple paint 3d
  - PBR channel painting
  - unity fluid paint
---

# Simple Painter — Overview

**Simple Painter** (listed on the Unity Asset Store as **Simple Paint 3D**) is a runtime
3D texture-painting toolkit for Unity. It lets a game, a configurator, or an editor tool
paint directly onto meshes while the game is running — not just a flat colour, but any
PBR material channel (albedo, metallic, smoothness, normal maps and more), composited
through a multi-layer system similar to a digital image editor.

:::info Built from small, swappable modules
A **Paint Tool** is assembled from three independent pieces — an **input device**, a
**stroke method**, and an **ink/paint method**. A separate **committer** then bakes the
result into a channel's layer stack — either instantly, or through a physically-simulated
wet-paint process.
:::

## What ships in the package

| | |
| --- | --- |
| **Runtime modules** | 10 |
| **Paint tools** | 4 — Brush, Erase, Fill Mesh, Pick |
| **Stroke methods** | 6 — Direct, Dot, Drag Dot, Line, Bezier, Anchored |
| **Input devices** | 5 — Mouse, Pen, Touch, Collision, Particle |
| **Channel types** | 3 — Color, Scalar, Normal |
| **Unity** | 2021.3 or newer · Built-in, URP & HDRP |
| **Dependency** | `com.deepwave.core` |

## Highlights

- **Multi-channel PBR painting** — paint Color, Scalar (metallic/smoothness/AO…) and
  Normal channels independently, each bound to any shader property you define.
- **Photoshop-style layers** — every channel holds its own stack of layers with
  visibility, opacity, a starting texture and a per-data-type blend mode.
- **Five input devices & six stroke methods** — all feeding one shared, hot-swappable
  stroke pipeline.
- **Physically-simulated fluid paint** — an optional viscous committer with adhesion,
  viscosity, cohesive pressure, gravity flow and evaporation.
- **Animated & skinned mesh support** — paint directly on moving characters; the live
  pose is baked automatically.
- **Automatic UV seam fixing** — strokes bleed correctly across UV islands instead of
  stopping at the cut.
- **Paint progress tracking** — measure how much of a channel has been painted or erased,
  masked to the real UV footprint.
- **Performance-first GPU pipeline** — one pooled command buffer per frame, reused render
  textures, Job System raycasting and async GPU readbacks.

## Where to go next

- [Introduction](./intro.md) — the modular pipeline in one page
- [Getting Started](./getting-started.md) — build a paintable object in 7 steps
- [Architecture & Execution Order](./architecture.md) — how a stroke flows through the frame
- [API Reference](./api-reference.md) — key components, methods and events

---

*Buy on the [Unity Asset Store](https://assetstore.unity.com/packages/tools/painting/simple-paint-3d-375642) · try the [playable demo](https://deepwave.itch.io/simple-painter-unity-demo).*
