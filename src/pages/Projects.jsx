import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

// SVG Icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.236.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ColabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.25V21h3l3-3.75v3.75H3V17.25m0-3.75h3v3.75H3m0 3.75v3.75H3M3 17.25v3.75h3l3-3.75v3.75H3V17.25m18 4.25A2.25 2.25 0 0 1 4.25v11a2.25 2.25 0 0 1-4.25V8.25A2.25 2.25 0 0 1-2.25V6.25a2.25 2.25 0 0 1 2.25v1.5a2.25 2.25 0 0 1-2.25v-1.5a2.25 2.25 0 0 1 2.25V21a2.25 2.25 0 0 1-2.25 0-2.25z"/>
  </svg>
);

const DemoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6H8a2 2 0 0 0-2v2a2 2 0 0 0 2h2a2 2 0 0 0 2v2a2 2 0 0 0-2H8a2 2 0 0 0-2v2a2 2 0 0 0 2h2a2 2 0 0 0 2v-2a2 2 0 0 0-2h-2a2 2 0 0 0-2v-2a2 2 0 0 0 2h2a2 2 0 0 0 2v2a2 2 0 0 0-2h-2a2 2 0 0 0-2v2a2 2 0 0 0 2h2a2 2 0 0 0 2v2a2 2 0 0 0-2h-2a2 2 0 0 0-2v2a2 2 0 0 0 2z"/>
  </svg>
);

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (title) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Section title="Projects" intro="Selected personal and academic projects.">
      <div className="grid grid--spacious">
        {data.projects.map((pr) => {
          const isExpanded = expandedCards[pr.title];
          const shouldTruncate = pr.summary.length > 150;
          const displayText = shouldTruncate && !isExpanded ? truncateText(pr.summary) : pr.summary;
          
          return (
            <div className="card project-card" key={pr.title}>
              <div className="card__header">
                <h3>{pr.title}</h3>
              </div>
              <div className="card__period">
                <span className="muted">{pr.period}</span>
              </div>
              <div className="card__content">
                <p>{displayText}</p>
                {shouldTruncate && (
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleExpanded(pr.title)}
                  >
                    {isExpanded ? 'Read less' : 'Read more...'}
                  </button>
                )}
              </div>
              {pr.stack && (
                <div className="chips">
                  {pr.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                {pr.links?.github && (
                  <a 
                    href={pr.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="icon-link"
                    aria-label="GitHub Repository"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {pr.links?.colab && (
                  <a 
                    href={pr.links.colab} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="icon-link"
                    aria-label="Google Colab Notebook"
                  >
                    <ColabIcon />
                  </a>
                )}
                {pr.links?.demo && (
                  <a 
                    href={pr.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="icon-link"
                    aria-label="Demo"
                  >
                    <DemoIcon />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {data.hackathons && data.hackathons.length > 0 && (
        <div className="section" style={{ marginTop: '2rem' }}>
          <h2>Hackathons</h2>
          <div className="grid grid--spacious" style={{ marginTop: '1rem' }}>
            {data.hackathons.map((h) => {
              const isExpanded = expandedCards[`hackathon-${h.title}`];
              const shouldTruncate = h.summary && h.summary.length > 150;
              const displayText = shouldTruncate && !isExpanded ? truncateText(h.summary) : h.summary;
              
              return (
                <div className="card project-card" key={h.title}>
                  <div className="card__header">
                    <h3>{h.title}</h3>
                  </div>
                  <div className="card__period">
                    <span className="muted">{h.period}</span>
                  </div>
                  {h.hackathon && (
                    <div className="card__subheader">
                      <strong>{h.hackathon}</strong>
                    </div>
                  )}
                  {h.role && <div className="muted">{h.role}</div>}
                  {h.summary && (
                    <div className="card__content">
                      <p>{displayText}</p>
                      {shouldTruncate && (
                        <button 
                          className="read-more-btn"
                          onClick={() => toggleExpanded(`hackathon-${h.title}`)}
                        >
                          {isExpanded ? 'Read less' : 'Read more...'}
                        </button>
                      )}
                    </div>
                  )}
                  {h.links?.github && (
                    <div style={{ marginTop: '.6rem' }}>
                      <a className="btn" href={h.links.github} target="_blank" rel="noreferrer">View on GitHub</a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Section>
  );
}
