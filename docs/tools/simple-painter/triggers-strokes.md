---
id: triggers-strokes
title: Input & Stroke Methods
sidebar_position: 8
description: Six input devices (Mouse, Pen, Touch, Collision, Particle, Object) feed five stroke methods (Direct, Drag Dot, Line, Bezier, Anchored), with dynamic parameters driven by pressure, distance, speed, time, direction or random.
keywords:
  - unity paint input
  - stroke methods unity
  - pressure sensitive painting
  - bezier stroke unity
  - collision paint unity
---

# Input & Stroke Methods

Simple Painter separates **input detection** (which device starts a stroke) from **stroke
shaping** (which rays become stamps), so you can mix and match any input device with any
stroke method.

## Input devices

All input sources share an `InputConfig`/`InputReader` pair and feed the same stamp
pipeline through `IPaintContext`. Engagement is device-native — each reader decides for
itself when a stroke begins, updates and ends.

| Device | Trigger | Notes |
| --- | --- | --- |
| **Mouse** | Configurable paint button (default left click) | Always reports full pressure; optional live hover-preview of the brush footprint |
| **Pen** | Stylus tip contact | Reads genuine analog pressure from the hardware |
| **Touch** | Primary touch contact | Single-touch (one active pointer) |
| **Collision** | Physics collision enter / stay / exit | Min & max impact-speed thresholds, with an impact-speed → pressure response curve |
| **Particle** | Particle-system collision, or a per-frame sweep | **Collision** mode paints where particles land; **Pierce** mode paints every surface a particle flies through, with per-crossing pressure falloff |
| **Object** | None — samples a transform every frame (or on demand) | No ray cast at all: the transform's pose *is* the stamp, sized by its scale. Good for rollers, rubber stamps, carried decals |

Mouse, Pen and Touch share a common screen-ray base with configurable camera, paint layer
mask, max ray distance, and an option to ignore strokes that start over UI. Every stamp
also carries an **alignment** — either **Surface** (flush against the mesh normal) or
**View** (billboarded to face the camera) — selectable per stroke asset.

## Stroke methods

An optional stroke preset decides *which* rays become stamps — only screen-based devices
offer the slot; leave it empty and every ray simply stamps where it lands, once per frame.
Every method shares raycasting, per-stroke random seeding, and a smoothed drag-speed
tracker.

| Method | Behaviour | Emits |
| --- | --- | --- |
| **Direct** | The default when no preset is assigned: deposits a stamp at the raw cursor position every update | Continuous trail |
| **Drag Dot** | Re-stamps at the live cursor position every update until release | Following dab |
| **Line** | Rebuilds an evenly spaced straight line from the press anchor to the live cursor each frame | Rubber-band line |
| **Bezier** | Fits a quadratic Bezier curve through a sliding 3-ray window and tessellates it into evenly spaced stamps | Smoothed curve trail |
| **Anchored** | Pins one decal at the press point and grows/rotates it as the cursor drags away | Resizable decal |

Line and Bezier both support additional **spacing**, **jitter** (randomised stamp
position) and **dash** patterns. Every stamp shape also exposes **Size** and **Rotation**
as dynamic parameters.

## Dynamic parameters

Size, Rotation, Opacity, Jitter and other values are driven by a shared `StrokeParameter`
evaluator. Each can be a flat constant, or vary by one of six modes — remapped through an
animation curve and clamped to a min/max range:

| Mode | Driven by |
| --- | --- |
| **Pressure** | Pen/mouse/collision pressure |
| **Distance** | Distance travelled along the stroke |
| **Speed** | Smoothed drag speed |
| **Time** | Elapsed stroke time |
| **Direction** | The stroke's heading — the 3D brush travel direction in the stamp plane |
| **Random** | Per-stamp random value (seeded per stroke) |

This is what powers pressure-sensitive width, speed-based thinning, direction-aligned
stamps, or randomised scatter brushes.

## Hot-swapping at runtime

The input asset assigned to a `PaintTool` can be swapped live, carrying its stroke preset
along with it, so a single Tool GameObject can flip devices without re-wiring components:

```csharp
paintTool.SwitchInput(penInputConfig);
paintTool.SwitchPaint(fillMeshConfig);
```

---

*Next: [Draw Config & Ink](./tools-brushes.md)*
