const studio = {
  name: 'WAVE0084',
  fullName: 'WAVE0084 Studio',
  tagline: 'Analog-horror games & Unity tools.',
  kicker: 'EST. 2024 · INDEPENDENT STUDIO',

  // === Homepage broadcast ===
  hero: {
    channel: 'CH-84',
    kicker: 'INCOMING SIGNAL // DO NOT ADJUST YOUR SET',
    title: 'WAVE0084',
    subtitle:
      'An independent analog-horror studio. We broadcast games that should not exist — and release the tools we built inside the signal.',
    signal: 'SIGNAL: UNSTABLE',
    stamp: 'REC 19XX·08·04',
    backgroundImage: null,
  },

  ticker: [
    'THIS IS NOT A TEST OF THE EMERGENCY BROADCAST SYSTEM',
    'TRANSMISSION 0084',
    'DO NOT ADJUST YOUR SET',
    'IF YOU CAN STILL READ THIS YOU HAVE BEEN WATCHING TOO LONG',
    'STAND BY',
  ],

  transmission: {
    kicker: 'INCOMING TRANSMISSION',
    title: 'ONE OPERATOR.',
    accent: 'ONE SIGNAL.',
    lines: [
      '> A studio of one, transmitting from inside Unity HDRP.',
      '> Slow, atmospheric analog-horror — and the production-grade tools',
      '  built to make it: Infinite Corrugated Roof · Simple Painter · Retro OS.',
      '> The signal has not stopped since 2024.',
    ],
  },

  pillars: {
    kicker: 'BROADCAST CHANNELS',
    title: 'SELECT A ',
    accent: 'CHANNEL',
    items: [
      {
        index: 1,
        channel: 'CH-01',
        feed: 'FEED // LIL SIS',
        title: 'Games',
        description: 'Slow, atmospheric analog-horror built on Unity HDRP.',
        cta: 'TUNE IN',
        to: '/games',
      },
      {
        index: 2,
        channel: 'CH-02',
        feed: 'FEED // TOOLCHAIN',
        title: 'Tools',
        description: 'Unity packages, battle-tested inside our own production pipeline.',
        cta: 'ACCESS',
        to: '/tools',
      },
      {
        index: 3,
        channel: 'CH-03',
        feed: 'FEED // ARCHIVE',
        title: 'Assets',
        description: '3D environment packs and textures recovered for your own projects.',
        cta: 'OPEN',
        to: '/assets',
      },
    ],
  },

  diagnostics: {
    kicker: 'SYSTEM DIAGNOSTICS',
    title: 'SIGNAL ',
    accent: 'READOUT',
  },

  stats: [
    { label: 'GAMES', value: '1' },
    { label: 'TOOLS', value: '4' },
    { label: 'ENGINES', value: 'UNITY + BLENDER' },
    { label: 'STATUS', value: 'ACTIVE' },
  ],

  standby: {
    label: 'PLEASE STAND BY',
    sub: 'WAVE0084 // TRANSMISSION RESUMES SHORTLY',
  },

  primaryCta: { to: '/games/lil-sis', label: 'TUNE IN' },
  secondaryCta: { to: '/tools', label: 'ENTER ARCHIVE' },
};

export default studio;
