// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar cho Infinite Corrugated Roof
  infiniteCorrugatedRoofSidebar: [
    {
      type: 'category',
      label: 'Infinite Corrugated Roof',
      link: {
        type: 'generated-index',
        title: 'Infinite Corrugated Roof Documentation',
        description:
          'Complete documentation for Infinite Corrugated Roof — a live, procedural corrugated-metal roof generator for Unity with automatic LODs and FBX baking.',
        slug: '/infinite-corrugated-roof',
      },
      items: [
        'tools/infinite-corrugated-roof/product-overview',
        'tools/infinite-corrugated-roof/intro',
        'tools/infinite-corrugated-roof/getting-started',
        'tools/infinite-corrugated-roof/editor-guide',
        'tools/infinite-corrugated-roof/advanced-features',
        'tools/infinite-corrugated-roof/technical-reference',
        'tools/infinite-corrugated-roof/api-reference',
      ],
    },
  ],

  // Sidebar cho Simple Painter
  simplePainterSidebar: [
    {
      type: 'category',
      label: 'Simple Painter',
      link: {
        type: 'generated-index',
        title: 'Simple Painter Documentation',
        description:
          'Complete documentation for Simple Painter (Simple Paint 3D) — a runtime 3D texture-painting toolkit for Unity with multi-channel PBR painting, layers and fluid paint.',
        slug: '/simple-painter',
      },
      items: [
        'tools/simple-painter/product-overview',
        'tools/simple-painter/intro',
        'tools/simple-painter/getting-started',
        'tools/simple-painter/architecture',
        'tools/simple-painter/paint-engine',
        'tools/simple-painter/paint-surface',
        'tools/simple-painter/channels-layers',
        'tools/simple-painter/triggers-strokes',
        'tools/simple-painter/tools-brushes',
        'tools/simple-painter/committers-fluid',
        'tools/simple-painter/api-reference',
        'tools/simple-painter/best-practices',
      ],
    },
  ],

  // Sidebar cho Retro OS
  retroOsSidebar: [
    {
      type: 'category',
      label: 'Retro OS',
      link: {
        type: 'generated-index',
        title: 'Retro OS Documentation',
        description:
          'Documentation for Retro OS — a data-driven Windows 95-style in-game operating system for Unity.',
        slug: '/retro-os',
      },
      items: ['tools/retro-os/intro'],
    },
  ],

  // Sidebar cho Dynamic Target Framer
  dynamicTargetFramerSidebar: [
    {
      type: 'category',
      label: 'Dynamic Target Framer',
      link: {
        type: 'generated-index',
        title: 'Dynamic Target Framer Documentation',
        description:
          'Documentation for Dynamic Target Framer — a pixel-tight, mesh-accurate UI framing package for Unity.',
        slug: '/dynamic-target-framer',
      },
      items: ['tools/dynamic-target-framer/intro'],
    },
  ],
};

module.exports = sidebars;
