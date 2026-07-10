import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { PageHeader, Section } from '@site/src/components/ui';
import { GameCard } from '@site/src/components/cards';
import { Ticker, SignalBars } from '@site/src/components/fx';
import games from '@site/src/data/games';
import cx from '../catalog.module.css';

const TICKER = [
  'PROJECT REPOSITORY ONLINE',
  'DECRYPTING FIELD RECORDINGS',
  'SOME SIGNALS REMAIN CLASSIFIED',
  'WAVE0084 // HORROR DIVISION',
];

export default function Games() {
  return (
    <Layout title="Games" description="WAVE0084 Studio — Horror game projects">
      <PageHeader
        kicker="// PROJECT_REPOSITORY"
        title="PROJECT REPOSITORY"
        subtitle="All current and classified game projects of WAVE0084 Studio. Status reports updated continuously."
        channel="CH.03"
        signal={`PROJECTS: ${String(games.length).padStart(2, '0')}`}
      />

      <Ticker items={TICKER} tone="signal" />

      <Section tone="base" spacing="lg">
        <div className={cx.guide}>
          <span className={cx.guideLabel}>
            <span className={cx.guideDot} /> PROGRAM GUIDE
          </span>
          <span className={cx.guideCount}>{games.length} FEEDS INDEXED</span>
          <SignalBars count={5} className={cx.guideBars} />
        </div>

        <div className={clsx(cx.grid, cx.gridGames)}>
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} channel={`CH.${String(i + 1).padStart(2, '0')}`} />
          ))}
        </div>

        <div className={cx.signoff}>
          ▚▚ END OF LISTING · <b>SIGNAL LOOPS</b> · ▚▚
        </div>
      </Section>
    </Layout>
  );
}
