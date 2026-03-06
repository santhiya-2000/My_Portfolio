import React from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Contact() {
  return (
    <Section title="Contact Me" intro="Feel free to reach out through any of these channels.">
      <div className="contact-cards">
        <div className="card contact-card">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="contact-content">
            <h3>Email</h3>
            <p>Send me an email directly</p>
            <a 
              href={`mailto:${data.contact.email}`} 
              className="btn btn-primary contact-btn"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="card contact-card">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="contact-content">
            <h3>Phone</h3>
            <p>Call or text me directly</p>
            <a 
              href={`tel:${data.contact.phone}`} 
              className="btn btn-primary contact-btn"
            >
              Call Me
            </a>
          </div>
        </div>

        <div className="card contact-card">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div className="contact-content">
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
            <a 
              href={data.contact.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary contact-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="card contact-card">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div className="contact-content">
            <h3>GitHub</h3>
            <p>Check out my projects</p>
            <a 
              href={data.contact.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary contact-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
