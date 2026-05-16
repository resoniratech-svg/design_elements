import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GlobalSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/gallery?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '0.4rem 1rem',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          outline: 'none',
          fontSize: '0.85rem',
          width: 'clamp(100px, 20vw, 180px)',
          background: 'rgba(255,255,255,0.8)'
        }}
      />
      <button 
        type="submit" 
        style={{
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          marginLeft: '-35px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem'
        }}
      >
        &#x1F50D;
      </button>
    </form>
  );
}

export default GlobalSearch;
