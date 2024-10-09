import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ marginTop: '15px', padding: '10px', background: '#2a82e4', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
