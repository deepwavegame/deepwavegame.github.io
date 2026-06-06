---
id: best-practices
title: Best Practices
sidebar_position: 12
---

# ✅ Best Practices

Essential patterns and guidelines for building robust, performant painting systems with Simple Painter.

---

## 1. Swap Configs, Don't Mutate Assets

:::tip
Use `strokeSampler.SwitchConfig(newConfig)` to change stroke behavior at runtime instead of modifying the `StrokeMethodConfig` ScriptableObject directly.
:::

Mutating a ScriptableObject asset affects **all references** to that asset across your project. `SwitchConfig()` properly tears down the previous method's state and initializes the new one:

```csharp
// ✅ Đúng — chuyển config an toàn, không ảnh hưởng asset gốc
strokeSampler.SwitchConfig(newBezierConfig);

// ❌ Sai — thay đổi trực tiếp asset ảnh hưởng tất cả references
strokeSampler.Config.Size = 5.0f;
```

---

## 2. Activate/Deactivate Lifecycle

:::tip
Always call `paintable.Activate()` before painting and `paintable.Deactivate()` when done. This ensures GPU resources are properly allocated and released.
:::

The `Activate()` / `Deactivate()` pattern manages the lifecycle of internal render textures, command buffers, and simulation state:

```csharp
// Khởi tạo tài nguyên GPU trước khi vẽ
paintable.Activate();

// ... perform painting operations ...

// Giải phóng tài nguyên khi hoàn tất
paintable.Deactivate();
```

---

## 3. Clean Up State

:::tip
Clear brush textures, null out `PaintEnvironment`, and disable unused triggers when switching tools or exiting paint mode. Leaked references prevent GPU resources from being reclaimed.
:::

```csharp
// Dọn dẹp state — tránh rò rỉ tài nguyên GPU
foreach (var channel in brush.Channels)
{
    channel.Texture = null;
}
paintSurface.Environment = null;
trigger.enabled = false;
```

---

## 4. One Active Tool at a Time

:::tip
Disable **all** tools and triggers first, then enable only the selected one. Multiple active tools reading the same `StampBatch` will produce duplicate paint strokes.
:::

```csharp
// Tắt tất cả tools trước, sau đó bật tool được chọn
void SwitchTool(BaseTool targetTool)
{
    foreach (var tool in allTools)
        tool.enabled = false;
    foreach (var trigger in allTriggers)
        trigger.enabled = false;

    targetTool.enabled = true;
    targetTool.Trigger.enabled = true;
}
```

---

## 5. Cache Physics Results

:::tip
Perform a **single raycast per frame** and cache the `Paintable` and `PaintSurface` references by instance ID. Repeated raycasts and `GetComponent` calls are the most common performance bottleneck in painting systems.
:::

```csharp
// Cache kết quả physics — tránh raycast và GetComponent lặp lại mỗi frame
private int _cachedInstanceId;
private PaintSurface _cachedSurface;

void UpdatePaint(RaycastHit hit)
{
    int id = hit.collider.GetInstanceID();
    if (id != _cachedInstanceId)
    {
        _cachedInstanceId = id;
        _cachedSurface = hit.collider.GetComponentInParent<PaintSurface>();
    }
    // Use _cachedSurface...
}
```

---

## 6. UI Guard Pattern

:::tip
Use an `_isUpdatingUI` flag or `SetIsOnWithoutNotify()` to prevent UI callbacks from triggering painting logic during programmatic UI updates.
:::

Without this guard, changing a slider value from code triggers its `OnValueChanged` callback, which may re-enter painting logic:

```csharp
// UI guard — ngăn callback vòng lặp khi cập nhật UI từ code
private bool _isUpdatingUI;

void RefreshUI()
{
    _isUpdatingUI = true;
    sizeSlider.value = currentSize;
    colorToggle.SetIsOnWithoutNotify(isActive);
    _isUpdatingUI = false;
}

void OnSizeChanged(float value)
{
    if (_isUpdatingUI) return;
    brush.Channels[0].Size = value;
}
```

---

## 7. Subscribe/Unsubscribe in OnEnable/OnDisable

:::caution
Always subscribe to events in `OnEnable` and unsubscribe in `OnDisable`. This is critical for `PaintProgressTracker.OnUpdated` and `ToggleEventMapping` — failing to unsubscribe causes **null reference exceptions** and **memory leaks** when objects are destroyed.
:::

```csharp
void OnEnable()
{
    // Đăng ký sự kiện khi component được bật
    progressTracker.OnUpdated += HandleProgressUpdated;
}

void OnDisable()
{
    // Hủy đăng ký khi component bị tắt — tránh memory leak
    progressTracker.OnUpdated -= HandleProgressUpdated;
}
```

---

## 8. Enable DynamicsTarget for Fluid Simulation

:::warning
When using fluid simulation committers, the primary `ChannelDefinition` **must** have `EnableDynamicsTarget = true`. Without this, the simulation has no target texture to write velocity and force data into, and fluid effects will silently fail.
:::

```csharp
// Bắt buộc cho fluid simulation — bật dynamics target trên channel chính
channelDefinition.EnableDynamicsTarget = true;
```

Ensure this is set **before** calling `Activate()` on the paintable surface. Changing it after activation requires a full deactivate/reactivate cycle.

---

*Previous: [API Reference](./api-reference.md)*
