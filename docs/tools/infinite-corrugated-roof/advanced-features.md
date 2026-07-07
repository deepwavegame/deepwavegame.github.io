---
id: advanced-features
title: Advanced Features
sidebar_position: 6
description: Spline deformation, angled edge cuts and one-click FBX baking for Infinite Corrugated Roof — optional workflows that ship static, deterministic geometry.
keywords:
  - roof spline deformation
  - fbx bake unity roof
  - corrugated roof cuts
  - spline roof unity
---

# Advanced Features

## Spline path deformation

When the **Unity Splines** package (2.1.0+) is installed, a **Spline Path** field appears
under Modifiers. Assign a `SplineContainer` and enable it to bend the roof along the path.

| Mode | Behaviour |
| --- | --- |
| `DeformSmooth` | The full panel surface follows the spline curvature |
| `DeformFlat` | Each panel stays flat but is leveled to its center point on the spline |
| `RigidFollow` | Panels stay rigid and are placed and oriented along the spline like segments of a chain |

Without the Splines package installed, this section is hidden and has no effect on the
build.

:::tip Path smoothness
For smooth results on tight curves with `DeformSmooth`, increase
`lengthSegmentsPerPanel` in the Mesh settings so there is enough geometry to bend.
:::

## Angled edge cuts

The **Cut Settings** trim the roof rectangle with an angled line at the start and/or end
edge — ideal for gables and sloped roof ends:

- **Mode** — `Horizontal` cuts the whole panel straight; `Diagonal` follows the cut angle
  per vertex.
- **Start / End Angle** — the cut angle at each edge; the sign selects which side the cut
  pivots from.

Cuts are applied during vertex generation, so changing the angles is non-destructive — the
full grid is always regenerated from your parameters.

## FBX baking & optimization

When the **FBX Exporter** package (5.0.0+) is installed, the **System & Export** section
adds baking tools:

- **New** — bakes the current roof to a new FBX file and assigns it as the Target Asset.
- **Bake Geometry to Asset** — re-bakes into the currently assigned FBX asset (generates
  LOD0, LOD1, LOD2 meshes inside it).
- **Preview Baked Mesh** — displays the baked FBX instead of the procedural mesh.

### Recommended workflow

1. **Design** — adjust all parameters until the roof looks right in the scene.
2. **Create the asset** — click **New** to make a target FBX in your project.
3. **Bake** — click **Bake Geometry to Asset** to write the three LOD meshes into the FBX.
4. **Preview** — enable **Preview Baked Mesh** to display the baked asset.
5. **Ship** — drop the GameObject into a Prefab or move the FBX to other scenes.

:::warning Why bake?
Baking removes the runtime generation cost and produces a static mesh you can ship, batch,
or hand off to another artist. At Play Mode / runtime, if a baked asset is assigned, ICR
**always** displays it instead of generating procedurally — keeping builds fast and
deterministic.
:::

## Troubleshooting

| Symptom | Cause / Fix |
| --- | --- |
| Roof looks flat, no waves | Check `corrugationAmplitude` and that `waveProfile` has more than one keyframe |
| Visible seam between columns | Panels overlap by exactly one wave by design — check `verticalTiling` / `verticalOffset` if the material tiles differently |
| Spline Path section missing | Install **Unity Splines** (2.1.0+) via the Package Manager |
| Baking tools missing / disabled | Install the **FBX Exporter** (5.0.0+) via the Package Manager |
| Editing settings does nothing in Play Mode | Live rebuild runs only in Edit Mode; call `Rebuild()` manually at runtime |

---

*Back to [Overview](./product-overview.md) · buy on the [Unity Asset Store](https://assetstore.unity.com/packages/tools/modeling/infinite-corrugated-roof-357650).*
