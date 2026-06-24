// SERVER COMPONENT (por defecto, sin "use client")
// Esta página obtiene los juegos desde la API real de RAWG en el servidor,
// luego pasa los datos normalizados al componente cliente GenreFilter.

import { fetchGames } from "@/lib/rawg";
import GenreFilter from "@/app/components/GenreFilter";

// Metadatos de la página (Server Component feature)
export const metadata = {
  title: "All Games — GameVault",
  description: "Browse our complete catalog of video games from RAWG.",
};

export default async function GamesPage() {
  // Fetch en el servidor: datos reales de RAWG
  const rawGames = await fetchGames();

  // Normalizamos los datos de RAWG al formato que usan nuestros componentes.
  // RAWG usa nombres distintos: .name, .background_image, .genres[], .parent_platforms[]
  const games = rawGames.map((game) => ({
    id: game.id,
    name: game.name,
    imageUrl: game.background_image || null,
    rating: game.rating || 0,
    // RAWG devuelve géneros como array de objetos: [{ id, name, slug }]
    genre: game.genres && game.genres.length > 0 ? game.genres[0].name : "General",
    // RAWG devuelve plataformas como array de objetos anidados: [{ platform: { id, name } }]
    platforms:
      game.parent_platforms?.map((p) => p.platform.name) || [],
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header de la página */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">All Games</h1>
        <p className="text-gray-400">
          {games.length} titles in the vault — powered by{" "}
          <span className="text-purple-400 font-medium">RAWG API</span>
        </p>
      </div>

      {/* GenreFilter es un Client Component que maneja el estado de filtrado.
          Recibe los juegos ya normalizados como prop. */}
      {games.length > 0 ? (
        <GenreFilter games={games} />
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg mb-2">No games found.</p>
          <p className="text-gray-500 text-sm">
            Verify that <code className="text-purple-400">NEXT_PUBLIC_RAWG_API_KEY</code> is
            configured in <code className="text-purple-400">.env.local</code>.
          </p>
        </div>
      )}
    </div>
  );
}