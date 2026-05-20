import React from 'react';
import Translate from '@docusaurus/Translate';

const games = [
  {
    id: 'lil-sis',
    title: <Translate id="games.lil-sis.title">Lil Sis</Translate>,
    subtitle: <Translate id="games.lil-sis.subtitle">A Psychological First-Person Horror</Translate>,
    description: (
      <Translate id="games.lil-sis.description">
        A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.
      </Translate>
    ),
    year: '2026',
    genre: 'PSYCHOLOGICAL HORROR',
    engine: 'UNITY HDRP',
    link: '/games/lil-sis',
    steam: 'https://store.steampowered.com/app/example',
    itch: 'https://deepwavegame.itch.io/lil-sis',
    status: 'development',
    isUnderDevelopment: true,
    blogTag: 'lil-sis',
    thumbnail: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=800&q=80',
    hero: {
      backgroundImage: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=1920&q=80',
    },
    story: {
      paragraphs: [
        <Translate id="games.lil-sis.story.p1">
          You play as an older brother who has been away from home for many years. One day, you receive a strange letter supposedly from your late mother, saying that your sister needs help.
        </Translate>,
        <Translate id="games.lil-sis.story.p2">
          Ignoring your bad premonitions, you return to the wooden house deep in the misty forest. No one, no sound of life, only blood messages and distorted memories are slowly consuming you.
        </Translate>,
      ],
      quote: <Translate id="games.lil-sis.story.quote">"You promised never to leave me..."</Translate>,
    },
    features: [
      {
        title: <Translate id="games.lil-sis.feature1.title">Haunting Graphics</Translate>,
        description: <Translate id="games.lil-sis.feature1.desc">Using advanced lighting technology on Unity HDRP, bringing a realistic and dark atmosphere to the point of suffocation.</Translate>,
      },
      {
        title: <Translate id="games.lil-sis.feature2.title">Spatial Audio</Translate>,
        description: <Translate id="games.lil-sis.feature2.desc">3D spatial audio system allows you to clearly hear every footstep or breath of the force hunting you.</Translate>,
      },
      {
        title: <Translate id="games.lil-sis.feature3.title">Psychological Puzzles</Translate>,
        description: <Translate id="games.lil-sis.feature3.desc">Not just running away, you need to find out and piece together memories through a puzzle system based on supernatural phenomena.</Translate>,
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
    blogTag: 'classified',
    thumbnail: null,
  },
];

export default games;

export const getGame = (id) => games.find((g) => g.id === id);
