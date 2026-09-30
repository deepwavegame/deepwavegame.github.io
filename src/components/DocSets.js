import Link from '@docusaurus/Link';
import tools from '@site/src/data/tools';
import Arrow from './Arrow';
import styles from './DocSets.module.css';

const documented = tools.filter((tool) => tool.links.docs && tool.links.docs !== '#');

/** One row per documented package, linking to its manual. Takes its colours from the band around it. */
export default function DocSets() {
  return (
    <nav aria-label="Documentation">
      <ul className={styles.list}>
        {documented.map((tool) => (
          <li key={tool.id}>
            <Link to={tool.links.docs} className={styles.row}>
              <span className={styles.name}>{tool.title}</span>
              <span className={styles.desc}>{tool.tagline}</span>
              <span className={styles.go} aria-hidden="true">
                <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
