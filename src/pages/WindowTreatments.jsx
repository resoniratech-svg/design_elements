import React from 'react';
import { Link } from 'react-router-dom';
import GlobalSearch from '../components/GlobalSearch';
import content from '../data/content.json';

function WindowTreatments() {
  const { window_treatments } = content.services;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }} className="hidden-mobile">Window Blinds & Curtains</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', overflow: 'hidden' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>{window_treatments.title}</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Transform your interiors with our premium window solutions. From sophisticated blinds to elegant custom-tailored curtains, we provide the perfect balance of light control, privacy, and aesthetic excellence.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
               <button className="button-primary" onClick={() => scrollToSection('blinds')}>Explore Blinds</button>
               <button className="button-primary" onClick={() => scrollToSection('curtains')} style={{ background: '#fff', color: '#111', border: '1px solid #111' }}>Explore Curtains</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/luxury_window_blinds_curtains.png" alt="Elegant Window Treatments" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      {/* Window Blinds Section */}
      <section id="blinds" className="section-padding">
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Precision Control</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{window_treatments.blinds.name}</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Our high-performance blinds offer unmatched versatility for both residential and commercial spaces. Engineered for durability and ease of use, they provide precise light filtration and energy efficiency.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Roller Blinds
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Vertical Blinds
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Roman Blinds
                </li>
              </ul>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Motorized Systems
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> Blackout Options
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> UV Protection
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" alt="Modern Blinds" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '40px 0 40px 0' }} />
          </div>
        </div>
      </section>

      {/* Curtains Section */}
      <section id="curtains" className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Timeless Elegance</h2>
            <h3 style={{ fontSize: '3rem', marginBottom: '2rem' }}>{window_treatments.curtains.name} Collections</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Experience the pinnacle of soft furnishings. Our custom-made curtains are tailored to your specific window dimensions, using premium fabrics sourced from world-class manufacturers.
            </p>
          </div>

          <div className="grid" style={{ gap: '2.5rem' }}>
            {[
              { 
                title: "Drapery Curtains", 
                desc: "Elegant floor-to-ceiling custom drapery with premium fabric selection for a grand and luxurious atmosphere.",
                img: "https://images.unsplash.com/photo-1585312949313-75b9f71c4942?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Blackout Curtains", 
                desc: "High-density thermal lining that blocks 100% of external light. Ideal for bedrooms and home theaters.",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Sheer & Voile", 
                desc: "Lightweight fabrics that provide daytime privacy while allowing soft, diffused sunlight to fill the room.",
                img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Motorized Systems", 
                desc: "Sophisticated smart curtains that can be controlled via remote, smartphone, or voice commands.",
                img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Pencil & Pinch Pleat", 
                desc: "Traditional, elegant headings that create a luxurious and formal atmosphere in any grand living space.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              },
              { 
                title: "Wave Curtains", 
                desc: "A sleek, stackable design that creates a continuous smooth wave-like effect for a minimalist aesthetic.",
                img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
              }
            ].map((type, i) => (
              <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', background: '#fff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={type.img} 
                    alt={type.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    onError={(e) => { e.target.onerror = null; e.target.src="/images/curtains.png"; }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.2rem' }}>{type.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>{type.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', borderRadius: '20px', overflow: 'hidden', height: 'auto', maxHeight: '400px' }}>
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" alt="Luxury Curtain Display" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Perfectly framed views</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem', background: 'var(--accent)' }}>Book a Consultation</Link>
        </div>
      </footer>
    </div>
  );
}

export default WindowTreatments;

