"use client";

import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoriteButton({ game }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(game.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Evita que se dispare el Link padre de la Card
    toggleFavorite(game);
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className="absolute top-3 right-3 z-30 bg-gray-950/70 backdrop-blur-md p-2 rounded-full border border-gray-800/80 text-sm hover:scale-110 active:scale-95 hover:border-purple-500 transition-all duration-200"
      title={favorited ? "Remove from Favorites" : "Add to Favorites"}
    >
      {favorited ? "❤️" : "🤍"}
    </button>
  );
}