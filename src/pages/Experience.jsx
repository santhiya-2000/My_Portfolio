import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Experience() {
  return (
    <Section title="Experience">
      {data.experience.map((ex) => (
        <div className="card" key={ex.company + ex.role}>
          <div className="card__header">
            <h3>{ex.company}</h3>
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
          {ex.stack && (
            <div className="chips">
              {ex.stack.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </Section>
  );
}
