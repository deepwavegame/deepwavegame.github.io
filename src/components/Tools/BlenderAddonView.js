import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { ToolHeader, ToolSpecs, ToolFeatures } from './Shared';

export default function BlenderAddonView({ tool }) {
  const buyButtons = (
    <>
      {tool.links.blenderMarket && (
        <Link className="unity-button btn-blender" style={{ width: '100%', padding: '1rem' }} to={tool.links.blenderMarket}>
          <Translate id="tools.common.buy_blender_market">BUY ON BLENDER MARKET</Translate>
        </Link>
      )}
      {tool.links.itch && (
        <Link className="unity-button btn-itch" style={{ width: '100%', padding: '1rem' }} to={tool.links.itch}>
          <Translate id="tools.common.buy_itch">BUY ON ITCH.IO</Translate>
        </Link>
      )}
    </>
  );

  return (
    <Layout title={tool.title} description={tool.tagline}>
      <main style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col col--8">
              <ToolHeader title={tool.title} tagline={tool.tagline} />

              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={tool.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                  <div style={{ position: 'absolute', color: '#444' }}>[ BLENDER_ADDON_LOADED ]</div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', color: '#ccc', lineHeight: '1.8' }}>
                <p>{tool.description}</p>
              </div>

              <ToolFeatures features={tool.features} />
            </div>

            <div className="col col--4">
              <ToolSpecs specs={{ ...tool.specs, buyButtons }} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
