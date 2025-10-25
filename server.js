import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos de Angular
app.use(express.static(path.join(__dirname, 'browser')));

// Ruta catch-all para Angular
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'browser', 'index.html'));
});

// Puerto dinámico de Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
