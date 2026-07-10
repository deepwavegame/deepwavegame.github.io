import React from 'react';
import clsx from 'clsx';
import styles from './PageHeader.module.css';
import { StaticField, SignalBars, Rec, GlitchText } from '@site/src/components/fx';

/**
 * Broadcast page header — a camcorder HUD banner matching the homepage hero.
 * `title` may be a plain string (auto-glitched) or JSX for custom accents.
 */
export default function PageHeader({
  kicker,
  title,
  subtitle,
  channel = 'CH.00',
  signal = 'SIGNAL LOCKED',
  stamp = 'REC · SP',
  children,
}) {
  return (
    <header className={styles.header}>
      <StaticField className={styles.static} opacity={0.05} />
      <div className={styles.scan} aria-hidden />
      <div className={styles.chroma} aria-hidden />

      {/* Camcorder HUD corners */}
      <div className={styles.hud} aria-hidden>
        <span className={clsx(styles.corner, styles.tl)}>
          <Rec />
        </span>
        <span className={clsx(styles.corner, styles.tr)}>
          <span className={styles.chip}>{channel}</span>
          <span className={styles.stamp}>{stamp}</span>
        </span>
        <span className={clsx(styles.corner, styles.bl)}>
          <SignalBars count={5} />
          <span className={styles.sig}>{signal}</span>
        </span>
        <span className={clsx(styles.corner, styles.br)}>▶ PLAY · 84µs</span>
      </div>

      <div className={clsx('container', styles.inner)}>
        {kicker && (
          <div className={styles.kicker}>
            <span className={styles.kdot} />
            {kicker}
          </div>
        )}
        {typeof title === 'string' ? (
          <GlitchText as="h1" text={title} className={styles.title} />
        ) : (
          <h1 className={styles.title}>{title}</h1>
        )}
        <div className={styles.rule} aria-hidden>
          <span>◄</span>
          <i />
          <span>TRANSMISSION&nbsp;0084</span>
          <i />
          <span>►</span>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
    </header>
  );
}
