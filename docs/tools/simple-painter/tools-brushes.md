---
id: tools-brushes
title: Paint Tools & Ink
sidebar_position: 9
description: Four paint tools ship with Simple Painter — Standard Brush, Erase, Fill Mesh and Pick — selected by the InkConfig assigned to the PaintDrawer and hot-swappable at runtime.
keywords:
  - unity paint brush
  - flood fill mesh unity
  - eyedropper paint unity
  - ink channel unity
---

# Paint Tools & Ink

`PaintDrawer` runs exactly one active tool at a time, selected by whichever `InkConfig`
asset is assigned to it — and that asset can be hot-swapped at runtime via `SwitchConfig`.
Four tool families ship in the package.

## The four tools

| Tool | Asset | What it does |
| --- | --- | --- |
| **Standard Brush** | `StandardBrushConfig` | Stamps colour/value onto the active channels using a procedural shape (*None*, soft-edged *Circle*, or a custom *Texture* mask) with adjustable hardness, plus an optional texture atlas (grid size + dynamically chosen cell) |
| **Erase** | `EraseConfig` | Reuses the brush's shape/footprint but writes a signed "lift" instead of colour, always targeting every active channel |
| **Fill Mesh** | `FillMeshConfig` | A bucket/flood-fill tool with four bounded scopes: whole connected solid, single UV island, crease-bounded smooth patch, or a single triangle |
| **Pick** | `PickConfig` | A non-destructive eyedropper — asynchronously reads the already-committed layer at the clicked point and raises a C# event with the sampled values |

## Shared footprint controls

Every Standard-family tool (Brush, Erase, Fill Mesh) shares the same underlying footprint
controls:

- **Facing Angle** — culls stamps on faces angled away from the brush, so thin
  double-sided meshes don't get painted through.
- **Projection Depth** — limits how deep a stamp reaches along its axis.
- **Wrapping** — controls how the footprint wraps around edges.
- **Additive Alpha** — accumulates alpha within a single stroke.

## Ink channels

Colour/value data itself lives in **Ink Channels** — one per target `ChannelDefinition` —
each with:

- its own **value** (a constant colour or a gradient),
- an optional **stamp texture**,
- an **intensity** multiplier, and
- a **deposition rate** — how much material is added or removed per stroke (also used as
  the per-step rate for simulation brushes).

```csharp
// Swap the active tool at runtime (brush → eraser, etc.).
paintDrawer.SwitchConfig(eraseConfig);
```

:::tip One tool, many channels
A single brush can write several PBR channels at once — add one ink channel per
`ChannelDefinition` you want the stroke to affect (e.g. albedo + normal + roughness), each
with its own value and intensity.
:::

---

*Next: [Committers & Fluid Simulation](./committers-fluid.md)*
