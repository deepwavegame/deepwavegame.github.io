import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Entry from '@site/src/components/Entry';
import PageHead from '@site/src/components/PageHead';
import assets from '@site/src/data/assets';
import { storeLinks } from '@site/src/lib/brands';

export default function Assets() {
  return (
    <Layout title="Assets" description="Game-ready 3D models and PBR textures by WAVE0084 Studio, optimized for modern rendering pipelines.">
      <main className="page">
        <PageHead
          kicker="Index"
          meta={`${assets.length} in stock`}
          title="Assets"
          lead="Production-grade assets optimized for modern rendering pipelines: high-fidelity models, PBR textures and spatial audio kits."
        />
        {assets.map((asset, i) => (
          <Entry
            key={asset.id}
            index={i + 1}
            kicker={asset.type}
            title={asset.title}
            text={asset.description}
            specs={[['Price', asset.price]]}
          >
            {storeLinks(asset).map(({ label, href }, j) => (
              <Link key={href} to={href} className={clsx('button', j === 0 && 'button--primary')}>
                {label}
              </Link>
            ))}
          </Entry>
        ))}
      </main>
    </Layout>
  );
}
