const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', authRoutes); // Prefijo de API para las rutas de autenticación

// Manejo de errores
app.use((err, req, res, next) => {
    console.error('Error en el servidor:', err);
    res.status(500).json({ message: 'Error en el servidor', error: err.message });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
