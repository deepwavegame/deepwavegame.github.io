import React from 'react';
import { Kicker } from '@site/src/components/ui';
import { FeatureCard } from '@site/src/components/cards';
import styles from './parts.module.css';

export default function ToolFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <div className={styles.features}>
      <Kicker line="trailing" className={styles.featuresHeader}>
        // CORE_FEATURES
      </Kicker>
      <div className="row">
        {features.map((f, i) => (
          <div className="col col--6" key={i} style={{ marginBottom: '1rem' }}>
            <FeatureCard index={i + 1} title={f.title} description={f.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
