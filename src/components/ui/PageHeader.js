import React from 'react';
import styles from './PageHeader.module.css';
import Kicker from './Kicker';

export default function PageHeader({ kicker, title, subtitle, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.scanline} />
      <div className="container">
        {kicker && <Kicker className={styles.kicker}>{kicker}</Kicker>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
      <div className={styles.line} />
    </header>
  );
}
