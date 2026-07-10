import React from 'react';
import { Card, StatList, Kicker } from '@site/src/components/ui';
import styles from './parts.module.css';

export default function ToolSpecs({ specs, actions, isUnderDevelopment }) {
  const specItems = [
    specs.version && { label: 'VERSION', value: specs.version },
    specs.requirement && { label: 'REQUIRES', value: specs.requirement },
    specs.size && { label: 'SIZE', value: specs.size },
  ].filter(Boolean);

  return (
    <Card hoverable={false} variant="broadcast" className={styles.specCard}>
      {isUnderDevelopment ? (
        <div className={styles.devBanner}>
          <span className={styles.devDot} />
          UNDER DEVELOPMENT
        </div>
      ) : (
        <>
          <div className={styles.priceWrap}>
            <span className={styles.priceLabel}>PRICE</span>
            <span className={styles.price}>{specs.price}</span>
          </div>
          <p className={styles.priceNote}>One-time payment. Lifetime updates support.</p>
        </>
      )}

      <Kicker align="center" line="both" tone="muted" className={styles.specsDivider}>
        TECH SPECS
      </Kicker>

      <StatList items={specItems} />

      <div className={styles.actions}>{actions}</div>
    </Card>
  );
}
