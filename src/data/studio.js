/** Copy for the homepage. Everything else on the site reads from tools, games and assets. */
const studio = {
  name: 'WAVE0084',
  founded: 2024,
  tagline: 'Analog-horror games & Unity tools.',
  intro:
    'An independent analog-horror studio. We broadcast games that should not exist — and release the tools we built inside the signal.',
  description:
    'Wave0084 is an independent analog-horror studio: the game Lil Sis, and production-grade Unity tools — Simple Painter, RetroOS, Cobweb Weaver, Analog VHS and more.',

  strap: ['This is not a test', 'Do not adjust your set', 'Stand by'],

  departments: [
    {
      title: 'Games',
      text: 'Slow, atmospheric analog-horror built on Unity HDRP.',
      to: '/games',
    },
    {
      title: 'Tools',
      text: 'Unity packages, battle-tested inside our own production pipeline.',
      to: '/tools',
    },
    {
      title: 'Assets',
      text: '3D environment packs and textures recovered for your own projects.',
      to: '/assets',
    },
  ],

  statement: {
    title: 'The signal has not stopped since 2024.',
    text: [
      'A studio of one, transmitting from inside Unity HDRP.',
      'Slow, atmospheric analog-horror — and the production-grade tools built to make it.',
    ],
  },
};

export default studio;
