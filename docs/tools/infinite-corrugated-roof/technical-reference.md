---
id: technical-reference
title: LOD & Performance
sidebar_position: 4
description: How Infinite Corrugated Roof builds three LOD meshes, its screen-relative transition heights, and why live editing produces no garbage-collector pressure.
keywords:
  - roof LOD unity
  - procedural mesh performance
  - LODGroup roof
  - zero gc mesh generation
---

# LOD & Performance

## The generation pipeline

When the roof rebuilds (on any Inspector change in Edit Mode, or a `Rebuild()` call), it
runs the same ordered pipeline:

1. **Sanitize** — validate all parameters (e.g. reset an invalid wave curve to a safe default).
2. **Cache the spline** — if a `SplineContainer` is assigned, pre-sample its path for fast lookup.
3. **Plan the layout** — determine each panel's position, jitter and texture attributes across the grid.
4. **Pre-calculate the wave** — sample the `AnimationCurve` once into a shared cross-section reused by every panel.
5. **Build geometry ×3 LODs** — for each panel: apply edge cuts, surface noise and spline
   deformation, then compute UVs and vertex colours.
6. **Apply buffers** — update the Unity `Mesh` buffers and refresh the `MeshRenderer`.

## Three LODs, managed automatically

Three LOD meshes (LOD0–LOD2) are generated and assigned to an automatically managed
`LODGroup`. Distant LODs use fewer wave keyframes and fewer length segments, and drop
interior geometry that would not be visible at that distance.

| LOD | Screen-relative transition height |
| --- | --- |
| LOD0 → LOD1 | `0.85` |
| LOD1 → LOD2 | `0.45` |
| LOD2 → culled | `0.01` |

## Zero-GC live editing

Geometry buffers are **reused between rebuilds**, so adjusting sliders in the Inspector
does not generate garbage-collector pressure — the roof can be tweaked freely without
frame-rate hitches. The generation loops avoid `Linq` and per-panel allocations for the
same reason.

:::note Runtime behaviour
Live rebuild on field change only runs in **Edit Mode**. At runtime, call `Rebuild()`
manually after changing fields — or, better, ship a baked FBX (see
[Advanced Features](./advanced-features.md)) so no generation happens at runtime at all.
:::

---

*Next: [API Reference](./api-reference.md)*
