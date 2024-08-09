const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el módulo cors
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const libraryRoutes = require('./routes/libraryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura cors para permitir solicitudes desde otros orígenes
app.use(cors({
  origin: 'http://localhost:4200' // URL de mi frontend
}));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/libraries', libraryRoutes);

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
