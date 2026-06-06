---
id: tools-brushes
title: Tools & Brushes
sidebar_position: 9
---

# 🖌️ Tools & Brushes

Tools are the final stage of the painting pipeline — they poll the surface's `StampBatch` each frame and dispatch GPU draw commands to the `PaintEngine`.

:::info Pull-Based Design
Tools don't receive events — they **poll** the surface's `StampBatch` every frame. The surface clears its batch in `LateUpdate` after all consumers have processed it. This decouples tools from triggers and allows multiple tools to read the same batch.
:::

## 🏗️ Tool Hierarchy

```
BaseTool (abstract)
├── StandardTool
│   └── StandardBrush          — Default painting brush
└── ForceTool
    ├── DirectionalForceBrush  — Force in fixed UV-space direction
    ├── RadialForceBrush       — Radial push/pull with optional swirl
    └── TextureForceBrush      — Texture-driven force field
```

- **BaseTool** defines the abstract interface for all tools, including stamp processing and GPU dispatch.
- **StandardTool / StandardBrush** handles color, normal, and PBR channel painting.
- **ForceTool** and its subclasses apply **velocity/force fields** to fluid simulation layers.

---

## 🎨 StandardBrush Channels

The `StandardBrush` exposes an array of **channels**, each controlling a different PBR texture layer. Configure channels programmatically for dynamic painting:

```csharp
// Cấu hình channel — thiết lập brush vẽ màu đỏ với texture tùy chỉnh
var channel = brush.Channels[0];
channel.Intensity = 1.0f;
channel.Value.ColorValue = Color.red;
channel.Texture = myBrushTexture;
channel.Value.ValueMode = ValueMode.Dynamic;
```

Each channel supports:

- **Intensity** — Strength of the paint application (`0` – `1`)
- **Value** — The color or scalar value to paint, with configurable `ValueMode`
- **Texture** — Optional brush texture mask for stamp shape
- **Blend Mode** — Per-channel blend mode (Normal, Multiply, Add, etc.)

---

## 💨 ForceBrush Shader Passes

Force brushes drive fluid simulation by writing velocity data into force textures. Each brush type maps to a specific shader pass:

| Brush Type | Pass | Description |
|:---|:---:|:---|
| **RadialForceBrush** (Push) | 0 | Push fluid outward from stamp center |
| **RadialForceBrush** (Push + Swirl) | 1 | Push outward with rotational component |
| **RadialForceBrush** (Pull) | 2 | Pull fluid inward toward stamp center |
| **RadialForceBrush** (Pull + Swirl) | 3 | Pull inward with rotational component |
| **DirectionalForceBrush** | 4 | Apply force in a fixed UV-space direction |

:::tip
Use **Push + Swirl** (Pass 1) for realistic paint mixing effects. The swirl component adds rotational turbulence that prevents uniform radial spreading.
:::

## 🔧 Tool Configuration Best Practices

- Tools are designed to be **one active at a time** — disable all tools before enabling the selected one.
- Each tool reads from the surface's `StampBatch`, so ensure the surface is properly activated before the tool processes stamps.
- Force brushes only affect surfaces that have an active **fluid simulation committer** attached.

---

*Previous: [Triggers & Strokes](./triggers-strokes.md)* | *Next: [Committers & Fluid Simulation](./committers-fluid.md)*
