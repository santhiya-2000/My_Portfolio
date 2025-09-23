import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Skills() {
  const { programming, tools } = data.skills;
  return (
    <Section title="Skills">
      <div className="skills">
        <div className="card">
          <h3>Programming</h3>
          <div className="chips">
            {programming.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Tools</h3>
          <div className="chips">
            {tools.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
