import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import studio from '@site/src/data/studio';
import {
  GlitchText,
  TypeLine,
  CountUp,
  Rec,
  SignalBars,
  Ticker,
  TestCard,
  StaticField,
  ScreenFx,
  useReveal,
} from '@site/src/components/fx';
import styles from './index.module.css';

/* Fade/slide sections in as they enter the viewport (content stays visible w/o JS). */
function Reveal({ children, className, as = 'div', delay = 0 }) {
  const Tag = as;
  const [ref, shown] = useReveal(0.18);
  return (
    <Tag
      ref={ref}
      className={clsx(styles.reveal, shown && styles.revealed, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function BroadcastHero() {
  const { hero } = studio;
  return (
    <header className={styles.broadcast}>
      <StaticField className={styles.heroStatic} opacity={0.07} />
      <div className={styles.chroma} aria-hidden />
      <ScreenFx />

      {/* Camcorder HUD */}
      <div className={styles.hud}>
        <div className={clsx(styles.hudCorner, styles.hudTL)}>
          <Rec />
        </div>
        <div className={clsx(styles.hudCorner, styles.hudTR)}>
          <span className={styles.hudChip}>{hero.channel}</span>
          <span className={styles.hudStamp}>{hero.stamp}</span>
          <span className={styles.battery} aria-hidden />
        </div>
        <div className={clsx(styles.hudCorner, styles.hudBL)}>
          <SignalBars count={6} />
          <span className={styles.signalLabel}>{hero.signal}</span>
        </div>
        <div className={clsx(styles.hudCorner, styles.hudBR)}>
          <span className={styles.hudStamp}>▶ PLAY</span>
          <span className={styles.hudStamp}>SP · 84µs</span>
        </div>
      </div>

      <div className={styles.heroInner}>
        <div className={styles.heroKicker}>
          <span className={styles.kickerDot} />
          {hero.kicker}
        </div>
        <GlitchText as="h1" text={hero.title} className={styles.heroTitle} />
        <div className={styles.heroRule} aria-hidden>
          <span>◄</span>
          <i />
          <span>TRANSMISSION&nbsp;0084</span>
          <i />
          <span>►</span>
        </div>
        <p className={styles.heroSub}>{hero.subtitle}</p>
        <div className={styles.heroActions}>
          <Link to={studio.primaryCta.to} className={clsx(styles.bcBtn, styles.bcBtnPrimary)}>
            <span className={styles.bcBtnGlyph}>▸</span> {studio.primaryCta.label}
          </Link>
          <Link to={studio.secondaryCta.to} className={styles.bcBtn}>
            {studio.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        ▼ SCROLL TO DECODE ▼
      </div>
    </header>
  );
}

function Transmission() {
  const { transmission } = studio;
  return (
    <section className={clsx(styles.section, styles.transmission)}>
      <div className="container">
        <Reveal className={styles.termWindow}>
          <div className={styles.termBar}>
            <span className={styles.termDot} />
            TRANSMISSION.LOG
            <span className={styles.termBarRight}>— □ ✕</span>
          </div>
          <div className={styles.termBody}>
            <StaticField opacity={0.04} />
            <div className={styles.termKicker}>{transmission.kicker}</div>
            <h2 className={styles.termTitle}>
              {transmission.title} <span className={styles.accent}>{transmission.accent}</span>
            </h2>
            <div className={styles.termLines}>
              {transmission.lines.map((line, i) => (
                <p key={i} className={styles.termLine}>
                  <TypeLine text={line} startDelay={300 + i * 220} caret={i === transmission.lines.length - 1} />
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Diagnostics() {
  const { diagnostics, stats } = studio;
  return (
    <section className={clsx(styles.section, styles.diagnostics)}>
      <div className="container">
        <Reveal>
          <SectionHead kicker={diagnostics.kicker} title={diagnostics.title} accent={diagnostics.accent} />
        </Reveal>
        <div className={styles.diagGrid}>
          {stats.map((s, i) => (
            <Reveal key={s.label} className={styles.diagCell} delay={i * 90}>
              <div className={styles.diagLabel}>
                <span className={styles.diagLed} />
                {s.label}
              </div>
              <div className={styles.diagValue}>
                <CountUp value={s.value} />
              </div>
              <SignalBars count={7} className={styles.diagBars} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  const { pillars } = studio;
  return (
    <section className={clsx(styles.section, styles.channels)}>
      <div className="container">
        <Reveal>
          <SectionHead kicker={pillars.kicker} title={pillars.title} accent={pillars.accent} />
        </Reveal>
        <div className={styles.channelGrid}>
          {pillars.items.map((p, i) => (
            <Reveal key={p.index} className={styles.channelWrap} delay={i * 110}>
              <Link to={p.to} className={styles.channel}>
                <div className={styles.channelScreen}>
                  <StaticField opacity={0.16} />
                  <div className={styles.channelScan} aria-hidden />
                  <span className={styles.channelNo}>{p.channel}</span>
                  <span className={styles.channelFeed}>{p.feed}</span>
                  <span className={styles.channelRec}>
                    <span className={styles.channelRecDot} /> LIVE
                  </span>
                  <GlitchText text={p.title} className={styles.channelBig} />
                </div>
                <div className={styles.channelBody}>
                  <h3 className={styles.channelTitle}>{p.title}</h3>
                  <p className={styles.channelDesc}>{p.description}</p>
                  <span className={styles.channelCta}>
                    {p.cta} <span className={styles.channelArrow}>▸</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StandBy() {
  const { standby } = studio;
  return (
    <section className={styles.standby}>
      <Reveal>
        <TestCard label={standby.label} sub={standby.sub} />
      </Reveal>
    </section>
  );
}

function SectionHead({ kicker, title, accent }) {
  return (
    <div className={styles.head}>
      <span className={styles.headKicker}>{kicker}</span>
      <h2 className={styles.headTitle}>
        {title}
        <span className={styles.accent}>{accent}</span>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="WAVE0084 — an independent analog-horror studio broadcasting games & Unity tools."
    >
      <div className={styles.tube}>
        <BroadcastHero />
        <Ticker items={studio.ticker} />
        <Transmission />
        <Diagnostics />
        <Channels />
        <StandBy />
      </div>
    </Layout>
  );
}
