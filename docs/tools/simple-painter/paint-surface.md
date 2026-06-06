---
id: paint-surface
title: PaintSurface
sidebar_position: 6
---

# 🎨 PaintSurface

The root component that manages paintable objects, channels, and the broadcast lifecycle.

---

## 🛠️ Required Setup

Add `PaintSurface` to a GameObject. It auto-resolves a `Paintable` from the same object. You can have multiple `Paintable` objects sharing one surface (e.g., different mesh parts of a character).

:::tip Multiple Paintables
A single `PaintSurface` can manage multiple `Paintable` objects — useful for multi-mesh models where you want consistent painting across body parts, armor pieces, etc.
:::

---

## 🧩 Paintable Component

`Paintable` requires `Renderer` + `MeshFilter` on the same GameObject. It holds the per-frame `StampBatch` and manages activation lifecycle:

```csharp
// Kích hoạt paintable target — gọi Surface.Switch(this)
paintable.Activate();

// Hủy kích hoạt khi hoàn tất — gọi Surface.SetSource(null)
paintable.Deactivate();
```

:::info Activation Lifecycle
- `Activate()` calls `Surface.Switch(this)` — switches the surface to paint on this mesh
- `Deactivate()` calls `Surface.SetSource(null)` — disconnects the paintable from the surface
- Always call `Activate()` before painting and `Deactivate()` when done
:::

---

## 🔀 Switching Paintable Sources

Multiple `Paintable` objects can register with one surface. Switch between them at runtime:

```csharp
// Chuyển đổi bằng index
paintSurface.Switch(0);

// Chuyển đổi bằng tham chiếu trực tiếp
paintSurface.Switch(targetPaintable);

// Cho UnityEvents (chấp nhận Paintable, GameObject, hoặc Component)
paintSurface.SwitchFromEvent(someObject);
```

:::tip SwitchFromEvent
`SwitchFromEvent(Object)` accepts a `Paintable`, `GameObject`, or `Component`. It will resolve the `Paintable` automatically — perfect for wiring up in the Inspector via UnityEvents.
:::

---

## 📋 Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `TextureSize` | `Vector2Int` | Resolution of all paint textures (default 1024×1024) |
| `Paintables` | `List<Paintable>` | All registered paintable objects |
| `PaintEnvironment` | `PaintEnvironment` | Optional flow field / environment context |
| `SessionData` | `StampBatch` | Current frame's accumulated stamp data |

---

## 🔄 Lifecycle Management

`PaintSurface` broadcasts `PaintPhase` events depth-first through the node hierarchy:

| Phase | When Triggered | Effect |
|-------|----------------|--------|
| `Initialize` | First `Paintable` assigned | Allocates GPU resources, creates channel tree |
| `Update` | Every frame during painting | Processes stamp data, updates dirty channels |
| `Reset` | `paintSurface.Reset()` called | Restores all layers to their `InitTexture` |
| `Clear` | `paintSurface.Clear()` called | Wipes all layers to default background |
| `SourceChanged` | `Switch()` called | Re-binds to new `Paintable` mesh data |

```csharp
// Khôi phục về trạng thái ban đầu
paintSurface.Reset();  // Restore InitTexture trên mỗi layer

// Xóa toàn bộ bề mặt
paintSurface.Clear();  // Wipe về nền mặc định
```

---

## ⚠️ Best Practices

:::warning Activate / Deactivate Lifecycle
Always call `paintable.Activate()` before painting and `paintable.Deactivate()` when done. This properly switches the surface source and manages GPU resources. Forgetting to deactivate can cause resource leaks.
:::

:::tip Clean Up State
When switching between features, clear brush textures (`brush.Channels[0].Texture = null`), null out `PaintEnvironment`, and disable unused triggers. This prevents state leakage between painting sessions.
:::

---

<div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
  <a href="paint-engine">← Previous: PaintEngine</a>
  <a href="channels-layers">Next: Channels & Layers →</a>
</div>
