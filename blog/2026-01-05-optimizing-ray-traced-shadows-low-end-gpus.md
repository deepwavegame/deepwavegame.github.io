---
title: "Optimizing Ray-Traced Shadows for Low-End GPUs"
description: "Techniques for hybrid rendering in HDRP to maintain 60FPS."
date: 2026-01-05
slug: optimizing-ray-traced-shadows-low-end-gpus
authors: [vuminh]
tags: [unity, tech-art]
---

![Ray Tracing](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80)

## The Shadow of the Next Gen

Ray tracing (RT) offers unparalleled realism, especially in horror where shadows are a primary narrative tool. However, the performance cost is often prohibitive for players without high-end RTX hardware. At Wave0084, we've developed a **Hybrid Shadow System** that brings the benefits of ray-traced shadows to a wider audience.

### The Hybrid Approach

The core idea is simple: only use ray tracing where it matters most. For distant objects or subtle secondary shadows, we stick with traditional shadow maps. For hero objects and close-range shadows, we enable RT.

In Unity's High Definition Render Pipeline (HDRP), we use **Ray Tracing Quality Levels**.
1.  **Denoising**: The most expensive part of RT is often the denoising pass. By using a more aggressive, lower-resolution denoiser, we can significantly reduce the GPU load while maintaining the "soft" look of ray-traced shadows.
2.  **Max Ray Length**: By capping the distance a ray can travel, we prevent the GPU from calculating shadows for objects far outside the player's immediate focus.

### Resolution Scaling and STP

We also leverage **Spatial Temporal Post-Processing (STP)**. By rendering the ray-traced shadow pass at half the native resolution and then using STP to upsample and sharpen the result, we can achieve nearly identical visual quality at a fraction of the cost.

### Dynamic LOD for RT

Not every object needs ray-traced shadows all the time. We implemented a C# system that dynamically toggles the `Ray Tracing` flag on mesh renderers based on:
- **Distance from Camera**: Only objects within 10 meters receive RT shadows.
- **Light Intensity**: If a light source is too dim for shadows to be clearly visible, we fall back to shadow maps.

These optimizations allow us to support ray tracing as an "Ultra" setting that is actually playable on mid-range hardware (like an RTX 3060), rather than it being a feature only accessible to a tiny fraction of our player base.

