import { Link } from 'react-router-dom';
import content from '../data/content.json';

const LivingRoomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="6" x2="19" y2="21" />
    <path d="M17 6h4l-1-3h-2z" fill="#c4a052" stroke="none" />
    <path d="M17 6h4l-1-3h-2z" />
    <rect x="2" y="11" width="14" height="7" rx="1.5" />
    <path d="M4 11V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
    <line x1="2" y1="18" x2="2" y2="20" />
    <line x1="16" y1="18" x2="16" y2="20" />
  </svg>
);

const BedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M22 10v10" />
    <rect x="2" y="10" width="20" height="6" rx="1" />
    <rect x="4" y="7" width="6" height="3" rx="1" />
    <rect x="12" y="7" width="6" height="3" rx="1" />
  </svg>
);

function Furniture() {
  const { furniture } = content.services;

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }} className="hidden-mobile">Furniture Collections</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', overflow: 'hidden' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>{furniture.title}</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
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
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button className="button-primary" onClick={() => document.getElementById('home-collection').scrollIntoView({ behavior: 'smooth' })}>Home Collection</button>
              <button className="button-primary" onClick={() => document.getElementById('office-solutions').scrollIntoView({ behavior: 'smooth' })} style={{ background: '#fff', color: '#111', border: '1px solid #111' }}>Office Solutions</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/furniture.png" alt="Premium Furniture" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
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

          <div className="grid" style={{ gap: '2rem' }}>
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
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Residential</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Home Collection</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Transform your residence into a sanctuary of style. Our home collection features premium materials and timeless designs across all domestic spaces, ensuring both comfort and aesthetic superiority.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <LivingRoomIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#111', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Living Rooms</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>Luxurious sofas, coffee tables, and bespoke media units.</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <BedIcon />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#111', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>Bedrooms</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>Custom wardrobes, elegant bed frames, and nightstands.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/img5.png" alt="Home Collection" className="brochure-image-rounded" style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: '120px 0 120px 120px' }} />
          </div>
        </div>
      </section>

      {/* Office Solutions Section */}
      <section id="office-solutions" className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="hero-image">
            <img src="/images/modern_office_furniture.png" alt="Office Solutions" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', borderRadius: '0 160px 0 160px' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Commercial</h2>
            <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Office Solutions</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Create an environment that fosters productivity and reflects your corporate identity. Our office solutions merge ergonomic health benefits with striking executive aesthetics.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
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
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default Furniture;

