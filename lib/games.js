const games = [
  {
    id: "1",
    title: "League of Legends",
    genre: "Action",
    platform: ["PC"],
    description:
      "Un MOBA competitivo de equipos de 5 jugadores donde cada partida enfrenta a dos equipos en la batalla por destruir el Nexus rival. Con más de 160 campeones únicos, dominar las mecánicas de lane, objetivos y teamfights es la clave para subir de rango.",
    rating: 5,
    releaseYear: 2009,
    developer: "Riot Games",
    color: "bg-blue-800",
  },
  {
    id: "2",
    title: "Counter-Strike: Global Offensive",
    genre: "Shooter",
    platform: ["PC"],
    description:
      "El shooter táctico más icónico de la historia. Dos equipos —terroristas y antiterroristas— se enfrentan en rondas de eliminación con economía de armas, comunicación y precisión al milímetro. La base del esport competitivo mundial.",
    rating: 5,
    releaseYear: 2012,
    developer: "Valve",
    color: "bg-orange-700",
  },
  {
    id: "3",
    title: "Minecraft",
    genre: "Adventure",
    platform: ["PC"],
    description:
      "El juego de construcción y supervivencia más vendido de la historia. Explora mundos generados proceduralmente, recolectá recursos, construí estructuras de cualquier escala y sobreviví a las noches llenas de criaturas hostiles. Sin límites para la creatividad.",
    rating: 5,
    releaseYear: 2011,
    developer: "Mojang Studios",
    color: "bg-green-700",
  },
  {
    id: "4",
    title: "Hollow Knight",
    genre: "Action",
    platform: ["PC"],
    description:
      "Un metroidvania indie de culto ambientado en Hallownest, un reino subterráneo de insectos en ruinas. Explorá un mundo interconectado de enorme profundidad, dominá un combate preciso y descubrí una narrativa oscura contada sin palabras. Obra maestra del género.",
    rating: 5,
    releaseYear: 2017,
    developer: "Team Cherry",
    color: "bg-indigo-900",
  },
];

export function getAllGames() {
  return games;
}

export function getGameById(id) {
  return games.find((g) => g.id === String(id)) || null;
}

export function getGamesByGenre(genre) {
  if (!genre || genre === "All") return games;
  return games.filter((g) => g.genre === genre);
}

export const genres = ["All", "Action", "RPG", "Shooter", "Adventure", "Sports"];

export default games;
