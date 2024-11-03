const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const { User, Library } = require('./models/relations');

const userRoutes = require('./routes/userRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes'); // Asegúrate de que la ruta sea correcta
const spotifyAuth = require('./controllers/spotify-auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

// Aplicar bodyParser.json globalmente
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/libraries', libraryRoutes);
app.use('/api/books', bookRoutes); // Asegúrate de agregar esta línea

app.use('/api/spotify', spotifyRoutes); // Configura las rutas de Spotify correctamente

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
