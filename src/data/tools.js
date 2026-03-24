import React from 'react';
import Translate from '@docusaurus/Translate';

const tools = [
  {
    id: 'unity-smart-sheet',
    title: <Translate id="tools.unity-smart-sheet.title">Unity Smart Sheet</Translate>,
    description: (
      <Translate id="tools.unity-smart-sheet.description">
        Powerful data management within Unity Editor. Import, edit, and sync Google Sheets directly to ScriptableObjects.
      </Translate>
    ),
    link: '/tools/unity-smart-sheet',
    docs: '/docs/tools/unity-smart-sheet/intro',
  },
  {
    id: 'simple-paint',
    title: <Translate id="tools.simple-paint.title">Simple Paint</Translate>,
    description: (
      <Translate id="tools.simple-paint.description">
        Lightweight 2D painting system for Unity projects. Perfect for prototyping and in-game drawing mechanics.
      </Translate>
    ),
    link: '/tools/simple-paint',
    docs: '/docs/tools/simple-paint/intro',
  }
];

export default tools;
