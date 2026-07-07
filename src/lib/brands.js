/**
 * Central registry of external product URLs and channels.
 *
 * Keep every off-site link in one place so store slugs, itch demos and social
 * handles never drift between the marketing pages, the tool data and SEO tags.
 */

/** Unity Asset Store canonical listing URLs (also used as SEO canonicals). */
export const STORE = {
  simplePainter:
    'https://assetstore.unity.com/packages/tools/painting/simple-paint-3d-375642',
  infiniteCorrugatedRoof:
    'https://assetstore.unity.com/packages/tools/modeling/infinite-corrugated-roof-357650',
};

/** itch.io pages (playable demos / builder). */
export const ITCH = {
  simplePainterDemo: 'https://deepwave.itch.io/simple-painter-unity-demo',
  simplePainterDemo2: 'https://deepwave.itch.io/simple-painter-unity-demo-2',
  infiniteCorrugatedRoof:
    'https://deepwave.itch.io/unity-smart-sheet-procedural-corrugated-sheet-fence-builde',
};

/** Studio-wide social / contact channels. */
export const SOCIAL = {
  github: 'https://github.com/deepwavegame',
  itch: 'https://deepwave.itch.io',
  email: 'deepwavegame@gmail.com',
};
