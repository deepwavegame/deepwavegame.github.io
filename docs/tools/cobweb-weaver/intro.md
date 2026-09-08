---
id: intro
title: Introduction
sidebar_position: 1
description: "A Unity editor tool: a brush that places pre-made spider webs onto your existing geometry, nailing each to the walls and beams around the cursor. Exports to FBX."
keywords:
  - unity spider web
  - unity cobweb
  - unity cobweb tool
  - paint cobwebs unity
  - unity scene dressing tool
  - unity cobweb fbx export
  - spider web wind unity
---

# Cobweb Weaver — Introduction

**Cobweb Weaver** is a Unity editor tool that places pre-made spider webs onto the geometry
you already built. Drag over a wall and each web nails itself to the corners and beams that
are actually there — so a web looks like it grew on the wall rather than like it was dropped
in front of it.

:::info It generates meshes and stops there
The package does not own the material and writes no shader properties — any material draws
the silk. What it owns is the vertex data, and that data is Deepwave Wind Dynamics' fabric
layout, so a placed web drops onto that package's `Fabric` material and moves correctly
with no preparation step. Wind Dynamics is optional and nothing here depends on it.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 6000.3 or newer. No back-port to 2021, 2022 or earlier Unity 6 |
| **Dependencies** | `com.unity.mathematics`; Universal RP 17.3 as a package dependency (the project itself may run on Built-in, Universal or HDRP) |
| **Render pipelines** | Sample silk shader for Built-in and Universal (verified); HDRP one menu item away (ships but not run here) |
| **Source** | Full C# — 45 scripts, no DLLs: 11 runtime, 20 editor, 6 sample, 8 test |
| **Tests** | 59 EditMode tests — the sheet reader against the shipped art, the mesh warp and trim, placement into a real two-walled corner, the vertex packing, the FBX handedness flip and unit scale, the submesh split |
| **Forms** | 4, resolved automatically — sheet, corner, cluster, drape |
| **Cost** | 66 vertices a web; 97 webs merge to 2 renderers in one `Awake` |
| **Export** | FBX, welded into one mesh or a mesh per web, written by the package (Unity's FBX Exporter not required) |

## Highlights

- **A brush that reads the room** — each dab casts a fan of rays out of the surface under
  the cursor and measures the space: how enclosed it is, whether there is a second wall at
  a wide angle, which way the open air lies. From that it picks a form — sheet, corner,
  cluster or drape — and shows you which on the cursor before you click.

- **Anchors read from the artwork** — a cobweb sheet holds nine webs. The tool measures
  where each one's silk runs off the edge of its cell out of the alpha channel, then casts
  a short ray at each anchor into your scene. Rays that hit a surface become pins; rays
  that miss hang free and carry the sag.

- **Three controls that matter** — Reach (how far a web looks for a surface to nail
  itself to), Size (metres across the longest axis), and Webs in use (which of the nine to
  mix). Everything else has a defensible default.

- **66 vertices a web** — against about 12,000 for a strand generator. Quads whose corner
  of the texture is blank are never built. 97 placed webs ship as 2 renderers, merged
  automatically by style and by a 12 m cube so the level still culls room by room.

- **Meshes are generated, never stored** — a patch keeps its cards; the mesh is built from
  them, marked `HideFlags.DontSave`, and never reaches the scene file. On the 50-web
  sample scene, serialised meshes were 77% of the file.

- **Pins editable in 3D** — multi-select, drag anywhere in three dimensions, and the cloth
  rebuilds on every drag event rather than catching up on mouse-up. Anchors are editable
  on a zoomed canvas of the web itself.

- **Export the room to FBX** — one mesh welded together, or a mesh per web in one file,
  with a four-component UV that survives the round trip. The placed webs are kept under
  the imported model so the room can still be re-exported after a style change.

- **What it deliberately is not** — not a cloth simulator, it does not tear webs at
  runtime, it does not generate silk strand by strand, and there is no re-pin: once a
  placement has been touched by hand it is authored data, and authored data does not get
  regenerated.

## Where to go next

- [Tools overview](/tools) — see Cobweb Weaver alongside Deepwave's other Unity packages
- The package's own `README.md` (included with the install) covers the full workflow,
  every control, FBX export and the wind integration in detail.
