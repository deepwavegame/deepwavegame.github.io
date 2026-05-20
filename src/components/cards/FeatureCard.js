import React from 'react';
import { Card } from '@site/src/components/ui';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ index, icon, title, description }) {
  return (
    <Card className={styles.card}>
      {(index || icon) && (
        <div className={styles.header}>
          {icon ? <span className={styles.icon}>{icon}</span> : (
            <span className={styles.index}>{String(index).padStart(2, '0')}</span>
          )}
          <span className={styles.line} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </Card>
  );
}
