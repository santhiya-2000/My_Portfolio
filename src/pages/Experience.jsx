import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Experience() {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Section title="Experience">
      {data.experience.map((ex) => (
        <div className="card" key={ex.company + ex.role}>
          <div className="card__header">
            <h3>
              {ex.links?.website ? (
                <a 
                  href={ex.links.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="company-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {ex.company}
                </a>
              ) : ex.company}
            </h3>
            <span className="muted">{ex.location}</span>
          </div>
          <div className="card__subheader">
            <strong>{ex.role}</strong> · <span className="muted">{ex.period}</span>
          </div>
          <ul className="bullet-list">
            {ex.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
          {ex.links?.demo && ex.company.includes('Zoho - ManageEngine') && (
            <div className="demo-link" style={{ margin: '10px 0' }}>
              <a 
                href={ex.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {ex.links.demoLabel || 'View Demo'}
              </a>
            </div>
          )}
          {ex.stack && (
            <div className="chips">
              {ex.stack.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        .company-link {
          color: var(--text-color);
          text-decoration: none;
          position: relative;
        }
        .company-link:hover {
          color: var(--primary-color);
        }
        .company-link::after {
          content: '↗';
          font-size: 0.8em;
          margin-left: 2px;
          opacity: 0.7;
        }
      `}</style>
    </Section>
  );
}
