import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#956E51',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '70px',
    borderBottom: '1px solid #804a32',
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
    padding: '10px 15px',
  },
  menuIcon: {
    display: 'none', 
    fontSize: '28px',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#956E51',
    padding: '10px 0',
    textAlign: 'center',
    zIndex: 999,
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '18px',
    padding: '15px',
    display: 'block',
  },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Muebles Multipropositos</div>

      <div
        className="menu-icon"
        style={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰ 
      </div>

      <ul className="nav-links" style={{ ...styles.navLinks, display: menuOpen ? 'none' : 'flex' }}>
        <li>
          <Link to="/" style={styles.navLink}>Inicio</Link>
        </li>
        <li>
          <Link to="/coleccion" style={styles.navLink}>Colección</Link>
        </li>
        {/* <li>
          <Link to="/acerca-de" style={styles.navLink}>Acerca de</Link>
        </li> */}
        <li>
          <Link to="/contacto" style={styles.navLink}>Contacto</Link>
        </li>
      </ul>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/coleccion" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Colección</Link>
          {/* <Link to="/acerca-de" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Acerca de</Link> */}
          <Link to="/contacto" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
