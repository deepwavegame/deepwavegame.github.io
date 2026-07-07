import React from 'react';
import Translate from '@docusaurus/Translate';
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
    tagline: (
      <Translate id="tools.infinite-corrugated-roof.tagline">
        Procedural corrugated metal roofs for Unity.
      </Translate>
    ),
    description: (
      <Translate id="tools.infinite-corrugated-roof.description">
        Generate production-ready corrugated metal roofs from a single component — live-edited panels, animation-curve wave profiles, Perlin weathering, optional spline deformation, an automatic 3-level LOD system and one-click FBX baking.
      </Translate>
    ),
    thumbnail: '/img/products/tools/infinite-corrugated-roof/Dd6Gwv.jpg',
    links: {
      page: '/tools/infinite-corrugated-roof',
      assetStore: STORE.infiniteCorrugatedRoof,
      itch: ITCH.infiniteCorrugatedRoof,
      docs: '/docs/tools/infinite-corrugated-roof/intro',
    },
    specs: {
      price: '$12.69',
      version: 'v1.0.1',
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
    blogTag: 'infinite-corrugated-roof',
    features: [
      {
        title: <Translate id="tools.infinite-corrugated-roof.f1.t">Live Panel Generation</Translate>,
        description: (
          <Translate id="tools.infinite-corrugated-roof.f1.d">
            Size the roof with a grid of overlapping panels — every field rebuilds the mesh instantly in the Editor, with zero GC pressure between edits.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f2.t">Curve-Driven Wave Profiles</Translate>,
        description: (
          <Translate id="tools.infinite-corrugated-roof.f2.d">
            Shape the corrugation cross-section with any AnimationCurve — round, trapezoidal or asymmetric — plus Perlin surface noise for believable weathering.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f3.t">Spline Deformation</Translate>,
        description: (
          <Translate id="tools.infinite-corrugated-roof.f3.d">
            Bend the roof along a SplineContainer with three modes — smooth deform, flat-per-panel, or rigid chain-follow (optional Unity Splines package).
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f4.t">LOD System & FBX Baking</Translate>,
        description: (
          <Translate id="tools.infinite-corrugated-roof.f4.d">
            An automatic 3-level LODGroup keeps distant roofs cheap, and one-click FBX baking ships a static, deterministic mesh for final builds.
          </Translate>
        ),
      },
    ],
  },
  {
    id: 'simple-painter',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Simple Painter',
    tagline: (
      <Translate id="tools.simple-painter.tagline">
        Runtime 3D texture-painting toolkit for Unity.
      </Translate>
    ),
    description: (
      <Translate id="tools.simple-painter.description">
        Listed on the Asset Store as Simple Paint 3D, this modular toolkit paints directly onto meshes at runtime — multi-channel PBR painting, Photoshop-style layers, six stroke methods, five input devices and an optional physically-simulated fluid-paint mode.
      </Translate>
    ),
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
      price: '$37.65',
      version: 'v0.1.0',
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
    blogTag: 'simple-painter',
    features: [
      {
        title: <Translate id="tools.simple-painter.f1.t">Multi-Channel PBR Painting</Translate>,
        description: (
          <Translate id="tools.simple-painter.f1.d">
            Paint Color, Scalar (metallic, smoothness, AO…) and Normal channels independently — each bound to any shader property you define.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.simple-painter.f2.t">Photoshop-Style Layers</Translate>,
        description: (
          <Translate id="tools.simple-painter.f2.d">
            Every channel holds its own stack of layers with visibility, opacity, a starting texture and a blend mode matched to its data type.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.simple-painter.f3.t">Five Input Devices</Translate>,
        description: (
          <Translate id="tools.simple-painter.f3.d">
            Mouse, pressure-sensitive Pen, Touch, physics Collision impacts and Particle collisions all feed the same stroke pipeline.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.simple-painter.f4.t">Six Stroke Methods</Translate>,
        description: (
          <Translate id="tools.simple-painter.f4.d">
            Direct freehand, Dot, live Drag Dot, rubber-band Line, smoothed Bezier curves and a resizable Anchored decal — all hot-swappable at runtime.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.simple-painter.f5.t">Physically-Simulated Fluid Paint</Translate>,
        description: (
          <Translate id="tools.simple-painter.f5.d">
            An optional viscous committer adds real adhesion, viscosity, cohesive pressure, gravity flow and evaporation to wet paint.
          </Translate>
        ),
      },
      {
        title: <Translate id="tools.simple-painter.f6.t">Automatic UV Seam Fixing</Translate>,
        description: (
          <Translate id="tools.simple-painter.f6.d">
            A geometric analyzer stitches disconnected UV islands so strokes never show a gap or hard edge at a seam — even on skinned characters.
          </Translate>
        ),
      },
    ],
  },
  {
    id: 'blender-horror-exporter',
    type: TOOL_TYPES.BLENDER_ADDON,
    title: 'Horror Asset Exporter',
    tagline: (
      <Translate id="tools.horror-exporter.tagline">
        Automated pipeline for exporting horror-ready assets from Blender.
      </Translate>
    ),
    description: (
      <Translate id="tools.horror-exporter.description">
        One-click export with optimized LODs, material assignments, and collider generation for Unity/Unreal.
      </Translate>
    ),
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
    blogTag: 'horror-exporter',
    features: [
      {
        title: <Translate id="tools.horror-exporter.f1.t">Auto-LOD</Translate>,
        description: <Translate id="tools.horror-exporter.f1.d">Generate optimized mesh levels automatically.</Translate>,
      },
      {
        title: <Translate id="tools.horror-exporter.f2.t">PBR Mapping</Translate>,
        description: <Translate id="tools.horror-exporter.f2.d">One-click material conversion for HDRP/URP.</Translate>,
      },
    ],
  },
];

export default tools;

export const getTool = (id) => tools.find((t) => t.id === id);
