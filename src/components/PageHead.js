import clsx from 'clsx';
import styles from './PageHead.module.css';

/**
 * Editorial page opening: a ruled kicker line, a very large title and a short
 * introduction. `size="l"` suits one-word index titles, `"m"` product names.
 */
export default function PageHead({ kicker, meta, title, lead, size = 'l', children }) {
  return (
    <header className={styles.head}>
      <div className={clsx(styles.meta, 'micro')}>
        <span>{kicker}</span>
        {meta && <span>{meta}</span>}
      </div>
      <div className={styles.grid}>
        <h1 className={clsx(styles.title, styles[size])}>{title}</h1>
        {(lead || children) && (
          <div className={styles.side}>
            {lead && <p className="lead">{lead}</p>}
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
