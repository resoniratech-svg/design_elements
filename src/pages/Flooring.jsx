import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';
import patterns from '../data/patterns.json';

function Flooring() {
  const { flooring } = content.services;
  const [activeCategory, setActiveCategory] = useState('axminster-carpet');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);

  const allPatterns = patterns[activeCategory] || [];
  const displayPatterns = allPatterns.slice(0, visibleCount);

  const categoryLabels = {
    'axminster-carpet': 'Axminster Carpets',
    'print-carpet': 'Printed Carpets',
    'tufted-carpet': 'Tufted Carpets',
    'carpet-tiles': 'Carpet Tiles',
    'carpet-rugs': 'Custom Rugs'
  };

  const technicalSpecs = {
    'axminster-carpet': { material: '80% Wool / 20% Nylon', pile: '7mm to 10mm', usage: 'Luxury Hotels, Grand Ballrooms' },
    'print-carpet': { material: '100% Nylon 6.6', pile: '5mm to 8mm', usage: 'Corridors, Commercial Offices' },
    'tufted-carpet': { material: '100% Wool or Silk Blend', pile: 'Custom Height', usage: 'Executive Suites, Luxury Residential' },
    'carpet-tiles': { material: 'Solution Dyed Nylon', pile: '3mm to 5mm', usage: 'Modern Offices, Schools' },
    'carpet-rugs': { material: 'Bespoke Handmade Wool', pile: 'Variable', usage: 'Statement Areas, Private Villas' }
  };

  const currentSpecs = technicalSpecs[activeCategory] || technicalSpecs['axminster-carpet'];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>Flooring Solutions</div>
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
        <div className="container grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.4em', marginBottom: '1.5rem' }}>Global Carpet Specialist</h2>
            <h3 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>The Art of Premium Carpeting</h3>
            <p style={{ color: '#aaa', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              As a leader in the carpeting industry, we provide end-to-end solutions from design to installation. Our carpets are sourced from the world's finest mills in Belgium, USA, and the UAE, ensuring durability, comfort, and aesthetic perfection for every space.
            </p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
               <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>High Durability</h4>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>Engineered for heavy foot traffic in hotels and offices.</p>
               </div>
               <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                  <h4 style={{ color: 'var(--accent-light)', marginBottom: '0.5rem' }}>Sound Insulation</h4>
                  <p style={{ fontSize: '0.85rem', color: '#888' }}>Advanced acoustic properties for quieter interiors.</p>
               </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/axminster-carpet/Axminster carpet_page-0010.jpg" 
              alt="Luxury Carpet" 
              className="brochure-image-rounded" 
              style={{ width: '100%', height: '550px', objectFit: 'cover' }} 
              onError={(e) => { e.target.onerror = null; e.target.src="/images/flooring.png"; }}
            />
          </div>
        </div>
      </section>

      {/* Featured Collections Gallery */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Full Design Gallery</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
              Showcase of our comprehensive carpet collections, featuring over {Object.values(patterns).flat().length} unique designs. Click any pattern to view details.
            </p>
          </div>

          {/* Gallery Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
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
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {displayPatterns.map((img, i) => (
              <div 
                key={i} 
                className="card" 
                onClick={() => setSelectedImage({ url: img, index: i })}
                style={{ border: 'none', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', background: '#fff', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={img} alt={`Pattern ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#444' }}>{categoryLabels[activeCategory]} - {i + 1}</h4>
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
            background: '#fff',
            maxWidth: '1100px',
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 0.6fr',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ height: '70vh', background: '#f0f0f0' }}>
              <img src={selectedImage.url} alt="Large View" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '1rem' }}>Product Details</div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>{categoryLabels[activeCategory]} #{selectedImage.index + 1}</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Material Composition</h4>
                  <p style={{ fontWeight: 600 }}>{currentSpecs.material}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Pile Height</h4>
                  <p style={{ fontWeight: 600 }}>{currentSpecs.pile}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>Primary Usage</h4>
                  <p style={{ fontWeight: 600 }}>{currentSpecs.usage}</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link to="/contact" className="button-primary" style={{ display: 'block', textAlign: 'center' }}>Inquire for Quote</Link>
              </div>
            </div>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px', right: '20px',
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                border: 'none',
                width: '40px', height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem'
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
              gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1.2fr 0.8fr', 
              marginBottom: '6rem', 
              alignItems: 'center',
              direction: index % 2 === 1 ? 'rtl' : 'ltr'
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
              <div className="hero-image" style={{ direction: 'ltr' }}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="brochure-image-rounded" 
                  style={{ 
                    width: '100%', 
                    height: '450px', 
                    objectFit: 'cover',
                    borderRadius: index % 2 === 1 ? '160px 0 0 0' : '0 160px 0 0'
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
