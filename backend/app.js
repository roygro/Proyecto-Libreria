const express = require('express'); // Importa Express
const bodyParser = require('body-parser'); // Importa Body Parser
const cors = require('cors'); // Importa CORS
const sequelize = require('./config/database'); // Importa la configuración de la base de datos
const { User, Library } = require('./models/relations'); // Importa los modelos

const userRoutes = require('./routes/userRoutes'); // Importa las rutas de usuarios
const libraryRoutes = require('./routes/libraryRoutes'); // Importa las rutas de biblioteca
const bookRoutes = require('./routes/bookRoutes'); // Importa las rutas de libros
const spotifyRoutes = require('./routes/spotifyRoutes'); // Importa las rutas de Spotify (si tienes)
const spotifyAuth = require('./controllers/spotify-auth'); // Importa el controlador de autenticación de Spotify
const axios = require('axios'); // Importa Axios para hacer solicitudes HTTP

const app = express(); // Crea una instancia de Express
const PORT = process.env.PORT || 3000; // Define el puerto del servidor

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:4200' // Permite solicitudes desde el frontend de Angular
}));

// Aplicar bodyParser.json globalmente
app.use(bodyParser.json());

// Rutas de la API
app.use('/api/users', userRoutes); // Rutas para usuarios
app.use('/api/libraries', libraryRoutes); // Rutas para bibliotecas
app.use('/api/books', bookRoutes); // Rutas para libros
app.use('/api/spotify', spotifyRoutes); // Rutas para Spotify (si tienes)

// Nuevo endpoint para obtener audiolibros de Spotify
app.get('/spotify/audiobooks', async (req, res) => {
  try {
    const token = await spotifyAuth.getSpotifyToken(); // Obtén el token de acceso
    const response = await axios.get('https://api.spotify.com/v1/browse/categories/audiobooks', {
      headers: {
        Authorization: `Bearer ${token}` // Autenticación con el token
      }
    });
    res.json(response.data); // Devuelve la respuesta de Spotify
  } catch (error) {
    console.error('Error al obtener los audiolibros:', error);
    res.status(500).json({ error: 'Error al obtener los audiolibros' }); // Manejo de errores
  }
});

// Sincronizar la base de datos y levantar el servidor
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`); // Mensaje de éxito
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err); // Manejo de errores de conexión
  });
