import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css'; // Importa estilos globales de Ant Design
import App from './App'; // Usa solo el componente App, sin ChakraProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
