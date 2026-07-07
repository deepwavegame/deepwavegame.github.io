import React from 'react';
import Layout from '@theme/Layout';
import { Button, Hero, Section, SectionTitle, Card, StatList, Kicker } from '@site/src/components/ui';
import studio from '@site/src/data/studio';

const SIGILS = ['SIG · I', 'SIG · II', 'SIG · III'];

function ContactTile({ pillar }) {
  const sigil = SIGILS[pillar.index - 1] || `SIG · ${pillar.index}`;
  return (
    <div className="col col--4" style={{ marginBottom: '1.5rem' }}>
      <Card className="contact-card" hoverable>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '1.4rem',
          fontFamily: 'var(--f-mono)',
          fontSize: '0.66rem',
          letterSpacing: '3px',
          color: 'var(--c-text-3)',
        }}>
          <span style={{
            color: 'var(--c-accent-wet)', textShadow: '0 0 8px var(--c-accent-glow)',
            fontFamily: 'serif', fontSize: '1rem', lineHeight: 1,
          }}>&#10013;</span>
          <span>OFFERING_{String(pillar.index).padStart(2, '0')}</span>
          <span style={{ flexGrow: 1, height: 1, background: 'linear-gradient(90deg, var(--c-border-2), transparent)' }} />
          <span style={{ color: 'var(--c-accent-wet)', letterSpacing: '2px' }}>{sigil}</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--f-display)',
          color: 'var(--c-text-0)',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          fontSize: '1.5rem',
          marginBottom: '0.9rem',
          textShadow: '0 0 1px rgba(209,11,26,0.4), 0 0 18px var(--c-accent-glow)',
        }}>
          {pillar.title}
        </h3>
        <p style={{
          color: 'var(--c-text-1)', minHeight: '72px', lineHeight: 1.75,
          fontSize: '1rem', fontFamily: 'var(--f-sans)', fontStyle: 'italic',
        }}>
          {pillar.description}
        </p>
        <div style={{ marginTop: '1.6rem' }}>
          <Button to={pillar.to} variant="outline" block size="md" icon={<span aria-hidden>&#10013;</span>}>
            {pillar.cta}
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="WAVE0084 // RELIQUARY — Indie Horror Studio & Unity Tools">
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
          <div style={{ marginBottom: '1.4rem' }}>
            <Kicker align="center" cross tone="muted">ORATIO PRIMA &mdash; FROM THE WORKSHOP</Kicker>
          </div>
          <p style={{
            textAlign: 'left',
            fontSize: '1.18rem',
            lineHeight: 1.9,
            color: 'var(--c-text-0)',
            margin: '0 auto 3rem',
            position: 'relative',
            paddingLeft: '1.8rem',
            borderLeft: '2px solid var(--c-accent)',
            fontFamily: 'var(--f-sans)',
            fontStyle: 'italic',
          }}>
            {studio.about.body}
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Card bordered hoverable={false} style={{ background: 'rgba(10,8,7,0.7)' }}>
            <div style={{ marginBottom: '0.7rem' }}>
              <Kicker cross tone="accent">LEDGER OF THE WORKSHOP</Kicker>
            </div>
            <StatList items={studio.stats} />
          </Card>
        </div>
      </Section>

      <Section tone="grid" spacing="lg">
        <SectionTitle kicker={studio.pillars.kicker} accent={studio.pillars.accent}>
          {studio.pillars.title}
        </SectionTitle>
        <div style={{ margin: '-2rem 0 2.8rem' }}>
          <Kicker align="center" cross tone="muted">THREE OFFERINGS LAID UPON THE ALTAR &mdash; CHOOSE ONE</Kicker>
        </div>
        <div className="row">
          {studio.pillars.items.map((p) => (
            <ContactTile key={p.index} pillar={p} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
