import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

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
