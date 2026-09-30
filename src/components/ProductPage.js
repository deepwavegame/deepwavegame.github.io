import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import PageHead from './PageHead';
import SpecList from './SpecList';
import FeatureList from './FeatureList';
import ProductSeo from '@site/src/lib/seo';
import { storeLinks } from '@site/src/lib/brands';
import { getTool, toolSpecs } from '@site/src/data/tools';
import styles from './ProductPage.module.css';

/** Detail page for one tool: description, features, FAQ and a sticky spec sheet. */
export default function ProductPage({ id }) {
  const tool = getTool(id);
  const { links, specs, seo = {} } = tool;
  const inDevelopment = tool.isUnderDevelopment;
  const faq = seo.faq ?? [];
  const hasDocs = links.docs && links.docs !== '#';

  return (
    <Layout title={tool.title} description={seo.description ?? tool.tagline}>
      <ProductSeo tool={tool} />
      <main className="page">
        <PageHead
          size="m"
          kicker={tool.type}
          meta={inDevelopment && 'In development'}
          title={tool.title}
          lead={tool.tagline}
        />

        <div className={styles.layout}>
          <div className={styles.main}>
            {tool.thumbnail && (
              <figure className={styles.figure}>
                <img src={tool.thumbnail} alt={`${tool.title} in a Unity scene`} width="1600" height="900" />
              </figure>
            )}

            <p className={styles.description}>{tool.description}</p>

            <section aria-labelledby="features">
              <h2 id="features" className={clsx(styles.heading, 'micro')}>
                Features
              </h2>
              <FeatureList features={tool.features} />
            </section>

            {!inDevelopment && faq.length > 0 && (
              <section aria-labelledby="faq" className={styles.faq}>
                <h2 id="faq" className={clsx(styles.heading, 'micro')}>
                  Frequently asked
                </h2>
                {faq.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </section>
            )}
          </div>

          <aside className={styles.sheet} aria-label="Specifications and purchase">
            {inDevelopment ? (
              <p className={clsx(styles.status, 'micro')}>
                <span className="dot" />
                Under development
              </p>
            ) : (
              <div className={styles.price}>
                <span className="micro">Price</span>
                <strong>{specs.price}</strong>
                <span className={styles.note}>One-time payment. Lifetime updates support.</span>
              </div>
            )}

            <SpecList items={toolSpecs(tool)} />

            <div className={styles.actions}>
              {!inDevelopment &&
                storeLinks(links).map(({ label, href }, i) => (
                  <Link key={href} to={href} className={clsx('button button--block', i === 0 && 'button--primary')}>
                    Buy on {label}
                  </Link>
                ))}
              {!inDevelopment &&
                links.demos?.map((demo) => (
                  <Link key={demo.href} to={demo.href} className="button button--block">
                    {demo.label}
                  </Link>
                ))}
              {hasDocs && (
                <Link to={links.docs} className="button button--block">
                  Read the docs
                </Link>
              )}
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
