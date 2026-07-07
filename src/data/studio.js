import React from 'react';
import Translate from '@docusaurus/Translate';

const studio = {
  name: 'WAVE0084',
  fullName: 'WAVE0084 // RELIQUARY',
  tagline: <Translate id="homepage.tagline">A Reliquary of Cursed Code &mdash; Indie Horror Workshop</Translate>,
  kicker: 'EST. MMXXIV · ORDO INDEPENDENS',
  hero: {
    title: 'WAVE0084',
    subtitle: <Translate id="homepage.hero.subtitle">A reliquary of cursed code. We carve fear into engines and machine-saints from dead frequencies.</Translate>,
    kicker: 'IN NOMINE — VIGIL OPEN',
    backgroundImage: null,
  },
  about: {
    kicker: 'CONFITEOR',
    title: <Translate id="homepage.sections.about.title.part1">IRON </Translate>,
    accent: <Translate id="homepage.sections.about.title.part2">SAINT</Translate>,
    body: (
      <Translate id="homepage.sections.about.description">
        A small workshop of one. We build psychological horror on Unity HDRP and forge
        tools that other rituals can use. Every release is a relic: bone, iron, and code,
        wrapped in cloth and set on the altar.
      </Translate>
    ),
  },
  pillars: {
    kicker: 'TRIPTYCH',
    title: 'THREE',
    accent: 'OFFERINGS',
    items: [
      {
        index: 1,
        title: <Translate id="homepage.features.games.title">Games</Translate>,
        description: <Translate id="homepage.features.games.desc">Slow, claustrophobic horror. HDRP-rendered ritual chambers.</Translate>,
        cta: <Translate id="homepage.features.games.cta">Enter the Chamber</Translate>,
        to: '/games',
      },
      {
        index: 2,
        title: <Translate id="homepage.features.tools.title">Tools</Translate>,
        description: <Translate id="homepage.features.tools.desc">Unity packages forged in production. Sharp, single-purpose, no oil.</Translate>,
        cta: <Translate id="homepage.features.tools.cta">Take the Knife</Translate>,
        to: '/tools',
      },
      {
        index: 3,
        title: <Translate id="homepage.features.assets.title">Assets</Translate>,
        description: <Translate id="homepage.features.assets.desc">3D relics and environmental bone for your own altarpieces.</Translate>,
        cta: <Translate id="homepage.features.assets.cta">Gather Relics</Translate>,
        to: '/assets',
      },
    ],
  },
  stats: [
    { label: 'RELICS', value: '02' },
    { label: 'INSTRUMENTS', value: '03' },
    { label: 'ENGINES', value: 'UNITY † BLENDER' },
    { label: 'STATUS', value: 'CONSECRATED' },
  ],
  primaryCta: { to: '/games/lil-sis', label: <Translate id="homepage.cta.latest_game">LATEST RELIC</Translate> },
  secondaryCta: { to: '/tools', label: <Translate id="homepage.cta.explore_tools">THE INSTRUMENTS</Translate> },
};

export default studio;
