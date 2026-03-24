import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import tools from '@site/src/data/tools';

export default function SimplePaintSales() {
  const toolData = tools.find(t => t.id === 'simple-paint');

  return (
    <Layout
      title="Simple Paint for Unity"
      description="Hệ thống vẽ 2D mạnh mẽ cho game Unity">
      <main style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1 className="horror-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>SIMPLE PAINT</h1>
            </div>
          </div>

          <div className="row">
            <div className="col col--7">
              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', borderRadius: '4px', overflow: 'hidden', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ color: '#444' }}>[ Simple Paint Promo Video ]</p>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <h2><Translate id="tools.simple-paint.feature.title">Paint Directly on Textures</Translate></h2>
                <p><Translate id="tools.simple-paint.feature.desc">Simple Paint provides a simple API so you can integrate drawing/painting features into your game. Whether it's painting on walls, signing paper, or creating bloodstains, Simple Paint handles it smoothly.</Translate></p>

                <div className="row" style={{ marginTop: '2rem' }}>
                  <div className="col col--6">
                    <div className="unity-card">
                      <h4><Translate id="tools.simple-paint.feature1.title">Shader Optimized</Translate></h4>
                      <p><Translate id="tools.simple-paint.feature1.desc">Uses GPU for drawing, ensuring FPS doesn't drop even on mobile.</Translate></p>
                    </div>
                  </div>
                  <div className="col col--6">
                    <div className="unity-card">
                      <h4><Translate id="tools.simple-paint.feature2.title">Multiple Brush Types</Translate></h4>
                      <p><Translate id="tools.simple-paint.feature2.desc">Supports Texture Brushes, allowing you to create realistic drawing effects.</Translate></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col--5">
              <div className="unity-card" style={{ borderTop: '4px solid #00e5ff' }}>
                <h3><Translate id="tools.common.get_started">Get Started</Translate></h3>
                <p style={{ color: '#888' }}><Translate id="tools.simple-paint.cta.desc">Integrate a professional painting system into your Unity project in minutes.</Translate></p>
                <div style={{ marginTop: '2.5rem', backgroundColor: '#222', padding: '1.5rem', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '1rem' }}><Translate id="tools.common.system_req">System Requirements</Translate></h4>
                  <ul style={{ fontSize: '0.85rem', color: '#aaa', paddingLeft: '1.2rem' }}>
                    <li><Translate id="tools.simple-paint.req1">Unity 2020.3 LTS or higher.</Translate></li>
                    <li><Translate id="tools.simple-paint.req2">Supports Built-in, URP and HDRP.</Translate></li>
                    <li><Translate id="tools.simple-paint.req3">Works on Windows, Mac, iOS and Android.</Translate></li>
                  </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '2rem' }}>
                  <Link className="unity-button" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to="/docs/tools/simple-paint/intro">
                    <Translate id="tools.common.read_docs">DOCUMENTATION</Translate>
                  </Link>
                  {toolData?.assetStore && (
                    <Link className="unity-button btn-unity" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to={toolData.assetStore}>
                      <Translate id="tools.common.buy_asset_store">BUY ON ASSET STORE</Translate>
                    </Link>
                  )}
                  {toolData?.itch && (
                    <Link className="unity-button btn-itch" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }} to={toolData.itch}>
                      <Translate id="tools.common.buy_itch">BUY ON ITCH.IO</Translate>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
