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
| `PaintCanvas` (base) | `SetTarget(Paintable)` / `Target` — retarget the canvas · `ResetToOrigin()` — restore starting textures · `Clear()` — wipe to background · `GetChannel(ChannelDefinition)` — resolve a `PaintChannel` at runtime (populated on `MultiChannelCanvas` / `SimulationCanvas`) |
| `PaintTool` | `SwitchInput(InputConfig)` — hot-swap the input device · `SwitchPaint(DrawConfig)` — hot-swap the active brush/fill · `PaintDab(Ray)` / `Stamp()` — manual one-shot painting |
| `Paintable` | Texture Size, Submesh Index; wraps a `Renderer` (mesh or `SkinnedMeshRenderer`) |
| `PaintableLink` | Forwards proxy-collider raycast hits back to a shared `Paintable` |
| `PaintProgressTracker` | `Progress`, `DonePixels`, `TotalPixels`, `OnUpdated` event; static `GlobalProgress`, `AllReady` |
| `PaintEngine` | `EnqueueCommand(ICommand)` — enqueue a pooled GPU command |

## Key enums

| Enum | Values |
| --- | --- |
| `ChannelValueType` | Color, Scalar, Normal |
| `ValueSource` | Constant, Pressure, Distance, Speed, Time, Direction, Random |
| Stamp alignment | Surface, View |
| Draw shape | None, Circle, Texture |
| Fill scope (`FillMode`) | Face Directions, Seam, Shape Edge, Triangle |
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

`PaintProgressTracker` reports how much of a channel's paint buffer has been painted
(**Fill** mode) or erased (**Erase** mode). It reads one of five `ProgressSource` values —
**Coverage** (every channel), **Value** (the scalar on Scalar, or an RGB match against a
reference colour + tolerance on Color/Normal), and **Red/Green/Blue** (Color channels
only). It works against any of the three canvas types — `MultiChannelCanvas`,
`SimulationCanvas`, or `SingleTargetCanvas`.

```csharp
void OnEnable()  => tracker.OnUpdated += HandleProgress;
void OnDisable() => tracker.OnUpdated -= HandleProgress;

void HandleProgress(PaintProgressTracker t)
{
    float pct = t.Progress;                          // 0–1 for this tracker
    float all = PaintProgressTracker.GlobalProgress;  // aggregate across the scene
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

---

*Next: [Platform, Performance & FAQ](./best-practices.md)*
