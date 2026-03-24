import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import blogPosts from '@site/src/data/blog';

export default function BlogHub() {
  const [filter, setFilter] = useState('ALL');
  const filteredPosts = filter === 'ALL' ? blogPosts : blogPosts.filter(p => p.tag === filter);

  return (
    <Layout
      title="Field Reports"
      description="Deepwave Game Studio - Technical horror blog and field analysis">
      <main style={{ backgroundColor: '#050505', minHeight: '100vh', paddingBottom: '6rem' }}>
        
        {/* Blog Header */}
        <header style={{ padding: '6rem 0', borderBottom: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>
          <div className="scanline-effect"></div>
          <div className="container">
            <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              <Translate id="blog.page.title.part1">FIELD</Translate> <span><Translate id="blog.page.title.part2">REPORTS</Translate></span>
            </h1>
            <p style={{ color: '#666', maxWidth: '600px', fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace' }}>
              [ LOG_ACCESS: GRANTED ]<br />
              <Translate id="blog.page.subtitle">Technical deconstructions, field analysis of horror entities, and studio engineering logs.</Translate>
            </p>
            
            {/* Filter UI */}
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['ALL', 'FIELD ANALYSIS', 'ENGINEERING', 'STUDIO LOG'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    background: filter === cat ? 'var(--ifm-color-primary)' : 'transparent',
                    color: filter === cat ? '#000' : '#888',
                    border: `1px solid ${filter === cat ? 'var(--ifm-color-primary)' : '#333'}`,
                    padding: '0.5rem 1.5rem',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Blog Grid */}
        <div className="container" style={{ marginTop: '4rem' }}>
          <div className="row">
            {filteredPosts.map((post) => (
              <div className="col col--4" key={post.id} style={{ marginBottom: '3rem' }}>
                <Link to={post.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="blog-card">
                    <div 
                      className="blog-card-img" 
                      style={{ backgroundImage: `url(${post.thumbnail})` }}
                    >
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.8)', padding: '2px 8px' }}>
                         <span className="blog-date">{post.date}</span>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <span className="blog-tag" style={{ color: post.tag === 'ENGINEERING' ? '#00e5ff' : '#ff3c00' }}>
                        {post.tag}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff', lineHeight: '1.4' }}>
                        {post.title}
                      </h3>
                      <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {post.description}
                      </p>
                    </div>
                    <div style={{ marginTop: 'auto', padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <div style={{ height: '1px', flexGrow: 1, backgroundColor: '#222' }}></div>
                       <span style={{ fontSize: '0.65rem', color: 'var(--ifm-color-primary)', fontWeight: 'bold' }}>READ_REPORT</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
