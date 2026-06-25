"use client";

import Link from "next/link";
import GameCard from "@/app/components/GameCard";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, isLoaded } = useFavorites();

  // Mientras Next.js hidrata el Local Storage en el cliente, mostramos un estado de carga limpio
  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-gray-400 animate-pulse">Loading your vault...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Encabezado de la Sección */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
          Your Personal Vault
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Your curated collection of favorite titles, saved locally for instant access.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-16 text-center max-w-xl mx-auto mt-8 backdrop-blur-sm">
          <div className="text-6xl mb-4">🤍</div>
          <h2 className="text-2xl font-bold text-white mb-3">Your vault is empty</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            You haven't added any games to your favorites yet. Explore our library and click the heart icon on any title to save it here.
          </p>
          <Link
            href="/games"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-200 shadow-md shadow-purple-500/20 hover:scale-105"
          >
            Discover Games
          </Link>
        </div>
      ) : (
        /* Grilla de Favoritos utilizando el mismo componente atómico */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((game) => (
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
      )}
    </div>
  );
}