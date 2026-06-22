const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;

/**
 * Obtiene la lista de videojuegos populares desde RAWG para la Home o el catálogo.
 * @returns {Promise<Array>} Lista de videojuegos o array vacío en caso de error.
 */
export async function fetchGames() {
  if (!API_KEY) {
    console.error("Error: Falta configurar NEXT_PUBLIC_RAWG_API_KEY en .env.local");
    return [];
  }

  try {
    // Next.js optimiza y cachea esta petición HTTP automáticamente en el servidor
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&page_size=12`);
    
    if (!response.ok) {
      throw new Error(`Error en la API de RAWG: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Error en servicio fetchGames:", error);
    return []; // Retornamos un array vacío para evitar que la UI colapse
  }
}

/**
 * Obtiene los detalles en profundidad de un videojuego específico utilizando su ID o Slug.
 * Pensada para ser utilizada en la ruta dinámica: app/games/[id]/page.js
 * @param {string|number} id - El identificador único del juego que viene por parámetro de ruta.
 * @returns {Promise<Object|null>} Objeto con los detalles del juego o null en caso de error.
 */
export async function fetchGameDetails(id) {
  if (!API_KEY) {
    console.error("Error: Falta configurar NEXT_PUBLIC_RAWG_API_KEY en .env.local");
    return null;
  }

  try {
    // Consultamos el endpoint específico de un juego agregando su ID en la URL
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Error en la API de RAWG al buscar el ID ${id}: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Retornamos el objeto completo del juego
  } catch (error) {
    console.error(`Error en servicio fetchGameDetails (ID: ${id}):`, error);
    return null; // Retornamos null para que la pantalla dinámica maneje un estado "Not Found"
  }
}