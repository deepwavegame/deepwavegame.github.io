import React from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';

export default function Hero({
  title,
  subtitle,
  kicker,
  backgroundImage,
  actions,
  minHeight = '78vh',
  align = 'center',
  windowTitle = 'WAVE0084.EXE',
  children,
}) {
  return (
    <header
      className={clsx(styles.hero, styles[`align-${align}`])}
      style={{ minHeight }}
    >
      {backgroundImage && (
        <div
          className={styles.wallpaper}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden
        />
      )}

      <div className={clsx('container', styles.content)}>
        {/* The hero content sits in a real Win9x application window */}
        <div className={styles.window}>
          <div className={styles.titlebar}>
            <span className={styles.titlebarLabel}>
              <span className={styles.titlebarIcon} aria-hidden />
              {windowTitle}
            </span>
            <span className={styles.titlebarButtons} aria-hidden>
              <span className={styles.tbBtn} data-glyph="min" />
              <span className={styles.tbBtn} data-glyph="max" />
              <span className={styles.tbBtn} data-glyph="close" />
            </span>
          </div>

          <div className={styles.body}>
            {kicker && (
              <div className={styles.status}>
                <span className={styles.statusDot} />
                <span>{kicker}</span>
              </div>
            )}

            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
            {children}
          </div>

          <div className={styles.statusbar} aria-hidden>
            <span className={styles.statusField}>READY</span>
            <span className={styles.statusFieldGrow}>C:\WAVE0084\SYSTEM</span>
            <span className={styles.statusField}>
              <span className={styles.led} /> ONLINE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
