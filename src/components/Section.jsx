import React from 'react';

export default function Section({ title, children, intro }) {
  return (
    <section className="section">
      <div className="section__header">
        <h2>{title}</h2>
        {intro && <p className="section__intro">{intro}</p>}
      </div>
      <div className="section__body">
        {children}
      </div>
    </section>
  );
}
