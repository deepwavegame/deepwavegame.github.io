import React from 'react';
import { Button, Badge, StatusBadge } from '@site/src/components/ui';
import { StaticField } from '@site/src/components/fx';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool }) {
  const dev = tool.isUnderDevelopment;
  const hasDocs = tool.links.docs && tool.links.docs !== '#';

  return (
    <div className={styles.card}>
      <div className={styles.screen}>
        {tool.thumbnail && (
          <div
            className={styles.shot}
            style={{ backgroundImage: `url(${tool.thumbnail})` }}
            aria-hidden
          />
        )}
        <StaticField className={styles.static} opacity={0.12} />
        <div className={styles.scan} aria-hidden />

        <div className={styles.topRow}>
          <Badge tone="accent" broadcast>{tool.type}</Badge>
          {dev && <StatusBadge status="development" />}
        </div>

        {!tool.thumbnail && <span className={styles.noSignal}>[ NO_SIGNAL ]</span>}

        {tool.specs?.price && !dev && (
          <div className={styles.priceTag}>
            <span className={styles.priceLabel}>PRICE</span>
            <span className={styles.priceValue}>{tool.specs.price}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{tool.title}</h3>
        <p className={styles.tagline}>{tool.tagline}</p>

        <div className={styles.specs}>
          {tool.specs?.requirement && <span>{tool.specs.requirement}</span>}
        </div>

        <div className={styles.actions}>
          {hasDocs && (
            <Button to={tool.links.docs} variant="bc" size="md">
              DOCS
            </Button>
          )}
          <Button to={tool.links.page} variant={dev ? 'bc' : 'bcPrimary'} size="md">
            DETAILS ▸
          </Button>
        </div>
      </div>
    </div>
  );
}
