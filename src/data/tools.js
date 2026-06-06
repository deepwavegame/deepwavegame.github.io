import React from 'react';
import Translate from '@docusaurus/Translate';

export const TOOL_TYPES = {
  UNITY_PACKAGE: 'UNITY PACKAGE',
  BLENDER_ADDON: 'BLENDER ADDON',
};

const tools = [
  {
    id: 'infinite-corrugated-roof',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Infinite Corrugated Roof',
    tagline: <Translate id="tools.infinite-corrugated-roof.tagline">High-performance procedural roofing system for Unity.</Translate>,
    description: <Translate id="tools.infinite-corrugated-roof.description">Generate highly customizable, production-ready corrugated roofs with spline deformation, procedural noise, and multi-LOD support.</Translate>,
    thumbnail: '/img/products/tools/infinite-corrugated-roof/Dd6Gwv.jpg',
    links: {
      page: '/tools/infinite-corrugated-roof',
      assetStore: 'https://assetstore.unity.com/packages/slug/357650',
      itch: 'https://deepwave.itch.io/unity-smart-sheet-procedural-corrugated-sheet-fence-builde',
      docs: '/docs/tools/infinite-corrugated-roof/intro',
    },
    specs: {
      price: '$15.69',
      version: 'v1.2.0',
      size: '2.5 MB',
      requirement: 'Unity 2021.3+',
    },
    isUnderDevelopment: false,
    blogTag: 'infinite-corrugated-roof',
    features: [
      {
        title: <Translate id="tools.infinite-corrugated-roof.f1.t">Spline Deformation</Translate>,
        description: <Translate id="tools.infinite-corrugated-roof.f1.d">Bend and shape roofs along complex paths using Unity Splines.</Translate>,
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f2.t">Procedural Noise</Translate>,
        description: <Translate id="tools.infinite-corrugated-roof.f2.d">Add realistic surface imperfections and weathering effects.</Translate>,
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f3.t">Multi-LOD System</Translate>,
        description: <Translate id="tools.infinite-corrugated-roof.f3.d">Optimized for performance with built-in 3-level LOD and FBX baking.</Translate>,
      },
    ],
  },
  {
    id: 'simple-painter',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Simple Painter',
    tagline: <Translate id="tools.simple-painter.tagline">GPU-accelerated runtime paint system for Unity.</Translate>,
    description: <Translate id="tools.simple-painter.description">A professional paint engine featuring real-time fluid simulation, multi-channel PBR painting, and zero-allocation GPU command pipeline.</Translate>,
    thumbnail: '/img/products/tools/simple-painter/thumbnail.jpg',
    links: {
      page: '/tools/simple-painter',
      assetStore: 'https://assetstore.unity.com/packages/slug/example-2',
      itch: 'https://deepwavegame.itch.io/simple-painter',
      docs: '/docs/tools/simple-painter/intro',
    },
    specs: {
      price: '$15.00',
      version: 'v1.0.0',
      size: '3.5 MB',
      requirement: 'Unity 2021.3 LTS+',
    },
    isUnderDevelopment: false,
    blogTag: 'simple-painter',
    features: [
      {
        title: <Translate id="tools.simple-painter.f1.t">GPU Command Pipeline</Translate>,
        description: <Translate id="tools.simple-painter.f1.d">Singleton PaintEngine batches all GPU commands into a single CommandBuffer for maximum performance.</Translate>,
      },
      {
        title: <Translate id="tools.simple-painter.f2.t">Real-time Fluid Simulation</Translate>,
        description: <Translate id="tools.simple-painter.f2.d">Three tiers of GPU fluid physics: FluidShallow, FluidViscous, and FluidParticle (MLS-MPM).</Translate>,
      },
      {
        title: <Translate id="tools.simple-painter.f3.t">Multi-Channel PBR</Translate>,
        description: <Translate id="tools.simple-painter.f3.d">Paint Albedo, Normal, Metallic, and Roughness simultaneously with per-layer blend modes.</Translate>,
      },
    ],
  },
  {
    id: 'blender-horror-exporter',
    type: TOOL_TYPES.BLENDER_ADDON,
    title: 'Horror Asset Exporter',
    tagline: <Translate id="tools.horror-exporter.tagline">Automated pipeline for exporting horror-ready assets from Blender.</Translate>,
    description: <Translate id="tools.horror-exporter.description">One-click export with optimized LODs, material assignments, and collider generation for Unity/Unreal.</Translate>,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    links: {
      page: '/tools/blender-horror-exporter',
      blenderMarket: 'https://blendermarket.com/products/example',
      itch: 'https://deepwavegame.itch.io/horror-exporter',
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
