import { Link } from 'react-router-dom';

function Specialty() {
  const items = [
    {
      title: "Artificial Grass",
      desc: "Premium synthetic turf with 35mm to 45mm pile height. UV stabilized, pet-friendly, and perfect for residential gardens, balconies, and sports fields.",
      img: "/images/artificial_grass.png",
      tags: ["UV Stabilized", "Pet Friendly", "Low Maintenance"]
    },
    {
      title: "Sports Flooring",
      desc: "High shock absorption rubber and vinyl flooring for gyms, indoor sports courts, and athletic facilities. Designed for heavy impact and maximum safety.",
      img: "/images/indoor_sports.jpeg",
      tags: ["High Impact", "Shock Absorbent", "Gym Grade"]
    },
    {
      title: "Raised Access Flooring",
      desc: "Ideal for modern office spaces, server rooms, and data centers. Provides easy access to underfloor utilities while maintaining a clean, professional finish.",
      img: "/images/raised_access.jpeg",
      tags: ["Data Centers", "Office Utility", "Steel & Aluminum"]
    },
    {
      title: "Outdoor Decking (WPC)",
      desc: "Weather-resistant Wood Plastic Composite decking. Perfect for swimming pool surrounds, terraces, and high-traffic outdoor areas.",
      img: "/images/outdoor_decking_wpc.png",
      tags: ["Weather Resistant", "Anti-Slip", "Eco-Friendly"]
    },
    {
      title: "Rubber Tiles & Playgrounds",
      desc: "Safety-first rubber tiling for children's playgrounds and outdoor fitness areas. High durability and excellent fall protection.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      tags: ["Safety Certified", "Impact Protection", "Outdoor Grade"]
    },
    {
      title: "Acoustic Solutions",
      desc: "Specialized wall and ceiling panels designed to control sound reflections and noise levels in theaters, conference rooms, and open offices.",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      tags: ["Sound Control", "Modern Design", "Fire Rated"]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <nav className="glass-nav">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px', gap: '1rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.05em' }}>&larr; BACK TO HOME</Link>
          <div style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }} className="hidden-mobile">SPECIALTY PRODUCTS</div>
        </div>
      </nav>

      <header className="section-padding" style={{ background: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>Specialty Solutions</h1>
          <p style={{ margin: '0 auto', color: 'var(--text-light)', maxWidth: '700px', fontSize: '1.1rem' }}>
            Beyond standard interiors, we provide high-performance solutions for specialized environments, from athletic courts to high-tech server rooms.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="grid" style={{ gap: '3rem' }}>
            {items.map((item, index) => (
              <div key={index} className="card" style={{ border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', background: '#fff' }}>
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, i) => (
                      <span key={i} style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', background: 'var(--bg-light)', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-padding" style={{ background: '#111', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Need a custom solution?</h2>
          <Link to="/contact" className="button-primary" style={{ marginTop: '2rem', background: 'var(--accent)' }}>Discuss Your Project</Link>
        </div>
      </footer>
    </div>
  );
}

export default Specialty;

