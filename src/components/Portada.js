import React from 'react';
import { useNavigate } from 'react-router-dom';

function Portada() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "url('/assets/images/fondo.jpg') center/cover no-repeat",
        backgroundColor: 'rgba(37, 36, 31, 0.8)',
        backgroundBlendMode: 'overlay',
        textAlign: 'center',
        padding: '100px 20px',
        color: '#D6C3A5',
        margin: '0',
      }}
    >
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Bienvenido a Muebles Multifuncional</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Los mejores muebles para tu hogar y oficina.</p>
      <button
        style={{
          backgroundColor: '#956E51',
          color: '#FFFFFF',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5C6061')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#956E51')}
        onClick={() => navigate('/coleccion')}
      >
        Ver Colección
      </button>
    </div>
  );
}

export default Portada;
