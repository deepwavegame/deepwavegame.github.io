---
id: paint-surface
title: Paintable & Seam Fixing
sidebar_position: 6
description: Mark a Renderer as paintable, paint on animated SkinnedMeshRenderers, forward hits from proxy colliders with PaintableLink, and stitch UV seams automatically via every canvas's built-in SurfaceEnvironment.
keywords:
  - paintable unity
  - paint skinned mesh
  - uv seam fix unity
  - paintable link
  - surface environment
---

# Paintable & Seam Fixing

## The Paintable component

The `Paintable` component marks a `Renderer` as paintable and configures its **Submesh
Index** and per-object **Texture Size** (the resolution of every paint buffer for that
object). It stays a pure geometry wrapper — it knows nothing about the canvas; the canvas
discovers it and injects its draw-target bridge automatically.

:::info One canvas, one paintable
A [`PaintCanvas`](./channels-layers.md) paints exactly one `Paintable` at a time. Call
`SetTarget(...)` (or set the `Target` property) to retarget it at runtime — the existing
render textures are reused rather than reallocated.
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

## Seam fixing is built into every canvas

UV-mapped meshes almost always cut a continuous surface into separate "islands" in texture
space, which normally shows up as a visible gap or hard edge when painting across that cut.
Every `PaintCanvas` owns a `SurfaceEnvironment` that removes this automatically — there is
no separate component to add:

1. A geometric analyzer walks every triangle edge and finds pairs that share the same 3D
   position but different UV coordinates — the exact signature of a UV seam.
2. Matched seam pairs are turned into a stitching mesh, baked once into a shared
   **flow-field** texture that also pads each island's border.
3. The paint compositor consults this flow field whenever a channel is composited, so
   strokes bleed correctly across islands instead of stopping dead at the seam.

## Gravity and turbulence field

On a `SimulationCanvas`, the optional `FlowFieldModule` bakes a directional **gravity +
turbulence** layer into the same flow-field texture — a configurable gravity vector, gust
and micro-noise perturbation, and optional influence from a normal map. This is what every
[fluid solver](./committers-fluid.md) follows when paint flows across a surface.

:::tip When do I need the gravity field?
`FlowFieldModule` only matters on a `SimulationCanvas` — every canvas fixes UV seams on
its own regardless. Configure it whenever you want gravity, gust or normal-map-driven flow
to steer one of the three fluid solvers.
:::

---

*Next: [Canvas, Channels & Layers](./channels-layers.md)*
