import React from 'react';
import { getGame } from '@site/src/data/games';
import GameDetailView from '@site/src/components/GameDetail/GameDetailView';

export default function LilSisGame() {
  return <GameDetailView game={getGame('lil-sis')} />;
}
