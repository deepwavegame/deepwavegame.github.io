---
id: getting-started
title: Getting Started
sidebar_position: 2
description: Create your first procedural corrugated roof in Unity — add the Infinite Corrugated Roof component, assign a material, and size the panel grid live in the Inspector.
keywords:
  - corrugated roof tutorial
  - unity procedural roof setup
  - infinite corrugated roof getting started
---

# Getting Started

This guide covers the initial setup and the basic steps to generate your first procedural
roof.

## Installation

1. Buy and download **Infinite Corrugated Roof** from the
   [Unity Asset Store](https://assetstore.unity.com/packages/tools/modeling/infinite-corrugated-roof-357650).
2. In Unity (**2021.3 LTS or newer**), open **Window → Package Manager → My Assets** and
   **Import** the package.
3. *(Optional)* Install **Unity Splines** (2.1.0+) for spline deformation and the **FBX
   Exporter** (5.0.0+) for baking — both unlock extra Inspector sections only when present.

## Create your first roof

1. **Add the component.** Create an empty GameObject and add the **Infinite Corrugated
   Roof** component. This also adds a `MeshRenderer` and a `LODGroup` automatically.
2. **Assign a material.** Give the `MeshRenderer` a corrugated-metal material. A ready-made
   URP/HDRP sample material is included under **Samples**.
3. **Size the grid.** Set **Panel Columns** and **Panel Rows** to fit your building, then
   adjust **Panel Width / Length**, **Row Overlap** and the **Wave Profile**.
4. **Add character.** Fine-tune wear, colour variation, jitter and cuts under **Modifiers &
   Variations**.

:::tip Everything rebuilds live
Every field in the Inspector rebuilds the roof immediately in Edit Mode — there is no
"Generate" button. When you're happy with the design, bake it to an FBX (see
[Advanced Features](./advanced-features.md)) to remove the runtime generation cost.
:::

---

*Next: [Editor Guide](./editor-guide.md)*
