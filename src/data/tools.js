import React from 'react';
import Translate from '@docusaurus/Translate';

export const TOOL_TYPES = {
  UNITY_PACKAGE: 'UNITY PACKAGE',
  BLENDER_ADDON: 'BLENDER ADDON',
};

const tools = [
  {
    id: 'unity-smart-sheet',
    type: TOOL_TYPES.UNITY_PACKAGE,
    title: 'Unity Smart Sheet',
    tagline: <Translate id="tools.unity-smart-sheet.tagline">Comprehensive data management solution using Spreadsheet interface.</Translate>,
    description: <Translate id="tools.unity-smart-sheet.description">Powerful data management within Unity Editor. Import, edit, and sync Google Sheets directly to ScriptableObjects.</Translate>,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    links: {
      page: '/tools/unity-smart-sheet',
      assetStore: 'https://assetstore.unity.com/packages/slug/example',
      itch: 'https://deepwavegame.itch.io/unity-smart-sheet',
      docs: '/docs/tools/unity-smart-sheet/intro',
    },
    specs: {
      price: '$24.99',
      version: 'v1.2.0',
      size: '2.5 MB',
      requirement: 'Unity 2021.3+',
    },
    features: [
      {
        title: <Translate id="tools.unity-smart-sheet.f1.t">No Context Switching</Translate>,
        desc: <Translate id="tools.unity-smart-sheet.f1.d">Edit data without opening Excel or Google Sheets.</Translate>
      },
      {
        title: <Translate id="tools.unity-smart-sheet.f2.t">Auto-Serialization</Translate>,
        desc: <Translate id="tools.unity-smart-sheet.f2.d">Sync directly to ScriptableObjects or JSON.</Translate>
      },
      {
        title: <Translate id="tools.unity-smart-sheet.f3.t">Team Sync</Translate>,
        desc: <Translate id="tools.unity-smart-sheet.f3.d">Multi-user support via Google Sheets API.</Translate>
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
