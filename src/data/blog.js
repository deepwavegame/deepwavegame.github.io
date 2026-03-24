import React from 'react';
import Translate from '@docusaurus/Translate';

const blogPosts = [
  // --- ENGINEERING (Unity/Shader/Tech) ---
  {
    id: 1,
    title: <Translate id="blog.post1.title">Advanced Vertex Displacement for Flesh & Gore</Translate>,
    description: <Translate id="blog.post1.desc">Creating dynamic, squishy surfaces using Shader Graph and URP for visceral horror effects.</Translate>,
    tag: 'ENGINEERING',
    date: '2026-03-24',
    thumbnail: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800&q=80',
    link: '/news/advanced-vertex-displacement-flesh-gore'
  },
  {
    id: 2,
    title: <Translate id="blog.post2.title">Volumetric Fog in URP: A Deep Dive</Translate>,
    description: <Translate id="blog.post2.desc">Optimizing atmospheric scattering for that perfect misty horror ambiance without killing performance.</Translate>,
    tag: 'ENGINEERING',
    date: '2026-03-20',
    thumbnail: 'https://images.unsplash.com/photo-1475139441338-693e7dbe20b6?auto=format&fit=crop&w=800&q=80',
    link: '/news/volumetric-fog-urp-deep-dive'
  },
  {
    id: 3,
    title: <Translate id="blog.post3.title">Binaural Audio: The Secret to True Fear</Translate>,
    description: <Translate id="blog.post3.desc">How to implement HRTF spatial audio in Unity to make players turn their heads in real life.</Translate>,
    tag: 'ENGINEERING',
    date: '2026-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: '/news/binaural-audio-secret-to-true-fear'
  },
  {
    id: 4,
    title: <Translate id="blog.post4.title">Custom Scriptable Render Features for Glitch Effects</Translate>,
    description: <Translate id="blog.post4.desc">Using the URP renderer to create production-grade digital corruption and sanity effects.</Translate>,
    tag: 'ENGINEERING',
    date: '2026-03-10',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    link: '/news/custom-scriptable-render-features-glitch-effects'
  },
  {
    id: 5,
    title: <Translate id="blog.post5.title">Compute Shaders for Large-Scale Horror Entities</Translate>,
    description: <Translate id="blog.post5.desc">Simulating thousands of swarming creatures with GPU-bound logic.</Translate>,
    tag: 'ENGINEERING',
    date: '2026-03-05',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: '/news/compute-shaders-large-scale-horror-entities'
  },

  // --- FIELD ANALYSIS (Real World Horror Games) ---
  {
    id: 6,
    title: <Translate id="blog.post6.title">Why "P.T." Still Haunts Level Designers</Translate>,
    description: <Translate id="blog.post6.desc">A technical breakdown of the looping corridor and how it mastered psychological loop-fatigue.</Translate>,
    tag: 'FIELD ANALYSIS',
    date: '2026-02-28',
    thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
    link: '/news/why-pt-still-haunts-level-designers'
  },
  {
    id: 7,
    title: <Translate id="blog.post7.title">The Resident Evil Camera: Fixed vs. Over-the-Shoulder</Translate>,
    description: <Translate id="blog.post7.desc">Analyzing how camera perspective dictates fear and player agency in horror history.</Translate>,
    tag: 'FIELD ANALYSIS',
    date: '2026-02-20',
    thumbnail: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=800&q=80',
    link: '/news/resident-evil-camera-fixed-vs-over-the-shoulder'
  },
  {
    id: 8,
    title: <Translate id="blog.post8.title">Subnautica: The Horror of the Unknown Depth</Translate>,
    description: <Translate id="blog.post8.desc">Examining thalassophobia and sound design as primary horror drivers in non-horror titles.</Translate>,
    tag: 'FIELD ANALYSIS',
    date: '2026-02-15',
    thumbnail: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80',
    link: '/news/subnautica-horror-unknown-depth'
  },
  {
    id: 9,
    title: <Translate id="blog.post9.title">Alien Isolation: Behavioral AI Breakdown</Translate>,
    description: <Translate id="blog.post9.desc">How Creative Assembly built the two-brain system for the Xenomorph's unscripted terror.</Translate>,
    tag: 'FIELD ANALYSIS',
    date: '2026-02-10',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    link: '/news/alien-isolation-behavioral-ai-breakdown'
  },
  {
    id: 10,
    title: <Translate id="blog.post10.title">The Sound of Silent Hill: Akira Yamaoka's Industrial Dread</Translate>,
    description: <Translate id="blog.post10.desc">Deconstructing the use of white noise and industrial samples to create discomfort.</Translate>,
    tag: 'FIELD ANALYSIS',
    date: '2026-02-01',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbdd4f1?auto=format&fit=crop&w=800&q=80',
    link: '/news/sound-of-silent-hill-akira-yamaoka-industrial-dread'
  },

  // --- STUDIO LOG (Wave0084 Internal) ---
  {
    id: 11,
    title: <Translate id="blog.post11.title">Transitioning to Unity 6: Wave0084 Strategy</Translate>,
    description: <Translate id="blog.post11.desc">Why we are moving our production pipeline to the latest Unity engine for "My Sister".</Translate>,
    tag: 'STUDIO LOG',
    date: '2026-01-25',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    link: '/news/transitioning-to-unity-6-wave0084-strategy'
  },
  {
    id: 12,
    title: <Translate id="blog.post12.title">Motion Capture on an Indie Budget</Translate>,
    description: <Translate id="blog.post12.desc">Using Rokoko and AI video tools to achieve realistic horror animations.</Translate>,
    tag: 'STUDIO LOG',
    date: '2026-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    link: '/news/motion-capture-on-indie-budget'
  },

  {
    id: 13,
    title: "Optimizing Ray-Traced Shadows for Low-End GPUs",
    description: "Techniques for hybrid rendering in HDRP to maintain 60FPS.",
    tag: 'ENGINEERING',
    date: '2026-01-05',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    link: '/news/optimizing-ray-traced-shadows-low-end-gpus'
  },
  {
    id: 14,
    title: "The Psychology of Jump Scares: Timing & Frequency",
    description: "Using biometric data to find the 'Goldilocks' zone of player fear.",
    tag: 'FIELD ANALYSIS',
    date: '2025-12-20',
    thumbnail: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
    link: '/news/psychology-of-jump-scares-timing-frequency'
  },
  {
    id: 15,
    title: "Creating 'Organic' Inventory Systems in C#",
    description: "Designing diagetic UIs like Dead Space for deep immersion.",
    tag: 'ENGINEERING',
    date: '2025-12-10',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    link: '/news/creating-organic-inventory-systems-csharp'
  },
  {
    id: 16,
    title: "Amnesia: The Dark Descent - Resource Scarcity Analysis",
    description: "How limited light sources create constant tension.",
    tag: 'FIELD ANALYSIS',
    date: '2025-11-25',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
    link: '/news/amnesia-resource-scarcity-analysis'
  },
  {
    id: 17,
    title: "Photogrammetry for Horror Environments",
    description: "Capturing real-world decay and bringing it into Unity.",
    tag: 'ENGINEERING',
    date: '2025-11-15',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    link: '/news/photogrammetry-horror-environments'
  },
  {
    id: 18,
    title: "Outlast: The Night Vision Aesthetic Breakdown",
    description: "Post-processing secrets of the iconic green-tinted fear.",
    tag: 'FIELD ANALYSIS',
    date: '2025-11-05',
    thumbnail: 'https://images.unsplash.com/photo-1500462859194-885d16244837?auto=format&fit=crop&w=800&q=80',
    link: '/news/outlast-night-vision-aesthetic-breakdown'
  },
  {
    id: 19,
    title: "Wave0084 Studio: Year in Review 2025",
    description: "Milestones, failures, and the path to 2026.",
    tag: 'STUDIO LOG',
    date: '2025-12-31',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    link: '/news/wave0084-studio-year-in-review-2025'
  },
  {
    id: 20,
    title: "Advanced Decal Systems for Bloody Footprints",
    description: "Optimizing thousands of dynamic decals in Unity.",
    tag: 'ENGINEERING',
    date: '2025-10-25',
    thumbnail: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80',
    link: '/news/advanced-decal-systems-bloody-footprints'
  },
  {
    id: 21,
    title: "Phasmophobia: The Power of Voice Recognition",
    description: "How interacting with ghosts through speech changed indie horror.",
    tag: 'FIELD ANALYSIS',
    date: '2025-10-15',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbdd4f1?auto=format&fit=crop&w=800&q=80',
    link: '/news/phasmophobia-power-voice-recognition'
  },
  {
    id: 22,
    title: "Procedural Interior Generation for Infinite Horrors",
    description: "Building a dungeon crawler with scary, believable layouts.",
    tag: 'ENGINEERING',
    date: '2025-10-05',
    thumbnail: 'https://images.unsplash.com/photo-1481016570479-9ebb633d13ec?auto=format&fit=crop&w=800&q=80',
    link: '/news/procedural-interior-generation-infinite-horrors'
  },
  {
    id: 23,
    title: "The Blair Witch Project: Found Footage in Games",
    description: "Adapting cinematic tropes to interactive media.",
    tag: 'FIELD ANALYSIS',
    date: '2025-09-25',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    link: '/news/blair-witch-project-found-footage-games'
  },
  {
    id: 24,
    title: "Building a Sanity System: Coding Eternal Darkness",
    description: "C# architectures for gradual player character degradation.",
    tag: 'ENGINEERING',
    date: '2025-09-15',
    thumbnail: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80',
    link: '/news/building-sanity-system-coding-eternal-darkness'
  },
  {
    id: 25,
    title: "F.E.A.R. AI: Still Unbeatable in 2026?",
    description: "A deep dive into GOAP (Goal Oriented Action Planning).",
    tag: 'FIELD ANALYSIS',
    date: '2025-09-01',
    thumbnail: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80',
    link: '/news/fear-ai-still-unbeatable-2026'
  }
];

export default blogPosts;
