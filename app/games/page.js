import { fetchGames } from "@/lib/rawg";
import GenreFilter from "@/app/components/GenreFilter";

export const metadata = {
  title: "All Games — GameVault",
  description: "Browse our complete catalog of video games from RAWG.",
};

export default async function GamesPage({ searchParams }) {
  const rawGames = await fetchGames();
  
  // Extraemos parámetro de género de la URL
  const currentGenre = (await searchParams)?.genre || null;

  // Normalizamos las propiedades que vienen desde la API de RAWG
  const allNormalizedGames = rawGames.map((game) => ({
    id: game.id,
    name: game.name,
    imageUrl: game.background_image || null,
    rating: game.rating || 0,
    genre: game.genres && game.genres.length > 0 ? game.genres[0].name : "General",
    platforms: game.parent_platforms?.map((p) => p.platform.name) || [],
  }));

  // Filtrado ultra eficiente ejecutado directamente en el Servidor
  const games = currentGenre
    ? allNormalizedGames.filter(game => game.genre.toLowerCase() === currentGenre)
    : allNormalizedGames;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header de la página */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">All Games</h1>
        <p className="text-gray-400">
          {games.length} {games.length === 1 ? "title" : "titles"} found — powered by{" "}
          <span className="text-purple-400 font-medium">RAWG API</span>
        </p>
      </div>

      {/* Le pasamos la lista ya filtrada por servidor al componente cliente */}
      {games.length > 0 ? (
        <GenreFilter games={games} />
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg mb-2">No games found for this category.</p>
        </div>
      )}
    </div>
  );
}