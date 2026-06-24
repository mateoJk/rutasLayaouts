"use client";
// CLIENT COMPONENT — requiere "use client" porque usa el hook useState.
// Maneja el filtro interactivo de géneros en la página /games.
// Al hacer clic en un género, filtra los juegos sin recargar la página.
 
import { useState } from "react";
import GameCard from "./GameCard";
 
// Géneros disponibles para filtrar (podrían venir de la API en una versión más avanzada)
const GENRES = ["All", "Action", "RPG", "Shooter", "Adventure", "Sports", "Strategy", "Puzzle", "Racing"];
 
/**
 * GenreFilter — Componente cliente que renderiza botones de géneros y filtra
 * la grilla de GameCard dinámicamente con estado local (useState).
 *
 * Props:
 *   @param {Array} games - Lista de juegos ya normalizados para mostrar
 */
export default function GenreFilter({ games }) {
  const [activeGenre, setActiveGenre] = useState("All");
 
  // Filtramos los juegos según el género activo
  const filteredGames =
    activeGenre === "All"
      ? games
      : games.filter((g) => g.genre === activeGenre);
 
  return (
    <div>
      {/* Botones de filtro por género */}
      <div className="flex flex-wrap gap-2 mb-8">
        {GENRES.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeGenre === genre
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
 
      {/* Contador de resultados */}
      <p className="text-gray-500 text-sm mb-6">
        {filteredGames.length} {filteredGames.length === 1 ? "title" : "titles"} found
      </p>
 
      {/* Grilla de juegos filtrados */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              imageUrl={game.imageUrl}
              rating={game.rating}
              genre={game.genre}
              platforms={game.platforms}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No games found for this genre.</p>
          <button
            onClick={() => setActiveGenre("All")}
            className="mt-4 text-purple-400 hover:text-purple-300 text-sm underline"
          >
            Show all games
          </button>
        </div>
      )}
    </div>
  );
}