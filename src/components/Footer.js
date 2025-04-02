import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#25241F', 
        color: '#D6C3A5', 
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '10px' }}>Muebles Multifuncional</h3>
        <p style={{ margin: 0 }}>© 2025 Todos los derechos reservados.</p>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <p style={{ margin: '5px 0' }}>Contacto: MueblesMultifuncional@gmail.com</p>
        <p style={{ margin: '5px 0' }}>Teléfono: +569 1234 5678</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a
          href="#"
          style={{
            color: '#D6C3A5',
            textDecoration: 'none',
            fontSize: '20px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#956E51')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#D6C3A5')}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="#"
          style={{
            color: '#D6C3A5',
            textDecoration: 'none',
            fontSize: '20px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#956E51')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#D6C3A5')}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#"
          style={{
            color: '#D6C3A5',
            textDecoration: 'none',
            fontSize: '20px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#956E51')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#D6C3A5')}
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
