---
title: "Building a Sanity System: Coding Eternal Darkness"
description: "C# architectures for gradual player character degradation."
date: 2025-09-15
slug: building-sanity-system-coding-eternal-darkness
authors: [yangshun]
tags: [ENGINEERING]
---

![Sanity System](https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=1200&q=80)

## Attacking the Player, Not the Character

In 2002, *Eternal Darkness: Sanity's Requiem* introduced "Sanity Effects" that didn't just affect the character—they targeted the player. From "deleting" save files to muting the TV, these meta-scares are legendary. Building a modern equivalent in C# for Unity requires a robust, modular architecture that can handle a wide variety of "hallucinations."

### The Sanity Controller

The core of the system is a centralized `SanityManager`. This class tracks a normalized value from 0 to 1 and fires events as the player crosses certain thresholds.

```csharp
public class SanityManager : MonoBehaviour {
    public float Sanity { get; private set; }
    public UnityEvent<SanityLevel> OnSanityTierChanged;

    public void ModifySanity(float amount) {
        Sanity = Mathf.Clamp01(Sanity + amount);
        // Tier checking logic...
    }
}
```

### Modular Hallucinations

We don't want the `SanityManager` to know about every possible effect. Instead, we use a **Command Pattern** or a **ScriptableObject-based Effect System**.

1.  **Visual Hallucinations**: These are driven by Post-Processing. As sanity drops, we increase the intensity of a "Lens Distortion" or "Color Shift."
2.  **Auditory Hallucinations**: Using our Binaural audio system, we play "phantom sounds" (whispers, footsteps) behind the player that have no physical source in the world.
3.  **Mechanical Hallucinations**: These are the "meta" scares. In Unity, this might involve subtly changing the player's movement speed, reversing their input for a split second, or showing a "fake" loading screen.

### The Risk of Frustration

The golden rule of Sanity Systems is: **Never break the game.** A sanity effect that causes a real crash or a real loss of progress is a bug, not a feature. The goal is to make the player *think* the game is breaking.

For *My Sister*, we've refined this by ensuring that all sanity effects are strictly visual or auditory. We want to gaslight the player's senses, not their patience. By building a system where "hallucinations" are just another layer of the rendering and audio stack, we can create a deep, unsettling experience that feels like the world itself is coming apart at the seams.
