---
id: editor-guide
title: Editor Guide
sidebar_position: 3
description: Every field on the Infinite Corrugated Roof Inspector — panel layout, wave configuration, mesh, modifiers, texture atlas mapping and randomization.
keywords:
  - corrugated roof inspector
  - roof panel settings unity
  - wave profile animationcurve
  - roof texture atlas
---

# Editor & Inspector Guide

The `InfiniteCorrugatedRoof` component groups its parameters into logical sections. Field
names below match the public fields on the component, so they line up with the
[scripting API](./api-reference.md).

## Panel layout & dimensions

Controls the size of the grid and how panels overlap.

| Field | Description | Default |
| --- | --- | --- |
| `columnCount` | Number of panel columns across the roof (X axis) | `1` |
| `rowCount` | Number of panel rows along the roof (Y axis) | `1` |
| `panelWidth` | Width of a single panel, in meters | `1.0` |
| `panelLength` | Length of a single panel, in meters | `2.0` |
| `verticalOverlap` | Vertical overlap between stacked rows, in meters | `0.15` |
| `overlapDistance` | Tiny depth offset between overlapping layers to prevent Z-fighting | `0.001` |

Columns overlap by exactly one corrugation wave so adjacent panels always line up
seamlessly; rows overlap by `verticalOverlap`, just like real corrugated sheets.

## Wave configuration

| Field | Description | Default |
| --- | --- | --- |
| `waveProfile` | `AnimationCurve` describing the cross-section of one wave, sampled over 0–1 | trapezoid-like |
| `wavesPerPanel` | Number of corrugation waves across one panel's width | `9` |
| `corrugationAmplitude` | Height of the wave, in meters | `0.035` |

Any curve shape is supported — round, trapezoidal, asymmetric — as long as it has at least
two keyframes. An invalid curve is reset to a safe default automatically.

## Mesh settings

| Field | Description | Default |
| --- | --- | --- |
| `lengthSegmentsPerPanel` | Subdivisions along a panel's length (LOD0); lower LODs use fewer | `24` |
| `sheetThickness` | Sheet thickness, in meters; `0` = single-sided sheet | `0.001` |

:::tip Performance
Thickness doubles the vertex and triangle count (front + back faces). Keep it at `0` for
distant or background roofs and only enable it where the edge profile is visible.
:::

## Modifiers & variations

### Panel transform

Adds believable, non-uniform placement to individual panels.

| Field | Description |
| --- | --- |
| `horizontalJitterMeters` | Random horizontal offset per panel |
| `verticalGapMeters` | Random vertical gap between stacked panels |
| `tiltDegrees` / `yawDegrees` | Small random rotation per panel |
| `lengthVarianceMeters` | Random shortening of panel length (creates uneven row splits) |

### Surface noise

Perlin-based displacement that breaks up an overly-perfect surface.

| Field | Description |
| --- | --- |
| `height` | Vertical displacement amount |
| `warp` | Horizontal / depth displacement amount |
| `scale` | Size of the noise features — smaller = finer detail |
| `detail` | Blend between a smooth and a rougher secondary noise octave |

### Cut settings

Trims the roof rectangle with an angled line at the start and/or end edge — useful for
gables and sloped roof ends.

| Field | Description |
| --- | --- |
| `mode` | `Horizontal` cuts the whole panel straight; `Diagonal` follows the angle per vertex |
| `startAngleDegrees` / `endAngleDegrees` | Cut angle at the start/end edge; the sign selects which side the cut pivots from |

## Texture mapping

ICR expects a texture atlas with **8 wear-level columns**, each picturing **12 corrugation
waves** — so one material can represent everything from clean, new metal to heavily rusted
sheets.

| Field | Description |
| --- | --- |
| `panelColors` | List of vertex colors, assignable per panel (tint applied in the shader) |
| `verticalTiling` | Repeats the atlas vertically along the panel length |
| `verticalOffset` | Shifts the V coordinate — useful to de-align tiling seams between rows |
| `wearLevel` | Selects which of the 8 atlas columns (0–7) each panel uses |
| `panelColorIndex` | Selects which color from `panelColors` each panel uses |

Panel orientation (mirrored/flipped) is chosen per panel automatically to avoid a
repetitive, tiled look.

## Randomization & seed

`wearLevel`, `verticalOffset` and `panelColorIndex` are **Dynamic Values**: toggle
**Randomize** on any of them to draw a value per panel from a min–max range instead of a
fixed value.

All randomization — jitter, tilt and noise offsets included — is driven by `randomSeed`.
The same seed always reproduces the exact same roof, so you can share a seed with a
teammate or lock one in before a final build.

---

*Next: [Technical Reference](./technical-reference.md)*
