import React from 'react';
import Translate from '@docusaurus/Translate';
import { Card, StatList, Badge } from '@site/src/components/ui';
import { FeatureCard } from '@site/src/components/cards';
import styles from './Shared.module.css';

export function ToolSpecs({ specs, actions, isUnderDevelopment }) {
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

      <div className={styles.divider}>
        <span>TECH SPECS</span>
      </div>

      <StatList items={specItems} />

      <div className={styles.actions}>
        {actions}
      </div>
    </Card>
  );
}

export function ToolHeader({ title, tagline, type, isUnderDevelopment }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerMeta}>
        <Badge tone="accent">{type}</Badge>
        {isUnderDevelopment && <Badge tone="warn" pulse>DEV PHASE</Badge>}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.tagline}>{tagline}</p>
    </header>
  );
}

export function ToolFeatures({ features }) {
  return (
    <div className={styles.features}>
      <div className={styles.featuresHeader}>
        <span className={styles.featuresKicker}>// CORE_FEATURES</span>
        <span className={styles.featuresLine} />
      </div>
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

export function ToolPreview({ thumbnail, label, dim }) {
  return (
    <div className={styles.preview}>
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          className={styles.previewImg}
          style={{ opacity: dim ? 0.2 : 0.4 }}
        />
      )}
      <div className={styles.previewLabel}>{label}</div>
      <div className={styles.previewGrid} />
    </div>
  );
}
