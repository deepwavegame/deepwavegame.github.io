import React from 'react';
import clsx from 'clsx';
import styles from './PageHeader.module.css';

export default function PageHeader({ kicker, title, subtitle, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.scanline} />
      <div className="container">
        {kicker && <div className={styles.kicker}>{kicker}</div>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.extra}>{children}</div>}
      </div>
      <div className={styles.line} />
    </header>
  );
}
