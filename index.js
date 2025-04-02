const express = require('express');
const path = require('path');
const app = express();

// Configuración para servir archivos estáticos de la carpeta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Manejo de rutas: cualquier ruta debe devolver el archivo "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
