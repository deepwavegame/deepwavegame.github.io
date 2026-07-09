import React from 'react';
import { Card, CardBody, CardMedia, Button, Badge, StatusBadge } from '@site/src/components/ui';
import styles from './ToolCard.module.css';

export default function ToolCard({ tool }) {
  const dev = tool.isUnderDevelopment;

  return (
    <Card flush className={styles.card}>
      <CardMedia src={tool.thumbnail} height={200}>
        <div className={styles.topRow}>
          <Badge tone="accent">{tool.type}</Badge>
          {dev && <StatusBadge status="development" />}
        </div>
        {tool.specs?.price && !dev && (
          <div className={styles.priceTag}>
            <span className={styles.priceLabel}>Price</span>
            <span className={styles.priceValue}>{tool.specs.price}</span>
          </div>
        )}
      </CardMedia>

      <CardBody>
        <h3 className={styles.title}>{tool.title}</h3>
        <p className={styles.tagline}>{tool.tagline}</p>
        <p className={styles.desc}>{tool.description}</p>

        <div className={styles.specs}>
          {tool.specs?.version && <span>{tool.specs.version}</span>}
          {tool.specs?.requirement && <span>{tool.specs.requirement}</span>}
        </div>

        <div className={styles.actions}>
          {tool.links.docs && tool.links.docs !== '#' && (
            <Button to={tool.links.docs} variant="ghost" size="md">
              DOCS
            </Button>
          )}
          <Button to={tool.links.page} variant={dev ? 'ghost' : 'primary'} size="md">
            DETAILS
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
