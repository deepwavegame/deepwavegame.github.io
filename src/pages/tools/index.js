import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import tools from '@site/src/data/tools';

export default function Tools() {
  return (
    <Layout
      title="Tools"
      description="Professional Unity tools by Deepwave Game Studio">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title">
          <span>TECHNICAL</span> SYSTEMS
        </h1>
        
        <div className="row" style={{ marginTop: '4rem' }}>
          {tools.map((tool) => (
            <div className="col col--6" key={tool.id} style={{ marginBottom: '2rem' }}>
              <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '2px' }}>{tool.title}</h3>
                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                  {tool.description}
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                  <Link className="unity-button primary" to={tool.docs} style={{ flex: 1 }}>
                    <Translate id="tools.view_docs">DOCUMENTATION</Translate>
                  </Link>
                  <Link className="unity-button" to={tool.link} style={{ flex: 1 }}>
                    <Translate id="tools.view_specs">SPECIFICATIONS</Translate>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
