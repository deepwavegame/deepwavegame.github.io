---
title: "Custom Scriptable Render Features for Glitch Effects"
description: "Using the URP renderer to create production-grade digital corruption and sanity effects."
date: 2026-03-10
slug: custom-scriptable-render-features-glitch-effects
authors: [yangshun]
tags: [ENGINEERING]
---

![Glitch Effects](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80)

## Disrupting Reality

The "glitch" aesthetic has become synonymous with psychological horror and tech-noir. Whether it's the screen tearing of a found-footage camera or the visual degradation of a character losing their mind, these effects need to be more than just a simple overlay. To achieve high-performance, high-fidelity glitching in Unity's Universal Render Pipeline (URP), we must leverage **Scriptable Render Features**.

### Why Not Just Post-Processing?

While Unity's Post-Processing Stack is powerful, it can be restrictive when you need to inject custom logic into specific parts of the rendering pipeline. Scriptable Render Features allow us to:
- Draw specific objects with custom shaders.
- Create multiple passes with intermediate textures.
- Execute logic before or after specific URP events (e.g., After Transparent, Before Post-Processing).

### Building the Glitch Pass

A convincing digital glitch usually consists of three core components:
1.  **Chromatic Aberration**: Splitting the RGB channels. In a glitch, this should be jittery and non-uniform.
2.  **Block Displacement**: Shifting random rectangular segments of the screen horizontally.
3.  **Scanline Interferences**: Adding subtle horizontal lines and "static" noise.

In our custom `ScriptableRenderPass`, we grab the `cameraColorTarget`, blit it to a temporary render texture using our "Glitch Shader," and then blit it back.

```csharp
public override void Execute(ScriptableRenderContext context, ref RenderingData renderingData)
{
    CommandBuffer cmd = CommandBufferPool.Get("GlitchPass");
    // Execution logic here...
    context.ExecuteCommandBuffer(cmd);
    CommandBufferPool.Release(cmd);
}
```

### Driving the Sanity Meter

The beauty of a custom Render Feature is how easily it can be tied to gameplay systems. By exposing a `glitchIntensity` parameter in the Render Feature, we can drive it from a "Sanity" or "Corruption" script in C#. As the player's sanity drops, we increase the frequency and amplitude of the block displacement and the severity of the chromatic aberration.

By using a `ComputeBuffer` or a simple `GlobalFloat`, we can update these values once per frame on the GPU, ensuring that even the most chaotic visual meltdowns don't impact our CPU performance. This allows for a seamless transition from a clear image to a fractured, terrifying reality.
