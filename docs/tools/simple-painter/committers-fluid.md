---
id: committers-fluid
title: Committers & Fluid Simulation
sidebar_position: 10
---

# 🌊 Committers & Fluid Simulation

Committers are responsible for **writing paint data** from the tool's output into the surface's texture layers. Simple Painter provides both direct and simulation-based committers.

## 📦 Committer Hierarchy

```
BasePaintCommitter (abstract)
├── DirectPaintCommitter
│   └── StandardCommitter          — Default direct painting
└── SimulationPaintCommitter
    ├── FluidShallowCommitter      — Height-field gravity flow
    ├── FluidViscousCommitter      — SPH viscous solver
    └── FluidParticleCommitter     — Full MLS-MPM simulation
```

- **DirectPaintCommitter** writes paint data immediately to the target texture — no simulation step.
- **SimulationPaintCommitter** routes paint data through a fluid simulation before committing to the texture.

---

## ✍️ Deposition

The `Deposition` property (float, range `-1` to `1`) controls the committer's write behavior:

```csharp
// Chế độ deposition — dương để vẽ, âm để xóa, zero để tạm dừng commit
standardCommitter.Deposition = 1.0f;   // Draw — deposit paint onto the surface
standardCommitter.Deposition = -1.0f;  // Erase — remove paint from the surface
standardCommitter.Deposition = 0.0f;   // No commit — stamps are processed but nothing is written
```

:::tip
Use intermediate values (e.g., `0.5f`) for semi-transparent layering. Negative fractional values create subtle eraser effects that partially reveal underlying layers.
:::

---

## 🧪 Fluid Simulation

Simple Painter offers **three simulation tiers**, each trading off between performance cost and physical fidelity.

### FluidShallow — Lowest Cost

- **Height-field gravity flow** with a single fragment shader pass
- Uses `UNorm8` texture format for minimal memory footprint
- Supports **adhesion** and **surface tension** parameters
- Ideal for thin paint drips, ink bleeding, and simple gravity effects

### FluidViscous — Medium Cost

- **SPH (Smoothed Particle Hydrodynamics)** solver with `7×7` or `9×9` kernels
- Full **color advection** — fluid carries pigment as it flows
- **Sub-texel tracking** for smooth motion below pixel resolution
- **Signed pressure** field enables both expansion and compression behaviors

### FluidParticle — Highest Fidelity

- Full **MLS-MPM** (Moving Least Squares Material Point Method) solver
- Uses `R32G32B32A32_SFloat` texture format for maximum precision
- **Self-spawn** — particles can generate new particles during simulation
- Full **gravity**, **viscosity**, and **fluid pressure** simulation
- Best for thick paint, mud, and realistic fluid behavior

:::info
Each tier runs entirely on the GPU. The simulation textures are internal and never read back to the CPU, maintaining the zero-allocation guarantee.
:::

---

## ⚙️ Simulation Pipeline Per Frame

The simulation runs in **5 sequential steps** each frame:

1. **Setup** — Initialize simulation textures and bind parameters for the current frame
2. **Simulate** — Execute the fluid solver passes (gravity, pressure, advection)
3. **BakeAll** — Convert simulation state into paintable color/normal/PBR data
4. **CommitAll** — Write the baked results into the surface's target textures
5. **DrainFluid** — Apply evaporation and cleanup to prepare for the next frame

---

## 📊 SimulationPaintCommitterConfig

| Property | Default | Description |
|:---|:---:|:---|
| **UseTimeout** | `true` | Stop simulation after no input for a duration |
| **Timeout** | `5s` | Seconds of inactivity before simulation halts |
| **FixedTimestep** | `0.016s` | Physics timestep — `60 Hz` by default |
| **MaxStepsPerFrame** | `2` | Maximum simulation steps per frame (`1` – `8`) |
| **ForceScale** | `0.04` | Global multiplier for all force inputs |
| **Evaporation** | `0.001` | Mass loss rate per simulation step |
| **EffectScale** | `1.0` | Spatial scale factor for simulation effects |

:::warning
Setting **MaxStepsPerFrame** above `4` can cause significant frame drops on mobile GPUs. Profile your target platform before increasing this value.
:::

---

*Previous: [Tools & Brushes](./tools-brushes.md)* | *Next: [API Reference](./api-reference.md)*
