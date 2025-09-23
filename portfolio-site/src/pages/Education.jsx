import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Education() {
  return (
    <Section title="Education">
      <div className="timeline">
        {data.education.map((ed) => (
          <div className="timeline__item" key={ed.school}>
            <div className="timeline__heading">
              <h3>{ed.degree}</h3>
              <span className="muted">{ed.years}</span>
            </div>
            <div className="timeline__meta">
              <strong>{ed.school}</strong> · {ed.location}
            </div>
            <div className="chips">
              <span className="chip">GPA: {ed.gpa}</span>
            </div>
            {ed.coursework && (
              <ul className="bullet-list">
                {ed.coursework.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
