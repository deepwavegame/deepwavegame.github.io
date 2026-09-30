import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Arrow from '@site/src/components/Arrow';
import DocSets from '@site/src/components/DocSets';
import Wave from '@site/src/components/Wave';
import assets from '@site/src/data/assets';
import games, { STATUS_LABELS } from '@site/src/data/games';
import studio from '@site/src/data/studio';
import tools from '@site/src/data/tools';
import { SOCIAL } from '@site/src/lib/brands';
import styles from './index.module.css';

const pad = (n) => String(n).padStart(2, '0');

/** "2 available · 1 in development" */
const tally = (items, describe) =>
  Object.entries(
    items.reduce((counts, item) => {
      const key = describe(item);
      return { ...counts, [key]: (counts[key] ?? 0) + 1 };
    }, {}),
  )
    .map(([key, n]) => `${n} ${key}`)
    .join(' · ');

const tallies = {
  Games: tally(games, (game) => STATUS_LABELS[game.status].toLowerCase()),
  Tools: tally(tools, (tool) => (tool.isUnderDevelopment ? 'in development' : 'available')),
  Assets: tally(assets, () => 'available'),
};

const shelf = tools.filter((tool) => !tool.isUnderDevelopment);
const [painter, roof] = ['simple-painter', 'infinite-corrugated-roof'].map((id) => tools.find((t) => t.id === id));

function Opening() {
  const game = games[0];
  return (
    <header className={clsx('page', styles.opening)}>
      <div className={clsx('micro', styles.meta)}>
        <span>
          Independent studio · Est. {studio.founded}
        </span>
        <span>
          <span className="dot" />
          Transmission 0084
        </span>
      </div>

      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{studio.name}</h1>
      </div>
      <Wave className={styles.wave} />

      <div className={styles.columns}>
        <div className={styles.intro}>
          <p className={styles.tagline}>{studio.tagline}</p>
          <p className="lead">{studio.intro}</p>
          <div className={styles.actions}>
            <Link to="/tools" className="button button--primary">
              Browse the tools
            </Link>
            <Link to="/games" className="button">
              See the games
            </Link>
          </div>
        </div>

        <aside className={styles.now} aria-labelledby="now-title">
          <p className="micro">
            <span className="dot" />
            Now in production
          </p>
          <h2 id="now-title" className={styles.nowTitle}>
            {game.title}
          </h2>
          <p>{game.description}</p>
          <p className={clsx('micro', styles.nowMeta)}>
            {game.genre} · {game.engine} · {game.specs.find(([k]) => k === 'Estimated')?.[1]}
          </p>
          <Link to={game.link} className="arrow-link">
            Read the premise <Arrow />
          </Link>
        </aside>
      </div>
    </header>
  );
}

function Strap() {
  return (
    <section className="band band--ink" aria-label="Station identification">
      <div className={clsx('page', styles.strap)}>
        {studio.strap.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="page" aria-labelledby="make-title">
      <h2 id="make-title" className={clsx('micro', styles.sectionLabel)}>
        What we make
      </h2>
      <ul className={styles.depts}>
        {studio.departments.map((dept, i) => (
          <li key={dept.title}>
            <Link to={dept.to} className={styles.dept}>
              <span className={clsx('micro', styles.deptNum)}>{pad(i + 1)}</span>
              <span className={styles.deptTitle}>{dept.title}</span>
              <span className={styles.deptText}>
                {dept.text}
                <span className={clsx('micro', styles.deptCount)}>{tallies[dept.title]}</span>
              </span>
              <span className={styles.deptGo} aria-hidden="true">
                <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Toolchain() {
  return (
    <section className="band band--deep" aria-labelledby="toolchain-title">
      <div className={clsx('page', styles.toolchain)}>
        <h2 id="toolchain-title" className={styles.h2}>
          The toolchain
        </h2>

        <div className={styles.plates}>
          <figure className={styles.plateA}>
            <img
              src={painter.thumbnail}
              alt="A blue brush stroke painted onto a framed canvas at runtime, inside the Simple Painter demo."
              width="1600"
              height="900"
              loading="lazy"
            />
            <figcaption className="micro">Simple Painter · runtime painting in the demo scene</figcaption>
          </figure>
          <figure className={styles.plateB}>
            <img
              src={roof.thumbnail}
              alt="A night alley lined with rusted, multi-coloured corrugated metal sheets under street lamps."
              width="1600"
              height="818"
              loading="lazy"
            />
            <figcaption className="micro">Infinite Corrugated Roof · corrugated sheet at night</figcaption>
          </figure>
        </div>

        <ol className={styles.shelf}>
          {shelf.map((tool, i) => (
            <li key={tool.id}>
              <Link to={tool.links.page} className={styles.shelfRow}>
                <span className={clsx('micro', styles.shelfNum)}>{pad(i + 1)}</span>
                <span className={styles.shelfName}>{tool.title}</span>
                <span className={styles.shelfText}>{tool.tagline}</span>
                <span className={clsx('micro', styles.shelfMeta)}>{tool.specs.version}</span>
                <span className={styles.shelfPrice}>{tool.specs.price}</span>
                <span className={styles.shelfGo} aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Manual() {
  return (
    <section className="band band--ink" aria-labelledby="manual-title">
      <div className={clsx('page', styles.manual)}>
        <div>
          <h2 id="manual-title" className={styles.h2}>
            Read the manual
          </h2>
          <p className={styles.manualLead}>Documentation for every package.</p>
          <Link to="/docs" className="arrow-link">
            All documentation <Arrow />
          </Link>
        </div>
        <DocSets />
      </div>
    </section>
  );
}

function Statement() {
  const { statement } = studio;
  return (
    <section className={clsx('page', styles.statement)} aria-labelledby="studio-title">
      <h2 id="studio-title" className={styles.h2}>
        {statement.title}
      </h2>
      <div className={styles.statementText}>
        {statement.text.map((line) => (
          <p key={line} className="lead">
            {line}
          </p>
        ))}
        <div className={styles.contact}>
          <a href={`mailto:${SOCIAL.email}`} className="button button--primary">
            Write to the studio
          </a>
          <Link to="/blog" className="arrow-link">
            Read the devlog <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title={studio.tagline} description={studio.description}>
      <main>
        <Opening />
        <Strap />
        <Departments />
        <Toolchain />
        <Manual />
        <Statement />
      </main>
    </Layout>
  );
}
