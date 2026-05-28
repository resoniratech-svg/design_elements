import { Link } from 'react-router-dom';
import content from '../data/content.json';

function CustomUpholstery() {
  const { upholstery } = content.services;

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }} className="hidden-mobile">Custom Upholstery</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', overflow: 'hidden' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>{upholstery.title}</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {upholstery.description}
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> Tailored Fabric & Leather Solutions
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> High-End Restoration & Refurbishment
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> Expert Craftsmanship built to last
              </li>
            </ul>
          </div>
          <div className="hero-image">
            <img src="/images/Custom Upholstery1.jpg" alt="Custom Upholstery" className="brochure-image-rounded" style={{ width: '100%', height: '580px', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      {/* Restoration Section */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="hero-image">
            <img 
              src="/images/leather_restoration.jpeg" 
              alt="Leather Restoration Process" 
              className="brochure-image-rounded" 
              style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block', borderRadius: '16px' }} 
            />
          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Craftsmanship</h2>
            <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Leather Restoration</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Preserve your investment with our professional leather restoration and upholstery services. We specialize in bringing life back to worn leather furniture, restoring its original texture, color, and suppleness through expert craftsmanship.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Leather Upholstery</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Premium fabric and leather replacements for high-end furniture.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Repair & Polish</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Deep cleaning, scratch repair, and color matching for all leather goods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Transform your furniture today</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default CustomUpholstery;
