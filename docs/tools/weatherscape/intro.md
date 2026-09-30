---
id: intro
title: Introduction
sidebar_position: 1
description: "Weatherscape ages a URP scene from one Weather: paint flakes, steel rusts, wood silvers, and wind, snow and dust follow. Eight material families, Unity 6000.3+."
keywords:
  - unity weathering shader
  - urp weathering
  - unity weather system
  - unity wind system
  - procedural rust unity
  - unity snow shader
  - unity vegetation wind shader
---

# Weatherscape — Introduction

**Weatherscape** makes the materials of a Universal Render Pipeline scene age and react to the weather
the way real materials do. It is not a tint or a dirt decal: every material family fails by its own
mechanism, in the places where that mechanism acts.

- Paint crazes, blisters and flakes **along its cracks**, showing the plaster underneath — it never
  shows the brick directly.
- Plaster spalls where damp and running water work it, showing the brick or stone.
- Steel rusts where water stays: lower edges, horizontal faces, crevices, around chips in its paint.
- Copper browns everywhere, then turns green where the rain washes it.
- Wood silvers in the sun, checks along its grain and rots near the ground.

Snow settles on what faces the sky, dust settles in sheltered places, rain darkens porous surfaces, and
wind moves flags, awnings, grass and plants — all from one scene-wide **Weather**.

:::note Not released yet
Weatherscape is not on a store yet. These pages describe the package as it is being prepared for its
first release, so details such as the price and the store page will follow.
:::

## The one idea to remember

> **Weather** — what happens now: wind, wetness, snow, dust, age
> × **Exposure** — where each point of a surface is: its edges, its sky, its sun, its rain, its height above ground
> → the **material's** response — each family ages by its own physics.

The Weather is one component per scene. Exposure is estimated from each surface's orientation, and an
**Exposure Group** bakes it from the real geometry in a few seconds. The materials are ordinary Unity
materials with Weatherscape shaders, tuned in their inspectors.

## What ships in the package

| Area | Details |
| --- | --- |
| **Unity** | 6000.3 or newer, in linear colour space |
| **Render pipeline** | Universal RP 17.3 or newer. URP only — no Built-in or HDRP |
| **Graphics device** | Shader model 4.5: DirectX 11/12, Vulkan, Metal, recent Android GPUs |
| **Rendering paths** | Forward, Forward+ and Deferred, with SSAO, decals, light layers, Unity and Bakery lightmaps, light probes, reflection probes, fog and the SRP Batcher |
| **Material families** | 8 — Wall, Masonry, Metal, Wood, Plastic, Glass, Fabric, Vegetation — over one shared shader library, plus a library of ready-made materials for each |
| **Climates** | 4 — Temperate, Tropical, Arid and Alpine, each a small asset you can restart from and tune |
| **Source** | Full C# and HLSL, no DLLs, in four assemblies: Runtime, Editor, Samples and Tests |
| **Tests** | EditMode tests for the exposure bake, the Weather globals, wind (including GPU/CPU parity), material defaults and a shader compile matrix over every pass and keyword set |
| **Demo** | `Samples/Demo/Weatherscape Demo.unity` — nine stations and a runtime weather panel |
| **Textures** | Made by Deepwave. The base images were created with generative AI (OpenAI image generation), then processed with Deepwave's own tools: seam repair, re-tiling, derived normal, roughness, height and occlusion maps. The shared data textures are procedural. This is the generative-AI disclosure the Asset Store requires |

## Highlights

- **One Weather for the scene** — wind in metres per second with direction, gusts and turbulence, plus
  wetness, snow, dust and an Age multiplier. Presets (Calm, Breezy, Rain, Storm, Snowfall, Dusty) set them
  in one click, and every value can be animated or scripted.

- **Eight families, eight failure modes** — a Wall is paint over plaster over brick or stone; Masonry
  covers concrete, stone, brick and tiles; Metal covers steel, copper, zinc and aluminium; Wood, Plastic
  and Glass each get their own model; Fabric and Vegetation move in the wind.

- **Works before any bake** — assign a Wall material and it is weathered at once, from an estimate of
  its exposure. A bake teaches materials the real geometry: edges wear, grime collects under ledges, water
  streaks run down from sills, damp rises from the ground and rust runs down from iron.

- **Wind that gameplay reads** — the analytic wind field is the same on the CPU and the GPU, so
  `Wind.GetVelocity` returns the wind the shaders show. Wind Sources (directional, radial and shelter)
  change it locally.

- **Fabric and vegetation in the same wind** — flags and awnings sway, billow and turn with the wind;
  grass, leaves, bark and brush bend, twist and flutter, with correct motion vectors.

- **Editor tools that explain themselves** — inspectors list what is wrong and offer one-click fixes;
  the Weatherscape window gathers the scene's weather, the material library and the debug views; *Create
  From Maps* builds layers from your own PBR textures.

## What it deliberately is not

- **Not for Built-in or HDRP.** Weatherscape is URP only.
- **Exposure is baked for static geometry.** Moving and unbaked objects read a coarse Exposure Volume or
  the orientation estimate.
- **Glass is transparent, without refraction.** It is forward-rendered in every rendering path, like URP's
  own transparent materials.
- **At most eight Wind Sources act at once** — the ones nearest the camera.

## Where to go next

- [Getting started](./getting-started.md) — a weathered wall, a Weather and a flag in the wind in about five minutes
- [Tools overview](/tools) — see Weatherscape alongside Deepwave's other Unity packages
- The package's own `Documentation/Manual.md` and `Documentation/Technical Reference.md` (included with
  the install) cover every concept, property, texture format and performance figure in detail.
