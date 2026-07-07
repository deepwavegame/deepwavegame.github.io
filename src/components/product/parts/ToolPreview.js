import React from 'react';
import styles from './parts.module.css';

export default function ToolPreview({ thumbnail, label, dim }) {
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
