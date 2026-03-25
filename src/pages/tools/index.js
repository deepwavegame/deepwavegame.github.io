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
          <Translate id="tools.page.title.part1">TECHNICAL</Translate> <span><Translate id="tools.page.title.part2">SYSTEMS</Translate></span>
        </h1>

        <div className="row" style={{ marginTop: '4rem' }}>
          {tools.map((tool) => (
            <div className="col col--6" key={tool.id} style={{ marginBottom: '2rem' }}>
              <div className="unity-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
                <div style={{
                  height: '200px',
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${tool.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderBottom: '1px solid #222',
                  position: 'relative'
                }}>
                  {tool.isUnderDevelopment && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#ff3d00',
                      color: 'white',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.7rem',
                      fontWeight: 'bold',
                      borderRadius: '2px',
                      zIndex: 1,
                      boxShadow: '0 0 10px rgba(255, 61, 0, 0.5)'
                    }}>
                      UNDER DEVELOPMENT
                    </div>
                  )}
                </div>

                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ color: tool.isUnderDevelopment ? '#666' : '#00e5ff', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>{tool.title}</h3>
                    <span style={{ fontSize: '0.7rem', color: '#666', fontWeight: 'bold' }}>{tool.type}</span>
                  </div>

                  <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                    {tool.description}
                  </p>

                  <div style={{ marginTop: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {tool.isUnderDevelopment ? (
                        <Link className="unity-button" to={`/news/tags/${tool.blogTag}`} style={{ flex: 1, borderStyle: 'dashed', borderColor: '#444' }}>
                          DEV LOGS
                        </Link>
                      ) : (
                        <Link className="unity-button" to={tool.links.docs} style={{ flex: 1 }}>
                          <Translate id="tools.view_docs">DOCUMENTATION</Translate>
                        </Link>
                      )}
                      <Link 
                        className={`unity-button primary ${tool.isUnderDevelopment ? 'disabled' : ''}`} 
                        to={tool.isUnderDevelopment ? '#' : tool.links.page} 
                        style={{ 
                          flex: 1,
                          opacity: tool.isUnderDevelopment ? 0.5 : 1,
                          cursor: tool.isUnderDevelopment ? 'not-allowed' : 'pointer'
                        }}
                        onClick={e => tool.isUnderDevelopment && e.preventDefault()}
                      >
                        <Translate id="tools.view_specs">SPECIFICATIONS</Translate>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
