---
title: "Transitioning to Unity 6: Wave0084 Strategy"
description: "Why we are moving our production pipeline to the latest Unity engine for \"My Sister\"."
date: 2026-01-25
slug: transitioning-to-unity-6-wave0084-strategy
authors: [hoangnguyen]
tags: [studio-log, unity]
---

![Unity 6](https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80)

## Embracing the Future of Indie Horror

At Wave0084, we've always been cautious about engine updates mid-production. However, the release of Unity 6 has brought a suite of features that are simply too impactful to ignore for our upcoming title, *My Sister*. This post outlines our technical rationale and the strategy we're employing to ensure a smooth transition.

### Performance: The Core Driver

The primary reason for our jump to Unity 6 is the significant improvement in the **Universal Render Pipeline (URP)**. Specifically, the introduction of **GPU Resident Drawer** and **Spatial Temporal Post-Processing (STP)** allows us to push much higher visual fidelity on target hardware like the Steam Deck and mid-range laptops.

For *My Sister*, which relies heavily on dense environmental detail and complex lighting, the GPU Resident Drawer significantly reduces our CPU-side draw call overhead. This allows us to allocate more CPU cycles to our advanced AI systems without sacrificing frame rate.

### Graphics and Lighting

Unity 6's enhancements to **Adaptive Probe Volumes (APV)** are a game-changer for horror. Achieving realistic, moody lighting in dynamic environments has always been a struggle. APV allows for much faster iteration times and better light leakage prevention, which is crucial for maintaining the "darkness" that defines our aesthetic.

We are also leveraging the new **Render Graph** API. This gives our technical artists granular control over the rendering pipeline, allowing us to implement the "Sanity Glitch" effects (discussed in a previous post) more efficiently and with less boilerplate code.

### The Migration Strategy

A transition like this is never without risk. Our strategy involves:
1.  **Isolated Branching**: The engine upgrade is handled in a dedicated Git branch, separate from the main production line.
2.  **Asset Audit**: Every shader and custom render feature is being audited for compatibility with the new Render Graph.
3.  **Automated Testing**: We've expanded our suite of smoke tests to verify that lighting and physics remain consistent across the version jump.

Transitioning to Unity 6 is an investment in the longevity and quality of *My Sister*. It allows us to build on a more stable, performant foundation, ensuring that players have the best possible experience when the game launches.
