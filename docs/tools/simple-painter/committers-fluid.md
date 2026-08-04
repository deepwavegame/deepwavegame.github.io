---
id: committers-fluid
title: Fluid Simulation
sidebar_position: 10
description: Three interchangeable GPU fluid solvers for a SimulationCanvas — FluidViscousSimulation (MLS-MPM viscous paint), FluidInkSimulation (vorticity-confined ink bloom) and FluidFilmSimulation (cheap height-field drip and dry).
keywords:
  - fluid paint simulation unity
  - viscous paint solver
  - wet paint unity
  - ink bloom simulation
---

# Fluid Simulation

`PaintSimulation` is the base for every GPU fluid solver a `SimulationCanvas` can drive —
it handles the fixed-timestep clock, an inactivity timeout, and warming up its own shaders
once at scene load. Add exactly one concrete solver as a sibling component to a
`SimulationCanvas`.

## The three solvers

### Fluid Viscous

MLS-MPM viscous paint. Thin films and small droplets stay pinned in place until
accumulated mass exceeds an **adhesion** (yield) threshold, then flow downhill, blending
velocity between neighbouring texels for **viscosity**, and pulling dense clusters together
via **cohesive pressure**.

- **Adhesion / yield pinning** — nothing moves below the yield threshold.
- **Viscosity** — velocity is blended between neighbouring texels.
- **Cohesive pressure** — dense clusters are pulled together.
- **Gravity via flow field** — once mass exceeds the threshold, paint flows downhill along
  the surface's gravity direction, supplied by the
  [seam-fixing flow field](./paint-surface.md#gravity-and-turbulence-field).

### Fluid Ink

An Eulerian grid solver (adapted from the "Chimera's Breath" technique) whose signature
feature is **vorticity confinement** — re-injecting the small-scale curl a grid solver
would otherwise smear away, giving swirling, low-viscosity ink/smoke tendrils instead of a
smooth blob.

- **Viscosity** and **buoyancy** — a density-gradient pressure that drives the ink's
  outward bloom.
- **Vorticity confinement** — the signature knob; 0 behaves like thick oil, higher values
  give curling filaments.
- **Capillary spread** — lets ink creep into dry ground independent of velocity.

### Fluid Film

A height-field cellular automaton — no velocity state, no pressure solve, by far the
cheapest of the three. Paint pools on flat faces, runs down steep ones, and dries into a
permanent stain behind the run.

- **Retention** — a slope-dependent mass threshold; only mass above it can move.
- **Squared flow axis** — collapses the flow onto the dominant direction, so a drip stays
  a narrow streak instead of diffusing into a blob.
- **Capillary spread** and **exponential fade** — optional sideways creep and drying.

:::info Colour and coverage come from what you painted
All three solvers carry colour directly from the painted data rather than synthesising it,
so what you paint is what flows — no separate colour parameter to keep in sync.
:::

## Shared workspace

All three read the same shared **flow field** (gravity direction, optional gust +
micro-noise turbulence, optional normal-map influence — see
[Seam Fixing](./paint-surface.md#gravity-and-turbulence-field)) and write into a common
`SimulationWorkspace`: a Visual buffer (advected colour + painted absorption) and a
Dynamics buffer (velocity + mass), both fed directly by the brush's `VisualInk` /
`DynamicsInk` stamps.

## Derived PBR channels

Each of the canvas's `SimulationChannel` entries bakes the shared workspace into its own
layer using a per-channel **`ThicknessResponse`** curve — dry ↔ wet value or normal
strength, with its own gamma — at an independently tunable commit ratio. This is how, for
example, a Scalar "wetness" channel and a Normal "relief" channel can both be derived from
the same simulated paint thickness.

```csharp
// Pick a solver by enabling exactly one on the SimulationCanvas GameObject.
fluidViscousSimulation.enabled = false;
fluidInkSimulation.enabled = true;
```

---

*Next: [API Reference](./api-reference.md)*
