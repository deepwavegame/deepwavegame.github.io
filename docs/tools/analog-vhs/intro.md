---
id: intro
title: Introduction
sidebar_position: 1
description: Analog VHS is a retro post-processing effect for Unity 6 — real lens chromatic aberration, worn-tape grain, tracking loss and bandwidth-limited composite color, with a CRT screen model and an analog-horror toolkit, on Built-in, URP and HDRP.
keywords:
  - unity vhs shader
  - unity crt shader
  - retro post processing unity
  - analog horror unity
  - composite video unity
---

# Analog VHS — Introduction

**Analog VHS** turns any camera into a worn tape deck, a broadcast monitor or a haunted
camcorder. One `AnalogVhsEffect` component carries the whole effect — nine independent
modules following the signal chain from the lens to the glass of the tube, rendered in
shared fullscreen passes across Built-in, URP and HDRP. There is no profile asset in the
middle: the settings live directly on the component, so what the inspector shows is what
renders.

:::info Real composite bandwidth limiting, not a blur filter
The Composite Signal module stores luma at half resolution and re-sharpens it with an
unsharp mask, and chroma at roughly 1/16 resolution with a horizontal delay — the actual
mechanism behind composite-video color bleed, adapted from a from-scratch Shadertoy-style
study of how a real VHS/CRT signal degrades.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 6000.0 or newer |
| **Render pipelines** | Built-in, URP 17+, HDRP 17+ |
| **Modules** | 9 — Lens, Retro Resolution, Tape Artifacts, Distortion, Composite Signal, Colour Quantization, Colour Grade, Bloom, CRT Screen |
| **Presets** | 20, from a clean VCR to full signal chaos |
| **Setup** | One-click pipeline diagnose-and-apply tool |
| **Dependencies** | None — the shared shader library has no pipeline package includes |

## Highlights

- **Nine modules, all on the camera, no profile asset** — each with its own master toggle,
  and a module that is off costs nothing. A slider you drag in Play mode changes the
  picture on that frame instead of quietly editing a shared asset you'd have to undo later.
- **Real lens chromatic aberration and lens dirt** — lateral dispersion sampled as a
  spectral smear from the optical axis, zero in the centre and widening toward the
  corners, plus dust and cleaning scratches lit by the halation behind them.
- **One place for colour** — every colour decision (tape levels, chroma response,
  exposure, lift/gamma/gain, saturation, split toning) lives in a single Colour Grade
  module, with 13 built-in looks to start from.
- **CRT screen model** — beam reconstruction that rebuilds every pixel from the two raster
  lines around it, a 15-architecture phosphor mask, radial beam convergence error,
  edge-pinned barrel curvature and phosphor afterglow.
- **Analog-horror toolkit** — a drifting tracking line that collapses a band of rows onto
  one, per-line hue phase error, wavy scanline distortion and one-sided horizontal tape
  smear.
- **Pipeline-independent core** — Built-in via `OnRenderImage`, URP via a RenderGraph
  Renderer Feature, HDRP via a Custom Pass, all driving the same shared HLSL library.
- **One-click pipeline setup** — *Tools > Deepwave > Analog VHS > Setup Current Pipeline*
  diagnoses the active pipeline and open scene, then wires up the renderer feature or
  custom pass volume, loads a starting preset and converts materials authored for another
  pipeline.

## Read next

- [Tools overview](/tools) — see Analog VHS alongside Deepwave's other Unity packages
- The package's own `QuickGuide.html` (included with the Package Manager install) covers
  every module, all 20 presets and the full C# API in detail.
