import React, { useState } from 'react';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'w3-admin-2026') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect Password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
        <div className="card" style={{ padding: '3rem', width: '400px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '1rem', marginBottom: '1.5rem', border: '1px solid #ddd' }}
            />
            <button type="submit" className="button-primary" style={{ width: '100%' }}>Login</button>
          </form>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#888' }}>Hint: w3-admin-2026</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '4rem 2rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h1>Admin Dashboard</h1>
          <button onClick={() => setIsLoggedIn(false)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 600 }}>Logout</button>
        </div>

        <div className="grid">
          {/* Add New Service Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>Add New Service</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input 
                type="text" 
                placeholder="Service Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: '1rem', border: '1px solid #ddd' }} 
              />
              <textarea 
                placeholder="Service Description" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{ padding: '1rem', border: '1px solid #ddd', minHeight: '150px' }} 
              ></textarea>
              <div style={{ border: '2px dashed #ddd', padding: '2rem', textAlign: 'center', color: '#888' }}>
                Click to upload image or video
              </div>
              <button className="button-primary">Save Service</button>
            </div>
          </div>

          {/* Stats / Overview */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>Website Overview</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <span>Total Services</span>
                <strong>4</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <span>Gallery Images</span>
                <strong>12</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                <span>Active Videos</span>
                <strong>2</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
