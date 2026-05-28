import { Link } from 'react-router-dom';
import content from '../data/content.json';

const RollerBlindsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="3" rx="1" fill="#c4a052" stroke="none" />
    <path d="M5 6h14v8H5z" fill="none" />
    <line x1="4" y1="14" x2="20" y2="14" />
    <line x1="18" y1="14" x2="18" y2="18" />
    <circle cx="18" cy="19" r="1.5" fill="#c4a052" stroke="none" />
  </svg>
);

const MotorizedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="6" width="8" height="14" rx="2" />
    <circle cx="12" cy="10" r="1.5" fill="#c4a052" stroke="none" />
    <circle cx="12" cy="15" r="1" fill="#c4a052" stroke="none" />
    <path d="M10 2a3 3 0 0 1 4 0" />
    <path d="M8 4a6 6 0 0 1 8 0" />
  </svg>
);

const VerticalBlindsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="2" rx="0.5" fill="#c4a052" stroke="none" />
    <rect x="5" y="6" width="3" height="15" rx="1" />
    <rect x="11" y="6" width="3" height="15" rx="1" />
    <rect x="17" y="6" width="3" height="15" rx="1" />
  </svg>
);

const BlackoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M3 3h18v6H3z" fill="#c4a052" opacity="0.3" stroke="none" />
    <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" />
  </svg>
);

const RomanBlindsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="2" rx="0.5" fill="#c4a052" stroke="none" />
    <rect x="4" y="6" width="16" height="4" rx="1" />
    <rect x="4" y="11" width="16" height="4" rx="1" />
    <rect x="4" y="16" width="16" height="4" rx="1" />
  </svg>
);

const UVProtectionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4a052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <text x="12" y="15" fontSize="8" fontWeight="900" fill="#c4a052" textAnchor="middle" stroke="none" fontFamily="'Outfit', sans-serif">UV</text>
  </svg>
);

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
            {/* <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
               <button className="button-primary" onClick={() => scrollToSection('blinds')}>Explore Blinds</button>
               <button className="button-primary" onClick={() => scrollToSection('curtains')} style={{ background: '#fff', color: '#111', border: '1px solid #111' }}>Explore Curtains</button>
            </div> */}
          </div>
          <div className="hero-image">
            <img src="/images/img 5.png" alt="Elegant Window Treatments" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} />
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
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <RollerBlindsIcon />
                  </div>
                  <span>Roller Blinds</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <VerticalBlindsIcon />
                  </div>
                  <span>Vertical Blinds</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <RomanBlindsIcon />
                  </div>
                  <span>Roman Blinds</span>
                </li>
              </ul>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MotorizedIcon />
                  </div>
                  <span>Motorized Systems</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BlackoutIcon />
                  </div>
                  <span>Blackout Options</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 700, color: '#111', fontFamily: "'Outfit', sans-serif" }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#faf6ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <UVProtectionIcon />
                  </div>
                  <span>UV Protection</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src="/images/img4.png" alt="Modern Blinds" className="brochure-image-rounded" style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: '50px' }} />
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
                img: "/images/Blackout Curtain.jpg",
              },
              { 
                title: "Sheer & Voile", 
                desc: "Lightweight fabrics that provide daytime privacy while allowing soft, diffused sunlight to fill the room.",
                img: "/images/Soft natural sunlight.jpg"
              },
              { 
                title: "Motorized Systems", 
                desc: "Sophisticated smart curtains that can be controlled via remote, smartphone, or voice commands.",
                img: "/images/Motorized Systems img.jpg"
              },
         /*      { 
                title: "Pencil & Pinch Pleat", 
                desc: "Traditional, elegant headings that create a luxurious and formal atmosphere in any grand living space.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              }, */
              { 
                title: "Wave Curtains", 
                desc: "A sleek, stackable design that creates a continuous smooth wave-like effect for a minimalist aesthetic.",
                img: "/images/Wave Curtains.png"
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

