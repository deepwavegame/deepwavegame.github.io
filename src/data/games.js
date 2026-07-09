import React from 'react';

const games = [
  {
    id: 'lil-sis',
    title: 'Lil Sis',
    subtitle: 'A Psychological First-Person Horror',
    description:
      'A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.',
    year: '2026',
    genre: 'PSYCHOLOGICAL HORROR',
    engine: 'UNITY HDRP',
    link: '/games/lil-sis',
    steam: 'https://store.steampowered.com/app/example',
    itch: 'https://deepwavegame.itch.io/lil-sis',
    status: 'development',
    isUnderDevelopment: true,
    thumbnail: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=800&q=80',
    hero: {
      backgroundImage: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=1920&q=80',
    },
    story: {
      paragraphs: [
        'You play as an older brother who has been away from home for many years. One day, you receive a strange letter supposedly from your late mother, saying that your sister needs help.',
        'Ignoring your bad premonitions, you return to the wooden house deep in the misty forest. No one, no sound of life, only blood messages and distorted memories are slowly consuming you.',
      ],
      quote: '"You promised never to leave me..."',
    },
    features: [
      {
        title: 'Haunting Graphics',
        description: 'Using advanced lighting technology on Unity HDRP, bringing a realistic and dark atmosphere to the point of suffocation.',
      },
      {
        title: 'Spatial Audio',
        description: '3D spatial audio system allows you to clearly hear every footstep or breath of the force hunting you.',
      },
      {
        title: 'Psychological Puzzles',
        description: 'Not just running away, you need to find out and piece together memories through a puzzle system based on supernatural phenomena.',
      },
    ],
    specs: [
      { label: 'STATUS', value: 'IN DEVELOPMENT' },
      { label: 'PLATFORMS', value: 'PC · STEAM · ITCH' },
      { label: 'PERSPECTIVE', value: 'FIRST-PERSON' },
      { label: 'ESTIMATED', value: 'Q4 2026' },
    ],
    trailer: {
      placeholder: '[ VIDEO_FEED_PENDING ]',
    },
  },
  {
    id: 'classified-1',
    title: '[ CLASSIFIED PROJECT ]',
    description: 'Under Development. Access denied.',
    year: '20XX',
    genre: 'UNKNOWN',
    engine: 'UNKNOWN',
    link: '#',
    status: 'classified',
    isUnderDevelopment: true,
    thumbnail: null,
  },
];

export default games;

export const getGame = (id) => games.find((g) => g.id === id);
