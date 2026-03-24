---
title: "Volumetric Fog in URP: A Deep Dive"
description: "Optimizing atmospheric scattering for that perfect misty horror ambiance without killing performance."
date: 2026-03-20
slug: volumetric-fog-urp-deep-dive
authors: [vuminh]
tags: [urp, shader]
---

![Volumetric Fog](https://images.unsplash.com/photo-1475139441338-693e7dbe20b6?auto=format&fit=crop&w=1200&q=80)

## The Atmosphere of Dread

Fog is a staple of the horror genre, famously used in *Silent Hill* to mask hardware limitations. Today, however, fog is a deliberate stylistic and atmospheric choice. **Volumetric Fog**—fog that interacts with light sources and casts shadows—is the gold standard for creating "thick" atmosphere.

### Raymarching: The Engine of Volume

Most volumetric fog systems in modern engines like Unity URP rely on **Raymarching**. The shader "marches" a ray from the camera into the scene, sampling the light and density at various points along that ray.

The challenge is the sheer number of samples required. A naive implementation will tank the frame rate. To optimize this, we use a **Froxel-based approach** (Frustum Voxels). By dividing the camera frustum into a 3D grid of voxels, we can pre-calculate the lighting for each voxel once per frame and then simply sample that grid during the main rendering pass.

### Optimizing for URP

Unity's URP doesn't include a robust volumetric fog out of the box (unlike HDRP). To implement this effectively, we use **Scriptable Render Features**.

1.  **Downsampling**: Render the volumetric effect at a lower resolution (e.g., half or quarter res) and then upsample it using a bilateral filter to preserve edges.
2.  **Temporal Reprojection**: Use data from the previous frame to "fill in the blanks," allowing for fewer samples per frame while maintaining a smooth look.
3.  **Phase Function**: Implementing a Henyey-Greenstein phase function allows for realistic forward and backward scattering, making the fog "glow" when a light source is behind it.

### Strategic Implementation

In horror, fog isn't just about visibility; it's about what it *hides*. By dynamically adjusting fog density based on player location or sanity levels, you can create a shifting sense of claustrophobia. For example, as the player's "Fear" meter rises, the fog's `Extinction` coefficient can increase, pulling the "wall of mist" closer to the player.

Performance-wise, always keep an eye on your **Overdraw**. Thick volumes of fog can overlap with other transparent effects (like particles), leading to significant GPU pressure. Balancing the Froxel resolution with the camera's far clip plane is the key to maintaining 60 FPS on mid-range hardware.
