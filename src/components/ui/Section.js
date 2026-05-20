import React from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

export default function Section({ children, tone = 'base', spacing = 'lg', className, style, id }) {
  return (
    <section
      id={id}
      className={clsx(styles.section, styles[`tone-${tone}`], styles[`sp-${spacing}`], className)}
      style={style}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, kicker, align = 'center', accent }) {
  return (
    <div className={clsx(styles.titleBlock, styles[`align-${align}`])}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h2 className={styles.title}>
        {children}
        {accent && <span className={styles.accent}> {accent}</span>}
      </h2>
    </div>
  );
}
