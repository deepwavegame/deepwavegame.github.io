import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { PageHeader, Section } from '@site/src/components/ui';
import { AssetCard } from '@site/src/components/cards';
import assets from '@site/src/data/assets';

export default function Assets() {
  return (
    <Layout title="Assets" description="Game-ready 3D models and textures">
      <PageHeader
        kicker="// ASSET_REGISTRY"
        title={<><Translate id="assets.page.title.part1">ASSET</Translate> <span style={{ color: 'var(--c-accent)' }}><Translate id="assets.page.title.part2">REGISTRY</Translate></span></>}
        subtitle={<Translate id="assets.page.description">Production-grade assets optimized for modern rendering pipelines. High-fidelity models, PBR textures, and spatial audio kits.</Translate>}
      />

      <Section tone="base" spacing="lg">
        <div className="row">
          {assets.map((asset) => (
            <div className="col col--4" key={asset.id} style={{ marginBottom: '2rem' }}>
              <AssetCard asset={asset} />
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
