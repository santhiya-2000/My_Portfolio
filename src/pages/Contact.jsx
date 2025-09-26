import React, { useState } from 'react';
import Section from '../components/Section.jsx';
import data from '../data/profile.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Form Submission from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:${data.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section title="Contact Me" intro="I'd love to hear from you. Fill out the form or use email/phone below.">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form__group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send via Email</button>
      </form>

      <div className="contact__alt">
        <a className="btn" href={`mailto:${data.contact.email}`}>Email Me</a>
        <a className="btn" href={`tel:${data.contact.phone}`}>Call Me</a>
      </div>
    </Section>
  );
}
