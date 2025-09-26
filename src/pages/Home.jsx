import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/profile.js';

export default function Home() {
  const { name, title, summary, contact, hero } = data;

  const techs = [
    'React', 'JavaScript', 'Python', 'Java',
    'C', 'C++', 'C#', 'Ember', 'R',
    'MongoDB', 'MySQL', 'PostgreSQL',
    'HTML', 'CSS', 'Data Structures', 'OOPS', 'AI', 'OpenAI',
    'Firebase', 'Google Colab', 'R Studio', 'Git', 'Gradle', 'AWS', 'VSCode', 'WindSurf', 'Figma'
  ];

  const renderIconSVG = (name) => {
    switch (name) {
      case 'React':
        return (
          <svg viewBox="0 0 256 256" width="28" height="28" aria-hidden>
            <circle cx="128" cy="128" r="20" fill="#61DAFB"/>
            <g fill="none" stroke="#2563eb" strokeWidth="10">
              <ellipse cx="128" cy="128" rx="100" ry="40"/>
              <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(60 128 128)"/>
              <ellipse cx="128" cy="128" rx="100" ry="40" transform="rotate(120 128 128)"/>
            </g>
          </svg>
        );
      case 'JavaScript':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
            <path d="M70 98c0 14-8 22-22 22-10 0-16-5-20-11l12-7c2 3 4 6 9 6 5 0 8-2 8-10V63h13v35zm18 22c-13 0-21-6-26-14l12-7c3 4 7 8 14 8 6 0 9-3 9-7 0-5-3-7-10-10l-3-1c-10-4-17-9-17-21 0-10 8-18 20-18 9 0 15 3 20 11l-11 8c-2-4-5-6-9-6-4 0-7 2-7 6 0 4 3 6 10 9l3 1c12 5 18 10 18 22 0 12-9 19-23 19z" fill="#111827"/>
          </svg>
        );
      case 'Python':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#3776AB" d="M63 10c27 0 25 12 25 12v12H40c-17 0-17 17-17 17v17h23V58c0-10 10-10 10-10h32V22S90 10 63 10z"/>
            <path fill="#FFD43B" d="M65 118c-27 0-25-12-25-12V94h48c17 0 17-17 17-17V60H82v10c0 10-10 10-10 10H40v26s3 12 25 12z"/>
          </svg>
        );
      case 'Java':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#EA2D2E" d="M63 16c15 14-15 21 0 34-26-8 8-21 0-34zM44 76c-8 5 4 9 19 9 18 0 33-5 33-10s-11-9-27-9c-12 0-21 2-25 5zM38 98c-7 4 6 8 26 8 22 0 37-5 37-10 0-6-13-9-31-9-14 0-26 2-32 6z"/>
            <path fill="#2563eb" d="M46 54c-6 4 2 8 17 8 17 0 29-4 29-8 0-5-10-8-24-8-11 0-19 2-22 8z"/>
          </svg>
        );
      case 'HTML':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#E34C26"/>
            <path fill="#EF652A" d="M19 97l9-80h72l9 80H19z"/>
            <path fill="#EBEBEB" d="M64 36v55l23-6 5-49H64z"/>
            <path fill="#FFFFFF" d="M64 36H42l-2 20h24V36zm0 27v18l-12-3-1-10h-6l1 15 18 5v-25H64z"/>
          </svg>
        );
      case 'CSS':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#1572B6"/>
            <path fill="#33A9DC" d="M23 97l9-80h64l9 80H23z"/>
            <path fill="#FFFFFF" d="M64 36v55l20-5 4-50H64zm0 27v18l-10-2-1-11h-5l1 16 15 4v-25H64z"/>
          </svg>
        );
      case 'Git':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#F05032"/>
            <path fill="#FFFFFF" d="M64 28l-6 6 12 12-12 12 6 6 18-18-18-18zm-12 12l-12 12 12 12 6-6-12-12 6-6zm24 24l-6 6 12 12-12 12 6 6 18-18-18-18zm-12 12l-18 18 18 18 6-6-12-12 12-12-6-6z"/>
          </svg>
        );
      case 'AWS':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#FF9900"/>
            <path fill="#FFFFFF" d="M64 32c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32zm0 58c-14 0-26-12-26-26s12-26 26-26 26 12 26 26-12 26-26 26z"/>
            <path fill="#FFFFFF" d="M58 54h12v8H58v-8zm0 12h12v8H58v-8z"/>
          </svg>
        );
      case 'VSCode':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#007ACC"/>
            <path fill="#FFFFFF" d="M28 36l24 24-24 24-8-8 16-16-16-16 8-8zm72 0l8 8-16 16 16 16-8 8-24-24 24-24z"/>
          </svg>
        );
      case 'Firebase':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#FFCA28"/>
            <path fill="#FFA000" d="M64 28l-8 16-8-16 8-8 8 8zm-24 8l-8 16 16-8-8-8zm48 0l-8 8 16 8-8-16z"/>
          </svg>
        );
      case 'MongoDB':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#47A248"/>
            <path fill="#FFFFFF" d="M64 28c-8 0-16 8-16 16s8 16 16 16 16-8 16-16-8-16-16-16zm0 24c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z"/>
          </svg>
        );
      case 'MySQL':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#4479A1"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'PostgreSQL':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#336791"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'C':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#00599C"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'C++':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#00599C"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'C#':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#239120"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'R':
        return (
          <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#276DC3"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      default:
        // Generic initial-based icon
        const initials = name
          .replace('PostgreSQL', 'PG')
          .replace('Google Colab', 'Colab')
          .replace('R Studio', 'RStudio')
          .split(' ')
          .map(w => w[0])
          .join('')
          .slice(0, 3)
          .toUpperCase();
        return (
          <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden>
            <rect x="2" y="2" width="60" height="60" rx="12" fill="#ffffff" stroke="#e5e7eb"/>
            <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="20" fill="#2563eb">{initials}</text>
          </svg>
        );
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__text">
          <h1>
            <span className="accent">Hi, I'm</span> {name}
          </h1>
          <h3 className="muted">{title}</h3>
          <p>{summary}</p>
          <div className="hero__cta">
            <Link className="btn btn-primary" to="/contact">Contact Me</Link>
          </div>
          <div className="hero__icons" aria-label="Primary technologies">
            {techs.map((t) => (
              <div className="tech-icon" title={t} key={t}>
                {renderIconSVG(t)}
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__image">
          <div className="profile">
            <img src={hero.photoUrl} alt={`${name} profile picture`} />
          </div>
        </div>
      </div>
      {/* Education Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Education</h2>
          <p className="section__intro">Degrees, GPA, and selected coursework.</p>
        </div>
        <div className="timeline">
          {data.education.map((ed) => (
            <div className="timeline__item" key={ed.school}>
              <div className="timeline__heading">
                <h3>{ed.degree}</h3>
                <span className="muted">{ed.years}</span>
              </div>
              <div className="timeline__meta"><strong>{ed.school}</strong> · {ed.location}</div>
              {ed.coursework && (
                <div className="chips">
                  {ed.coursework.slice(0, 6).map((c) => (
                    <span className="chip" key={c}>{c}</span>
                  ))}
                  {ed.coursework.length > 6 && <span className="chip">+{ed.coursework.length - 6} more</span>}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="btn-group"><Link to="/education" className="btn">View all Education</Link></div>
      </div>

      {/* Experience Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Experience</h2>
          <p className="section__intro">Highlights from my professional journey.</p>
        </div>
        {data.experience.slice(0, 3).map((ex) => (
          <div className="card" key={ex.company + ex.role}>
            <div className="card__header">
              <h3>{ex.company}</h3>
              <span className="muted">{ex.location}</span>
            </div>
            <div className="card__subheader"><strong>{ex.role}</strong> · <span className="muted">{ex.period}</span></div>
            <ul className="bullet-list">
              {ex.points.slice(0, 3).map((p, idx) => (
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
        <div className="btn-group"><Link to="/experience" className="btn">View all Experience</Link></div>
      </div>

      {/* Projects + Hackathons Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Projects</h2>
          <p className="section__intro">Selected personal and academic work.</p>
        </div>
        <div className="grid grid--spacious">
          {data.projects.slice(0, 4).map((pr) => (
            <div className="card" key={pr.title}>
              <div className="card__header">
                <h3>{pr.title}</h3>
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
          <div className="section" style={{ marginTop: '1rem' }}>
            <h3 className="muted" style={{ margin: '.4rem 0' }}>Hackathons</h3>
            <div className="grid grid--spacious">
              {data.hackathons.slice(0, 2).map((h) => (
                <div className="card" key={h.title}>
                  <div className="card__header">
                    <h3>{h.title}</h3>
                    <span className="muted">{h.period}</span>
                  </div>
                  {h.hackathon && <div className="card__subheader"><strong>{h.hackathon}</strong></div>}
                  {h.summary && <p>{h.summary}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="btn-group"><Link to="/projects" className="btn">View all Projects</Link></div>
      </div>

      {/* Skills Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Skills</h2>
          <p className="section__intro">Core programming and tools I use.</p>
        </div>
        <div className="card">
          <h3>Programming</h3>
          <div className="chips">
            {data.skills.programming.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
          <h3>Tools</h3>
          <div className="chips">
            {data.skills.tools.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="btn-group"><Link to="/skills" className="btn">View Skills</Link></div>
      </div>

      {/* Activities Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Activities & Leadership</h2>
        </div>
        <div className="grid grid--spacious">
          {data.activities.slice(0, 3).map((a) => (
            <div className="card" key={a.title}>
              <div className="card__header">
                <h3>{a.title}</h3>
                <span className="muted">{a.period}</span>
              </div>
              <div className="muted">{a.organization} · {a.location}</div>
              <ul className="bullet-list">
                {a.points.slice(0, 2).map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="btn-group"><Link to="/activities" className="btn">View Activities</Link></div>
      </div>

      {/* Certifications Preview */}
      <div className="section">
        <div className="section__header">
          <h2>Certifications</h2>
        </div>
        <div className="grid">
          {data.certifications && data.certifications.slice(0, 4).map((c) => (
            <div className="card" key={c.title}>
              <div className="card__header">
                <h3>{c.title}</h3>
              </div>
              <p className="muted">PDF available</p>
            </div>
          ))}
        </div>
        <div className="btn-group"><Link to="/certifications" className="btn">View all Certifications</Link></div>
      </div>
    </div>
  );
}
