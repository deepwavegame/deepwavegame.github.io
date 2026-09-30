export const STATUS_LABELS = {
  released: 'Released',
  development: 'In development',
  classified: 'Classified',
};

const games = [
  {
    id: 'lil-sis',
    title: 'Lil Sis',
    subtitle: 'A psychological first-person horror',
    description:
      'A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.',
    year: '2026',
    genre: 'Psychological horror',
    engine: 'Unity HDRP',
    link: '/games/lil-sis',
    steam: 'https://store.steampowered.com/app/example',
    itch: 'https://deepwavegame.itch.io/lil-sis',
    status: 'development',
    story: {
      paragraphs: [
        'You play as an older brother who has been away from home for many years. One day, you receive a strange letter supposedly from your late mother, saying that your sister needs help.',
        'Ignoring your bad premonitions, you return to the wooden house deep in the misty forest. No one, no sound of life, only blood messages and distorted memories are slowly consuming you.',
      ],
      quote: 'You promised never to leave me…',
    },
    features: [
      {
        title: 'Haunting Graphics',
        description:
          'Using advanced lighting technology on Unity HDRP, bringing a realistic and dark atmosphere to the point of suffocation.',
      },
      {
        title: 'Spatial Audio',
        description:
          '3D spatial audio system allows you to clearly hear every footstep or breath of the force hunting you.',
      },
      {
        title: 'Psychological Puzzles',
        description:
          'Not just running away, you need to find out and piece together memories through a puzzle system based on supernatural phenomena.',
      },
    ],
    specs: [
      ['Status', 'In development'],
      ['Platforms', 'PC · Steam · itch.io'],
      ['Perspective', 'First-person'],
      ['Estimated', 'Q4 2026'],
    ],
  },
  {
    id: 'classified-1',
    title: 'Classified project',
    description: 'Under development. Access denied.',
    year: '20XX',
    genre: 'Unknown',
    engine: 'Unknown',
    link: null,
    status: 'classified',
  },
];

export default games;

export const getGame = (id) => games.find((game) => game.id === id);
