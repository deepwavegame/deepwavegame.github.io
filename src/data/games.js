import React from 'react';
import Translate from '@docusaurus/Translate';

const games = [
  {
    id: 'lil-sis',
    title: <Translate id="games.lil-sis.title">Lil Sis</Translate>,
    description: (
      <Translate id="games.lil-sis.description">
        A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.
      </Translate>
    ),
    link: '/games/lil-sis',
    steam: 'https://store.steampowered.com/app/example',
    itch: 'https://deepwavegame.itch.io/lil-sis',
    status: 'released',
    thumbnail: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'classified-1',
    title: '[ CLASSIFIED PROJECT ]',
    description: 'Under Development',
    link: '#',
    status: 'development',
    thumbnail: null,
  }
];

export default games;
