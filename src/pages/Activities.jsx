import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Activities() {
  return (
    <Section title="Activities & Leadership">
      <div className="grid grid--spacious">
        {data.activities.map((a) => (
          <div className="card card--roomy" key={a.title}>
            <div className="card__header">
              <h3>{a.title}</h3>
              <span className="muted">{a.period}</span>
            </div>
            <div className="muted activities__org">{a.organization} · {a.location}</div>
            <ul className="bullet-list activities-list">
              {a.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
