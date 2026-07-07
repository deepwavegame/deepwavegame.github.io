---
id: committers-fluid
title: Committers & Fluid Simulation
sidebar_position: 10
description: A committer bakes the in-progress stroke into a layer — instantly with the Standard committer, or through a physically-simulated wet-paint process with the Fluid Viscous committer.
keywords:
  - fluid paint simulation unity
  - viscous paint committer
  - wet paint unity
  - paint committer
---

# Committers & Fluid Simulation

A **committer** bakes the in-progress scratch stroke into a channel's active layer. The
package ships two families.

## Direct / Standard committer

Commits a finished stroke straight into the paint layer the moment it ends. No
time-stepping, no physics: what you draw is what lands. This is the default — add
`StandardCommitter` for instant painting.

## Simulation / Fluid Viscous committer

Runs an iterative, fixed-timestep simulation on the scratch buffer across multiple frames
before baking it in, adding genuine physically-modelled behaviour:

- **Adhesion / yield pinning** — thin films and small droplets stay pinned in place until
  accumulated mass exceeds an adhesion threshold.
- **Viscosity** — velocity is blended between neighbouring texels.
- **Cohesive pressure** — dense clusters are pulled together.
- **Gravity via flow field** — once mass exceeds the threshold, paint flows downhill along
  the surface's gravity direction, supplied by the
  [seam-fixing flow field](./paint-surface.md#gravity-and-turbulence-field).
- **Evaporation** and **absorption / drain** — wet paint dries and drains over time.

Colour and coverage are carried directly from the painted data rather than synthesised, so
**what you paint is what flows**.

:::info Requires a primary channel
The Fluid Viscous committer needs a channel flagged **Simulation Primary** (which allocates
its velocity + mass buffer) and reads the gravity flow field from a
[`PaintEnvironment`](./paint-surface.md#seam-fixing-with-paintenvironment).
:::

## Derived PBR channels

Simulation committers can also derive **secondary PBR channels** — for example a
bump/normal or roughness channel — from the simulated paint thickness, using a per-channel
dry ↔ wet response curve (with its own gamma, normal strength, and an optional stylised
"water look" tint), each committed at an independently tunable ratio.

```csharp
// Swap committers at runtime — instant painting → wet fluid paint.
// (Both live on the canvas GameObject; enable the one you want active.)
standardCommitter.enabled = false;
fluidViscousCommitter.enabled = true;
```

---

*Next: [API Reference](./api-reference.md)*
