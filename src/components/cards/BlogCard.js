import React from 'react';
import Link from '@docusaurus/Link';
import { Card, CardMedia } from '@site/src/components/ui';
import styles from './BlogCard.module.css';

const TAG_COLORS = {
  'ENGINEERING': 'var(--c-accent)',
  'FIELD ANALYSIS': '#ff6b35',
  'STUDIO LOG': '#a78bfa',
};

export default function BlogCard({ post }) {
  return (
    <Link to={post.link} className={styles.link}>
      <Card flush className={styles.card}>
        <CardMedia src={post.thumbnail} height={200} className={styles.media}>
          <div className={styles.date}>{post.date}</div>
        </CardMedia>
        <div className={styles.body}>
          <span className={styles.tag} style={{ color: TAG_COLORS[post.tag] || 'var(--c-text-2)' }}>
            {post.tag}
          </span>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.desc}>{post.description}</p>
          <div className={styles.footer}>
            <span className={styles.line} />
            <span className={styles.read}>READ_REPORT →</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
