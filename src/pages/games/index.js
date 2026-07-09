import React from 'react';
import Layout from '@theme/Layout';
import { PageHeader, Section } from '@site/src/components/ui';
import { GameCard } from '@site/src/components/cards';
import games from '@site/src/data/games';

export default function Games() {
  return (
    <Layout title="Games" description="WAVE0084 Studio — Horror game projects">
      <PageHeader
        kicker="// PROJECT_REPOSITORY"
        title={<>PROJECT <span style={{ color: 'var(--c-accent)' }}>REPOSITORY</span></>}
        subtitle="All current and classified game projects of WAVE0084 Studio. Status reports updated continuously."
      />

      <Section tone="base" spacing="lg">
        <div className="row">
          {games.map((game) => (
            <div className="col col--6" key={game.id} style={{ marginBottom: '2rem' }}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
