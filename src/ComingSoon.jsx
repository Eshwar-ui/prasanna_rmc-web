import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ComingSoon.css';

const ComingSoon = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS Configuration
    const SERVICE_ID = 'service_zum78x6';
    const TEMPLATE_ID = 'template_2sjbqxo';
    const PUBLIC_KEY = '_q0XSP2Me_qGueGJO';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true);
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send message. Please try again later.');
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="coming-soon-wrapper">
      {/* Decorative Shapes */}
      <div className="decorative-shapes">
        <div className="shape shape-circle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-triangle"></div>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="hero-section">
        <div className="hero-content-sticky">
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot"></span>
              PRASANNA RMC
            </div>

            <h1 className="hero-title">
              A new home for{' '}
              <span className="highlight-orange">PRASANNA RMC</span>{' '}
              is coming soon.
            </h1>

            <p className="hero-description">
              We're building a modern web experience for ready-mix concrete orders,
              delivery tracking, and day-to-day operations. This React app is the starting
              point for the future website.
            </p>

            <div className="contact-cards-compact">
              <a href="mailto:info@prasannarmc.com" className="contact-card-v4">
                <div className="card-icon-aside-small">
                  <div className="icon-glow-compact">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                </div>
                <div className="card-text-compact">
                  <span className="card-label-v4">EMAIL US</span>
                  <span className="card-value-v4">info@prasannarmc.com</span>
                </div>
              </a>

              <a href="tel:+919341642120" className="contact-card-v4">
                <div className="card-icon-aside-small">
                  <div className="icon-glow-compact">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>
                <div className="card-text-compact">
                  <span className="card-label-v4">CALL / WHATSAPP</span>
                  <span className="card-value-v4">+91 93416 42120</span>
                  <span className="card-value-v4 small">+91 93426 42120 (WhatsApp)</span>
                </div>
              </a>
            </div>

            <div className="scroll-indicator">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container">
          <div className="form-header">
            <h2>Get in Touch</h2>
            <p>Interested in our services? Drop us a message!</p>
          </div>

          {submitted ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
                {!isSending && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
          )}

          <p className="form-footer">
            This is a temporary coming-soon screen for Prasanna RMC.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
