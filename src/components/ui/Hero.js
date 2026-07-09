import React from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';

export default function Hero({
  title,
  subtitle,
  kicker,
  backgroundImage,
  actions,
  minHeight = '72vh',
  align = 'center',
  children,
}) {
  return (
    <header
      className={clsx(styles.hero, styles[`align-${align}`])}
      style={{
        minHeight,
        backgroundImage: backgroundImage
          ? `linear-gradient(180deg, rgba(0,128,128,0.55), rgba(0,128,128,0.75)), url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className={clsx('container', styles.content)}>
        <div className={styles.panel}>
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
      </div>
    </header>
  );
}
