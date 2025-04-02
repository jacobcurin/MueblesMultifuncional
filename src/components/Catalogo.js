import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;


const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#F5F5DC',
  },
  card: {
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF', 
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #D2B48C', 
    display: 'flex',
    flexDirection: 'column', 
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  },
  imageContainer: {
    width: '100%',
    height: '200px', 
    overflow: 'hidden', 
    borderBottom: '3px solid #FFC107', 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    transition: 'transform 0.3s', 
  },
  imageHover: {
    transform: 'scale(1.1)', 
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
  price: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#FFC107', 
    marginTop: '10px',
  },
};

function Catalogo() {
  const muebles = [
    {
      id: 1,
      title: 'Escritorio Moderno',
      description: 'Un diseño moderno ideal para oficinas.',
      image: '/assets/images/fondo.jpg',
    },
    {
      id: 2,
      title: 'Silla de Madera',
      description: 'Elegancia y confort en un solo lugar.',
      image: '/assets/images/fondo.jpg',
    },
    {
      id: 3,
      title: 'Mesa de Centro',
      description: 'Perfecta para reuniones y salas de estar.',
      image: 'public/assets/images/fondo.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <Row gutter={[16, 16]}>
          {muebles.map((mueble) => (
            <Col xs={24} sm={12} md={8} key={mueble.id}> 
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.cardHover.transform;
                  e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div
                  style={styles.imageContainer}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('img').style.transform = styles.imageHover.transform;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                >
                  <img src={mueble.image} alt={mueble.title} style={styles.image} />
                </div>

                <div style={styles.content}>
                  <h3 style={styles.title}>{mueble.title}</h3>
                  <p style={styles.description}>{mueble.description}</p>
                  <div style={styles.price}>{mueble.price}</div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default Catalogo;