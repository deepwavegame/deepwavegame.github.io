import React from 'react';
import Translate from '@docusaurus/Translate';

const studio = {
  name: 'WAVE0084',
  fullName: 'WAVE0084 STUDIO',
  tagline: <Translate id="homepage.tagline">Indie Horror Studio — Technical Solutions for Unreal Fear</Translate>,
  kicker: 'EST. 2024 · INDEPENDENT',
  hero: {
    title: 'WAVE0084',
    subtitle: <Translate id="homepage.tagline">Indie Horror Studio — Technical Solutions for Unreal Fear</Translate>,
    kicker: 'TRANSMISSION_ESTABLISHED',
    backgroundImage: 'https://images.unsplash.com/photo-1505634467193-703328080f5d?auto=format&fit=crop&w=1920&q=80',
  },
  about: {
    kicker: 'IDENTIFICATION',
    title: <Translate id="homepage.sections.about.title.part1">DEEP </Translate>,
    accent: <Translate id="homepage.sections.about.title.part2">SIGNAL</Translate>,
    body: (
      <Translate id="homepage.sections.about.description">
        A technical indie studio specializing in psychological horror and high-performance Unity tools.
        We push the boundaries of digital fear and creative workflow efficiency.
      </Translate>
    ),
  },
  pillars: {
    kicker: 'CORE_DIVISIONS',
    title: 'CORE',
    accent: 'DYNAMICS',
    items: [
      {
        index: 1,
        title: <Translate id="homepage.features.games.title">Games</Translate>,
        description: <Translate id="homepage.features.games.desc">Deep, atmospheric horror experiences built on HDRP.</Translate>,
        cta: <Translate id="homepage.features.games.cta">Play Now</Translate>,
        to: '/games',
      },
      {
        index: 2,
        title: <Translate id="homepage.features.tools.title">Tools</Translate>,
        description: <Translate id="homepage.features.tools.desc">Professional Unity packages used in our own production cycle.</Translate>,
        cta: <Translate id="homepage.features.tools.cta">View Specs</Translate>,
        to: '/tools',
      },
      {
        index: 3,
        title: <Translate id="homepage.features.assets.title">Assets</Translate>,
        description: <Translate id="homepage.features.assets.desc">High-quality 3D models and environmental kits for your projects.</Translate>,
        cta: <Translate id="homepage.features.assets.cta">Get Assets</Translate>,
        to: '/assets',
      },
    ],
  },
  stats: [
    { label: 'PROJECTS', value: '02' },
    { label: 'TOOLS_SHIPPED', value: '03' },
    { label: 'ENGINES', value: 'UNITY · BLENDER' },
    { label: 'STATUS', value: 'OPERATIONAL' },
  ],
  primaryCta: { to: '/games/lil-sis', label: <Translate id="homepage.cta.latest_game">LATEST PROJECT</Translate> },
  secondaryCta: { to: '/tools', label: <Translate id="homepage.cta.explore_tools">EXPLORE TOOLS</Translate> },
};

export default studio;
