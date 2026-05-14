import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

function Furniture() {
  const { furniture } = content.services;

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>Furniture Collections</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', overflow: 'hidden' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{furniture.title}</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {furniture.description}
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> Traditional to Modern Designs
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> High-Quality Materials Built to Last
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> Custom Solutions for Specific Needs
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="button-primary" onClick={() => document.getElementById('home-collection').scrollIntoView({ behavior: 'smooth' })}>Home Collection</button>
              <button className="button-primary" onClick={() => document.getElementById('office-solutions').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#fff', color: '#111', border: '1px solid #111' }}>Office Solutions</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/furniture.png" alt="Premium Furniture" className="brochure-image-rounded" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Style Meets Functionality</h2>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-light)', maxWidth: '700px', margin: '1.5rem auto' }}>
              We provide a variety of options that cater to the specific needs of each customer. Ensure you enjoy your investment for years to come.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            <div className="card" style={{ border: 'none', background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Executive Office</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>Ergonomic office furniture designed for maximum productivity and corporate elegance. Enhance your workspace with our premium desks and seating.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Living Spaces</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>Bespoke sofas, lounge chairs, and entertainment units tailored for modern interiors. Unwind in unparalleled comfort.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'var(--bg-light)', padding: '2rem', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Dining Elegance</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>Timeless dining tables and chairs crafted from robust materials for exquisite gatherings and everyday durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Collection Section */}
      <section id="home-collection" className="section-padding" style={{ background: '#fff' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Residential</h2>
            <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Home Collection</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Transform your residence into a sanctuary of style. Our home collection features premium materials and timeless designs across all domestic spaces, ensuring both comfort and aesthetic superiority.
            </p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Living Rooms</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Luxurious sofas, coffee tables, and bespoke media units.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Bedrooms</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Custom wardrobes, elegant bed frames, and nightstands.</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/furniture.png" alt="Home Collection" className="brochure-image-rounded" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '160px 0 160px 0' }} />
          </div>
        </div>
      </section>

      {/* Office Solutions Section */}
      <section id="office-solutions" className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container grid" style={{ gridTemplateColumns: '0.8fr 1.2fr', alignItems: 'center', gap: '4rem' }}>
          <div>
            <img src="/images/lvt.png" alt="Office Solutions" className="brochure-image-rounded" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0 160px 0 160px' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Commercial</h2>
            <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Office Solutions</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Create an environment that fosters productivity and reflects your corporate identity. Our office solutions merge ergonomic health benefits with striking executive aesthetics.
            </p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Executive Suites</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Premium desks, leather seating, and storage credenzas.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Boardrooms</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Large-scale meeting tables and integrated power solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Transform your space today</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem' }}>Inquire Now</Link>
        </div>
      </footer>
    </div>
  );
}

export default Furniture;
