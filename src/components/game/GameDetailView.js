import React from 'react';
import Layout from '@theme/Layout';
import { Hero, Section, SectionTitle, Card, Button, StatList } from '@site/src/components/ui';
import { FeatureCard } from '@site/src/components/cards';
import styles from './GameDetailView.module.css';

export default function GameDetailView({ game }) {
  if (!game) return <Layout><div style={{ padding: '4rem', textAlign: 'center' }}>Game not found.</div></Layout>;

  const actions = (
    <>
      <Button href="#trailer" variant="primary" size="lg">
        WATCH TRAILER
      </Button>
      {game.steam && <Button to={game.steam} brand="steam" size="lg">STEAM</Button>}
      {game.itch && <Button to={game.itch} brand="itch" size="lg">ITCH.IO</Button>}
    </>
  );

  return (
    <Layout title={typeof game.title === 'string' ? game.title : game.id} description="">
      <Hero
        title={typeof game.title === 'string' ? game.title.toUpperCase() : (game.id || '').toUpperCase().replace(/-/g, ' ')}
        subtitle={game.subtitle}
        kicker={`// ${game.genre || 'PROJECT'} · ${game.engine || ''}`}
        backgroundImage={game.hero?.backgroundImage || game.thumbnail}
        actions={actions}
        minHeight="70vh"
      />

      {game.specs && (
        <Section tone="deeper" spacing="md">
          <div className={styles.specsRow}>
            <StatList items={game.specs} />
          </div>
        </Section>
      )}

      {game.story && (
        <Section tone="base" spacing="lg">
          <SectionTitle kicker="// NARRATIVE" align="center">
            STORY
          </SectionTitle>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Card hoverable={false} className={styles.storyCard}>
                {game.story.paragraphs.map((p, i) => (
                  <p key={i} className={styles.storyParagraph}>{p}</p>
                ))}
                {game.story.quote && (
                  <p className={styles.storyQuote}>{game.story.quote}</p>
                )}
              </Card>
            </div>
          </div>
        </Section>
      )}

      {game.features && game.features.length > 0 && (
        <Section tone="elevated" spacing="lg">
          <SectionTitle kicker="// KEY_FEATURES" align="center">
            KEY FEATURES
          </SectionTitle>
          <div className="row">
            {game.features.map((f, i) => (
              <div className="col col--4" key={i} style={{ marginBottom: '1.5rem' }}>
                <FeatureCard index={i + 1} title={f.title} description={f.description} />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section id="trailer" tone="deeper" spacing="lg">
        <SectionTitle kicker="// VIDEO_FEED" align="center">
          TRAILER
        </SectionTitle>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.trailerFrame}>
              <span className={styles.trailerPlaceholder}>
                {game.trailer?.placeholder || '[ VIDEO_FEED_PENDING ]'}
              </span>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
