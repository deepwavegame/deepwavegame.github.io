---
id: api-reference
title: API Reference
sidebar_position: 11
description: The public runtime surface of Simple Painter — key components, hot-swap methods, blend-mode enums, and the PaintProgressTracker events.
keywords:
  - simple painter api
  - paint canvas switch
  - paint progress tracker
  - unity paint events
---

# API Reference

The public runtime surface you interact with from game code. Marketing copy aside, these
are the components, methods, enums and events that actually ship.

## Key components & methods

| Component | Members you call at runtime |
| --- | --- |
| `PaintCanvas` | `Switch(int index)` / `Switch(Paintable)` — change active target · `Reset()` — restore starting textures · `Clear()` — wipe to background |
| `PaintInput` (base) | `SwitchStroke(StrokeConfig)` — hot-swap the stroke asset |
| `PaintDrawer` | `SwitchConfig(InkConfig)` — hot-swap the active tool (brush ↔ erase ↔ fill ↔ pick) |
| `Paintable` | Texture Size, Submesh Index; wraps a `Renderer` (mesh or `SkinnedMeshRenderer`) |
| `PaintableLink` | Forwards proxy-collider raycast hits back to a shared `Paintable` |
| `PaintEnvironment` | UV seam fixing + gravity/turbulence flow field |
| `PaintProgressTracker` | `Progress`, `DonePixels`, `TotalPixels`, `OnUpdated` event; static `GlobalProgress`, `AllReady` |
| `PaintEngine` | `EnqueueCommand(ICommand)` — enqueue a pooled GPU command |

## Key enums

| Enum | Values |
| --- | --- |
| `ChannelValueType` | Color, Scalar, Normal |
| `DynamicMode` | Constant, Pressure, Distance, Speed, Time, Random |
| Stamp alignment | Surface, View |
| Brush shape | None, Circle, Texture |
| Fill scope | Connected solid, UV island, Crease patch, Single triangle |
| `RenderPipelineType` | BuiltIn, URP, HDRP |

## Blend modes

Blend modes are typed to the channel's value type so an invalid combination can't be
selected:

| Value type | Blend modes |
| --- | --- |
| **Color** | Normal, Multiply, Add, Min, Max, Screen, Overlay, Soft Light |
| **Scalar** | Normal, Multiply, Add, Min, Max |
| **Normal** | Lerp, RNM, UDN, Whiteout, Overlay, Max Slope, Subtract |

## Progress tracking events

`PaintProgressTracker` reports how much of a channel's active layer has been painted
(**Fill** mode) or erased (**Erase** mode) against a reference value on a chosen colour
channel (R/G/B/A):

```csharp
void OnEnable()  => tracker.OnUpdated += HandleProgress;
void OnDisable() => tracker.OnUpdated -= HandleProgress;

void HandleProgress()
{
    float pct = tracker.Progress;            // 0–1 for this tracker
    float all = PaintProgressTracker.GlobalProgress; // aggregate across the scene
    if (PaintProgressTracker.AllReady) { /* every tracker done */ }
}
```

- Counting can be restricted to the real paintable surface via an auto-generated UV-island
  mask, a custom mask texture, or left unmasked.
- Readback is fully asynchronous (non-blocking `AsyncGPUReadback`) with a configurable
  downsample factor and minimum interval, so tracking many objects stays cheap.

:::caution Always unsubscribe
Subscribe to `OnUpdated` in `OnEnable` and unsubscribe in `OnDisable`. Failing to
unsubscribe causes null-reference exceptions and leaks when objects are destroyed.
:::

## The Pick tool

`PickConfig` drives a non-destructive eyedropper: it asynchronously reads the committed
layer at the clicked point and raises a C# event carrying the sampled values — wire that
event up to update a UI colour swatch or feed the value back into a brush.

---

*Next: [Platform, Performance & FAQ](./best-practices.md)*
