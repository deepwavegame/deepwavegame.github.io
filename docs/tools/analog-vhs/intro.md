---
id: intro
title: Introduction
sidebar_position: 1
description: Analog VHS is a retro post-processing effect for Unity 6 — worn-tape grain, tracking loss, scanlines and real bandwidth-limited composite color, with a CRT screen model and an analog-horror toolkit, on Built-in, URP and HDRP.
keywords:
  - unity vhs shader
  - unity crt shader
  - retro post processing unity
  - analog horror unity
  - composite video unity
---

# Analog VHS — Introduction

**Analog VHS** turns any camera into a worn tape deck, a broadcast monitor or a haunted
camcorder. One `AnalogVhsEffect` component reads an `AnalogVhsProfile` asset — seven
independent modules rendered in four fullscreen passes shared by Built-in, URP and HDRP — so
swapping looks at runtime is just swapping an asset reference.

:::info Real composite bandwidth limiting, not a blur filter
The CRT module stores luma at half resolution and re-sharpens it with an unsharp mask, and
chroma at roughly 1/16 resolution with a horizontal delay — the actual mechanism behind
composite-video color bleed, adapted from a from-scratch Shadertoy-style study of how a real
VHS/CRT signal degrades.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 6000.0 or newer |
| **Render pipelines** | Built-in, URP 17+, HDRP 17+ |
| **Modules** | 7 — Pixelation, Color, Noise, Jitter, Signal & Grade, CRT Screen, Phosphor Trail |
| **Presets** | 14, from a clean VCR to full signal chaos |
| **Setup** | One-click pipeline diagnose-and-apply tool |
| **Dependencies** | None — the shared shader library has no pipeline package includes |

## Highlights

- **Seven independent modules, one profile asset** — each with its own master toggle, so a
  look is just a `AnalogVhsProfile` `ScriptableObject` you can create, tune and ship.
- **Analog-horror toolkit** — rolling tracking loss that slides the picture above it sideways
  and dissolves the line into static, per-line hue phase error, wavy scanline distortion and
  head-switch darkening.
- **CRT screen model** — barrel curvature with a black border, an RGB phosphor stripe mask,
  full-frame flicker and a TV-style vignette that stays live even while bandwidth limiting
  itself is switched off.
- **Pipeline-independent core** — Built-in via `OnRenderImage`, URP via a RenderGraph Renderer
  Feature, HDRP via a Custom Pass, all driving the same shared HLSL library.
- **One-click pipeline setup** — *Tools > Deepwave > Analog VHS > Setup Current Pipeline*
  diagnoses the active pipeline and open scene, then wires up the renderer feature or custom
  pass volume, assigns a default profile and converts materials authored for another pipeline.

## Read next

- [Tools overview](/tools) — see Analog VHS alongside Deepwave's other Unity packages
- The package's own `QuickGuide.html` (included with the Package Manager install) covers every
  module, all 14 presets and the full C# API in detail.
