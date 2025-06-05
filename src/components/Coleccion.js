import React from 'react';
import { Row, Col, Card } from 'antd';

const secciones = [
  {
    titulo: 'Cocinas',
    muebles: [
      {
        id: 1,
        nombre: 'Cocina Elegancia Obsidiana',
        imagen: '/assets/images/cocina_4.jpg',
        descripcion: 'Diseño premium en tonos oscuros con isla de cuarzo, perfecta para ambientes sofisticados.',
      },
      {
        id: 2,
        nombre: 'Cocina Vintage Turquesa',
        imagen: '/assets/images/cocina_5.jpg',
        descripcion: 'Combinación de colores retro con funcionalidad moderna, ideal para cocinas con estilo.',
      },
      {
        id: 3,
        nombre: 'Cocina Blanca Multifuncional',
        imagen: '/assets/images/cocina_6.jpg',
        descripcion: 'Espacio práctico con alto equipamiento, pensada para amantes de la repostería y la eficiencia.',
      },
      {
        id: 5,
        nombre: 'Cocina Isla Moderna',
        imagen: '/assets/images/cocina_1.jpg',
        descripcion: 'Diseño limpio con isla central y superficie amplia, perfecta para compartir y cocinar.',
      },
      {
        id: 6,
        nombre: 'Cocina Compacta Funcional',
        imagen: '/assets/images/cocina_2.jpg',
        descripcion: 'Optimización del espacio con estilo minimalista en tonos claros.',
      },
      {
        id: 7,
        nombre: 'Cocina Blanco Integral',
        imagen: '/assets/images/cocina_3.jpg',
        descripcion: 'Diseño integral con electrodomésticos empotrados y acabados modernos.',
      },
      {
        id: 8,
        nombre: 'Cocina Vanguardista',
        imagen: '/assets/images/fondo.jpg',
        descripcion: 'Amplitud, brillo y diseño moderno con acabados en alto brillo y madera natural.',
      },
    ],
  },
  {
    titulo: 'Escritorios y Oficinas',
    muebles: [
      {
        id: 4,
        nombre: 'Escritorio Esquinero Nórdico',
        imagen: '/assets/images/escritorio_1.jpg',
        descripcion: 'Diseño en L de inspiración escandinava, ideal para home office o espacios juveniles.',
      },
    ],
  },
];

const styles = {
  card: {
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #D2B48C',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    borderBottom: '3px solid #FFC107',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    flex: '1',
    padding: '15px',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#555555',
  },
};

function Coleccion() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#F4F1EB',
        minHeight: '100vh',
      }}
    >
      <h2 style={{ fontSize: '36px', color: '#8D6E63', marginBottom: '20px' }}>
        Nuestra Colección
      </h2>
      <p
        style={{
          fontSize: '18px',
          color: '#5D4037',
          maxWidth: 600,
          marginTop: 0,
          marginBottom: 20,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Descubre muebles diseñados para transformar tu espacio con estilo y funcionalidad.
      </p>

      {secciones.map((seccion, index) => (
        <div
          key={index}
          style={{
            marginBottom: '80px',
            padding: '0 10px',
            width: '100%',
          }}
        >
          <h3
            style={{
              fontSize: '28px',
              color: '#795548',
              marginBottom: '30px',
              textAlign: 'left',
            }}
          >
            {seccion.titulo}
          </h3>

          <Row gutter={[20, 20]}>
            {seccion.muebles.map((mueble) => (
              <Col xs={24} sm={12} md={8} key={mueble.id}>
                <div style={styles.card}>
                  <div style={styles.imageContainer}>
                    <img
                      src={mueble.imagen}
                      alt={mueble.nombre}
                      style={styles.image}
                    />
                  </div>
                  <div style={styles.content}>
                    <h3 style={styles.title}>{mueble.nombre}</h3>
                    <p style={styles.description}>{mueble.descripcion}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Coleccion;
