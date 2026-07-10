---
id: intro
title: Introduction
sidebar_position: 1
description: Dynamic Target Framer draws a pixel-tight UI frame around any 3D object on screen — mesh-accurate, allocation-free, and presentation-agnostic for Unity.
keywords:
  - unity target framer
  - unity bounding box ui
  - look at highlight unity
  - unity selection frame
  - mesh accurate bounding box
---

# Dynamic Target Framer — Introduction

**Dynamic Target Framer** puts a clean, dynamic bounding box on screen around whatever 3D
object the player is aiming at. Unlike a loose world-space bounding-box overlay, the frame is
built from the object's real geometry — its MeshCollider, MeshFilter, or a baked skinned mesh —
so it stays **as tight as possible** around the silhouette from every camera angle.

:::info Runtime measures, Samples draw
The package is split in two on purpose. The `Deepwave.DTF.Runtime` assembly only projects the
target's vertices and publishes the result as a `TargetFrame` (a screen-space rectangle) — it
never references uGUI. The `Deepwave.DTF.Samples` assembly turns that data into pixels with
`TargetFrameView`, a reference renderer you can copy and restyle. Swap in corner brackets, a
shader, a world-space marker, or UI Toolkit without ever touching the Runtime.
:::

## What ships in the package

| | |
| --- | --- |
| **Unity** | 6000.0 or newer |
| **Runtime dependencies** | None — the core assembly only needs the Unity engine |
| **Sample dependencies** | Unity UI / uGUI for `TargetFrameView`; Input System for the demo controller |
| **Assemblies** | `Deepwave.DTF.Runtime` (data only) and `Deepwave.DTF.Samples` (UI presentation, references Runtime) |
| **Runtime scripts** | 3 — `DynamicTargetFramer`, `TargetGeometry`, `TargetFrame` |
| **Sample scripts** | 3 — `TargetFrameView`, `CrosshairTargetDetector`, `SimpleFirstPersonController` |
| **Render pipelines** | Built-in, URP, HDRP — the Runtime is pipeline-independent |

## Highlights

- **Mesh-accurate fit** — projects the actual mesh or MeshCollider vertices, not a loose
  world-space AABB, so the frame hugs the silhouette from every angle.
- **Presentation-agnostic core** — `DynamicTargetFramer` only measures and publishes a
  `TargetFrame`; it holds no reference to any UI object, so any renderer can consume it.
- **Drop-in reference view** — `TargetFrameView` reproduces the classic look (padding,
  smoothing, idle state) in one component, wired up in the included `DTFCanvas` prefab.
- **Zero steady-state GC** — a mesh's vertices are read once and shared by every framer; the
  box is only recalculated when the camera or target actually moves.

## How it works

**Runtime** (measuring):

1. Read the target's vertices (MeshCollider, MeshFilter, or a baked skinned mesh).
2. Project each vertex to screen space with the camera.
3. The min/max of those screen points is the tightest box around the object — published as
   `TargetFrame.ScreenRect` through the `FrameChanged` event.

**Samples** (drawing, e.g. `TargetFrameView`):

4. Convert the screen rect to the canvas's local space and add padding.
5. Move and resize a UI image to that box, then smooth it.

Because measuring and drawing are two different components, you can replace steps 4–5 with
anything — the math in steps 1–3 never changes.

## Getting started

1. Drag `Assets/Deepwave/DynamicTargetFramer/Samples/Assets/Prefabs/DTFCanvas.prefab` into your
   scene. It already carries a `DynamicTargetFramer` + `TargetFrameView` pair, wired to each
   other.
2. Make sure your camera is tagged `MainCamera` (or drag it into the *Camera* fields).
3. Give the objects you want to frame a **Collider**. Press **Play** and look at them.

Prefer your own visuals instead of `TargetFrameView`? Read the data straight from the Runtime
component:

```csharp
public DynamicTargetFramer framer;

void OnEnable()
{
    framer.FrameChanged += OnFrameChanged;
}

void OnFrameChanged(TargetFrame frame)
{
    if (frame.Visible) DrawMyOwnBox(frame.ScreenRect);
    else HideMyOwnBox();
}
```

## Where to go next

- [Tools overview](/tools) — see Dynamic Target Framer alongside Deepwave's other Unity packages
- The package's own `QuickGuide.html` (included with the `.unitypackage` / Package Manager
  install) covers the full component reference and API in detail.
