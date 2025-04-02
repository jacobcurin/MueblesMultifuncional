import React, { useState } from 'react';

function AdminPanel() {
  const [muebles, setMuebles] = useState([
    { id: 1, nombre: 'Mesa de Centro', precio: 5000 },
    { id: 2, nombre: 'Silla de Oficina', precio: 3000 },
  ]);

  const agregarMueble = () => {
    const nuevoMueble = { id: muebles.length + 1, nombre: 'Nuevo Mueble', precio: 0 };
    setMuebles([...muebles, nuevoMueble]);
  };

  const eliminarMueble = (id) => {
    setMuebles(muebles.filter((mueble) => mueble.id !== id));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Panel de Administración</h1>
      <button
        onClick={agregarMueble}
        style={{
          backgroundColor: '#956E51',
          color: '#FFFFFF',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Agregar Mueble
      </button>
      <ul>
        {muebles.map((mueble) => (
          <li key={mueble.id} style={{ marginBottom: '10px' }}>
            {mueble.nombre} - ${mueble.precio}{' '}
            <button
              onClick={() => eliminarMueble(mueble.id)}
              style={{
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;