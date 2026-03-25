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
        desc: <Translate id="tools.infinite-corrugated-roof.f1.d">Bend and shape roofs along complex paths using Unity Splines.</Translate>
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f2.t">Procedural Noise</Translate>,
        desc: <Translate id="tools.infinite-corrugated-roof.f2.d">Add realistic surface imperfections and weathering effects.</Translate>
      },
      {
        title: <Translate id="tools.infinite-corrugated-roof.f3.t">Multi-LOD System</Translate>,
        desc: <Translate id="tools.infinite-corrugated-roof.f3.d">Optimized for performance with built-in 3-level LOD and FBX baking.</Translate>
      },
    ]
  },
  {
    id: 'simple-paint',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Simple Paint',
    tagline: <Translate id="tools.simple-paint.tagline">Lightweight 2D painting system for Unity projects.</Translate>,
    description: <Translate id="tools.simple-paint.description">Perfect for prototyping and in-game drawing mechanics with high performance GPU shaders.</Translate>,
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    links: {
      page: '/tools/simple-paint',
      assetStore: 'https://assetstore.unity.com/packages/slug/example-2',
      itch: 'https://deepwavegame.itch.io/simple-paint',
      docs: '/docs/tools/simple-paint/intro',
    },
    specs: {
      price: '$15.00',
      version: 'v2.0.1',
      size: '1.2 MB',
      requirement: 'Unity 2020.3 LTS+',
    },
    isUnderDevelopment: true,
    blogTag: 'simple-paint',
    features: [
      {
        title: <Translate id="tools.simple-paint.f1.t">GPU Acceleration</Translate>,
        desc: <Translate id="tools.simple-paint.f1.d">Smooth painting even on mobile devices.</Translate>
      },
      {
        title: <Translate id="tools.simple-paint.f2.t">Custom Brushes</Translate>,
        desc: <Translate id="tools.simple-paint.f2.d">Support for texture-based brush stamps.</Translate>
      },
    ]
  },
  {
    id: 'blender-horror-exporter',
    type: TOOL_TYPES.BLENDER_ADDON,
    title: 'Horror Asset Exporter',
    tagline: <Translate id="tools.horror-exporter.tagline">Automated pipeline for exporting horror-ready assets from Blender.</Translate>,
    description: <Translate id="tools.horror-exporter.description">One-click export with optimized LODs, material assignments, and collider generation for Unity/Unreal.</Translate>,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    links: {
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
        desc: <Translate id="tools.horror-exporter.f1.d">Generate optimized mesh levels automatically.</Translate>
      },
      {
        title: <Translate id="tools.horror-exporter.f2.t">PBR Mapping</Translate>,
        desc: <Translate id="tools.horror-exporter.f2.d">One-click material conversion for HDRP/URP.</Translate>
      },
    ]
  }
];

export default tools;
