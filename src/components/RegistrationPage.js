import React, { useState } from 'react';

function RegistrationPage() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', background: '#f9f9f9', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Register</h1>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}> {/* Reduced gap */}
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
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
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ marginTop: '15px', padding: '10px', background: '#2a82e4', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
