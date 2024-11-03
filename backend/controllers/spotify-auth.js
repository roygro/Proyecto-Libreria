const axios = require('axios');

const client_id = 'a98f99621ea748f1b3feeca46f17912a'; // Reemplaza con tu Client ID
const client_secret = '8fd8540a8b294ffcbd6c788d723c7434'; // Reemplaza con tu Client Secret

// Codifica en base64 tu Client ID y Client Secret
const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// Función para obtener el token de acceso
async function getSpotifyToken() {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error al obtener el token de acceso:', error);
    throw error;
  }
}

module.exports = { getSpotifyToken };
