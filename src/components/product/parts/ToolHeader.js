import React from 'react';
import { Badge } from '@site/src/components/ui';
import styles from './parts.module.css';

export default function ToolHeader({ title, tagline, type, isUnderDevelopment }) {
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
