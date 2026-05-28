import { useState } from 'react';
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
import CustomUpholstery from './pages/CustomUpholstery';
import EmailModal from './components/EmailModal';

function HomePage() {
  const { company, clients, manufacturers } = content;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const clientLogos = [
    { name: "Katara Towers Hotels (Raffles and Fairmont)", logo: "/images/Katara_transparent.png", display: "Katara Towers Hotels", style: { transform: 'scale(1.55)' } },
    { name: "Century hotel Doha and Marina", logo: "/images/Century Hotel.jpg", display: "Century Hotel", style: { transform: 'scale(1.3)' }, containerStyle: { background: 'linear-gradient(135deg, #000926 0%, #011d44 50%, #031539 100%)' } },
    { name: "Casa Milano", logo: "/images/Casa Milano.jpg", display: "Casa Milano", style: { transform: 'scale(1.15)' } },
    { name: "Tadmur Contracting", logo: "/images/Tadmur.jpg", display: "Tadmur" },
    { name: "Hilton Hotel", logo: "/images/Hilton Hotel.png", display: "Hilton Hotel" },
    { name: "UCC", logo: "/images/UCC Holding.jpg", display: "UCC" },
    { name: "Sheraton Doha", logo: "/images/Sheraton Doha.jpg", display: "Sheraton", style: { transform: 'scale(1.4)' } },
    { name: "Ritz Carlton", logo: "/images/Ritz Carlton.jpg", display: "Ritz Carlton", style: { transform: 'scale(1.3)' } },
    { name: "Amlak", logo: "/images/AMLAK_transparent.png", display: "AMLAK", style: { transform: 'scale(1.2)', clipPath: 'inset(0% 0% 3% 0%)' } }
  ];

  const brandLogos = [
    { name: "Tarkett", logo: "/images/tarkett_logo_transparent.png", display: "Tarkett", style: { transform: 'scale(1.2)' }, containerStyle: { background: '#003155' } },
    { name: "Desso", logo: "/images/desso.png", display: "Desso", style: { transform: 'scale(1.25)' } },
    { name: "Weihai haima", logo: "/images/Weihai Haima.jpg", display: "Weihai Haima", style: { transform: 'scale(1.2)' } },
    { name: "Seventrust", logo: "/images/Seventrust.jpg", display: "Seventrust", style: { transform: 'scale(1.2)' } },
    { name: "Ztfloor", logo: "/images/ZTFloor.jpg", display: "ZTFloor", style: { transform: 'scale(1.2)' } },
    { name: "Ege", logo: "/images/Ege.png", display: "Ege", style: { transform: 'scale(1.25)' } },
    { name: "Somfy", logo: "/images/Somfy.png", display: "Somfy", style: { transform: 'scale(1.2)' } },
    { name: "Bancroft", logo: "/images/Bancroft.png", display: "Bancroft", style: { transform: 'scale(1.25)' }, containerStyle: { background: '#343434' } },
    { name: "Topflor", logo: "/images/Topflor.png", display: "Topflor", style: { transform: 'scale(1.2)' } },
    { name: "Interfloor", logo: "/images/Interfloor.png", display: "Interfloor", style: { transform: 'scale(1.2)' } },
    { name: "Belgotex", logo: "/images/Belgotex.png", display: "Belgotex", style: { transform: 'scale(1.25)' } },
    { name: "Csi", logo: "/images/csi.jpg", display: "CSI", style: { transform: 'scale(1.25)' } },
    { name: "Primelay", logo: "/images/Primelay.jpg", display: "Primelay", style: { transform: 'scale(1.2)' } },
    { name: "Mapei", logo: "/images/Mapei.png", display: "Mapei", style: { transform: 'scale(1.3)' } },
    { name: "Tai ping", logo: "/images/Tai Ping.jpg", display: "Tai Ping", style: { transform: 'scale(1.2)' } },
    { name: "Burmatex", logo: "/images/Burmatex.png", display: "Burmatex", style: { transform: 'scale(1.2)' }, containerStyle: { background: '#000000' } },
    { name: "Lano", logo: "/images/Lano_transparent.png", display: "Lano", style: { transform: 'scale(1.25)' } },
    { name: "Craftex india", logo: "/images/craftex india.png", display: "Craftex India", style: { transform: 'scale(1.15)' } }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.jpeg" alt="Design Elements" style={{ height: '75px', objectFit: 'contain' }} />
          </Link>
          
          {/* Desktop Links */}
          <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
            
            {/* Services Dropdown */}
            <div className="nav-dropdown">
              <a style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'pointer', padding: '10px 0' }}>Services</a>
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
                <Link to="/custom-upholstery" className="dropdown-item">Custom Upholstery</Link>
              </div>
            </div>

            <Link to="/gallery" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio</Link>
            <Link to="/specialty" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialty</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</Link>
            <GlobalSearch />
          </div>

          {/* Mobile Right Container (Search & Hamburger) */}
          <div className="mobile-header-right">
            <GlobalSearch width="clamp(100px, 25vw, 150px)" />
            <button className="hamburger" onClick={toggleMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
          <button onClick={toggleMobileMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Link to="/" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Home</Link>
          <Link to="/flooring" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Flooring</Link>
          <Link to="/furniture" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Furniture</Link>
          <Link to="/wallpaper" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Wallpaper</Link>
          <Link to="/window-treatments" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Window Blinds</Link>
          <Link to="/custom-upholstery" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Custom Upholstery</Link>
          <Link to="/gallery" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Portfolio</Link>
          <Link to="/specialty" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Specialty</Link>
          <Link to="/contact" onClick={toggleMobileMenu} style={{ textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '1.1rem' }}>Contact</Link>
        </div>
      </div>

      {/* Hero Section */}
      <header className="section-padding" style={{ background: '#fff', position: 'relative' }}>
        <div className="container grid" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="animate-fade-in">
            <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.75rem' }}>Premium Interior Solutions</span>
            <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', color: '#111', lineHeight: '1.1' }}>Crafting Space <br /><span style={{ color: 'var(--accent)' }}>With Excellence.</span></h1>
            <p style={{ marginTop: '2rem', color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '500px', whiteSpace: 'pre-line' }}>
              {company.introduction}
            </p>
            <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
               <Link to="/gallery" className="button-primary">View Portfolio </Link>
{/*               <Link to="/flooring" className="button-primary">View Collections</Link>
 */}{/*               <Link to="/gallery" style={{ display: 'inline-block', padding: '1rem 0', textDecoration: 'none', color: '#111', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>View Portfolio &rarr;</Link>
 */}            </div>
          </div>
          <div className="hero-image">
            {/* <img src="/images/2nd img.png" alt="Premium Interior Design" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '650px', objectFit: 'cover' }} /> */}
          <img src="/images/img2.png" alt="Premium Interior Design" className="brochure-image-rounded" style={{ width: '100%', height: '580px', objectFit: 'cover' }} />

          </div>
        </div>
      </header>

      {/* About Section (Page 3) */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            {/* <img src="/images/luxury_carpet_hero.png" alt="About Us" className="brochure-image-rounded" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '160px 0 160px 0' }} /> */}
             <img src="/images/img3.png" alt="About Us" className="brochure-image-rounded" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '160px 0 160px 0' }} />

          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1.5rem' }}>About Us</h2>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Comprehensive Business Solutions</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', whiteSpace: 'pre-line' }}>
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
        <div className="container grid" style={{ gap: '2rem' }}>
          <div style={{ padding: '3rem 2rem', background: '#111', color: 'white', borderRadius: '0 80px 0 80px' }}>
            <h3 style={{ color: 'var(--accent-light)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 500 }}>
              "{company.mission}"
            </p>
          </div>
          <div style={{ padding: '3rem 2rem', background: 'var(--accent)', color: 'white', borderRadius: '80px 0 80px 0' }}>
            <h3 style={{ color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', opacity: 0.8 }}>Our Vision</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 500 }}>
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
            <div className="card">
              <div className="card-img-container">
                <img src="/images/Custom Upholstery.jpg" alt="Custom Upholstery" />
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Custom Upholstery</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Professional leather and fabric upholstery services to transform and personalize your furniture pieces.</p>
                <Link to="/custom-upholstery" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase' }}>Explore Custom Upholstery &rarr;</Link>
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
              {clientLogos.map((client, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="logo-box" style={{ 
                    width: '100%', 
                    height: '140px', 
                    padding: '1rem', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    overflow: 'hidden',
                    ...client.containerStyle
                  }}>
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.display} 
                        style={{ 
                          height: '95px', 
                          maxWidth: '90%', 
                          objectFit: 'contain',
                          ...client.style
                        }} 
                      />
                    ) : (
                      <div className="logo-box-text" style={{ fontSize: '1.1rem' }}>{client.display}</div>
                    )}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>
                    {client.display}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: '#111', fontWeight: 700 }}>Global Manufacturers</h3>
            <div className="manufacturers-grid">
              {brandLogos.map((brand, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div className="logo-box" style={{ 
                    width: '100%', 
                    height: '140px', 
                    padding: '1rem', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    overflow: 'hidden',
                    ...brand.containerStyle
                  }}>
                    {brand.logo ? (
                      <img 
                        src={brand.logo} 
                        alt={brand.display} 
                        style={{ 
                          height: '95px', 
                          maxWidth: '90%', 
                          objectFit: 'contain',
                          ...brand.style
                        }} 
                      />
                    ) : (
                      <div className="logo-box-text" style={{ fontSize: '1.1rem' }}>{brand.display}</div>
                    )}
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', textAlign: 'center' }}>
                    {brand.display}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding" style={{ background: '#111', color: 'white' }}>
        <div className="container">
          <div className="grid" style={{ gap: '3rem' }}>
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
                  <a 
                    key={i} 
                    href={`mailto:${email}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedEmail(email);
                    }}
                    style={{ 
                      color: '#9ca3af', 
                      textDecoration: 'none', 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      transition: 'color 0.2s' 
                    }}
                    onMouseOver={(e) => e.target.style.color = '#c4a052'}
                    onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {email}
                  </a>
                ))}
              </div>
              <div>
                {company.phones.map((phone, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <p style={{ color: '#9ca3af', margin: 0 }}>{phone}</p>
                    <a 
                      href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#15a34a', 
                        color: '#000', 
                        padding: '0.4rem 1.2rem', 
                        borderRadius: '20px', 
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        alignSelf: 'flex-start',
                        transition: 'opacity 0.2s',
                        fontFamily: "'Outfit', sans-serif"
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '0.9'}
                      onMouseOut={(e) => e.target.style.opacity = '1'}
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #222', textAlign: 'center', color: '#4b5563', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} DESIGN ELEMENTS TRADING AND CONTRACTING W.L.L. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Resonira Partner Banner (Image) */}
      <a href="https://resonira.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'pointer', overflow: 'hidden' }}>
        <img src="/images/digital-partner.png" alt="Our Digital Partner - Resonira Technologies" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', marginTop: '-9%', marginBottom: '-7%' }} />
      </a>

      <EmailModal 
        isOpen={!!selectedEmail} 
        onClose={() => setSelectedEmail(null)} 
        email={selectedEmail} 
      />
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
        <Route path="/custom-upholstery" element={<CustomUpholstery />} />
        <Route path="/specialty" element={<Specialty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
