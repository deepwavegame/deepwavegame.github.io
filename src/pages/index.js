import React from 'react';
import Layout from '@theme/Layout';
import { Button, Hero, Section, SectionTitle, Card, StatList, Kicker } from '@site/src/components/ui';
import studio from '@site/src/data/studio';

function PillarCard({ pillar }) {
  return (
    <div className="col col--4" style={{ marginBottom: '1.5rem' }}>
      <Card hoverable>
        <h3
          style={{
            fontFamily: 'var(--f-display)',
            color: 'var(--c-text-0)',
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '0.75rem',
          }}
        >
          {pillar.title}
        </h3>
        <p style={{ color: 'var(--c-text-1)', minHeight: '64px', lineHeight: 1.7, fontSize: '0.98rem' }}>
          {pillar.description}
        </p>
        <div style={{ marginTop: '1.4rem' }}>
          <Button to={pillar.to} variant="outline" block size="md">
            {pillar.cta}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="WAVE0084 Studio — Indie Horror Games & Unity Tools">
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

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p
            style={{
              textAlign: 'center',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--c-text-0)',
              margin: '0 auto 3rem',
            }}
          >
            {studio.about.body}
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Card bordered hoverable={false}>
            <div style={{ marginBottom: '0.7rem' }}>
              <Kicker tone="accent">BY THE NUMBERS</Kicker>
            </div>
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
            <PillarCard key={p.index} pillar={p} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
