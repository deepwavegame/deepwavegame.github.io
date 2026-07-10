import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { PageHeader, Section } from '@site/src/components/ui';
import { AssetCard } from '@site/src/components/cards';
import { Ticker, SignalBars } from '@site/src/components/fx';
import assets from '@site/src/data/assets';
import cx from '../catalog.module.css';

const TICKER = [
  'ASSET REGISTRY ONLINE',
  'PBR TEXTURES · GAME-READY MESHES',
  'OPTIMIZED FOR MODERN PIPELINES',
  'WAVE0084 // SUPPLY DEPOT',
];

export default function Assets() {
  return (
    <Layout title="Assets" description="Game-ready 3D models and textures">
      <PageHeader
        kicker="// ASSET_REGISTRY"
        title="ASSET REGISTRY"
        subtitle="Production-grade assets optimized for modern rendering pipelines. High-fidelity models, PBR textures, and spatial audio kits."
        channel="CH.09"
        signal={`REGISTRY: ${String(assets.length).padStart(2, '0')}`}
      />

      <Ticker items={TICKER} tone="signal" />

      <Section tone="base" spacing="lg">
        <div className={cx.guide}>
          <span className={cx.guideLabel}>
            <span className={cx.guideDot} /> SUPPLY DEPOT
          </span>
          <span className={cx.guideCount}>{assets.length} PACK IN STOCK</span>
          <SignalBars count={5} className={cx.guideBars} />
        </div>

        <div className={clsx(cx.grid, cx.gridAssets)}>
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>

        <div className={cx.signoff}>
          ▚▚ MORE STOCK INBOUND · <b>STAND BY</b> · ▚▚
        </div>
      </Section>
    </Layout>
  );
}
