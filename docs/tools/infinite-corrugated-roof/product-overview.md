---
id: product-overview
title: Overview
sidebar_position: 1
description: Infinite Corrugated Roof generates production-ready corrugated metal roofs in Unity from a single component — live panels, curve wave profiles, weathering, spline deformation, 3-level LOD and FBX baking.
keywords:
  - unity corrugated roof
  - procedural roof generator
  - corrugated metal unity
  - industrial roof asset
  - LOD roof unity
---

# Infinite Corrugated Roof — Overview

**Infinite Corrugated Roof (ICR)** generates a corrugated metal roof as a grid of
overlapping panels directly on the `InfiniteCorrugatedRoof` component. Every parameter —
panel count, wave shape, wear, jitter, cuts — is edited live in the Inspector, and the
mesh rebuilds instantly. Three levels of detail (LOD) are generated and managed
automatically.

:::info No external tools required
Splines and FBX baking are optional add-ons. Out of the box, ICR needs nothing beyond a
material.
:::

## What it does

- **Grid of overlapping panels** — size a roof to any building; columns overlap by one
  corrugation wave and rows overlap like real installed sheets.
- **Curve-driven wave profiles** — any `AnimationCurve` cross-section (round, trapezoidal,
  asymmetric) plus Perlin surface noise for weathering.
- **Believable per-panel variation** — jitter, tilt/yaw, length variance and a texture
  atlas of 8 wear levels keep the roof from looking tiled.
- **Optional spline deformation** — bend the roof along a `SplineContainer` with three
  modes (Unity Splines package).
- **Automatic 3-level LOD** — a managed `LODGroup` keeps distant roofs cheap.
- **One-click FBX baking** — ship a static, deterministic mesh for final builds (FBX
  Exporter package).
- **Deterministic** — a single `randomSeed` reproduces the exact same roof every time.

## Specs

| | |
| --- | --- |
| **Unity** | 2021.3 LTS or newer |
| **Render pipelines** | Built-in, URP & HDRP (sample materials for URP and HDRP) |
| **Optional** | Unity Splines 2.1.0+ · FBX Exporter 5.0.0+ |
| **Dependencies** | None required |

## Where to go next

- [Introduction](./intro.md) · [Getting Started](./getting-started.md)
- [Editor Guide](./editor-guide.md) — every Inspector field
- [Advanced Features](./advanced-features.md) — splines, cuts, FBX baking
- [API Reference](./api-reference.md) — scripting the component

---

*Buy on the [Unity Asset Store](https://assetstore.unity.com/packages/tools/modeling/infinite-corrugated-roof-357650).*
