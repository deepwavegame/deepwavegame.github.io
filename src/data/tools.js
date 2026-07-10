import React from 'react';
import { STORE, ITCH } from '@site/src/lib/brands';

export const TOOL_TYPES = {
  UNITY_PACKAGE: 'UNITY PACKAGE',
  BLENDER_ADDON: 'BLENDER ADDON',
};

const tools = [
  {
    id: 'infinite-corrugated-roof',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Infinite Corrugated Roof',
    tagline: 'Procedural corrugated metal roofs for Unity.',
    description:
      'Generate production-ready corrugated metal roofs from a single component — live-edited panels, animation-curve wave profiles, Perlin weathering, optional spline deformation, an automatic 3-level LOD system and one-click FBX baking.',
    thumbnail: '/img/products/tools/infinite-corrugated-roof/Dd6Gwv.jpg',
    links: {
      page: '/tools/infinite-corrugated-roof',
      assetStore: STORE.infiniteCorrugatedRoof,
      itch: ITCH.infiniteCorrugatedRoof,
      docs: '/docs/tools/infinite-corrugated-roof/intro',
    },
    specs: {
      price: '$12.69',
      version: 'v1.1.0',
      size: '68.9 MB',
      requirement: 'Unity 2021.3+',
    },
    seo: {
      canonical: STORE.infiniteCorrugatedRoof,
      description:
        'Infinite Corrugated Roof generates production-ready corrugated metal roofs in Unity — live-edited panels, animation-curve wave profiles, Perlin weathering, spline deformation, an automatic 3-level LOD system and one-click FBX baking. Built-in, URP & HDRP.',
      keywords:
        'unity corrugated roof, procedural roof unity, metal sheet generator, industrial roof asset, corrugated metal, LOD roof, spline roof, fence builder, unity environment tool, deepwave',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Live Panel Generation',
        description:
          'Size the roof with a grid of overlapping panels — every field rebuilds the mesh instantly in the Editor, with zero GC pressure between edits.',
      },
      {
        title: 'Curve-Driven Wave Profiles',
        description:
          'Shape the corrugation cross-section with any AnimationCurve — round, trapezoidal or asymmetric — plus Perlin surface noise for believable weathering.',
      },
      {
        title: 'Spline Deformation',
        description:
          'Bend the roof along a SplineContainer with three modes — smooth deform, flat-per-panel, or rigid chain-follow (optional Unity Splines package).',
      },
      {
        title: 'LOD System & FBX Baking',
        description:
          'An automatic 3-level LODGroup keeps distant roofs cheap, and one-click FBX baking ships a static, deterministic mesh for final builds.',
      },
    ],
  },
  {
    id: 'simple-painter',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Simple Painter',
    tagline: 'Runtime 3D texture-painting toolkit for Unity.',
    description:
      'Listed on the Asset Store as Simple Paint 3D, this modular toolkit paints directly onto meshes at runtime — multi-channel PBR painting, Photoshop-style layers, six stroke methods, five input devices and an optional physically-simulated fluid-paint mode.',
    thumbnail: '/img/products/tools/simple-painter/thumbnail.jpg',
    links: {
      page: '/tools/simple-painter',
      assetStore: STORE.simplePainter,
      docs: '/docs/tools/simple-painter/intro',
      demos: [
        { label: 'PLAY DEMO 1', href: ITCH.simplePainterDemo },
        { label: 'PLAY DEMO 2', href: ITCH.simplePainterDemo2 },
      ],
    },
    specs: {
      price: '$47.65',
      version: 'v0.1.1',
      size: '87.4 MB',
      requirement: 'Unity 2021.3+',
    },
    seo: {
      canonical: STORE.simplePainter,
      description:
        'Simple Painter (Simple Paint 3D) is a runtime 3D texture-painting toolkit for Unity: multi-channel PBR painting, Photoshop-style layers, six stroke methods, five input devices and physically-simulated fluid paint. Built-in, URP & HDRP.',
      keywords:
        'unity texture painting, runtime paint tool unity, 3d texture painting unity, simple paint 3d, PBR channel painting, unity fluid paint, uv seam fix unity, unity decal paint, paint on skinned mesh, deepwave simple painter',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Multi-Channel PBR Painting',
        description:
          'Paint Color, Scalar (metallic, smoothness, AO…) and Normal channels independently — each bound to any shader property you define.',
      },
      {
        title: 'Photoshop-Style Layers',
        description:
          'Every channel holds its own stack of layers with visibility, opacity, a starting texture and a blend mode matched to its data type.',
      },
      {
        title: 'Five Input Devices',
        description:
          'Mouse, pressure-sensitive Pen, Touch, physics Collision impacts and Particle collisions all feed the same stroke pipeline.',
      },
      {
        title: 'Six Stroke Methods',
        description:
          'Direct freehand, Dot, live Drag Dot, rubber-band Line, smoothed Bezier curves and a resizable Anchored decal — all hot-swappable at runtime.',
      },
      {
        title: 'Physically-Simulated Fluid Paint',
        description:
          'An optional viscous committer adds real adhesion, viscosity, cohesive pressure, gravity flow and evaporation to wet paint.',
      },
      {
        title: 'Automatic UV Seam Fixing',
        description:
          'A geometric analyzer stitches disconnected UV islands so strokes never show a gap or hard edge at a seam — even on skinned characters.',
      },
    ],
  },
  {
    id: 'retro-os',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Retro OS',
    tagline: 'Windows 95-style in-game operating system for Unity.',
    description:
      'A data-driven in-game OS you drop into any Unity project: desktop, draggable windows, a Start menu, a login screen, a virtual file system, a working terminal, mail, CCTV monitors, a retro web browser and a synthesized-sound audio module. Programs are ScriptableObject assets you drag into one profile, and every interaction raises a game event that can drive your story.',
    thumbnail: null,
    links: {
      page: '/tools/retro-os',
      docs: '/docs/tools/retro-os/intro',
    },
    specs: {
      price: '$15.65',
      version: 'v0.2.0',
      requirement: 'Unity 2021.3+',
    },
    seo: {
      description:
        'Retro OS is a data-driven Windows 95-style in-game OS for Unity: desktop, windows, terminal, virtual file system, CCTV, mail, a retro browser and a game-event pipeline that drives your story.',
      keywords:
        'unity retro os, windows 95 unity, in-game computer unity, fake os unity asset, unity terminal simulator, unity cctv camera system, found footage horror unity, unity desktop simulator, unity virtual file system, deepwave retro os, wave0084',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Draggable Window Manager',
        description:
          'A full desktop shell — draggable/resizable windows, taskbar, Start menu and a login screen, all data-driven from ScriptableObject profiles.',
      },
      {
        title: 'Working Terminal & Virtual File System',
        description:
          'Eight real commands (help, ls, cd, cat, open, pwd, clear, decrypt) over a file tree you author entirely as assets.',
      },
      {
        title: 'CCTV, Mail & Browser Apps',
        description:
          'Live camera feeds with a 48-frame in-engine DVR rewind, an inbox and a retro browser — every interaction can raise a game event to drive your story.',
      },
      {
        title: 'Zero Audio or Image Assets',
        description:
          'Nine UI sounds synthesized at runtime and thirteen desktop icons drawn procedurally — nothing to import, nothing to license.',
      },
    ],
  },
  {
    id: 'dynamic-target-framer',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Dynamic Target Framer',
    tagline: 'Pixel-tight UI framing for whatever the player is looking at.',
    description:
      'Puts a clean, dynamic bounding box on screen around whatever 3D object the player is aiming at. The frame is built from the object’s real mesh or MeshCollider vertices, not a loose world-space box, so it stays as tight as possible from every camera angle. The Runtime only measures and publishes the result as data — how it’s drawn is entirely up to you, with a drop-in reference view included.',
    thumbnail: null,
    links: {
      page: '/tools/dynamic-target-framer',
      docs: '/docs/tools/dynamic-target-framer/intro',
    },
    specs: {
      price: '$5.69',
      version: 'v1.0.0',
      size: '0.3 MB',
      requirement: 'Unity 6000.0+',
    },
    seo: {
      description:
        'Dynamic Target Framer draws a pixel-tight UI frame around any 3D object on screen. Mesh-accurate, allocation-free, and presentation-agnostic — the Runtime only publishes screen-space frame data, so you can wire in your own look on Built-in, URP or HDRP.',
      keywords:
        'unity target framer, unity bounding box ui, look at highlight unity, unity selection frame, unity interaction prompt, mesh accurate bounding box, unity crosshair target, unity ui frame object, allocation free unity ui, deepwave dynamic target framer',
    },
    isUnderDevelopment: false,
    features: [
      {
        title: 'Mesh-Accurate Fit',
        description:
          'Projects the target’s real mesh or MeshCollider vertices to screen space — not a loose world-space AABB — so the frame hugs the silhouette from every angle.',
      },
      {
        title: 'Presentation-Agnostic Core',
        description:
          'The Runtime component only measures and publishes a TargetFrame (a screen-space rectangle). It never references uGUI, so any renderer — yours or ours — can consume it.',
      },
      {
        title: 'Drop-In Reference View',
        description:
          'The included TargetFrameView sample reproduces padding, smoothing and idle states in one component — copy it as a starting point for your own look.',
      },
      {
        title: 'Zero Steady-State GC',
        description:
          'Mesh vertices are cached once per mesh and the box is only recalculated when the camera or target actually moves — built for low-end and mobile.',
      },
    ],
  },
  {
    id: 'blender-horror-exporter',
    type: TOOL_TYPES.BLENDER_ADDON,
    title: 'Horror Asset Exporter',
    tagline: 'Automated pipeline for exporting horror-ready assets from Blender.',
    description:
      'One-click export with optimized LODs, material assignments, and collider generation for Unity/Unreal.',
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    links: {
      page: '/tools/blender-horror-exporter',
      blenderMarket: 'https://blendermarket.com/products/example',
      itch: 'https://deepwave.itch.io/horror-exporter',
      docs: '#',
    },
    specs: {
      price: '$19.00',
      version: 'v1.0.5',
      size: '0.5 MB',
      requirement: 'Blender 3.6 - 4.1',
    },
    isUnderDevelopment: true,
    features: [
      {
        title: 'Auto-LOD',
        description: 'Generate optimized mesh levels automatically.',
      },
      {
        title: 'PBR Mapping',
        description: 'One-click material conversion for HDRP/URP.',
      },
    ],
  },
];

export default tools;

export const getTool = (id) => tools.find((t) => t.id === id);
