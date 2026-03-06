import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Activities() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (title) => {
    setExpandedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const truncateList = (points, maxLength = 2) => {
    if (points.length <= maxLength) return points;
    return points.slice(0, maxLength);
  };

  return (
    <Section title="Activities & Leadership">
      <div className="grid grid--spacious">
        {data.activities.map((a) => {
          const isExpanded = expandedCards[a.title];
          const shouldTruncate = a.points.length > 2;
          const displayPoints = shouldTruncate && !isExpanded ? truncateList(a.points) : a.points;
          
          return (
            <div className="card project-card" key={a.title}>
              <div className="card__header">
                <h3>{a.title}</h3>
              </div>
              <div className="card__period">
                <span className="muted">{a.period}</span>
              </div>
              <div className="muted activities__org">{a.organization} · {a.location}</div>
              <div className="card__content">
                <ul className="bullet-list activities-list">
                  {displayPoints.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
                {shouldTruncate && (
                  <button 
                    className="read-more-btn"
                    onClick={() => toggleExpanded(a.title)}
                  >
                    {isExpanded ? 'Show less' : 'Show more...'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
