---
title: "Advanced Decal Systems for Bloody Footprints"
description: "Optimizing thousands of dynamic decals in Unity."
date: 2025-10-25
slug: advanced-decal-systems-bloody-footprints
authors: [vuminh]
tags: [unity, tech-art]
---

![Decals](https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80)

## The Trail of Terror

Bloody footprints are a staple of horror storytelling. They guide the player, build tension, and tell a silent story of a struggle. However, in a game where both the player and the monsters can leave dynamic trails, managing thousands of decals can quickly become a performance nightmare.

### The Problem with Standard Decals

Unity's standard `Decal Projector` is powerful but can be expensive when used in high quantities. Each projector is essentially a specialized camera pass. If you have 500 bloody footprints in a hallway, you're looking at a significant hit to your draw calls and GPU fill rate.

### The Solution: GPU-Driven Decal Atlasing

For *Lil Sis*, we developed a custom decal system that bypasses the standard projectors for small, repetitive details like footprints.

1.  **The Atlas**: We store all our blood variations in a single high-res texture atlas.
2.  **The Mesh Batcher**: Instead of a "Projector," we use a single mesh that is generated on the fly. When a footprint is created, we add its vertices to a `Dynamic Mesh`. This allows us to render hundreds of footprints in a **Single Draw Call**.
3.  **Projector-Less Projection**: We use a custom shader that performs the projection logic in the vertex shader. By passing the ground's normal and position data, we can "shrink-wrap" the footprint mesh to the surface.

### Fade-out and Memory Management

To prevent memory leaks, we use a **Circular Buffer** for our decals. When the buffer is full, the oldest footprint simply fades out and its vertices are repurposed for the newest one.

```hlsl
// In the decal shader
float alpha = smoothstep(_MaxLifetime, _MinLifetime, v.age);
col.a *= alpha;
```

This system allows us to have rooms covered in blood and footprints without the player ever noticing a dip in performance. It's a perfect example of how "technical tricks" can be used to support "narrative atmosphere."

