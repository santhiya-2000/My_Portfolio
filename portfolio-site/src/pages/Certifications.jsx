import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Certifications() {
  const certs = data.certifications || [];
  return (
    <Section title="Certifications" intro="Upload your certificates as PDFs and they will appear here.">
      {certs.length === 0 ? (
        <div className="card">
          <p className="muted">
            No certifications yet. Place your PDF files in <code>/public/certifications/</code> and add
            entries to <code>src/data/profile.js</code> under <code>certifications</code>.
          </p>
        </div>
      ) : (
        <div className="grid grid--spacious">
          {certs.map((c) => (
            <div className="card card--roomy" key={c.title}>
              <div className="card__header">
                <h3>{c.title}</h3>
                {c.date && <span className="muted">{c.date}</span>}
              </div>
              {c.issuer && <div className="card__subheader"><strong>{c.issuer}</strong></div>}
              {c.description && <p>{c.description}</p>}
              <div className="btn-group">
                {c.file && (
                  <a className="btn btn-primary" href={c.file} target="_blank" rel="noreferrer">View PDF</a>
                )}
                {c.file && (
                  <a className="btn" href={c.file} download>Download</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
