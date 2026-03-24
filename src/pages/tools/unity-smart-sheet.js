import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import tools from '@site/src/data/tools';

export default function UnitySmartSheetSales() {
  const toolData = tools.find(t => t.id === 'unity-smart-sheet');

  return (
    <Layout
      title="Unity Smart Sheet"
      description="Quản lý dữ liệu Unity bằng Spreadsheet">
      <main style={{ backgroundColor: '#282828', minHeight: '100vh', padding: '4rem 0' }}>
        <div className="container">

          <div className="row">
            <div className="col col--8">
              <h1 style={{ fontSize: '3rem', color: '#ffffff' }}>Unity Smart Sheet</h1>
              <p style={{ fontSize: '1.2rem', color: '#d2d2d2' }}>
                <Translate id="tools.unity-smart-sheet.hero.desc">Comprehensive data management solution for games using Spreadsheet interface right in Unity Editor.</Translate>
              </p>

              <div className="unity-card" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h3><Translate id="tools.unity-smart-sheet.why.title">Why choose Unity Smart Sheet?</Translate></h3>
                <ul style={{ lineHeight: '1.8' }}>
                  <li><Translate id="tools.unity-smart-sheet.why.item1">Quickly edit data without opening Excel or Google Sheets.</Translate></li>
                  <li><Translate id="tools.unity-smart-sheet.why.item2">Automatically Serialize data to ScriptableObject or JSON.</Translate></li>
                  <li><Translate id="tools.unity-smart-sheet.why.item3">Support teamwork via Google Sheets Sync.</Translate></li>
                  <li><Translate id="tools.unity-smart-sheet.why.item4">Data validation upon entry.</Translate></li>
                </ul>
              </div>

              <Link className="unity-button" to="/docs/tools/unity-smart-sheet/intro">
                <Translate id="tools.common.read_docs">Read Documentation</Translate>
              </Link>
            </div>

            <div className="col col--4">
              <div className="unity-card" style={{ position: 'sticky', top: '100px', backgroundColor: '#1e1e1e', border: '1px solid #3d8bff' }}>
                <h3 style={{ textAlign: 'center', color: '#3d8bff', fontSize: '2rem', margin: '1rem 0' }}>$24.99</h3>
                <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                  <Translate id="tools.common.pricing_desc">One-time payment. Lifetime updates support.</Translate>
                </p>

                <ul style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '2rem' }}>
                  <li><Translate id="tools.unity-smart-sheet.specs.req">Requires Unity 2021.3+</Translate></li>
                  <li><Translate id="tools.unity-smart-sheet.specs.size">Size: 2.5 MB</Translate></li>
                  <li><Translate id="tools.unity-smart-sheet.specs.version">Current Version: v1.2.0</Translate></li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
