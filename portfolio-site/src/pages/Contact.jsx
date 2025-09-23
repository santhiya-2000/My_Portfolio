import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section title="Contact Me" intro="I'd love to hear from you. Fill out the form or use email/phone below.">
      {!submitted ? (
        <form
          className="form"
          action="https://formspree.io/f/your-form-id"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      ) : (
        <div className="success">Thanks! Your message has been sent.</div>
      )}

      <div className="contact__alt">
        <a className="btn" href={`mailto:${data.contact.email}`}>Email Me</a>
        <a className="btn" href={`tel:${data.contact.phone}`}>Call Me</a>
      </div>
    </Section>
  );
}
