import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import PageHead from './PageHead';
import SpecList from './SpecList';
import FeatureList from './FeatureList';
import { getGame } from '@site/src/data/games';
import { storeLinks } from '@site/src/lib/brands';
import styles from './GamePage.module.css';

/** Detail page for one game: premise, specs, features and trailer. */
export default function GamePage({ id }) {
  const game = getGame(id);
  const { story, features, specs } = game;

  return (
    <Layout title={game.title} description={game.description}>
      <main className="page">
        <PageHead
          size="l"
          kicker={`${game.genre} · ${game.engine}`}
          meta={game.year}
          title={game.title}
          lead={game.subtitle}
        >
          <div className={styles.actions}>
            <a href="#trailer" className="button button--primary">
              Trailer
            </a>
            {storeLinks(game).map(({ label, href }) => (
              <Link key={href} to={href} className="button">
                {label}
              </Link>
            ))}
          </div>
        </PageHead>

        {specs && (
          <section aria-label="Specifications" className={styles.specs}>
            <SpecList items={specs} />
          </section>
        )}

        {story && (
          <section aria-labelledby="story" className={styles.story}>
            <h2 id="story" className="micro">
              Story
            </h2>
            <div className={styles.storyText}>
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {story.quote && <blockquote className={styles.quote}>“{story.quote}”</blockquote>}
            </div>
          </section>
        )}

        {features && (
          <section aria-labelledby="features" className={styles.block}>
            <h2 id="features" className={clsx('micro', styles.heading)}>
              Key features
            </h2>
            <FeatureList features={features} />
          </section>
        )}

        <section id="trailer" aria-labelledby="trailer-title" className={clsx(styles.block, styles.trailer)}>
          <h2 id="trailer-title" className={clsx('micro', styles.heading)}>
            Trailer
          </h2>
          <p className={styles.pending}>Trailer to be announced.</p>
        </section>
      </main>
    </Layout>
  );
}
