import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import games from '@site/src/data/games';

export default function Games() {
  return (
    <Layout
      title="Games"
      description="Deepwave Game Studio projects">
      <main className="container" style={{ padding: '6rem 0' }}>
        <h1 className="section-title">
          <Translate id="games.page.title.part1">PROJECT</Translate> <span><Translate id="games.page.title.part2">REPOSITORY</Translate></span>
        </h1>

        <div className="row" style={{ marginTop: '4rem' }}>
          {games.map((game) => (
            <div className="col col--6" key={game.id} style={{ marginBottom: '2rem' }}>
              <div className="unity-card" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {game.isUnderDevelopment && (
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
                      zIndex: 2,
                      boxShadow: '0 0 10px rgba(255, 61, 0, 0.5)'
                    }}>
                      UNDER DEVELOPMENT
                    </div>
                  )}

                <div style={{
                    height: '300px',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${game.thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #222',
                    filter: game.isUnderDevelopment ? 'grayscale(100%)' : 'none'
                }}>
                    <h2 className="horror-title" style={{ fontSize: '3rem', letterSpacing: '8px', opacity: game.isUnderDevelopment ? 0.3 : 1 }}>
                    {game.id.toUpperCase().replace('-', ' ')}
                    </h2>
                </div>
                
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ color: game.isUnderDevelopment ? '#666' : '#00e5ff' }}>{game.title}</h3>
                    <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {game.description}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <Link 
                        className="unity-button primary" 
                        to={game.isUnderDevelopment ? `/news/tags/${game.blogTag}` : game.link} 
                        style={{ width: '100%' }}
                    >
                        {game.isUnderDevelopment ? (
                            <Translate id="games.view_devlogs">VIEW DEVELOPMENT LOGS</Translate>
                        ) : (
                            <Translate id="games.view_details">SPECIFICATIONS</Translate>
                        )}
                    </Link>
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
