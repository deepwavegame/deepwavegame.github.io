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

  // Sidebar cho Simple Paint
  simplePaintSidebar: [
    {
      type: 'category',
      label: 'Simple Paint',
      link: {
        type: 'generated-index',
        title: 'Simple Paint Documentation',
        description: 'Hướng dẫn sử dụng toàn diện cho Simple Paint Blender addon.',
        slug: '/simple-paint',
      },
      items: ['tools/simple-paint/intro'],
    },
  ],
};

module.exports = sidebars;
