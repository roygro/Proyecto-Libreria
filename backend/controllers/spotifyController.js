const axios = require('axios');
const { getSpotifyToken } = require('./spotify-auth'); // Importa solo la función

// Función para buscar álbumes
async function searchAlbums(query) {
  const token = await getSpotifyToken();

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        q: query,
        type: 'album',
      },
    });
    return response.data; // Devuelve los resultados
  } catch (error) {
    console.error('Error al buscar álbumes:', error);
    throw error; // Lanza un error para manejarlo más adelante
  }
}

// Nueva función para buscar audiolibros
async function searchAudiobooks(query) {
  const token = await getSpotifyToken();

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        q: query,
        type: 'audiobook', // Cambia el tipo a 'audiobook'
      },
    });
    return response.data; // Devuelve los resultados
  } catch (error) {
    console.error('Error al buscar audiolibros:', error);
    throw error; // Lanza un error para manejarlo más adelante
  }
}

module.exports = { searchAlbums, searchAudiobooks }; // Exporta ambas funciones
