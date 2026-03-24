import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export function ToolSpecs({ specs }) {
  return (
    <div className="unity-card" style={{ position: 'sticky', top: '100px', backgroundColor: '#1e1e1e', border: '1px solid var(--ifm-color-primary)' }}>
      <h3 style={{ textAlign: 'center', color: 'var(--ifm-color-primary)', fontSize: '2rem', margin: '1rem 0' }}>{specs.price}</h3>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
        <Translate id="tools.common.pricing_desc">One-time payment. Lifetime updates support.</Translate>
      </p>

      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #333' }}>
        <h4 style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Technical Specs</h4>
        <ul style={{ fontSize: '0.85rem', color: '#aaa', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Req:</strong> {specs.requirement}</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Size:</strong> {specs.size}</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Ver:</strong> {specs.version}</li>
        </ul>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1.5rem' }}>
        {specs.buyButtons}
      </div>
    </div>
  );
}

export function ToolHeader({ title, tagline }) {
  return (
    <header style={{ marginBottom: '4rem' }}>
      <h1 style={{ fontSize: '3.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>{title}</h1>
      <p style={{ fontSize: '1.4rem', color: 'var(--ifm-color-primary)', fontWeight: '300' }}>{tagline}</p>
    </header>
  );
}

export function ToolFeatures({ features }) {
  return (
    <div style={{ marginTop: '3rem' }}>
      <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.5rem' }}>CORE <span>FEATURES</span></h2>
      <div className="row">
        {features.map((f, idx) => (
          <div className="col col--6" key={idx} style={{ marginBottom: '1rem' }}>
            <div className="unity-card" style={{ height: '100%' }}>
              <h4 style={{ color: 'var(--ifm-color-primary)' }}>{f.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa' }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
