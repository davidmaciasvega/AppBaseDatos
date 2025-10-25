// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta donde está el build de Angular
const angularDist = path.join(__dirname, 'dist/catalogo-frontend/browser');

// Servir archivos estáticos (JS, CSS, assets)
app.use(express.static(angularDist));

// Todas las rutas devuelven index.html (SPA routing)
app.get('/*', (req, res) => {
  res.sendFile(path.join(angularDist, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
