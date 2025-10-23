import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

// SVG Icons
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ColabIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.941 4.976a7.033 7.033 0 0 0-4.93 2.06 7.033 7.033 0 0 0-.123 9.806l.123.124a1 1 0 0 0 1.414-1.415 5.002 5.002 0 0 1-.117-6.945l.117-.116a5.033 5.033 0 0 1 7.072 0 5.033 5.033 0 0 1 0 7.07 5.033 5.033 0 0 1-7.072 0 1 1 0 0 0-1.414 1.414 7.033 7.033 0 1 0 0-9.962 7.033 7.033 0 0 0-2.12-1.31 1 1 0 1 0-.632 1.898 5.033 5.033 0 0 1 1.515.938 5.033 5.033 0 0 1 0 7.07 5.033 5.033 0 0 1-7.072 0 5.033 5.033 0 0 1 0-7.07 5.033 5.033 0 0 1 5.656-1.06 1 1 0 0 0 .898-1.788 7.033 7.033 0 0 0-9.52 10.24 7.033 7.033 0 0 0 9.945 0 7.033 7.033 0 0 0 0-9.945 7.033 7.033 0 0 0-4.93-2.06z"/>
  </svg>
);

export default function Projects() {
  return (
    <Section title="Projects" intro="Selected personal and academic projects.">
      <div className="grid grid--spacious">
        {data.projects.map((pr) => (
          <div className="card" key={pr.title}>
            <div className="card__header">
              <h3>{pr.title}</h3>
            </div>
            <div className="card__period">
              <span className="muted">{pr.period}</span>
            </div>
            <p>{pr.summary}</p>
            {pr.stack && (
              <div className="chips">
                {pr.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            )}
            <div className="project-links" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              {pr.links?.github && (
                <a 
                  href={pr.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icon-link"
                  aria-label="GitHub Repository"
                  style={{ color: 'var(--text-color)' }}
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
                  style={{ color: '#f9ab00' }}
                >
                  <ColabIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {data.hackathons && data.hackathons.length > 0 && (
        <div className="section" style={{ marginTop: '2rem' }}>
          <h2>Hackathons</h2>
          <div className="grid grid--spacious" style={{ marginTop: '1rem' }}>
            {data.hackathons.map((h) => (
              <div className="card" key={h.title}>
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
                {h.summary && <p>{h.summary}</p>}
                {h.links?.github && (
                  <div style={{ marginTop: '.6rem' }}>
                    <a className="btn" href={h.links.github} target="_blank" rel="noreferrer">View on GitHub</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
