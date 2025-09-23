import React from 'react';
import data from '../data/profile.js';

export default function Footer() {
  const { email, phone, links } = data.contact;
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <strong>Contact:</strong> <a href={`mailto:${email}`}>{email}</a> · <a href={`tel:${phone}`}>{phone}</a>
        </div>
        <div className="footer__links">
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z" fill="#0A66C2"/>
              </svg>
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.04-3.06.66-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.66.07-.66 1.1.08 1.68 1.12 1.68 1.12.98 1.67 2.57 1.18 3.2.9.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.12-2.95-.11-.28-.48-1.4.11-2.9 0 0 .92-.29 3.02 1.13.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.1-1.42 3.02-1.13 3.02-1.13.59 1.5.22 2.62.11 2.9.69.77 1.12 1.75 1.12 2.95 0 4.23-2.56 5.15-5.01 5.43.39.34.73 1.01.73 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.75.53 4.37-1.45 7.51-5.57 7.51-10.43C23.02 5.24 18.27.5 12 .5z" fill="currentColor"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="footer__copy">© {new Date().getFullYear()} Santhiya Venkatesh</div>
    </footer>
  );
}
