import React from 'react';
import Translate from '@docusaurus/Translate';
import { Card, StatList, Kicker } from '@site/src/components/ui';
import styles from './parts.module.css';

export default function ToolSpecs({ specs, actions, isUnderDevelopment }) {
  const specItems = [
    specs.version && { label: 'VERSION', value: specs.version },
    specs.requirement && { label: 'REQUIRES', value: specs.requirement },
    specs.size && { label: 'SIZE', value: specs.size },
  ].filter(Boolean);

  return (
    <Card hoverable={false} accent className={styles.specCard}>
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
          <p className={styles.priceNote}>
            <Translate id="tools.common.pricing_desc">One-time payment. Lifetime updates support.</Translate>
          </p>
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
