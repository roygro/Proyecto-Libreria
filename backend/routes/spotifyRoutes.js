const express = require('express');
const { searchAlbums } = require('../controllers/spotifyController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para buscar álbumes
router.get('/search', async (req, res) => {
  const { query } = req.query; // Obtiene el parámetro de búsqueda

  try {
    const data = await searchAlbums(query); // Usa la función de búsqueda
    res.json(data); // Envía los datos como respuesta
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar álbumes' }); // Manejo de errores
  }
});

// Nueva ruta para audiolibros
router.get('/audiobooks', async (req, res) => {
  const { query } = req.query; // Obtiene el parámetro de búsqueda

  try {
    const data = await searchAlbums(query); // Usa la función de búsqueda para audiolibros
    res.json(data); // Envía los datos como respuesta
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar audiolibros' }); // Manejo de errores
  }
});

module.exports = router; // Exporta el router
 