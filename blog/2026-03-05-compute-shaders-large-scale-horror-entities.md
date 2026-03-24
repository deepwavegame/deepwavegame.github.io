---
title: "Compute Shaders for Large-Scale Horror Entities"
description: "Simulating thousands of swarming creatures with GPU-bound logic."
date: 2026-03-05
slug: compute-shaders-large-scale-horror-entities
authors: [vuminh]
tags: [unity, tech-art]
---

![Compute Shaders Swarm](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80)

## The Power of the Swarm

There is something primal about the fear of being overwhelmed by numbers. A single monster is a threat, but a swarm of thousands of scuttling insects or shadows is a nightmare. Traditionally, simulating thousands of individual AI entities would crush the CPU. To achieve this in real-time, we must move the simulation to the GPU using **Compute Shaders**.

### GPGPU: Beyond Rendering

Compute Shaders allow us to use the massive parallel processing power of the GPU for non-rendering tasks—in this case, flocking behavior and physics. By storing our entity data (position, rotation, velocity) in a `StructuredBuffer`, we can update thousands of entities simultaneously in a single dispatch call.

### The Boids Algorithm

For a convincing swarm, we use a modified **Boids algorithm**. Each entity follows three simple rules:
1.  **Separation**: Avoid crowding neighbors.
2.  **Alignment**: Steer towards the average heading of neighbors.
3.  **Cohesion**: Steer towards the average position of neighbors.

In a horror context, we add a fourth rule: **Targeting/Avoidance**. The swarm should actively move toward the player or avoid light sources.

### Rendering the Swarm

Once the Compute Shader has updated the positions in the `StructuredBuffer`, we don't want to send that data back to the CPU (which is slow). Instead, we use **GPU Instancing**. We provide the buffer directly to a specialized vertex shader that positions the meshes based on the data already sitting in GPU memory.

```hlsl
// In the vertex shader
StructuredBuffer<EntityData> _EntityBuffer;
uint instanceID = UNITY_GET_INSTANCE_ID(v);
float3 pos = _EntityBuffer[instanceID].position;
```

### Performance and Scale

With this architecture, simulating 10,000 entities becomes trivial. The bottleneck shifts from CPU logic to GPU fill rate and vertex processing. To optimize further, we can implement **GPU Culling**, where the Compute Shader checks if an entity is within the camera frustum before deciding whether it should be rendered.

This technique was used to great effect in titles like *A Plague Tale: Innocence* for their rat swarms. By leveraging Compute Shaders, indie developers can now achieve a level of scale that was previously reserved for AAA studios, creating truly overwhelming horror experiences.
