import clsx from 'clsx';
import Link from '@docusaurus/Link';
import SpecList from './SpecList';
import styles from './Entry.module.css';

/**
 * One row of an index: number, kicker, big title, blurb, and a side column with
 * an optional picture and spec list. The title link stretches over the whole
 * row; action links inside `children` stay independently clickable.
 */
export default function Entry({ index, kicker, status, title, to, redacted, text, image, imageAlt = '', specs, children }) {
  return (
    <article className={styles.entry}>
      <p className={clsx(styles.num, 'micro')} aria-hidden="true">
        {String(index).padStart(2, '0')}
      </p>

      <div className={styles.main}>
        <p className={clsx(styles.kicker, 'micro')}>
          {kicker}
          {status && (
            <span className={styles.status}>
              <span className="dot" />
              {status}
            </span>
          )}
        </p>
        <h2 className={clsx(styles.title, redacted && styles.redacted)}>
          {to ? (
            <Link to={to} className={styles.link}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {text && <p className={styles.text}>{text}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>

      <div className={styles.side}>
        {image && <img className={styles.image} src={image} alt={imageAlt} loading="lazy" width="800" height="450" />}
        {specs && <SpecList items={specs} />}
      </div>
    </article>
  );
}
