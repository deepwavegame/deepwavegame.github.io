---
id: product-overview
title: Overview
sidebar_position: 1
---

# 🎨 SimplePainter — Overview

**SimplePainter** is a GPU-accelerated runtime paint system for Unity, designed for high-performance interactive painting experiences.

| | |
|---|---|
| **Package ID** | `com.deepwave.simplepainter` |
| **Architecture** | Two-tier: GPU Command Pipeline + Paint Node Hierarchy |
| **Key Features** | Fluid Simulation · Multi-Channel PBR · Zero-Allocation Design |

---

## 📖 Description

SimplePainter provides a comprehensive, production-ready painting framework built on two core pillars:

1. **GPU Command Pipeline** — A singleton `PaintEngine` that collects, sorts, and batch-executes all GPU commands in a single `CommandBuffer` per frame during `LateUpdate`.
2. **Paint Node Hierarchy** — A composite tree of `IPaintNode` objects where `PaintSurface` (root) broadcasts `PaintContext` depth-first through channels, layers, and scratch buffers.

The system features real-time fluid simulation (3 tiers), multi-channel PBR painting, and a zero-allocation design using CRTP object pooling.

---

## 🔗 Links

- 📚 [Getting Started](getting-started.md) — Set up your first paintable scene
- 🏗️ [Architecture Overview](architecture.md) — Deep dive into the two-tier design
- 🔧 [PaintEngine Reference](paint-engine.md) — GPU command dispatcher details
- 🎨 [PaintSurface Reference](paint-surface.md) — Root component and paintable management
- 📚 [Channels & Layers](channels-layers.md) — Multi-channel PBR compositing

---

## ⚡ Key Workflow Advantages

### 🖥️ GPU Batched Rendering

All paint operations are collected as `ICommand` objects and executed in a single `CommandBuffer` during `LateUpdate`. This minimizes GPU state changes and maximizes throughput.

### 🎨 Multi-Channel PBR Painting

Paint across multiple material channels simultaneously — Albedo, Normal, Metallic, Roughness — with independent blend modes and per-channel control.

### 🌊 3-Tier Fluid Simulation

Three levels of real-time GPU fluid simulation, trading cost vs. fidelity:

| Tier | Name | Cost | Description |
|------|------|------|-------------|
| 1 | **FluidShallow** | ⚡ Lowest | Height-field gravity flow, UNorm8 precision |
| 2 | **FluidViscous** | ⚡⚡ Medium | SPH solver with cohesive droplets, color advection |
| 3 | **FluidParticle** | ⚡⚡⚡ Highest | Full MLS-MPM particle dynamics, R32G32B32A32_SFloat |

### ♻️ Zero-Allocation Design

`PooledCommand<TSelf>` uses the Curiously Recurring Template Pattern (CRTP) for zero-allocation command reuse. `CommandBufferPool` reuses Unity `CommandBuffer` instances.

---

## 🔬 Technical Details

### Procedural Features

- **Stamp Shapes**: None (full quad), Circle (procedural soft-edge), Texture (custom mask)
- **Texture Mapping**: Decal, TiledUV, World, Local projection modes
- **Stroke Dynamics**: Size, Alpha, Rotation, BrushDynamics — each modulated by Distance, Speed, Time, Random, or Pressure

### Modifiers & Strategy Pattern

- `IShaderBinder<TInput>` decouples shader state setup from commands
- Hot-swappable stroke methods: Bezier, Line, Dot, Anchored
- Hot-swappable tools: StandardBrush, ForceBrush (Directional, Radial, Texture)
- Hot-swappable committers: Standard, FluidShallow, FluidViscous, FluidParticle

### Optimization

- Single GPU submission per frame via `Graphics.ExecuteCommandBuffer`
- Phase-ordered command buckets (Setup → Process → Draw → Commit → Composition)
- Object pooling for all commands and command buffers
- Async GPU readback for progress tracking

---

## 📋 Requirements

| Requirement | Details |
|---|---|
| **Unity Version** | 2021.3 LTS or later |
| **Render Pipelines** | Built-in, URP, HDRP |
| **Platforms** | Windows, macOS, iOS, Android |
| **Dependencies** | Unity Input System (for `PaintTriggerRaycast`) |

:::info Platform Support
SimplePainter auto-detects the active render pipeline (`RenderPipelineType`: BuiltIn, URP, HDRP) and configures shader keywords accordingly.
:::

---

<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
  <span></span>
  <a href="getting-started">Next: Getting Started →</a>
</div>
