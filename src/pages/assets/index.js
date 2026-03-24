import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import assets from '@site/src/data/assets';

function AssetGrid({ children }) {
  return (
    <div className="row" style={{ marginTop: '4rem' }}>
      {children}
    </div>
  );
}

function AssetCard({ asset }) {
  return (
    <div className="col col--4" style={{ marginBottom: '2rem' }}>
      <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
        <div className="asset-type-badge">{asset.type}</div>
        <div style={{
          height: '220px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0) 60%, rgba(10,10,10,1)), url(${asset.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>

        <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', marginTop: '-20px' }}>
          <h3 style={{ marginTop: '0.5rem', fontSize: '1.3rem', marginBottom: '1rem', color: '#ffffff', letterSpacing: '1px' }}>{asset.title}</h3>

          <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>{asset.description}</p>

          <div className="asset-price-wrapper">
            <span className="asset-price-label"><Translate id="assets.common.price">Price</Translate></span>
            <span className="asset-price-value">{asset.price}</span>
          </div>

          <div style={{ borderTop: '1px solid #222', paddingTop: '0.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
              {asset.cgTrader && (
                <Link className="unity-button btn-sm btn-cgtrader" to={asset.cgTrader} style={{ margin: 0, flex: '1 1 45%' }}>
                  CGTRADER
                </Link>
              )}
              {asset.blenderMarket && (
                <Link className="unity-button btn-sm btn-blender" to={asset.blenderMarket} style={{ margin: 0, flex: '1 1 45%' }}>
                  BLENDER MARKET
                </Link>
              )}
              {asset.assetStore && (
                <Link className="unity-button btn-sm btn-unity" to={asset.assetStore} style={{ margin: 0, flex: '1 1 45%' }}>
                  ASSET STORE
                </Link>
              )}
              {asset.itch && (
                <Link className="unity-button btn-sm btn-itch" to={asset.itch} style={{ margin: 0, flex: '1 1 45%' }}>
                  ITCH.IO
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Assets() {
  return (
    <Layout
      title="Assets"
      description="Game-ready 3D models and textures">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title">
          <Translate id="assets.page.title.part1">ASSET</Translate> <span><Translate id="assets.page.title.part2">REGISTRY</Translate></span>
        </h1>
        <p style={{ textAlign: 'center', color: '#888', maxWidth: '700px', margin: '0 auto' }}>
          <Translate id="assets.page.description">Production-grade assets optimized for modern rendering pipelines. High-fidelity models, PBR textures, and spatial audio kits.</Translate>
        </p>

        <AssetGrid>
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </AssetGrid>
      </main>
    </Layout>
  );
}
