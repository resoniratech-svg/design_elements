import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalSearch from './components/GlobalSearch';
import content from './data/content.json';
import Flooring from './pages/Flooring';
import Furniture from './pages/Furniture';
import Wallpaper from './pages/Wallpaper';
import WindowTreatments from './pages/WindowTreatments';
import Specialty from './pages/Specialty';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function HomePage() {
  const { company, services, clients, manufacturers } = content;

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.jpeg" alt="Design Elements" style={{ height: '70px', objectFit: 'contain' }} />
          </Link>
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="nav-dropdown">
              <a href="#services" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', padding: '10px 0' }}>Services</a>
              <div className="nav-dropdown-content">
                <div className="sub-dropdown">
                  <Link to="/flooring" className="dropdown-item">
                    <span>Flooring</span>
                    <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>&rsaquo;</span>
                  </Link>
                  <div className="sub-dropdown-content">
                    <Link to="/flooring#gallery" className="sub-dropdown-header" style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>Our Full Design Gallery</Link>
                    <Link to="/flooring?category=axminster-carpet#gallery" className="dropdown-item" style={{ padding: '8px 24px', fontSize: '0.8rem', fontWeight: 500 }}>Axminster Carpets</Link>
                    <Link to="/flooring?category=carpet-rugs#gallery" className="dropdown-item" style={{ padding: '8px 24px', fontSize: '0.8rem', fontWeight: 500 }}>Custom Rugs</Link>
                    <Link to="/flooring?category=carpet-tiles#gallery" className="dropdown-item" style={{ padding: '8px 24px', fontSize: '0.8rem', fontWeight: 500 }}>Carpet Tiles</Link>
                    <Link to="/flooring?category=print-carpet#gallery" className="dropdown-item" style={{ padding: '8px 24px', fontSize: '0.8rem', fontWeight: 500 }}>Printed Carpets</Link>
                    <Link to="/flooring?category=tufted-carpet#gallery" className="dropdown-item" style={{ padding: '8px 24px', fontSize: '0.8rem', fontWeight: 500 }}>Tufted Carpets</Link>
                  </div>
                </div>
                <Link to="/furniture" className="dropdown-item">Furniture</Link>
                <Link to="/wallpaper" className="dropdown-item">Wallpaper</Link>
                <Link to="/window-treatments" className="dropdown-item">Window Blinds & Curtains</Link>
              </div>
            </div>

            <Link to="/gallery" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio</Link>
            <Link to="/specialty" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialty</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</Link>
            <GlobalSearch />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section-padding" style={{ background: '#fff', position: 'relative' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1.1fr 0.9fr', alignItems: 'center', gap: '4rem' }}>
          <div className="animate-fade-in">
            <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.75rem' }}>Premium Interior Solutions</span>
            <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', color: '#111', lineHeight: '1.1' }}>Crafting Space <br /><span style={{ color: 'var(--accent)' }}>With Excellence.</span></h1>
            <p style={{ marginTop: '2rem', color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '500px' }}>
              {company.introduction}
            </p>
            <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem' }}>
              <Link to="/flooring" className="button-primary">View Collections</Link>
              <Link to="/gallery" style={{ display: 'inline-block', padding: '1rem 0', textDecoration: 'none', color: '#111', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>View Portfolio &rarr;</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/furniture.png" alt="Premium Interior Design" className="brochure-image-rounded" style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      {/* About Section (Page 3) */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <img src="/images/luxury_carpet_hero.png" alt="About Us" className="brochure-image-rounded" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '160px 0 160px 0' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>About Us</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Comprehensive Business Solutions</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              {company.about}
            </p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Expert Team</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Decades of industry experience in trading and contracting.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Custom Solutions</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Tailored designs that meet your specific requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Page 4) */}
      <section className="section-padding">
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div style={{ padding: '4rem', background: '#111', color: 'white', borderRadius: '0 80px 0 80px' }}>
            <h3 style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', fontWeight: 500 }}>
              "{company.mission}"
            </p>
          </div>
          <div style={{ padding: '4rem', background: 'var(--accent)', color: 'white', borderRadius: '80px 0 80px 0' }}>
            <h3 style={{ color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', opacity: 0.8 }}>Our Vision</h3>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.6', fontWeight: 500 }}>
              "{company.vision}"
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview (Page 5) */}
      <section id="services" className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>Our Expertise</h2>
            <h3 style={{ fontSize: '3rem' }}>Core Services</h3>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <div className="card">
              <div className="card-img-container">
                <img src="/images/luxury_lvt_flooring.png" alt="Flooring" />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Flooring</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Installation and maintenance of various types of flooring in residential and commercial spaces.</p>
                <Link to="/flooring" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase' }}>Explore Flooring &rarr;</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img-container">
                <img src="/images/furniture.png" alt="Furniture" />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Furniture</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>High-quality furniture solutions designed for style, comfort, and ultimate functionality.</p>
                <Link to="/furniture" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase' }}>Explore Furniture &rarr;</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img-container">
                <img src="/images/wallpaper.png" alt="Wallpaper" />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Wallpaper</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>A wide range of high-end decorative solutions for interior walls, including custom murals.</p>
                <Link to="/wallpaper" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase' }}>Explore Wallpaper &rarr;</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img-container">
                <img src="/images/luxury_window_blinds_curtains.png" alt="Window Treatments" />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Window Blinds & Curtains</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Tailored curtain solutions and motorized window blinds for privacy and style.</p>
                <Link to="/window-treatments" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase' }}>Explore Blinds & Curtains &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section (New - From Brochure) */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>How We Work</h2>
            <h3 style={{ fontSize: '3rem', color: 'white' }}>Our Proven Process</h3>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { step: "01", title: "Consultation", desc: "We meet to understand your vision, requirements, and budget." },
              { step: "02", title: "Design & Specs", desc: "Our experts provide detailed material specs and design options." },
              { step: "03", title: "Procurement", desc: "Sourcing high-quality materials from our global manufacturer network." },
              { step: "04", title: "Execution", desc: "Professional installation by our skilled contracting teams." },
              { step: "05", title: "Handover", desc: "Final inspection and quality assurance for a perfect finish." }
            ].map((item, i) => (
              <div key={i} style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-light)', marginBottom: '1.5rem', opacity: 0.5 }}>{item.step}</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Safety Section (New - From Brochure) */}
      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1.2fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>Our Standards</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Commitment to Quality & Safety</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Design Elements Trading & Contracting W.L.L. adheres to the highest international standards of safety and quality management. We ensure that every project is executed with precision, durability, and absolute compliance with local regulations.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>HSE Policy</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Prioritizing the health and safety of our teams and clients on every site.</p>
              </div>
              <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>ISO Standards</h4>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Commitment to excellence through standardized operational procedures.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
             <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-light)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌍</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Global Sourcing</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Partnerships with leading manufacturers in Europe and Asia.</p>
             </div>
             <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-light)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏆</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Expert Execution</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Highly skilled technicians for flawless installation.</p>
             </div>
             <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-light)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Fast Delivery</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Efficient logistics to meet strict project deadlines.</p>
             </div>
             <div className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-light)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                <h4 style={{ marginBottom: '0.5rem' }}>Warranty</h4>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>Comprehensive post-installation support and warranty.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Clients & Manufacturers (Pages 19-22) */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem' }}>Our Network</h2>
            <h3 style={{ fontSize: '2.5rem' }}>Clients & Partners</h3>
          </div>
          
          <div style={{ marginBottom: '6rem' }}>
            <h4 style={{ textAlign: 'center', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '3rem' }}>Trusted By</h4>
            <div className="clients-grid">
              {clients.map((client, i) => (
                <div key={i} className="logo-box">
                  <div className="logo-box-text">{client}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ textAlign: 'center', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '3rem' }}>Global Manufacturers</h4>
            <div className="manufacturers-grid">
              {manufacturers.map((brand, i) => (
                <div key={i} className="logo-box">
                  <div className="logo-box-text" style={{ fontSize: '0.9rem' }}>{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding" style={{ background: '#111', color: 'white' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem' }}>
            <div>
              <div style={{ marginBottom: '2rem', background: '#fff', display: 'inline-block', padding: '10px', borderRadius: '8px' }}>
                <img src="/images/logo.jpeg" alt="Design Elements" style={{ height: '60px' }} />
              </div>
              <p style={{ color: '#9ca3af', maxWidth: '300px' }}>{company.address}</p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '2rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><Link to="/flooring" style={{ color: '#9ca3af', textDecoration: 'none' }}>Flooring Solutions</Link></li>
                <li><Link to="/furniture" style={{ color: '#9ca3af', textDecoration: 'none' }}>Designer Furniture</Link></li>
                <li><Link to="/wallpaper" style={{ color: '#9ca3af', textDecoration: 'none' }}>Wall Coverings</Link></li>
                <li><Link to="/contact" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '2rem' }}>Get in Touch</h4>
              <div style={{ marginBottom: '1rem' }}>
                {company.emails.map((email, i) => (
                  <p key={i} style={{ color: '#9ca3af' }}>{email}</p>
                ))}
              </div>
              <div>
                {company.phones.map((phone, i) => (
                  <p key={i} style={{ color: '#9ca3af' }}>{phone}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid #222', textAlign: 'center', color: '#4b5563', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} DESIGN ELEMENTS TRADING AND CONTRACTING W.L.L. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/window-treatments" element={<WindowTreatments />} />
        <Route path="/specialty" element={<Specialty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
