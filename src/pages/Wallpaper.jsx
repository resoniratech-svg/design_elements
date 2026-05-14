import React from 'react';
import { Link } from 'react-router-dom';
import content from '../data/content.json';

function Wallpaper() {
  const { wallpaper } = content.services;

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>Wall Coverings</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{wallpaper.title}</h1>
          <p style={{ margin: '0 auto', color: 'var(--text-light)', maxWidth: '700px', fontSize: '1.15rem' }}>
            {wallpaper.description}
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Artistic Wall Solutions</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our extensive collection includes textured, fabric-backed, and custom-printed wallpapers sourced from the world's most prestigious designers. Whether you're looking for subtle elegance or a bold statement piece, we have the perfect covering for your walls.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--accent-light)', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800 }}>1</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Textured Fabric Wallpapers</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--accent-light)', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800 }}>2</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Eco-Friendly Materials</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--accent-light)', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800 }}>3</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Custom Mural Printing</div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ background: 'var(--accent-light)', color: 'white', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800 }}>4</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Professional Installation</div>
              </li>
            </ul>
            <button className="button-primary">Request Samples</button>
          </div>
          <div>
            <img src="/images/wallpaper.png" alt="Wallpaper Texture" className="brochure-image-rounded" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#111', color: 'white' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Exquisite Patterns & Textures</h2>
             <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Transform your walls with our premium collections.</p>
           </div>
           <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
             <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--accent-light)', marginBottom: '1rem' }}>Residential</h3>
                <p style={{ color: '#aaa' }}>Create a cozy, elegant atmosphere in your living room, bedroom, or dining area with our soft textures and warm patterns.</p>
             </div>
             <div style={{ padding: '2rem', background: '#222', borderRadius: '12px' }}>
                <h3 style={{ color: 'var(--accent-light)', marginBottom: '1rem' }}>Commercial</h3>
                <p style={{ color: '#aaa' }}>Durable, washable, and highly resilient wall coverings perfect for high-traffic areas, hotels, and executive offices.</p>
             </div>
           </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#000', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Design your dream interior</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem', background: 'var(--accent)' }}>Contact Our Designers</Link>
        </div>
      </footer>
    </div>
  );
}

export default Wallpaper;
