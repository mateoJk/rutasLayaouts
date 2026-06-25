"use client";

import { useState } from "react";
import GameCard from "./GameCard";

/**
 * CLIENT COMPONENT
 * Maneja una barra de búsqueda local e interactiva sobre los juegos ya filtrados por el servidor.
 * * Props:
 * @param {Array} games - Lista de juegos normalizados y filtrados por género desde el servidor.
 */
export default function GenreFilter({ games }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtramos dinámicamente en el cliente según lo que escriba el usuario
  const displayedGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Buscador interactivo en tiempo real en el Cliente */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title within this category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-300 text-sm"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid de resultados */}
      {displayedGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedGames.map((game) => (
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
        <div className="text-center py-16 bg-gray-900/20 border border-dashed border-gray-800 rounded-2xl">
          <p className="text-gray-400 text-lg">No games match your search criteria.</p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-2 text-purple-400 hover:text-purple-300 text-sm font-medium underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}