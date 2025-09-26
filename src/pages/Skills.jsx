import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Skills() {
  const { programming, tools } = data.skills;

  const renderSkillIcon = (skill) => {
    switch (skill) {
      case 'Java':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <path fill="#EA2D2E" d="M63 16c15 14-15 21 0 34-26-8 8-21 0-34zM44 76c-8 5 4 9 19 9 18 0 33-5 33-10s-11-9-27-9c-12 0-21 2-25 5zM38 98c-7 4 6 8 26 8 22 0 37-5 37-10 0-6-13-9-31-9-14 0-26 2-32 6z"/>
            <path fill="#2563eb" d="M46 54c-6 4 2 8 17 8 17 0 29-4 29-8 0-5-10-8-24-8-11 0-19 2-22 8z"/>
          </svg>
        );
      case 'Python':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <path fill="#3776AB" d="M63 10c27 0 25 12 25 12v12H40c-17 0-17 17-17 17v17h23V58c0-10 10-10 10-10h32V22S90 10 63 10z"/>
            <path fill="#FFD43B" d="M65 118c-27 0-25-12-25-12V94h48c17 0 17-17 17-17V60H82v10c0 10-10 10-10 10H40v26s3 12 25 12z"/>
          </svg>
        );
      case 'JavaScript':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
            <path d="M70 98c0 14-8 22-22 22-10 0-16-5-20-11l12-7c2 3 4 6 9 6 5 0 8-2 8-10V63h13v35zm18 22c-13 0-21-6-26-14l12-7c3 4 7 8 14 8 6 0 9-3 9-7 0-5-3-7-10-10l-3-1c-10-4-17-9-17-21 0-10 8-18 20-18 9 0 15 3 20 11l-11 8c-2-4-5-6-9-6-4 0-7 2-7 6 0 4 3 6 10 9l3 1c12 5 18 10 18 22 0 12-9 19-23 19z" fill="#111827"/>
          </svg>
        );
      case 'HTML/CSS':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#E34C26"/>
            <path fill="#EF652A" d="M19 97l9-80h72l9 80H19z"/>
            <path fill="#EBEBEB" d="M64 36v55l23-6 5-49H64z"/>
            <path fill="#FFFFFF" d="M64 36H42l-2 20h24V36zm0 27v18l-12-3-1-10h-6l1 15 18 5v-25H64z"/>
          </svg>
        );
      case 'SQL':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#336791"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'Node.js':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#339933"/>
            <path fill="#FFFFFF" d="M64 28c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32zm0 58c-14 0-26-12-26-26s12-26 26-26 26 12 26 26-12 26-26 26z"/>
          </svg>
        );
      case 'React.js':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <circle cx="64" cy="64" r="10" fill="#61DAFB"/>
            <g fill="none" stroke="#2563eb" strokeWidth="5">
              <ellipse cx="64" cy="64" rx="50" ry="20"/>
              <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)"/>
              <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(120 64 64)"/>
            </g>
          </svg>
        );
      case 'R':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#276DC3"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'C++':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#00599C"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'C':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#00599C"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'C#':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#239120"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'MongoDB':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#47A248"/>
            <path fill="#FFFFFF" d="M64 28c-8 0-16 8-16 16s8 16 16 16 16-8 16-16-8-16-16-16zm0 24c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z"/>
          </svg>
        );
      case 'PostgreSQL':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#336791"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'MySQL':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#4479A1"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'VSCode':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#007ACC"/>
            <path fill="#FFFFFF" d="M28 36l24 24-24 24-8-8 16-16-16-16 8-8zm72 0l8 8-16 16 16 16-8 8-24-24 24-24z"/>
          </svg>
        );
      case 'Android Studio':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#3DDC84"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'IntelliJ':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#000000"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'R Studio':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#276DC3"/>
            <path fill="#FFFFFF" d="M64 28c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26zm0 44c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"/>
          </svg>
        );
      case 'Eclipse':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#2C2255"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'AWS':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#FF9900"/>
            <path fill="#FFFFFF" d="M64 32c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32zm0 58c-14 0-26-12-26-26s12-26 26-26 26 12 26 26-12 26-26 26z"/>
          </svg>
        );
      case 'Git':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#F05032"/>
            <path fill="#FFFFFF" d="M64 28l-6 6 12 12-12 12 6 6 18-18-18-18zm-12 12l-12 12 12 12 6-6-12-12 6-6zm24 24l-6 6 12 12-12 12 6 6 18-18-18-18zm-12 12l-18 18 18 18 6-6-12-12 12-12-6-6z"/>
          </svg>
        );
      case 'Bootstrap':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#7952B3"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      case 'Spring Boot':
        return (
          <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden>
            <rect width="128" height="128" rx="16" fill="#6DB33F"/>
            <path fill="#FFFFFF" d="M64 32c-12 0-22 10-22 22s10 22 22 22 22-10 22-22-10-22-22-22zm0 36c-8 0-14-6-14-14s6-14 14-14 14 6 14 14-6 14-14 14z"/>
          </svg>
        );
      default:
        // Generic initial-based icon for skills without specific icons
        const initials = skill
          .split(' ')
          .map(w => w[0])
          .join('')
          .slice(0, 2)
          .toUpperCase();
        return (
          <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden>
            <rect x="2" y="2" width="44" height="44" rx="8" fill="#ffffff" stroke="#e5e7eb"/>
            <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="14" fill="#2563eb">{initials}</text>
          </svg>
        );
    }
  };

  return (
    <Section title="Skills">
      <div className="skills">
        <div className="card">
          <h3>Programming</h3>
          <div className="chips">
            {programming.map((s) => (
              <span className="chip" key={s}>
                {renderSkillIcon(s)}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="card">
          <h3>Tools</h3>
          <div className="chips">
            {tools.map((t) => (
              <span className="chip" key={t}>
                {renderSkillIcon(t)}
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
