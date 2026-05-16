import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import content from '../data/content.json';
import patterns from '../data/patterns.json';

function Flooring() {
  const { flooring } = content.services;
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('axminster-carpet');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && patterns[category] && activeCategory !== category) {
      const timer = setTimeout(() => setActiveCategory(category), 0);
      return () => clearTimeout(timer);
    }
  }, [location.search, activeCategory]);

  useEffect(() => {
    if (location.hash === '#gallery') {
      const timer = setTimeout(() => {
        const element = document.getElementById('gallery');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const allPatterns = patterns[activeCategory] || [];
  const displayPatterns = allPatterns.slice(0, visibleCount);

  // Fix for the "gap" issue when clicking images (prevent body scroll shift)
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px'; // Approximate scrollbar width
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    }
  }, [selectedImage]);

  const categoryLabels = {
    'axminster-carpet': 'Axminster Carpets',
    'print-carpet': 'Printed Carpets',
    'tufted-carpet': 'Tufted Carpets',
    'carpet-tiles': 'Carpet Tiles',
    'carpet-rugs': 'Custom Rugs'
  };

  const categoryInfo = {
    'axminster-carpet': {
      description: 'Axminster carpets are known for durability, rich patterns, and premium appearance.',
      uses: ['Luxury hotels', 'Banquet halls', 'Casinos', 'Corridors & lobbies', 'Convention centers'],
      image: '/images/luxury_axminster_hotel_carpet.png'
    },
    'carpet-rugs': {
      description: 'Custom rugs are made according to required size, color, and design.',
      uses: ['Living rooms', 'Bedrooms', 'Offices', 'Villas & luxury homes', 'Designer interiors'],
      image: '/images/bespoke_custom_rug_luxury.png'
    },
    'carpet-tiles': {
      description: 'Carpet tiles are easy to install and replace.',
      uses: ['Corporate offices', 'IT companies', 'Schools & colleges', 'Airports', 'Commercial buildings'],
      image: '/images/modern_office_carpet_tiles.png'
    },
    'print-carpet': {
      description: 'Printed carpets allow customized patterns and vibrant designs.',
      uses: ['Hotels', 'Event halls', 'Exhibition areas', 'Restaurants', 'Home interiors'],
      image: '/images/printed_carpet_restaurant_design.png'
    },
    'tufted-carpet': {
      description: 'Tufted carpets are soft, stylish, and comfortable for indoor use.',
      uses: ['Homes', 'Hotels', 'Lounges', 'Bedrooms', 'Premium office spaces'],
      image: '/images/soft_tufted_bedroom_carpet.png'
    }
  };

  const activeInfo = categoryInfo[activeCategory];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }} className="hidden-mobile">Flooring Solutions</div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="section-padding" style={{ background: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{flooring.title}</h1>
          <p style={{ margin: '0 auto', color: 'var(--text-light)', maxWidth: '800px', fontSize: '1.15rem' }}>
            {flooring.description}
          </p>
        </div>
      </header>

      {/* Carpet Specialist Hero */}
      <section className="section-padding" style={{ background: '#111', color: 'white', borderBottom: '1px solid #222' }}>
        <div className="container grid" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.5rem' }}>Heritage & Excellence</h2>
            <h3 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>World-Class Carpet Solutions</h3>
            <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              Established in 1958, our manufacturing partners operate the world's largest Axminster carpet mill. With a heritage of over 60 years in classical design and hospitality excellence, we deliver certified quality through ISO9001 and ISO14001 standards, ensuring your project meets the highest global specifications.
            </p>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
               <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>Global Reach</h4>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>Installed in over 1,000 five-star hotels across five continents.</p>
               </div>
               <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>Certified Quality</h4>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>CRI Green Label Plus and OHSAS 18001 Health system certified.</p>
               </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/luxury_carpet_hero.png" 
              alt="Luxury Carpet" 
              className="brochure-image-rounded" 
              style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'cover' }} 
              onError={(e) => { e.target.onerror = null; e.target.src="/images/flooring.png"; }}
            />
          </div>
        </div>
      </section>

      {/* Featured Collections Gallery */}
      <section id="gallery" className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Full Design Gallery</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
              Showcase of our comprehensive carpet collections, featuring over {Object.values(patterns).flat().length} unique designs. Click any pattern to view details.
            </p>
          </div>

          {/* Gallery Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {Object.keys(patterns).map(key => (
              <button 
                key={key}
                onClick={() => { setActiveCategory(key); setVisibleCount(12); }}
                style={{
                  background: activeCategory === key ? 'var(--primary)' : 'transparent',
                  color: activeCategory === key ? '#fff' : 'var(--text-light)',
                  border: activeCategory === key ? '1px solid var(--primary)' : '1px solid var(--border)',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {categoryLabels[key] || key}
              </button>
            ))}
          </div>

          {/* Active Category Info */}
          <div style={{ background: '#fff', padding: 'clamp(1.5rem, 5vw, 2.5rem)', borderRadius: '16px', marginBottom: '4rem', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'left' }}>
            <div className="grid" style={{ gap: '2rem', alignItems: 'center' }}>
               <div style={{ height: 'auto', maxHeight: '220px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                  <img src={activeInfo.image} alt={categoryLabels[activeCategory]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
               <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>{categoryLabels[activeCategory]}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                    {activeInfo.description}
                  </p>
               </div>
               <div style={{ background: 'var(--bg-light)', padding: '2rem', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem', letterSpacing: '0.1em', fontWeight: 700 }}>Recommended For:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {activeInfo.uses.map((use, i) => (
                      <span key={i} style={{ background: '#fff', color: '#444', border: '1px solid var(--border)', padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                        ✓ {use}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
          
          <div className="grid" style={{ gap: '2rem' }}>
            {displayPatterns.map((img, i) => (
              <div 
                key={i} 
                className="card" 
                onClick={() => setSelectedImage({ url: img, index: i })}
                style={{ border: 'none', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: '#fff', cursor: 'pointer', transition: 'transform 0.3s ease' }}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={img} alt={`Pattern ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#444' }}>{categoryLabels[activeCategory]}</h4>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Details</div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < allPatterns.length && (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button 
                className="button-primary" 
                onClick={() => setVisibleCount(prev => prev + 12)}
                style={{ padding: '1rem 3rem' }}
              >
                Load More Patterns
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }} onClick={() => setSelectedImage(null)}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt="Large View" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }} 
            />
            
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-20px', 
                right: '-20px',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                width: '40px', height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
            >✕</button>
          </div>
        </div>
      )}

      {/* Flooring Categories */}
      <section className="section-padding">
        <div className="container">
          {flooring.categories.map((item, index) => (
            <div key={index} className="grid" style={{ 
              marginBottom: '4rem', 
              alignItems: 'center',
            }}>
              <div style={{ direction: 'ltr' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Premium Material</div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{item.name}</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                  {item.description}
                </p>
                
                {item.types && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#111' }}>Available Variations:</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {item.types.map((type, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, color: '#555' }}>
                           <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>&bull;</span> {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.materials && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#111' }}>Available Materials:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {item.materials.map((mat, i) => (
                        <span key={i} style={{ background: 'var(--bg-light)', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>{mat}</span>
                      ))}
                    </div>
                  </div>
                )}

                <button className="button-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.85rem' }}>View Technical Specs</button>
              </div>
              <div className="hero-image">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="brochure-image-rounded" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxHeight: '450px',
                    objectFit: 'cover',
                  }} 
                  onError={(e) => { e.target.onerror = null; e.target.src="/images/flooring.png"; }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to elevate your flooring?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our team of experts is ready to assist you in selecting the perfect flooring solution for your project.
          </p>
          <Link to="/contact" className="button-primary" style={{ background: 'var(--accent)', border: 'none' }}>Get a Free Quote</Link>
        </div>
      </section>

      <footer style={{ background: '#000', color: '#444', padding: '2rem 0', textAlign: 'center', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} DESIGN ELEMENTS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default Flooring;

