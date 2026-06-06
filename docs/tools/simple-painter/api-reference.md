---
id: api-reference
title: API Reference
sidebar_position: 11
---

# 📖 API Reference

Comprehensive reference for Simple Painter's public API surface — interfaces, enums, data structures, blend modes, and environment configuration.

---

## 🔌 Core Interfaces

| Interface | Description |
|:---|:---|
| `ICommand` | Base interface for all GPU paint commands dispatched to the `PaintEngine` |
| `IPaintNode` | Node in the paint hierarchy — handles activation, deactivation, and lifecycle |
| `IPaintBehaviour` | Extends `IPaintNode` with Unity MonoBehaviour integration |
| `IPaintContainer` | Container that manages child `IPaintNode` instances and propagates state |
| `IPaintCommitter` | Commits processed stamp data to target textures (direct or simulation) |
| `IStrokeSampler` | Samples and interpolates input into `StampData` using a stroke method |
| `ITool` | Polls `StampBatch` from surfaces and dispatches GPU draw commands |
| `IShaderBinder<T>` | Generic interface for binding typed data to shader properties |

---

## 🏷️ Key Enums

| Enum | Values |
|:---|:---|
| `StampShapeMode` | Circle, Square, Custom |
| `StrokePhase` | Begin, Update, End |
| `TextureMappingMode` | Stretch, Tile, FitWidth, FitHeight |
| `DynamicMode` | Constant, Distance, Speed, Time, Random |
| `ValueMode` | Static, Dynamic |
| `TargetTextureType` | Albedo, Normal, Metallic, Roughness, Height, Emission |
| `TextureBitDepth` | UNorm8, UNorm16, SFloat16, SFloat32 |
| `NormalInputMode` | ObjectSpace, TangentSpace |
| `RenderPipelineType` | BuiltIn, URP, HDRP |

---

## 📐 StampData Struct

The `StampData` struct is the core data unit passed through the painting pipeline — from stroke sampler to tool to committer.

| Field | Type | Description |
|:---|:---|:---|
| `InverseMatrix` | `Matrix4x4` | Inverse transform matrix for UV-space stamp placement |
| `WorldPosition` | `Vector3` | World-space position of the stamp |
| `Velocity` | `Vector2` | Stroke velocity in UV-space (used by fluid force brushes) |
| `Opacity` | `float` | Final opacity after dynamics evaluation (`0` – `1`) |
| `BrushDynamics` | `float` | Dynamics intensity value (`0` – `1`) |
| `Shape` | `StampShapeMode` | Shape mask applied to this stamp |
| `Phase` | `StrokePhase` | Current phase: `Begin`, `Update`, or `End` |

---

## 🎨 Blend Modes

### Color Blend Modes

Used for Albedo, Emission, and other color-based channels:

| Mode | Description |
|:---|:---|
| **Normal** | Standard alpha-composite blending |
| **Multiply** | Darkens by multiplying base and blend colors |
| **Add** | Brightens by adding blend color to base |
| **Min** | Takes the minimum of base and blend per channel |
| **Max** | Takes the maximum of base and blend per channel |
| **Screen** | Inverse multiply — lightens the base color |
| **Overlay** | Combines Multiply and Screen based on base luminance |
| **SoftLight** | Subtle tonal adjustment similar to Overlay but softer |

### Scalar Blend Modes

Used for Metallic, Roughness, and Height channels:

| Mode | Description |
|:---|:---|
| **Normal** | Direct replacement weighted by opacity |
| **Multiply** | Multiplies base and blend values |
| **Add** | Adds blend value to base |
| **Min** | Takes the minimum value |
| **Max** | Takes the maximum value |

### Normal Blend Modes

Used for Normal map channels:

| Mode | Description |
|:---|:---|
| **Lerp** | Linear interpolation between base and detail normal |
| **RNM** | Reoriented Normal Mapping — most physically accurate |
| **UDN** | Unreal Developer Network method — fast approximation |
| **Whiteout** | Whiteout blending — strong detail preservation |
| **Overlay** | Overlay-style normal blending |
| **MaxSlope** | Takes the steeper slope per texel |
| **Subtract** | Subtracts detail normal from base |

:::warning
Simulation committers (FluidShallow, FluidViscous, FluidParticle) always force `NormalBlendMode.MaxSlope` regardless of the channel's configured blend mode. This ensures fluid flow correctly accumulates surface displacement.
:::

---

## 🌍 PaintEnvironment

The `PaintEnvironment` component provides **environmental forces** that affect fluid simulation behavior through a **FlowField** texture.

### FlowField Texture Records

The FlowField texture encodes four data channels:

| Record | Channel | Description |
|:---|:---:|:---|
| **Seam Linking** | R | UV seam connectivity data for cross-seam fluid flow |
| **Border Padding** | G | Distance-to-border field for edge handling |
| **Anti-Gravity Flow** | B | Overrides gravity direction for upward/sideways flow |
| **External Forces** | A | Additional force field from external sources |

### Environment Features

| Feature | Description |
|:---|:---|
| **Gravity** | Directional gravity force affecting all fluid simulation |
| **Wind** | Directional wind force applied to fluid surfaces |
| **Perturbation** | Procedural noise-based disturbance for organic motion |
| **External Forces** | User-defined force textures injected into the simulation |

### Bake Update Modes

| Mode | Description |
|:---|:---|
| **Once** | Bakes the FlowField once on initialization — use for **static** environments |
| **Always** | Re-bakes the FlowField every frame — use for **dynamic** environments with moving objects |

:::tip
Use `Once` mode for static scenes to save GPU bandwidth. Switch to `Always` only when environment geometry changes at runtime (e.g., destructible walls).
:::

---

*Previous: [Committers & Fluid Simulation](./committers-fluid.md)* | *Next: [Best Practices](./best-practices.md)*
