import React from 'react';
import Layout from '@theme/Layout';
import { Button, Hero, Section, SectionTitle, Card, StatList } from '@site/src/components/ui';
import { FeatureCard } from '@site/src/components/cards';
import studio from '@site/src/data/studio';

function PillarTile({ pillar }) {
  return (
    <div className="col col--4" style={{ marginBottom: '1.5rem' }}>
      <Card className="pillar-card">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '1.25rem' }}>
          <span style={{
            fontFamily: 'var(--f-mono)',
            color: 'var(--c-accent)',
            fontSize: '1.4rem',
            fontWeight: 800,
          }}>
            {String(pillar.index).padStart(2, '0')}
          </span>
          <span style={{ flexGrow: 1, height: 1, background: 'linear-gradient(90deg, var(--c-accent), transparent)' }} />
        </div>
        <h3 style={{
          color: 'var(--c-text-0)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '1.2rem',
          marginBottom: '0.75rem',
        }}>
          {pillar.title}
        </h3>
        <p style={{ color: 'var(--c-text-2)', minHeight: '64px', lineHeight: 1.7, fontSize: '0.9rem' }}>
          {pillar.description}
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to={pillar.to} variant="primary" block size="md">
            {pillar.cta}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="WAVE0084 Studio — Indie Horror Game & Unity Tools">
      <Hero
        title={studio.hero.title}
        subtitle={studio.hero.subtitle}
        kicker={studio.hero.kicker}
        backgroundImage={studio.hero.backgroundImage}
        actions={
          <>
            <Button to={studio.primaryCta.to} variant="primary" size="lg">
              {studio.primaryCta.label}
            </Button>
            <Button to={studio.secondaryCta.to} variant="ghost" size="lg">
              {studio.secondaryCta.label}
            </Button>
          </>
        }
      />

      <Section tone="deeper" spacing="lg">
        <SectionTitle kicker={studio.about.kicker} accent={studio.about.accent}>
          {studio.about.title}
        </SectionTitle>
        <p style={{
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto 3rem',
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--c-text-2)',
        }}>
          {studio.about.body}
        </p>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Card bordered hoverable={false} style={{ background: 'transparent' }}>
            <StatList items={studio.stats} />
          </Card>
        </div>
      </Section>

      <Section tone="grid" spacing="lg">
        <SectionTitle kicker={studio.pillars.kicker} accent={studio.pillars.accent}>
          {studio.pillars.title}
        </SectionTitle>
        <div className="row">
          {studio.pillars.items.map((p) => (
            <PillarTile key={p.index} pillar={p} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
