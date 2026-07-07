---
id: api-reference
title: API Reference
sidebar_position: 5
description: Script the Infinite Corrugated Roof component — every parameter is a public field; call Rebuild() to apply changes, plus baked-mesh helpers.
keywords:
  - infinite corrugated roof api
  - roof rebuild unity
  - procedural roof scripting
---

# API Reference

Every parameter is a public field on `InfiniteCorrugatedRoof`, so it can be changed from
code. After changing values, call `Rebuild()` to apply them.

## Public methods

| Member | Description |
| --- | --- |
| `void Rebuild()` | Regenerates all three LOD meshes from the current settings |
| `bool ShouldUseBakedMesh()` | `true` when a baked FBX is assigned and should be shown instead of procedural geometry |
| `bool TryApplyBakedMeshes()` | Applies the LOD meshes found in `bakedFbxAsset`; returns `false` if any LOD mesh is missing |
| `Mesh GetProceduralMesh(int lodIndex)` | Returns the generated mesh for a given LOD index (0–2) |

## Example

```csharp
var roof = GetComponent<InfiniteCorrugatedRoof>();
roof.columnCount = 6;
roof.rowCount = 3;
roof.randomSeed = 42;
roof.corrugationAmplitude = 0.05f;
roof.Rebuild();
```

## Commonly scripted fields

See the [Editor Guide](./editor-guide.md) for the full list. The fields you'll reach for
most from code:

| Field | Purpose |
| --- | --- |
| `columnCount`, `rowCount` | Grid size |
| `panelWidth`, `panelLength`, `verticalOverlap` | Panel dimensions & overlap |
| `wavesPerPanel`, `corrugationAmplitude`, `waveProfile` | Corrugation shape |
| `lengthSegmentsPerPanel`, `sheetThickness` | Mesh resolution & depth |
| `wearLevel`, `verticalTiling`, `verticalOffset`, `panelColorIndex` | Texture atlas mapping |
| `randomSeed` | Deterministic seed for all randomization |

:::tip Runtime changes need Rebuild()
The automatic live rebuild only runs in Edit Mode. In Play Mode, set your fields and then
call `roof.Rebuild()` once to apply them.
:::

---

*Next: [Advanced Features](./advanced-features.md)*
