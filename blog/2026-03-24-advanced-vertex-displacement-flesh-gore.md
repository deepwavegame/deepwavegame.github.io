---
title: "Advanced Vertex Displacement for Flesh & Gore"
description: "Creating dynamic, squishy surfaces using Shader Graph and URP for visceral horror effects."
date: 2026-03-24
slug: advanced-vertex-displacement-flesh-gore
authors: [yangshun]
tags: [ENGINEERING]
---

![Flesh and Gore](https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1200&q=80)

## The Art of Visceral Realism

In modern horror game development, the "feel" of an environment is often just as important as its visual fidelity. When it comes to organic, fleshy surfaces—think of the pulsating walls in a biological nightmare or the squishy impact of a weapon on a monster—standard static meshes often fall short. This is where **Advanced Vertex Displacement** comes into play.

Using Unity's Universal Render Pipeline (URP) and Shader Graph, we can move beyond simple texture swaps and into the realm of dynamic, responsive geometry. By manipulating vertex positions in real-time, we create an illusion of depth and movement that feels unsettlingly real.

### The Mathematics of Pulsation

The core of a good "flesh" shader is the combination of multiple sine waves operating at different frequencies and amplitudes. We don't want a uniform pulse; that feels mechanical. Instead, we use a **Noise-Driven Displacement** approach. By sampling a Perlin or Simplex noise texture and using it to offset the vertex normal, we achieve that irregular, organic heaving that characterizes living tissue.

```hlsl
// Conceptual logic for vertex offset
float3 offset = normal * noiseValue * displacementStrength;
positionOS.xyz += offset;
```

### Implementing in URP Shader Graph

1.  **Vertex Position Node**: Start by getting the object-space position.
2.  **Normal Vector Node**: Displacement should almost always happen along the vertex normal to maintain the volume's integrity.
3.  **Time-Based Noise**: Use a `Time` node multiplied by a speed constant to scroll a 3D noise function.
4.  **Tessellation (Optional)**: For high-end hardware, adding hardware tessellation allows for much finer detail without requiring incredibly dense base meshes.

### Performance Considerations

Vertex displacement is computationally cheaper than some might think, especially when handled entirely on the GPU. However, the biggest bottleneck is often **Shadow Mapping**. Displaced vertices must also be accounted for in the Shadow Caster pass, otherwise, the shadows will remain static while the mesh pulses, breaking the immersion. Ensure your Shader Graph has the "Shadow Caster" pass properly configured to use the same displacement logic.

By layering these techniques with subsurface scattering and a high-quality specular map (to give that "wet" look), you can create environments that don't just look scary—they feel alive.
