import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';

// Live hydrophone readout — descends slowly with jitter, sweeps a bearing.
function useTelemetry() {
  const [t, setT] = useState({ depth: 8412, bearing: 47, pressure: 842, temp: 2.3 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => {
        const depth = prev.depth + (Math.random() * 6 - 1.5);
        return {
          depth,
          bearing: (prev.bearing + 11) % 360,
          pressure: depth / 10 + 1,
          temp: 2 + Math.sin(depth / 220) * 0.9,
        };
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return t;
}

// Faint waveform bars for the "decoding transmission" strip
const BARS = Array.from({ length: 56 });

export default function Hero({
  title,
  subtitle,
  kicker,
  backgroundImage,
  actions,
  minHeight = '92vh',
  glitch = true,
  align = 'center',
  children,
}) {
  const t = useTelemetry();
  const [contact, setContact] = useState(false);

  // An unknown contact surfaces from the dark every so often.
  useEffect(() => {
    let timeout;
    const cycle = () => {
      setContact(true);
      timeout = setTimeout(() => {
        setContact(false);
        timeout = setTimeout(cycle, 4000 + Math.random() * 6000);
      }, 2600);
    };
    timeout = setTimeout(cycle, 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <header
      className={clsx(styles.hero, styles[`align-${align}`])}
      style={{
        minHeight,
        backgroundImage: backgroundImage
          ? `linear-gradient(180deg, rgba(2,10,16,0.78), rgba(0,6,10,0.97)), url(${backgroundImage})`
          : undefined,
      }}
    >
      {/* Sonar scope sitting in the dark behind the signal */}
      <div className={styles.scope} aria-hidden="true">
        <span className={styles.ring} style={{ inset: '0%' }} />
        <span className={styles.ring} style={{ inset: '17%' }} />
        <span className={styles.ring} style={{ inset: '34%' }} />
        <span className={styles.ring} style={{ inset: '51%' }} />
        <span className={styles.crossH} />
        <span className={styles.crossV} />
        <span className={styles.sweep} />
        <span className={styles.ping} />
        <span className={clsx(styles.ping, styles.ping2)} />
        <span className={clsx(styles.ping, styles.ping3)} />
        <span className={clsx(styles.contact, contact && styles.contactOn)} />
      </div>

      <div className={styles.deepGrid} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={clsx('container', styles.content)}>
        {kicker && (
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span>{kicker}</span>
            <span className={styles.cursor}>_</span>
          </div>
        )}

        {title && (
          <h1
            className={clsx(styles.title, glitch && styles.glitch)}
            data-text={typeof title === 'string' ? title : ''}
          >
            {title}
          </h1>
        )}

        {/* Hydrophone waveform — the transmission itself */}
        <div className={styles.waveform} aria-hidden="true">
          {BARS.map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 14) * 0.07}s` }} />
          ))}
        </div>

        {subtitle && (
          <p className={styles.subtitle}>
            <span className={styles.decodeTag}>DECODED //</span> {subtitle}
          </p>
        )}

        {actions && <div className={styles.actions}>{actions}</div>}
        {children}
      </div>

      {/* HUD readouts in the four corners of the console */}
      <div className={clsx(styles.hud, styles.hudTL)}>
        <span className={styles.hudKey}>DEPTH</span>
        <span className={styles.hudVal}>-{t.depth.toFixed(0)}m</span>
      </div>
      <div className={clsx(styles.hud, styles.hudTR)}>
        <span className={styles.hudKey}>PRESSURE</span>
        <span className={styles.hudVal}>{t.pressure.toFixed(0)} atm</span>
      </div>
      <div className={clsx(styles.hud, styles.hudBL)}>
        <span className={styles.hudKey}>BEARING</span>
        <span className={styles.hudVal}>{String(t.bearing).padStart(3, '0')}&deg;</span>
      </div>
      <div className={clsx(styles.hud, styles.hudBR)}>
        <span className={styles.hudKey}>TEMP</span>
        <span className={styles.hudVal}>{t.temp.toFixed(1)}&deg;C</span>
      </div>

      <div className={clsx(styles.contactAlert, contact && styles.contactAlertOn)} aria-hidden="true">
        &#9650; UNKNOWN CONTACT &mdash; BEARING {String(t.bearing).padStart(3, '0')}
      </div>
    </header>
  );
}
