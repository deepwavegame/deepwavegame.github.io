---
id: triggers-strokes
title: Triggers & Strokes
sidebar_position: 8
---

# 🎯 Triggers & Strokes

Simple Painter separates **input detection** (Triggers) from **stroke interpolation** (Stroke Methods), allowing you to mix and match any trigger with any stroke behavior.

## 🔫 Triggers

All triggers inherit from the abstract `PaintTrigger` base class and are responsible for detecting user input and emitting stroke events to the painting pipeline.

### PaintTriggerRaycast

Screen-space pointer or screen-center (FPS) input using Unity's new Input System. Ideal for first-person and third-person painting scenarios.

- Supports both pointer position and fixed screen-center modes
- Automatically handles camera raycasting against paintable surfaces
- Configurable input action references for press/release

### PaintTriggerCollision

Physics 3D collision-based triggering, perfect for **tire tracks**, **scratch marks**, and **drag effects**.

- Filters impacts by **minimum impact speed** threshold
- Supports **surface layer mask** to restrict which surfaces receive paint
- Processes `OnCollisionEnter`, `OnCollisionStay`, and `OnCollisionExit` events

### PaintTriggerParticle

Particle system collision integration that processes all impacts as a **single burst stroke**.

- Hooks into `OnParticleCollision` events
- Batches all particle impacts in a single frame into one stroke
- Great for splatter effects, rain drips, and environmental painting

## 🔄 Trigger Lifecycle

All triggers follow the same three-phase lifecycle by calling protected methods on the base `PaintTrigger` class:

```csharp
// Bắt đầu nét vẽ — khởi tạo stroke mới với ray và collider mục tiêu
EmitBegin(ray, targetCollider);

// Cập nhật vị trí stroke mỗi frame
EmitUpdate(ray);

// Kết thúc nét vẽ — finalize và commit stroke
EmitEnd();
```

:::info
Each trigger auto-resolves its `IStrokeSampler` from the same `GameObject` or a parent in the hierarchy. When the trigger's `OnDisable` is called, it automatically invokes `EmitEnd()` to ensure no stroke is left dangling.
:::

---

## ✏️ Stroke Methods

Stroke methods control **how stamps are interpolated** between input samples. Each method produces a different visual character.

### BezierMethod

Quadratic Bézier curve interpolation that produces **smooth, natural strokes**. The curve is fitted through the last three input samples, creating organic brush paths even with coarse input sampling.

### LineMethod

Draws a **straight line** from the anchor point to the current position. The line is regenerated each frame, making it ideal for rulers, guides, and technical drawing tools.

### DotMethod

Places a **single stamp per update** with no interpolation between samples. Use this for stippling, pointillism, or any effect where discrete stamps are desired.

### AnchoredMethod

**Anchors at the click point** — dragging controls the size and rotation of the stamp. Perfect for placing decals, logos, or precisely-sized stamps.

## 🔀 Switching Stroke Methods at Runtime

The `StrokeSampler` MonoBehaviour wraps a `StrokeMethodConfig` (ScriptableObject), enabling hot-swap at runtime:

```csharp
// Chuyển đổi config stroke — thay đổi hành vi nét vẽ mà không cần tạo lại component
strokeSampler.SwitchConfig(newBezierConfig);
```

:::tip
Always use `SwitchConfig()` to change stroke behavior instead of mutating the ScriptableObject asset directly. This ensures proper state cleanup between configurations.
:::

## 📊 StrokeMethodConfig Properties

Each property supports multiple **Dynamic Modes** for procedural variation:

| Property | Range | Dynamic Modes |
|:---|:---|:---|
| **Size** | `0` – `10` | Constant, Distance, Speed, Time, Random |
| **Alpha** | `0` – `1` | Constant, Distance, Speed, Time, Random |
| **RotateAngle** | `-180°` – `180°` | Constant, Distance, Speed, Time, Random |
| **BrushDynamics** | `0` – `1` | Constant, Distance, Speed, Time, Random |

### Additional Configuration

- **StampShape:** Defines the shape mask applied to each stamp (circle, square, custom texture).
- **StampAlignmentConfig:** Controls how stamps orient relative to the stroke direction or surface normal.
- **TextureMapping:** Configures how the brush texture is sampled and mapped onto each stamp.

## ⚙️ Stamp Generation Pipeline

The stamp generation process follows **5 sequential steps** inside `BaseStrokeMethod.TryRecordStamp()`:

1. **Sample Input** — Read the current ray/position from the trigger
2. **Interpolate Path** — Apply the stroke method's interpolation algorithm (Bézier, Line, etc.)
3. **Spacing Check** — Determine if enough distance/time has passed to place a new stamp
4. **Apply Dynamics** — Evaluate all dynamic property curves (Size, Alpha, Rotation, BrushDynamics)
5. **Record StampData** — Write the final `StampData` struct into the surface's `StampBatch`

---

*Previous: [Channels & Layers](./channels-layers.md)* | *Next: [Tools & Brushes](./tools-brushes.md)*
