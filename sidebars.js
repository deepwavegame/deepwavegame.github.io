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
        description: 'Hướng dẫn sử dụng toàn diện cho Infinite Corrugated Roof plugin.',
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
        description: 'Tài liệu toàn diện cho Simple Painter — GPU-accelerated paint system cho Unity.',
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
};

module.exports = sidebars;
