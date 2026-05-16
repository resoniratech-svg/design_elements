import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalSearch from '../components/GlobalSearch';
import content from '../data/content.json';

function Contact() {
  const { company } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Inquiry from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Requirements:\n${formData.message}`
    );
    window.location.href = `mailto:${company.emails[0]}?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      
      {/* Top Nav (similar to image) */}
      <nav style={{ position: 'relative', zIndex: 10, padding: '2rem 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Large Watermark-like Let's Connect */}
            <h1 style={{ 
              fontSize: '4.5rem', 
              color: '#000', 
              fontWeight: 800, 
              margin: 0, 
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}>
              Let's Connect
            </h1>
            <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', display: 'inline-block', marginTop: '0.5rem' }}>
              &larr; BACK TO HOME
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ color: '#c4a052', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.15em' }}>CONTACT US</div>
            <GlobalSearch />
          </div>

        </div>
      </nav>

      {/* Main Content Two Columns */}
      <section style={{ padding: '2rem 5%', paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Left Column */}
          <div style={{ paddingTop: '1rem' }}>
            <p style={{ color: '#6b7280', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '450px' }}>
              Our experts are ready to help you with your next project. Visit our showroom or call us for a free measurement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Main Office */}
              <div>
                <h4 style={{ color: '#c4a052', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>MAIN OFFICE</h4>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', lineHeight: 1.5, display: 'block', maxWidth: '400px', margin: 0 }}>
                  {company.address}
                </p>
                <a href={company.maps_link} target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#c4a052', 
                  color: '#fff', 
                  padding: '0.6rem 1.5rem', 
                  borderRadius: '20px', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginTop: '1rem',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  View on Google Maps &rarr;
                </a>
              </div>

              {/* Contact Numbers */}
              <div>
                <h4 style={{ color: '#c4a052', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>CONTACT NUMBERS</h4>
                {company.phones.map((phone, i) => {
                  const rawPhone = phone.replace(/[^0-9+]/g, '');
                  return (
                    <div key={i} style={{ marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '1.1rem', color: '#333', display: 'block', marginBottom: '0.5rem' }}>
                        {phone}
                      </span>
                      <a href={`https://wa.me/${rawPhone.replace('+', '')}`} target="_blank" rel="noreferrer" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#1ba345', 
                        color: '#000', 
                        padding: '0.6rem 1.5rem', 
                        borderRadius: '20px', 
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        transition: 'opacity 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '0.9'}
                      onMouseOut={(e) => e.target.style.opacity = '1'}
                      >
                        Chat on WhatsApp &rarr;
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Email */}
              <div>
                <h4 style={{ color: '#c4a052', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>EMAIL</h4>
                {company.emails.map((email, i) => (
                  <a key={i} href={`mailto:${email}`} style={{ fontSize: '1.1rem', color: '#333', textDecoration: 'none', display: 'block', marginBottom: '0.3rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#c4a052'} onMouseOut={(e) => e.target.style.color = '#333'}>
                    {email}
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div>
                <h4 style={{ color: '#c4a052', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.5rem' }}>WORKING HOURS</h4>
                <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '0.3rem' }}>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                <p style={{ fontSize: '1.1rem', color: '#333', margin: 0 }}>Friday: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{ background: '#fafafa', padding: '3rem', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#9ca3af', fontWeight: 600, marginBottom: '2rem' }}>Send an Inquiry</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '1rem', width: '100%', outline: 'none' }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '1rem', width: '100%', outline: 'none' }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '1rem', width: '100%', outline: 'none' }}
              />
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '1rem', width: '100%', outline: 'none', resize: 'vertical' }}
              ></textarea>
              <button 
                type="submit" 
                style={{ 
                  padding: '1.2rem', 
                  background: '#111', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '4px', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em', 
                  cursor: 'pointer', 
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.target.style.background = '#333'}
                onMouseOut={(e) => e.target.style.background = '#111'}
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;
