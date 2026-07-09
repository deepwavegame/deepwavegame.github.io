// @ts-check
// Docusaurus config for Wave0084 Studio — "SYSTEM OS" Windows 9x theme.

const { themes } = require('prism-react-renderer');

const config = {
  title: 'Wave0084 Studio',
  tagline: 'Indie Horror Game Studio & Unity Asset Creator',
  favicon: 'img/favicon.ico',

  url: 'https://deepwavegame.github.io',
  baseUrl: '/',

  organizationName: 'deepwavegame',
  projectName: 'wave0084.com',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: themes.vsDark,
        darkTheme: themes.vsDark,
      },
      image: 'img/products/tools/simple-painter/thumbnail.jpg',
      navbar: {
        title: 'WAVE0084',
        logo: {
          alt: 'Wave0084 Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/games', label: 'Games', position: 'left' },
          { to: '/tools', label: 'Tools', position: 'left' },
          { to: '/assets', label: 'Assets', position: 'left' },
          {
            href: 'https://github.com/deepwavegame',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              { label: 'Games', to: '/games' },
              { label: 'Unity Tools', to: '/tools' },
              { label: '3D Assets', to: '/assets' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Documentation', to: '/docs/tools/simple-painter/intro' },
              { label: 'Support', href: 'mailto:support@wave0084.com' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/wave0084' },
              { label: 'Twitter / X', href: 'https://twitter.com/wave0084' },
              { label: 'YouTube', href: 'https://youtube.com/@wave0084' },
              { label: 'GitHub', href: 'https://github.com/deepwavegame' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Terms of Service', to: '/terms' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WAVE0084 STUDIO. All Rights Reserved.`,
      },
    }),
};

module.exports = config;
