---
title: "Procedural Interior Generation for Infinite Horrors"
description: "Building a dungeon crawler with scary, believable layouts."
date: 2025-10-05
slug: procedural-interior-generation-infinite-horrors
authors: [yangshun]
tags: [ENGINEERING]
---

![Procedural Interiors](https://images.unsplash.com/photo-1481016570479-9ebb633d13ec?auto=format&fit=crop&w=1200&q=80)

## The Ever-Shifting Labyrinth

Procedural Generation (ProcGen) is often associated with vast open worlds or roguelikes. However, in horror, ProcGen can be a powerful tool for creating a sense of "unreliable reality." If the layout of the haunted house changes every time the player enters, they can never feel truly safe. The challenge is making these procedural layouts feel **believable and atmospheric**, rather than just a collection of random rooms.

### The Constraint-Based Approach

For *My Sister*'s "Dreamscape" sequences, we use a **Constraint-Based Layout Generator**. Instead of purely random placement, we define a set of architectural rules:
- Bathrooms must be adjacent to bedrooms.
- Hallways must eventually lead to a "hub" area.
- Escape routes must always be at least two rooms away from the spawn point.

We use a **Wave Function Collapse (WFC)** algorithm modified for 3D space. WFC ensures that every piece placed (a door, a window, a corner) is logically compatible with its neighbors, preventing the "floating doors" and "hallways to nowhere" common in simpler generators.

### Procedural Lighting and Atmosphere

A room is just a box until it's lit. In a procedural system, we can't hand-place every light. We use a **Procedural Light Probe** system that analyzes the generated room's volume and places light sources based on its "purpose" (e.g., a flickering fluorescent light in a hallway, a single lamp in a bedroom).

```csharp
public void GenerateRoomLighting(Room room) {
    // Logic to identify key 'mood' points
    // and instantiate light prefabs with randomized flickers.
}
```

### The Uncanny Valley of Architecture

The goal of procedural horror interiors is to create something that looks "almost" right. By subtly breaking the rules of architecture—making a hallway slightly too long or a door slightly too small—you trigger the "Uncanny Valley" response in the player. They know something is wrong, even if they can't quite put their finger on it. This architectural gaslighting is a unique strength of procedural systems in the horror genre.
