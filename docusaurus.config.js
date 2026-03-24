// @ts-check
// Note: Chỉnh sửa cấu hình Docusaurus cho Wave0084 Studio - Phiên bản Nâng cấp

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

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    mermaid: true,
    preprocessor: ({ filePath, fileContent }) => {
      return fileContent;
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'zh', 'ja', 'id'],
    localeConfigs: {
      en: { label: 'English' },
      vi: { label: 'Tiếng Việt' },
      zh: { label: '中文' },
      ja: { label: '日本語' },
      id: { label: 'Bahasa Indonesia' },
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
          routeBasePath: 'docs', // Giữ route mặc định cho docs chung hoặc tool chính
        },
        blog: {
          showReadingTime: true,
        },
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
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WAVE0084',
        logo: {
          alt: 'Wave0084 Logo',
          src: 'img/logo.svg',
          style: { filter: 'drop-shadow(0 0 5px #00e5ff)' },
        },
        items: [
          { to: '/games', label: 'Games', position: 'left' },
          { to: '/tools', label: 'Tools', position: 'left' },
          { to: '/assets', label: 'Assets', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
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
              { label: 'Documentation', to: '/docs/tools/unity-smart-sheet/intro' },
              { label: 'Dev Blog', to: '/blog' },
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
