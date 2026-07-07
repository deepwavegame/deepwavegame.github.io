---
id: best-practices
title: Platform, Performance & FAQ
sidebar_position: 12
description: Platform and render-pipeline support, the performance architecture behind Simple Painter, runtime tips, and frequently asked questions.
keywords:
  - simple painter performance
  - unity paint webgl
  - runtime paint faq
  - urp hdrp painting
---

# Platform, Performance & FAQ

## Platform & render-pipeline support

| | Details |
| --- | --- |
| **Unity version** | 2021.3 or newer |
| **Dependency** | `com.deepwave.core` |
| **Render pipelines** | Built-in, URP and HDRP — built on Unity's standard `CommandBuffer` / `Graphics.Blit` rendering; a detector identifies the active pipeline at runtime |
| **Rendering formats** | Automatic format resolution with a documented fallback path for platforms lacking floating-point render-target support (relevant for WebGL) |

## Performance architecture

Simple Painter is built around a single-pass-per-frame command architecture rather than
scattered per-draw calls:

- **One command buffer per frame** — every GPU operation is a pooled command bucketed into
  five ordered phases (Setup → Process → Draw → Commit → Composition), recorded once and
  submitted with a single execute call; frames with no paint activity submit nothing.
- **Pooling throughout** — commands, command buffers, materials, shared meshes and
  solid-colour textures are all rented and reused.
- **Render-texture pooling** — persistent simulation buffers reallocate only when their
  format/size changes; scratch buffers use Unity's temporary RT pool; ping-pong pairs
  standardise multi-pass simulation.
- **Job System batch raycasting** — dense stroke sampling switches to parallel job-scheduled
  raycasts once the batch is large enough to benefit.
- **Async GPU readback** — Pick and Progress Tracker use non-blocking `AsyncGPUReadback`, so
  they never stall the main thread.
- **Guaranteed VRAM teardown** — every pooled render texture and cached solid texture is
  released on shutdown.

See [PaintEngine & Performance](./paint-engine.md) for the full breakdown.

## Runtime tips

- **Hot-swap, don't mutate assets.** Use `PaintInput.SwitchStroke(...)` and
  `PaintDrawer.SwitchConfig(...)` to change behaviour at runtime instead of editing the
  shared ScriptableObject, which would affect every reference.
- **One tool active at a time.** A `PaintDrawer` runs exactly one ink config; swap it
  rather than stacking tools.
- **Size buffers per object.** Set each `Paintable`'s Texture Size to match how close the
  camera gets — background props rarely need 2048².
- **Add `PaintEnvironment` for seams and fluid.** It fixes UV-seam bleeding and provides the
  gravity flow field the fluid-viscous committer needs.

## Frequently asked questions

**Can I paint more than colour — like metallic, roughness or normal maps?**
Yes. Painting is organised around *channels*, each bound to any shader property and typed as
Color, Scalar or Normal, each with its own layer stack.

**Does it support layers, like an image editor?**
Yes — every channel holds visibility/opacity/starting-texture/blend-mode layers (8 blend
modes for Color, 5 for Scalar, 7 for Normal).

**Can I paint on an animated or skinned character?**
Yes. `Paintable` bakes the live `SkinnedMeshRenderer` pose once per frame, and
`PaintableLink` lets bone-following proxy colliders forward hits to the real target.

**Is there a wet-paint or fluid effect?**
Yes, via the Fluid Viscous committer — adhesion, viscosity, cohesive pressure, gravity flow
and evaporation, running as an iterative GPU simulation.

**What happens at UV seams?**
With the optional `PaintEnvironment`, seams are detected geometrically and paint bleeds
correctly across islands instead of stopping at the cut.

**Can I measure how much of an object has been painted?**
Yes, with `PaintProgressTracker` — a live 0–100% ratio (fill or erase), optionally masked to
the real UV footprint, with an event and scene-wide aggregation.

**Which input devices are supported?**
Mouse, pressure-sensitive Pen, Touch (single-touch), physics Collision impacts, and
Particle-system collisions.

**Can I paint several objects with one canvas?**
Yes — a single `PaintCanvas` registers multiple `Paintable` targets and switches the active
one via `Switch(index)`, reusing the same GPU buffers.

---

*Buy on the [Unity Asset Store](https://assetstore.unity.com/packages/tools/painting/simple-paint-3d-375642).*
