---
id: paint-surface
title: Paintable & Seam Fixing
sidebar_position: 6
description: Mark a Renderer as paintable, paint on animated SkinnedMeshRenderers, forward hits from proxy colliders with PaintableLink, and stitch UV seams with PaintEnvironment.
keywords:
  - paintable unity
  - paint skinned mesh
  - uv seam fix unity
  - paintable link
  - paint environment
---

# Paintable & Seam Fixing

## The Paintable component

The `Paintable` component marks a `Renderer` as paintable and configures its **Submesh
Index** and per-object **Texture Size** (the resolution of every paint buffer for that
object). It stays a pure geometry wrapper — it knows nothing about the canvas; the canvas
discovers it and injects its draw-target bridge automatically.

:::info One canvas, many paintables
A single [`PaintCanvas`](./channels-layers.md) can register several `Paintable` targets and
switch the active one at runtime, reusing the same GPU buffers instead of reallocating.
:::

## Animated & skinned meshes

Painting on animated characters is supported directly. If the component finds a
`SkinnedMeshRenderer`, it bakes the live animated pose into a mesh once per frame (shared
across every reader that frame) so stamps project correctly onto a moving, deforming
surface.

### PaintableLink — proxy colliders

The companion `PaintableLink` component lets you place lightweight proxy colliders — for
example capsules parented to bones — that forward their raycast hits back to one shared
`Paintable`. A rig can then have cheap, animated hit volumes without each one needing its
own paint buffers.

## Seam fixing with PaintEnvironment

UV-mapped meshes almost always cut a continuous surface into separate "islands" in texture
space, which normally shows up as a visible gap or hard edge when painting across that cut.
The optional `PaintEnvironment` component removes this automatically:

1. A geometric analyzer walks every triangle edge and finds pairs that share the same 3D
   position but different UV coordinates — the exact signature of a UV seam.
2. Matched seam pairs are turned into a stitching mesh, baked once into a **flow-field**
   texture that also pads each island's border.
3. The paint compositor consults this flow field whenever a channel is composited, so
   strokes bleed correctly across islands instead of stopping dead at the seam.

### Gravity and turbulence field

The same flow-field texture optionally carries a directional **gravity + turbulence**
field — a configurable gravity vector, gust and micro-noise perturbation, and optional
influence from a normal map. This is what the
[Fluid Viscous committer](./committers-fluid.md) follows when paint flows across a surface.

:::tip When do I need PaintEnvironment?
Add it whenever you paint across UV seams (most real meshes), or whenever you use the
fluid-viscous committer — the fluid solver reads its gravity flow field.
:::

---

*Next: [Canvas, Channels & Layers](./channels-layers.md)*
