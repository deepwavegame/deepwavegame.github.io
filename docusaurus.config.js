// @ts-check

const { themes } = require('prism-react-renderer');

/** Code blocks sit on the same ink as the masthead instead of the theme's grey-blue. */
const codeTheme = {
  ...themes.vsDark,
  plain: { ...themes.vsDark.plain, backgroundColor: '#101a17' },
};

/**
 * Fonts are self-hosted from static/fonts. The @font-face rules are inlined in <head>
 * (not in a CSS file, where webpack would re-hash the URLs) so the preloads below hit
 * exactly the files the page uses. Only the two upright faces are preloaded; the italic
 * downloads on demand.
 */
const fontFaces = [
  { family: 'Big Shoulders Display', file: 'big-shoulders-display.woff2', weight: '100 900', style: 'normal', preload: true },
  { family: 'Atkinson Hyperlegible Next', file: 'atkinson-next.woff2', weight: '200 800', style: 'normal', preload: true },
  { family: 'Atkinson Hyperlegible Next', file: 'atkinson-next-italic.woff2', weight: '200 800', style: 'italic' },
];

const fontHeadTags = [
  ...fontFaces
    .filter((font) => font.preload)
    .map((font) => ({
      tagName: 'link',
      attributes: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/fonts/${font.file}`, crossorigin: 'anonymous' },
    })),
  {
    tagName: 'style',
    attributes: {},
    innerHTML: fontFaces
      .map(
        (font) =>
          `@font-face{font-family:"${font.family}";src:url(/fonts/${font.file}) format("woff2");font-weight:${font.weight};font-style:${font.style};font-display:swap}`,
      )
      .join(''),
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wave0084 Studio',
  tagline: 'Indie Horror Game Studio & Unity Asset Creator',
  favicon: 'img/favicon.ico',

  url: 'https://deepwavegame.github.io',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'deepwavegame',
  projectName: 'wave0084.com',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      // Docusaurus and Infima styles go in low-priority layers, so custom CSS
      // wins on source order alone (no !important, no selector arms race).
      useCssCascadeLayers: true,
    },
  },

  // `detect` keeps .md as CommonMark and .mdx as MDX, as the docs were written.
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],

  headTags: fontHeadTags,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'Deepwave Devlog',
          blogDescription:
            'Devlogs and technical write-ups from Deepwave — Unity tools and analog-horror games.',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 20,
          showReadingTime: true,
          postsPerPage: 10,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/shell.css'),
            require.resolve('./src/css/docs.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // One designed palette: paper and ink. No dark-mode switch, as before.
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/products/tools/simple-painter/thumbnail.jpg',
      metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],

      prism: {
        theme: codeTheme,
        darkTheme: codeTheme,
        additionalLanguages: ['csharp'],
      },

      mermaid: {
        theme: { light: 'base', dark: 'base' },
        options: {
          fontFamily: 'Atkinson Hyperlegible Next, system-ui, sans-serif',
          themeVariables: {
            primaryColor: '#e3dfd0',
            primaryTextColor: '#101a17',
            primaryBorderColor: '#101a17',
            lineColor: '#101a17',
            secondaryColor: '#eeeadd',
            tertiaryColor: '#eeeadd',
          },
        },
      },

      navbar: {
        title: 'WAVE0084',
        logo: { alt: '', src: 'img/logo.svg' },
        items: [
          { to: '/games', label: 'Games', position: 'left' },
          { to: '/tools', label: 'Tools', position: 'left' },
          { to: '/assets', label: 'Assets', position: 'left' },
          { to: '/docs', label: 'Docs', position: 'left', activeBaseRegex: '^/docs' },
          { to: '/blog', label: 'Devlog', position: 'left' },
          { href: 'https://github.com/deepwavegame', label: 'GitHub', position: 'right' },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Studio',
            items: [
              { label: 'Games', to: '/games' },
              { label: 'Tools', to: '/tools' },
              { label: 'Assets', to: '/assets' },
              { label: 'Devlog', to: '/blog' },
            ],
          },
          {
            title: 'Documentation',
            items: [
              { label: 'Simple Painter', to: '/docs/tools/simple-painter/intro' },
              { label: 'Infinite Corrugated Roof', to: '/docs/tools/infinite-corrugated-roof/intro' },
              { label: 'RetroOS', to: '/docs/tools/retro-os/intro' },
              { label: 'Cobweb Weaver', to: '/docs/tools/cobweb-weaver/intro' },
              { label: 'Analog VHS', to: '/docs/tools/analog-vhs/intro' },
              { label: 'Weatherscape', to: '/docs/tools/weatherscape/intro' },
              { label: 'Dynamic Target Framer', to: '/docs/tools/dynamic-target-framer/intro' },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              { label: 'Discord', href: 'https://discord.gg/BBAbWu2Mv' },
              { label: 'X / Twitter', href: 'https://twitter.com/wave0084' },
              { label: 'YouTube', href: 'https://youtube.com/@wave0084' },
              { label: 'itch.io', href: 'https://deepwave.itch.io' },
              { label: 'GitHub', href: 'https://github.com/deepwavegame' },
              { label: 'Email', href: 'mailto:deepwavegame@gmail.com' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
            ],
          },
        ],
        // Rendered as HTML inside .footer__copyright: an oversized wordmark, then the colophon.
        copyright: `
          <span class="footer__mark" aria-hidden="true">WAVE0084</span>
          <p>© ${new Date().getFullYear()} WAVE0084 Studio. All rights reserved.</p>
          <p>Set in Big Shoulders Display and Atkinson Hyperlegible Next. Built with Docusaurus.</p>`,
      },
    }),
};

module.exports = config;
