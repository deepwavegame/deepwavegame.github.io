---
id: triggers-strokes
title: Input & Stroke Methods
sidebar_position: 8
description: Five input devices (Mouse, Pen, Touch, Collision, Particle) feed six stroke methods (Direct, Dot, Drag Dot, Line, Bezier, Anchored), with dynamic parameters driven by pressure, distance, speed, time or random.
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

All input sources share one `PaintInput` base and feed the same stamp pipeline. Engagement
is device-native — each subclass decides for itself when a stroke begins, updates and ends.

| Device | Trigger | Notes |
| --- | --- | --- |
| **Mouse** | Configurable paint button (default left click) | Always reports full pressure; optional live hover-preview of the brush footprint |
| **Pen** | Stylus tip contact | Reads genuine analog pressure from the hardware |
| **Touch** | Primary touch contact | Single-touch (one active pointer) |
| **Collision** | Physics collision enter / stay / exit | Min & max impact-speed thresholds, with an impact-speed → pressure response curve |
| **Particle** | Particle-system collision events | One short stroke per collision callback; exposes a settable `Pressure` property external systems can drive |

Mouse, Pen and Touch share a common screen-ray base with configurable camera, paint layer
mask, max ray distance, and an option to ignore strokes that start over UI. Every stamp
also carries an **alignment** — either **Surface** (flush against the mesh normal) or
**View** (billboarded to face the camera) — selectable per stroke asset.

## Stroke methods

The stroke method decides *which* rays become stamps. Every method shares raycasting,
per-stroke random seeding, and a smoothed drag-speed tracker.

| Method | Behaviour | Emits |
| --- | --- | --- |
| **Direct** | Deposits a stamp at the raw cursor position every update — no smoothing or spacing gate | Continuous trail |
| **Dot** | Places exactly one stamp on press; dragging or holding adds nothing | Single dab |
| **Drag Dot** | Re-stamps at the live cursor position every update until release | Following dab |
| **Line** | Rebuilds an evenly spaced straight line from the press anchor to the live cursor each frame | Rubber-band line |
| **Bezier** | Fits a quadratic Bezier curve through a sliding 3-ray window and tessellates it into evenly spaced stamps | Smoothed curve trail |
| **Anchored** | Pins one decal at the press point and grows/rotates it as the cursor drags away | Resizable decal |

Line and Bezier both support additional **spacing**, **jitter** (randomised stamp
position) and **dash** patterns. Every stroke asset also exposes **Size** and **Rotation**
as dynamic parameters.

## Dynamic parameters

Size, Rotation, Jitter and other values are driven by a shared `DrawDynamics` evaluator.
Each can be a flat constant, or vary by one of five modes — remapped through an animation
curve and clamped to a min/max range:

| Mode | Driven by |
| --- | --- |
| **Pressure** | Pen/mouse/collision pressure |
| **Distance** | Distance travelled along the stroke |
| **Speed** | Smoothed drag speed |
| **Time** | Elapsed stroke time |
| **Random** | Per-stamp random value (seeded per stroke) |

This is what powers pressure-sensitive width, speed-based thinning, or randomised scatter
brushes.

## Hot-swapping at runtime

The stroke asset assigned to a `PaintInput` can be swapped live, so a single Tool GameObject
can flip between, say, a Line stroke and a Bezier stroke without re-wiring components:

```csharp
paintInput.SwitchStroke(bezierStrokeConfig);
```

---

*Next: [Paint Tools & Ink](./tools-brushes.md)*
