---
id: intro
title: Introduction
sidebar_position: 2
---

# Simple Painter

**Simple Painter** is a GPU-accelerated runtime paint system for Unity, built on a two-tier architecture: a **GPU Command Pipeline** for high-performance rendering and a **Paint Node Hierarchy** for clean lifecycle management.

:::info
Optimized for both real-time performance and high-fidelity rendering with a zero-allocation design. All paint commands are batched and dispatched through a single `CommandBuffer` per frame.
:::

## 🎨 Key Features

- **🔧 GPU Command Pipeline:** Singleton `PaintEngine` batches all GPU commands into a single `CommandBuffer`, minimizing draw call overhead and maximizing throughput.
- **🌊 Real-time Fluid Simulation:** Three simulation tiers to match your fidelity needs — `FluidShallow` (height-field gravity flow), `FluidViscous` (SPH solver), and `FluidParticle` (full MLS-MPM).
- **🖌️ Multi-Channel PBR Painting:** Paint across Albedo, Normal, Metallic, and Roughness channels simultaneously, with per-layer blend modes for professional material authoring.
- **⚡ Zero-Alloc Design:** CRTP-based object pooling for all command types and `CommandBufferPool` reuse ensure zero GC allocation during painting.
- **🎯 Flexible Input Pipeline:** Three trigger types (Raycast, Collision, Particle) combined with four stroke methods (Bézier, Line, Dot, Anchored) cover every input scenario.
- **🧩 Strategy Pattern Architecture:** Hot-swappable tools, stroke methods, and committers allow runtime reconfiguration without code changes.

## 🎯 Project Vision

Simple Painter bridges the gap between simple texture stamping and complex fluid simulation systems. It offers:

- **Artistic Control:** Intuitive component-based setup that designers can configure without writing code.
- **Technical Excellence:** Clean SOLID architecture with interface-driven design for developers to extend.
- **Performance:** GPU-only rendering pipeline with zero GC allocation, even during fluid simulation.

---

*Next: [Getting Started](./getting-started.md)*
