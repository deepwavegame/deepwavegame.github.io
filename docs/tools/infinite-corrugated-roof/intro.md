---
id: intro
title: Introduction
sidebar_position: 1
description: Infinite Corrugated Roof (ICR) is a live, procedural corrugated-metal roof generator for Unity built on a single component with instant Inspector rebuilds and automatic LODs.
keywords:
  - infinite corrugated roof
  - procedural roof unity
  - corrugated sheet generator
  - unity environment tool
---

# Infinite Corrugated Roof

**Infinite Corrugated Roof (ICR)** is a procedural tool for Unity that generates highly
customizable corrugated metal roofs — from a simple shed to a sprawling industrial complex
— directly on one component. There is no "Generate" button to press: every field rebuilds
the roof immediately in Edit Mode, so what you see is always up to date.

:::info Live editing, zero GC
Geometry buffers are reused between rebuilds, so dragging Inspector sliders does not create
garbage-collector pressure — the roof can be tweaked freely without frame-rate hitches.
:::

## Key features

- **Grid-based generation** — a scalable panel system for any roof size, with automatic
  column overlap (one wave) and row overlap.
- **Dynamic wave profiles** — fully customize the corrugation cross-section with a standard
  `AnimationCurve`.
- **Modifiers** — Perlin surface noise, per-panel jitter/tilt, angled edge cuts, and
  optional spline deformation.
- **Texture atlas weathering** — 8 wear levels let one material span clean metal to heavy
  rust.
- **Commercial-ready workflow** — automatic 3-level LOD, one-click FBX baking, and a
  deterministic `randomSeed`.

## Compatibility

Unity 2021.3 LTS or newer, on Built-in, URP or HDRP. The Unity Splines and FBX Exporter
packages are optional and only unlock their respective sections when installed.

---

*Next: [Getting Started](./getting-started.md)*
