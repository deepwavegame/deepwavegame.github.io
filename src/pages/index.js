import React from 'react';
import Layout from '@theme/Layout';
import { Button, Hero, Section, SectionTitle, Card, StatList } from '@site/src/components/ui';
import studio from '@site/src/data/studio';

const DEPTHS = ['-2 100', '-6 400', '-10 902'];

function ContactTile({ pillar }) {
  const depth = DEPTHS[pillar.index - 1] || '-8 400';
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
          letterSpacing: '2px',
          color: 'var(--c-text-3)',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--c-accent)', boxShadow: '0 0 10px var(--c-accent)',
          }} />
          <span>CONTACT_{String(pillar.index).padStart(2, '0')}</span>
          <span style={{ flexGrow: 1, height: 1, background: 'linear-gradient(90deg, var(--c-border-2), transparent)' }} />
          <span style={{ color: 'var(--c-accent)' }}>{depth}m</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--f-display)',
          color: 'var(--c-text-0)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontSize: '1.45rem',
          marginBottom: '0.85rem',
          textShadow: '0 0 18px var(--c-accent-glow)',
        }}>
          {pillar.title}
        </h3>
        <p style={{ color: 'var(--c-text-2)', minHeight: '72px', lineHeight: 1.75, fontSize: '0.9rem' }}>
          {pillar.description}
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Button to={pillar.to} variant="outline" block size="md" icon={<span aria-hidden>&#9660;</span>}>
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

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'var(--f-mono)',
            fontSize: '0.66rem',
            letterSpacing: '3px',
            color: 'var(--c-text-3)',
            textAlign: 'center',
            marginBottom: '1.2rem',
          }}>
            &#9656; INCOMING TRANSMISSION &mdash; SIGNAL LOCK 100%
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '1.12rem',
            lineHeight: 1.9,
            color: 'var(--c-text-1)',
            margin: '0 auto 3rem',
            position: 'relative',
            paddingLeft: '1.5rem',
            borderLeft: '2px solid var(--c-accent)',
          }}>
            {studio.about.body}
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <Card bordered hoverable={false} style={{ background: 'rgba(8,24,33,0.5)' }}>
            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: '0.6rem', letterSpacing: '3px',
              color: 'var(--c-text-3)', marginBottom: '0.5rem', textTransform: 'uppercase',
            }}>
              // VESSEL TELEMETRY
            </div>
            <StatList items={studio.stats} />
          </Card>
        </div>
      </Section>

      <Section tone="grid" spacing="lg">
        <SectionTitle kicker={studio.pillars.kicker} accent={studio.pillars.accent}>
          {studio.pillars.title}
        </SectionTitle>
        <div style={{
          textAlign: 'center', fontFamily: 'var(--f-mono)', fontSize: '0.68rem',
          letterSpacing: '3px', color: 'var(--c-text-3)', margin: '-2rem 0 2.5rem',
        }}>
          &#9656; 03 CONTACTS DETECTED ON SONAR &mdash; SELECT TO DESCEND
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
