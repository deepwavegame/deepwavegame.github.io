---
title: "Motion Capture on an Indie Budget"
description: "Using Rokoko and AI video tools to achieve realistic horror animations."
date: 2026-01-15
slug: motion-capture-on-indie-budget
authors: [hoangnguyen]
tags: [studio-log, tech-art]
---

![Motion Capture](https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80)

## Bringing Humanity to the Horrific

In the past, high-quality motion capture (mocap) was a luxury reserved for AAA studios with massive optical rigs. For an indie studio like Wave0084, animating complex human movements—especially the jittery, unnatural movements required for horror—by hand is an enormous time sink. Fortunately, the rise of "budget" mocap solutions has leveled the playing field.

### The Rokoko Advantage

Our primary tool for *Lil Sis* has been the **Rokoko Smartsuit Pro II**. Unlike optical systems that require cameras and specialized spaces, the Rokoko suit uses inertial sensors (IMUs). This allows us to capture animations anywhere—even in our cramped studio office.

The beauty of inertial mocap is the speed of iteration. We can act out a scene, record it, and retarget it to our character model in minutes. This allows our actors to experiment with the "shaky" and "contorted" movements that make our creatures so unsettling.

### Augmenting with AI

While IMU suits are great for body movement, they struggle with fine detail like fingers and facial expressions. To fill these gaps, we've integrated AI-based video analysis tools like **Radical AI** and **Move.ai**.

By filming a reference video alongside the mocap data, we can use these AI tools to extract finger movements and subtle head tilts that the suit might miss. For facial capture, we use the **Apple ARKit** via a standard iPhone, which provides surprisingly high-fidelity blendshape data that maps directly onto our characters in Unity.

### Post-Processing the Performance

Mocap is rarely "plug and play." The data often requires cleaning to remove foot sliding or jitters. We use **Autodesk MotionBuilder** and Unity's **Animation Rigging** package to:
1.  **IK Pass**: Ensure feet stay firmly planted on the ground.
2.  **Layered Animation**: Add hand-keyed flourishes on top of the mocap data to emphasize specific "scary" movements.

By combining these budget-friendly tools, we've been able to achieve a level of animation fidelity that previously would have cost hundreds of thousands of dollars. It's a testament to the "indie-fication" of high-end tech.

