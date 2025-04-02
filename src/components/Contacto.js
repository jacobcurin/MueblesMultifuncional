import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    padding: '50px 20px',
    backgroundImage: 'url("/assets/images/fondo.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    position: 'relative',
  },  
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#25241F',
    marginBottom: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #D2B48C', 
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
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#5C6061',
  },
  info: {
    fontSize: '16px',
    color: '#555555',
    textAlign: 'center',
    lineHeight: '1.6',
  },
};

function Contacto() {
  const [hover, setHover] = useState(false);

  return (
    <section style={styles.container}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: '30px',
        borderRadius: '10px',
        backdropFilter: 'blur(5px)',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}>
        <h2 style={styles.title}>Contáctanos</h2>

        <form style={styles.form}>
          <input
            type="text"
            placeholder="Ingrese su nombre y apellido"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="example@gmail.com"
            style={styles.input}
          />
          <textarea
            placeholder="Escriba su mensaje"
            style={{ ...styles.input, height: '100px' }}
          />
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(hover && styles.buttonHover),
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Enviar mensaje
          </button>
        </form>

        <div style={styles.info}>
          <p>Email: soporte@muebles.com</p>
          <p>Teléfono: +569 1234 5678</p>
        </div>
      </div>
    </section>
  );
}


export default Contacto;