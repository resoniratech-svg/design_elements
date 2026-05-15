import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    { title: "Business Bay Executive Offices", category: "Commercial", img: "/images/leather_fabric.jpeg", scope: "Flooring & Furniture" },
    { title: "Palm Jumeirah Luxury Villa", category: "Residential", img: "/images/drapery_curtains.jpeg", scope: "Window Treatments & Wallpaper" },
    { title: "Downtown Dubai Retail Space", category: "Commercial", img: "/images/porcelain_tiles.png", scope: "Porcelain Tiles" },
    { title: "Modern Marina Apartment", category: "Residential", img: "/images/spc_lvt_flooring.jpeg", scope: "LVT Flooring" },
    { title: "Boutique Hotel Lobby", category: "Commercial", img: "/images/luxury_carpet_hero.png", scope: "Custom Axminster Carpets" },
    { title: "Suburban Family Home", category: "Residential", img: "/images/wooden_herringbone.jpeg", scope: "Engineered Hardwood" },
    { title: "Corporate Headquarters", category: "Commercial", img: "/images/carpet_tiles_category.png", scope: "Geometric Carpet Tiles" },
    { title: "Grand Ballroom Renovation", category: "Commercial", img: "/images/axminster-carpet/Axminster carpet_page-0015.jpg", scope: "Bespoke Broadloom" },
    { title: "Luxury Penthouse Suite", category: "Residential", img: "/images/custom_rugs_category.png", scope: "Hand-Tufted Rugs" },
    { title: "High-End Executive Office", category: "Commercial", img: "/images/wallpaper_office.png", scope: "Textured Wall Coverings" },
    { title: "Modern Villa Living Area", category: "Residential", img: "/images/wallpaper_living_room.png", scope: "Fabric Wallpapers" },
    { title: "Five-Star Hotel Corridors", category: "Commercial", img: "/images/print-carpet/print-carpet-15.jpg", scope: "Machine Printed Carpets" }
  ];

  const filteredProjects = projects.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>OUR PORTFOLIO</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our Work</h1>
          <p style={{ margin: '0 auto', color: 'var(--text-light)', maxWidth: '700px', fontSize: '1.15rem' }}>
            Explore our latest projects showcasing our commitment to quality, innovative design, and flawless execution across residential and commercial spaces.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          
          {/* Filters & Search */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <input 
                type="text" 
                placeholder="Search projects by name or scope..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '30px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: '#f9fafb' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['All', 'Residential', 'Commercial'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--primary)' : 'transparent',
                  color: filter === cat ? '#fff' : 'var(--text-light)',
                  border: filter === cat ? '1px solid var(--primary)' : '1px solid var(--border)',
                  padding: '0.6rem 2rem',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem'
                }}
              >
                {cat}
              </button>
            ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {filteredProjects.map((p, i) => (
              <div key={i} className="card" style={{ border: 'none', overflow: 'hidden', borderRadius: '16px', position: 'relative', group: 'true' }}>
                <div style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }} className="portfolio-image" />
                  
                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '2rem',
                    color: 'white',
                    transform: 'translateY(0)', // Keep it visible for "easy to understand" UI, but styled elegantly
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{p.category}</div>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem', lineHeight: '1.2' }}>{p.title}</h3>
                    <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{p.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Start your project with us</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem', background: 'var(--accent)' }}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

export default Gallery;
