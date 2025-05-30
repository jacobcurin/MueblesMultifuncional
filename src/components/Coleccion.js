import React from 'react';

const muebles = [
  { id: 1, nombre: 'Sofá Moderno', imagen: '/assets/images/escritoriomoderno.jpg', descripcion: 'Diseño vanguardista y materiales premium.' },
  { id: 2, nombre: 'Mesa Minimalista', imagen: '/assets/images/fondo.jpg', descripcion: 'Estilo elegante con madera sostenible.' },
  { id: 3, nombre: 'Silla Ergonómica', imagen: '/assets/images/fondo.jpg', descripcion: 'Ideal para la oficina con ajuste lumbar.' },
  { id: 4, nombre: 'Estantería de Roble', imagen: '/assets/images/fondo.jpg', descripcion: 'Madera maciza con acabado mate.' },
  { id: 5, nombre: 'Cama King Size', imagen: '/assets/images/fondo.jpg', descripcion: 'Colchón premium con estructura de acero.' },
  { id: 6, nombre: 'Sofá Moderno', imagen: '/assets/images/fondo.jpg', descripcion: 'Diseño vanguardista y materiales premium.' },
  { id: 7, nombre: 'Mesa Minimalista', imagen: '/assets/images/fondo.jpg', descripcion: 'Estilo elegante con madera sostenible.' },
  { id: 8, nombre: 'Silla Ergonómica', imagen: '/assets/images/fondo.jpg', descripcion: 'Ideal para la oficina con ajuste lumbar.' },
  { id: 9, nombre: 'Estantería de Roble', imagen: '/assets/images/fondo.jpg', descripcion: 'Madera maciza con acabado mate.' },
  { id: 10, nombre: 'Cama King Size', imagen: '/assets/images/fondo.jpg', descripcion: 'Colchón premium con estructura de acero.' },
  { id: 11, nombre: 'Sofá Moderno', imagen: '/assets/images/fondo.jpg', descripcion: 'Diseño vanguardista y materiales premium.' },
  { id: 12, nombre: 'Mesa Minimalista', imagen: '/assets/images/fondo.jpg', descripcion: 'Estilo elegante con madera sostenible.' },
  { id: 13, nombre: 'Silla Ergonómica', imagen: '/assets/images/fondo.jpg', descripcion: 'Ideal para la oficina con ajuste lumbar.' },
  { id: 14, nombre: 'Estantería de Roble', imagen: '/assets/images/fondo.jpg', descripcion: 'Madera maciza con acabado mate.' },
  { id: 15, nombre: 'Cama King Size', imagen: '/assets/images/fondo.jpg', descripcion: 'Colchón premium con estructura de acero.' },
  { id: 16, nombre: 'Silla Ergonómica', imagen: '/assets/images/fondo.jpg', descripcion: 'Ideal para la oficina con ajuste lumbar.' },
  { id: 17, nombre: 'Estantería de Roble', imagen: '/assets/images/fondo.jpg', descripcion: 'Madera maciza con acabado mate.' },
  { id: 18, nombre: 'Cama King Size', imagen: '/assets/images/fondo.jpg', descripcion: 'Colchón premium con estructura de acero.' },
];

function Coleccion() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#F4F1EB', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '32px', color: '#8D6E63', marginBottom: '20px' }}>Nuestra Colección</h2>
      <p style={{ fontSize: '18px', marginBottom: '30px', color: '#5D4037' }}>
        Explora todos los diseños creados con pasión y precisión.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
        {muebles.map((mueble) => (
          <div key={mueble.id} style={{
            background: '#FFFFFF',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <img src={mueble.imagen} alt={mueble.nombre} style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '20px', color: '#5D4037' }}>{mueble.nombre}</h3>
            <p style={{ fontSize: '14px', color: '#7B7B7B' }}>{mueble.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coleccion;
