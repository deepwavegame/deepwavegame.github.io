---
id: getting-started
title: Getting Started
sidebar_position: 2
description: "Weather a wall, add the Weather, bake exposure and put flags and grass in the wind with Weatherscape, in about five minutes."
keywords:
  - weatherscape quick start
  - unity weathering tutorial
  - urp weathering setup
---

# Weatherscape — Getting Started

Requirements: Unity 6000.3 or newer, URP 17.3 or newer, and a DirectX 11/12, Vulkan or Metal device.
Import the package; there is nothing else to install.

## 1. Look at the demo (2 minutes)

Open `Samples/Demo/Weatherscape Demo.unity` and press Play. Use the panel on the left to change the
weather, and the number keys to visit the stations.

## 2. Weather a wall (1 minute)

1. **Assets ▸ Create ▸ Deepwave ▸ Weatherscape ▸ Wall Material**, or drag `Materials/Wall/Wall_PaintedBrick`
   from the library onto an object.
2. That is it: the wall is weathered at once. Tune it in the material's **Weathering** and **Deposits**
   sections.

## 3. Add the Weather (30 seconds)

**GameObject ▸ Deepwave ▸ Weatherscape ▸ Weather.** Use its presets (Calm, Breezy, Rain, Storm, Snowfall,
Dusty) or its sliders. Every Weatherscape material responds. Without a Weather the scene is calm and dry.

## 4. Bake the exposure (1 minute, optional but recommended)

Materials first estimate their exposure from their orientation. A bake teaches them the geometry: edges
wear, grime collects under ledges, water streaks run down from sills, damp rises from the ground, rust
runs down from iron.

1. Select the objects of a building and choose **GameObject ▸ Deepwave ▸ Weatherscape ▸ Exposure Group**.
2. Press **Bake** in the Exposure Group's inspector.

## 5. Make things move in the wind

- **Flags, awnings, banners** — assign a **Fabric** material and choose where the cloth is **Pinned Along**.
- **Grass, leaves, bark, shrubs** — assign a **Vegetation** material and choose its **Kind** (Grass, Leaves,
  Bark, Brush). With **Mesh Data: From Height** any mesh moves as it is; put its pivot at the base.
- **Local wind** (a fan, a character in the grass, a sheltered courtyard) —
  **GameObject ▸ Deepwave ▸ Weatherscape ▸ Wind Source.**

## From scripts

```csharp
using Deepwave.Weatherscape;

Weather.Active.Snow = 0.8f;                    // 0-1
Weather.Active.WindSpeed = 12f;                // m/s
Vector3 wind = Wind.GetVelocity(transform.position);   // the same wind the shaders see
```

## Next

The package's **Manual** explains every concept; its **Technical Reference** lists every property, texture
format and performance figure. **Tools ▸ Deepwave ▸ Weatherscape ▸ Weatherscape Window** gathers the
scene's weather, the material library and the debug views.
