---
title: "Photogrammetry for Horror Environments"
description: "Capturing real-world decay and bringing it into Unity."
date: 2025-11-15
slug: photogrammetry-horror-environments
authors: [yangshun]
tags: [ENGINEERING]
---

![Photogrammetry](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80)

## The Texture of Decay

Horror lives in the details: the peeling wallpaper of an abandoned asylum, the rusted hinges of a cellar door, the moss-covered stone of a graveyard. Hand-authoring these "messy" textures can be incredibly time-consuming. This is why **Photogrammetry**—the process of creating 3D meshes and textures from photographs—has become a cornerstone of our environment pipeline at Wave0084.

### Capturing the Real World

The process begins with a high-resolution camera and a lot of patience. We look for real-world locations that exhibit the kind of "natural chaos" that is hard to simulate. Using tools like **RealityCapture** or **Metashape**, we process hundreds of photos into a high-poly mesh.

For horror, the "imperfections" are what we're after. The way a piece of wood has rotted or the specific pattern of a blood-like stain on concrete. Photogrammetry captures these nuances with a level of fidelity that "clean" procedural textures often lack.

### The Game-Ready Pipeline

A raw photogrammetry scan is millions of polygons—far too heavy for real-time rendering. Our pipeline involves:
1.  **Retopology**: Creating a clean, low-poly version of the scan.
2.  **Baking**: Transferring the high-poly detail onto the low-poly mesh via Normal and Displacement maps.
3.  **Delighting**: This is the most critical step. Photos contain baked-in lighting information. We use tools like **Unity's ArtEngine** or **Adobe Sampler** to remove this lighting, resulting in "PBR-ready" Albedo maps that react correctly to our game's dynamic lights.

### Integrating with URP

In Unity's Universal Render Pipeline, these high-fidelity assets shine when combined with **Detail Maps** and **Decals**. By layering a photogrammetric "base" with procedural "grime" decals, we can create environments that feel unique and grounded in reality.

Photogrammetry isn't about replacing artists; it's about giving them a more realistic starting point. It allows us to spend less time on the "grunt work" of modeling bricks and more time on the "art" of lighting and atmosphere.
