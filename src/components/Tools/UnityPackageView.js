import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { ToolHeader, ToolSpecs, ToolFeatures } from './Shared';

export default function UnityPackageView({ tool }) {
  const buyButtons = (
    <>
      {tool.isUnderDevelopment ? (
        <div style={{ 
          padding: '1.5rem', 
          border: '1px dashed #ff3d00', 
          backgroundColor: 'rgba(255, 61, 0, 0.05)',
          color: '#ff3d00',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          STILL UNDER DEVELOPMENT<br/>
          <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Coming Soon on Asset Store & Itch.io</span>
        </div>
      ) : (
        <>
          {tool.links.assetStore && (
            <Link className="unity-button btn-unity" style={{ width: '100%', padding: '1rem' }} to={tool.links.assetStore}>
              <Translate id="tools.common.buy_asset_store">BUY ON ASSET STORE</Translate>
            </Link>
          )}
          {tool.links.itch && (
            <Link className="unity-button btn-itch" style={{ width: '100%', padding: '1rem' }} to={tool.links.itch}>
              <Translate id="tools.common.buy_itch">BUY ON ITCH.IO</Translate>
            </Link>
          )}
        </>
      )}
      <Link className="unity-button" style={{ width: '100%', padding: '1rem' }} to={tool.links.docs}>
        <Translate id="tools.common.read_docs">DOCUMENTATION</Translate>
      </Link>
      {tool.isUnderDevelopment && (
         <Link className="unity-button" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }} to={`/news/tags/${tool.blogTag}`}>
            VIEW DEV LOGS
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
              <div style={{ position: 'relative' }}>
                <ToolHeader title={tool.title} tagline={tool.tagline} />
                {tool.isUnderDevelopment && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: '#ff3d00',
                      color: 'white',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      borderRadius: '2px',
                    }}>
                      DEVELOPMENT PHASE
                    </div>
                )}
              </div>
              
              <div style={{ backgroundColor: '#000', paddingBottom: '56.25%', position: 'relative', border: '1px solid #333' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={tool.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: tool.isUnderDevelopment ? 0.2 : 0.4 }} />
                  <div style={{ position: 'absolute', color: '#444' }}>
                    {tool.isUnderDevelopment ? '[ CLASSIFIED_PREVIEW ]' : '[ PREVIEW_ACTIVE ]'}
                  </div>
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
