---
id: tools-brushes
title: Draw Config & Ink
sidebar_position: 9
description: Two DrawConfig geometries ship with Simple Painter — Standard Brush and Fill Mesh — each paired with a list of InkChannel entries; erase is a mode on either, not a separate tool.
keywords:
  - unity paint brush
  - flood fill mesh unity
  - ink channel unity
  - draw config unity
---

# Draw Config & Ink

`PaintDrawer` runs exactly one active `DrawConfig` at a time — hot-swappable at runtime via
`PaintTool.SwitchPaint(...)`. A `DrawConfig` bundles the stamp's **geometry** (shape, atlas
mapping, facing/depth culling, erase mode) with its **ink** — a list of `InkChannel`
entries. Two geometry configs ship in the package.

## The two draw configs

| Config | What it does |
| --- | --- |
| `StandardBrushConfig` | Stamps along the stroke using a procedural shape (*None*, soft-edged *Circle*, or a custom *Texture* mask) with adjustable hardness, plus an optional texture atlas (grid size + dynamically chosen cell) |
| `FillMeshConfig` | A bucket/flood-fill tool with four bounded scopes: whole connected solid, single UV island, crease-bounded smooth patch, or a single triangle |

:::info Erase is a mode, not a tool
Either config can flip its own **Erase Mode** checkbox to lift coverage instead of
depositing it. There's no separate erase asset — assign the same brush or fill config you
paint with, then toggle Erase Mode on a second instance (or swap it at runtime).
:::

## Shared footprint controls

Both configs share the same underlying footprint controls:

- **Facing Angle** — culls stamps on faces angled away from the brush, so thin
  double-sided meshes don't get painted through.
- **Projection Depth** — limits how deep a stamp reaches along its axis.
- **Wrapping** — controls how the footprint wraps around edges.
- **Additive Alpha** — accumulates alpha within a single stroke instead of capping at the
  strongest overlap.

## Ink channels

Colour/value data lives in **ink channels** — one `InkChannel` entry per target:

| Ink type | Targets | Value reads as |
| --- | --- | --- |
| `ColorInk` | An RGBA `ChannelDefinition` | Pigment |
| `ScalarInk` | A single-value `ChannelDefinition` | A number (metallic, smoothness, a mask…) |
| `NormalInk` | A normal `ChannelDefinition` | A tangent-space normal |
| `VisualInk` | A `SimulationCanvas` workspace's colour buffer | Pigment + painted absorption |
| `DynamicsInk` | A `SimulationCanvas` workspace's dynamics buffer | Mass + velocity (a push force) |

Every ink entry carries its own **value** (a constant colour/number or a gradient), an
optional **stamp texture**, and an **amount** — a deposition rate in its own units (also
the per-step push strength for `DynamicsInk`).

```csharp
// Swap the active DrawConfig at runtime (brush → fill, etc.).
paintTool.SwitchPaint(fillMeshConfig);
```

:::tip One tool, many channels
A single brush can write several PBR channels at once — add one ink channel per
`ChannelDefinition` you want the stroke to affect (e.g. albedo + normal + roughness), each
with its own value and amount. On a `SimulationCanvas`, pair a `VisualInk` with a
`DynamicsInk` to feed the fluid solver itself.
:::

---

*Next: [Fluid Simulation](./committers-fluid.md)*
