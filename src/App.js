import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/css/estilos.css";
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Catalogo from './components/Catalogo';
import Footer from './components/Footer';
import Login from './components/Login';
import AcercaDe from './components/Acercade';
import Contacto from './components/Contacto';
import Coleccion from './components/Coleccion';

function Home() {
  const styles = {
    section: {
      padding: '50px 20px',
      textAlign: 'center',
      backgroundColor: '#F5F5DC',
      marginBottom: '20px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#25241F',
      marginBottom: '20px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555555',
      maxWidth: '800px',
      margin: '0 auto',
    },
    button: {
      backgroundColor: '#956E51',
      color: '#FFFFFF',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      marginTop: '20px',
      display: 'inline-block',
    },
  };

  return (
    <>
      <Portada />
      <Catalogo />

      <section
        style={{
          ...styles.section,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: '#25241F',
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0)),
            url('/assets/images/fondo.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '350px'
        }}
      >
        <div style={{ maxWidth: '600px', marginLeft: '40px' }}>
          <h2 style={styles.title}>Acerca de Nosotros</h2>
          <p style={styles.description}>
            En Muebles Multifuncional, nos especializamos en diseñar muebles de alta calidad, combinando estilo y funcionalidad.
            Nuestro objetivo es crear piezas únicas que se adapten a las necesidades de cada cliente.
          </p>
          <a href="/acerca-de" style={styles.button}>Ver más</a>
        </div>
      </section>

      <section
        style={{
          ...styles.section,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          color: '#25241F',
          backgroundImage: `
            linear-gradient(to left, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0)),
            url('/assets/images/fondo.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '350px'
        }}
      >
        <div style={{ maxWidth: '600px', marginLeft: '40px' }}>
          <h2 style={styles.title}>Contáctanos</h2>
          <p style={styles.description}>
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Escríbenos o llámanos y nos pondremos en contacto contigo lo antes posible.
          </p>
          <a href="/contacto" style={styles.button}>Ver detalles</a>
        </div>
      </section>

    </>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSecretAccess = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setShowLogin(false);
  };

  return (
    <Router>
      <div style={{ paddingTop: '70px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onSecretClick={handleSecretAccess} />

        <div style={{ flex: 1 }}>
          {showLogin ? (
            <Login onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acerca-de" element={<AcercaDe />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/coleccion" element={<Coleccion/>} />
            </Routes>
          )}
        </div>

        {!showLogin && <Footer />}
      </div>

      {isLoggedIn && (
        <p style={{ textAlign: 'center', color: 'green' }}>
          Bienvenido, {username}.
        </p>
      )}
    </Router>
  );
}

export default App;
