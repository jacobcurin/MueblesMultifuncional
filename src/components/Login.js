import React, { useState } from 'react';

// Example user data for demo/login UI purposes only
// Not connected to any backend or secure authentication system
const validUsers = [
  { username: 'admin', password: '12345' },
  { username: 'cliente', password: '54321' },
];

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      onLoginSuccess(user.username);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '10px', padding: '10px', width: '200px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#956E51',
            color: '#FFFFFF',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

export default Login;
