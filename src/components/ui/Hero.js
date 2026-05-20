import React from 'react';
import clsx from 'clsx';
import styles from './Hero.module.css';

export default function Hero({
  title,
  subtitle,
  kicker,
  backgroundImage,
  actions,
  minHeight = '85vh',
  glitch = true,
  align = 'center',
  children,
}) {
  return (
    <header
      className={clsx(styles.hero, styles[`align-${align}`])}
      style={{
        minHeight,
        backgroundImage: backgroundImage
          ? `linear-gradient(to bottom, rgba(5,5,5,0.65), rgba(5,5,5,0.95)), url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className={styles.vignette} />
      <div className={styles.scanlines} />
      <div className={clsx('container', styles.content)}>
        {kicker && <div className={styles.kicker}>{kicker}</div>}
        {title && (
          <h1 className={clsx(styles.title, glitch && styles.glitch)} data-text={typeof title === 'string' ? title : ''}>
            {title}
          </h1>
        )}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {actions && <div className={styles.actions}>{actions}</div>}
        {children}
      </div>
      <div className={styles.cornerTL}>+</div>
      <div className={styles.cornerTR}>+</div>
      <div className={styles.cornerBL}>+</div>
      <div className={styles.cornerBR}>+</div>
    </header>
  );
}
