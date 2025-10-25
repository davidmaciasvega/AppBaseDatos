import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de Angular
app.use(express.static(path.join(__dirname, 'dist/catalogo-frontend/browser')));

// SPA fallback: cualquier ruta redirige a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/catalogo-frontend/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
