import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Awards() {
  return (
    <Section title="Awards & Achievements">
      <div className="awards-container">
        {data.awards.map((award, index) => (
          <div className="award-card" key={index}>
            <div className="award-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23l5-3 5 3-1.21-9.12"></polyline>
              </svg>
            </div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <div className="award-meta">
                <span className="award-issuer">{award.issuer}</span>
                {award.date && <span className="award-date"> · {award.date}</span>}
              </div>
              <p className="award-description">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .awards-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .award-card {
          display: flex;
          gap: 1.25rem;
          padding: 1.25rem;
          background: var(--card-bg);
          border-radius: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid var(--border-color);
        }
        .award-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .award-icon {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .award-icon svg {
          width: 1.25rem;
          height: 1.25rem;
        }
        .award-content {
          flex: 1;
        }
        .award-title {
          margin: 0 0 0.25rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--heading-color);
        }
        .award-meta {
          display: flex;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .award-description {
          margin: 0;
          color: var(--text-color);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .award-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .award-meta {
            flex-direction: column;
            gap: 0.25rem;
          }
          .award-date::before {
            content: '';
          }
        }
      `}</style>
    </Section>
  );
}
