import React from 'react';
import Translate from '@docusaurus/Translate';

const games = [
  {
    id: 'my-sister',
    title: <Translate id="games.my-sister.title">My Sister - Em Gái Tôi</Translate>,
    description: (
      <Translate id="games.my-sister.description">
        A psychological first-person horror. Explore the distorted memories of a broken home as you search for your missing sibling. Built on Unity HDRP for extreme immersion.
      </Translate>
    ),
    link: '/games/my-sister',
    status: 'released',
    image: null, // Placeholder or path
  },
  {
    id: 'classified-1',
    title: '[ CLASSIFIED PROJECT ]',
    description: 'Under Development',
    link: '#',
    status: 'development',
    image: null,
  }
];

export default games;
