---
id: product-overview
title: Overview
sidebar_position: 1
description: Simple Painter (Simple Paint 3D) is a runtime 3D texture-painting toolkit for Unity — multi-channel PBR painting, layers, five stroke methods, six input devices and three physically-simulated fluid-paint solvers.
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
A **Paint Tool** combines an **input device** with a **`DrawConfig`** asset that supplies
both the stamp's geometry and its ink. A separate **canvas** — one of three concrete
types — hosts the channel/layer data, and, for the fluid-simulation canvas, a physically
simulated wet-paint solver that runs on top of what was stamped.
:::

## What ships in the package

| | |
| --- | --- |
| **Runtime modules** | 10 |
| **Canvas types** | 3 — MultiChannel, Simulation, SingleTarget |
| **Draw configs** | 2 — Standard Brush, Fill Mesh (erase is a mode on either) |
| **Stroke methods** | 5 — Direct, Drag Dot, Line, Bezier, Anchored |
| **Input devices** | 6 — Mouse, Pen, Touch, Collision, Particle, Object |
| **Fluid solvers** | 3 — Viscous (MLS-MPM), Ink (vorticity bloom), Film (height-field) |
| **Channel types** | 3 — Color, Scalar, Normal |
| **Unity** | 2021.3 or newer · Built-in, URP & HDRP |
| **Dependency** | `com.deepwave.core` |

## Highlights

- **Multi-channel PBR painting** — paint Color, Scalar (metallic/smoothness/AO…) and
  Normal channels independently, each bound to any shader property you define.
- **Photoshop-style layers** — every channel on a `MultiChannelCanvas` or
  `SimulationCanvas` holds its own stack of layers with visibility, opacity, a starting
  texture and a per-data-type blend mode.
- **Three canvas types** — a general-purpose layered canvas, a fluid-simulation canvas,
  and a minimal single-channel canvas for the cheapest possible setup.
- **Six input devices & five stroke methods** — all feeding one shared, hot-swappable
  stroke pipeline.
- **Three fluid solvers** — physically simulated wet paint with adhesion, viscosity and
  cohesive pressure (Viscous), a swirling vorticity-confined ink bloom (Ink), or a cheap
  drip-and-dry height field (Film) — pick whichever look and budget fit your project.
- **Animated & skinned mesh support** — paint directly on moving characters; the live
  pose is baked automatically.
- **Automatic UV seam fixing** — every canvas fixes seams on its own; strokes bleed
  correctly across UV islands instead of stopping at the cut.
- **Paint progress tracking** — measure how much of a channel has been painted or erased,
  masked to the real UV footprint.
- **Performance-first GPU pipeline** — one pooled command buffer per frame, reused render
  textures, upfront shader warm-up, Job System raycasting and async GPU readbacks.

## Where to go next

- [Introduction](./intro.md) — the modular pipeline in one page
- [Getting Started](./getting-started.md) — build a paintable object in 8 steps
- [Architecture & Execution Order](./architecture.md) — how a stroke flows through the frame
- [API Reference](./api-reference.md) — key components, methods and events

---

*Buy on the [Unity Asset Store](https://assetstore.unity.com/packages/tools/painting/simple-paint-3d-375642) · try the [playable demo](https://deepwave.itch.io/simple-painter-unity-demo).*
