import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

function Contact() {
  const { company } = content;

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>CONTACT US</div>
        </div>
      </nav>

      <section className="section-padding">
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Let's Connect</h1>
            <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '3rem' }}>
              Our experts are ready to help you with your next project. Visit our showroom or call us for a free measurement.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Main Office</h4>
                <a href={company.maps_link} target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}>
                  {company.address}
                </a>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Contact Numbers</h4>
                {company.phones.map((phone, i) => (
                  <p key={i} style={{ fontSize: '1.1rem' }}>{phone}</p>
                ))}
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Email</h4>
                {company.emails.map((email, i) => (
                  <p key={i} style={{ fontSize: '1.1rem' }}>{email}</p>
                ))}
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Working Hours</h4>
                <p style={{ fontSize: '1.1rem' }}>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                <p style={{ fontSize: '1.1rem' }}>Friday: Closed</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '4rem', background: '#f9fafb', border: 'none' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send an Inquiry</h3>
            <form name="contact" method="POST" data-netlify="true" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="name" placeholder="Full Name" required style={{ padding: '1.2rem', border: '1px solid #ddd', background: '#fff' }} />
              <input type="email" name="email" placeholder="Email Address" required style={{ padding: '1.2rem', border: '1px solid #ddd', background: '#fff' }} />
              <input type="tel" name="phone" placeholder="Phone Number" style={{ padding: '1.2rem', border: '1px solid #ddd', background: '#fff' }} />
              <textarea name="message" placeholder="Tell us about your requirements..." required style={{ padding: '1.2rem', border: '1px solid #ddd', background: '#fff', minHeight: '150px' }}></textarea>
              <button type="submit" className="button-primary" style={{ width: '100%' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
