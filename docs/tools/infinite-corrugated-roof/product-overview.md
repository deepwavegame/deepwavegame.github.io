# Overview:


## Summary
Infinite Corrugated Roof is a professional-grade procedural tool for Unity designed to generate highly customizable, high-performance corrugated roofing and fencing systems. Ideal for industrial, residential, or post-apocalyptic environments, this tool automates the creation of complex geometry while maintaining optimal performance.

## Description
The Infinite Corrugated Roof (ICR) package provides an intuitive, spline-based workflow to create realistic corrugated surfaces in seconds. Built on a clean, SOLID-based architecture, ICR allows artists to focus on design while the system handles geometry calculation, UV mapping, and LOD management.

Whether you are building a vast industrial warehouse or a small weathered shed, ICR offers the flexibility to customize every aspect of your roof—from wave profiles to structural weathering. The integrated modifier system includes spline deformation for curved surfaces and procedural noise for realistic surface imperfections.

- [Documentation](./intro.md) (Available)
- [Demo](#) (Under Development)

### Key Workflow Advantages:
- Artistic Control: Intuitive scene-view handles and real-time parameter updates.
- Performance: Native-level speed in geometry calculation with zero garbage collection (GC) at runtime.
- Optimization: Built-in multi-level LOD system and automated FBX baking tools.

## Technical Details

### Procedural Features:
- Grid-Based Generation: Scalable panel system for any roof size.
- Dynamic Profiles: Customize corrugation shapes using standard AnimationCurves.
- Spline Deformation: Bend and shape geometry along complex paths using the Unity Splines package.
- Global Coordinate Cutting: Define precise edges and cutouts without destructive mesh editing.

### Modifiers & Effects:
- Procedural Noise: Add realistic dents, weathering, and surface variations.
- Smart UV Mapping: Automatic tileable UVs optimized for PBR materials.
- Integrated Vertex Colors: Pre-computed data for advanced shader effects like rust and moss.

### Optimization & Export:
- Multi-LOD Support: Automated generation of 3 LOD levels (High, Mid, Low).
- FBX Baker: One-click export of procedural geometry to standard FBX assets for external optimization or static batching.
- SRP Compatibility: Supports Built-in Render Pipeline, URP, and HDRP.

### Requirements:
- Unity 2021.3 LTS or higher.
- Unity Splines package (optional, for spline-based deformation).
- No external dependencies or DLLs required.
