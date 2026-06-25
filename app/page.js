import Link from "next/link";
import { fetchGames } from "@/lib/rawg";
import GameCard from "@/app/components/GameCard"; // 👑 Importamos el componente reutilizable

export default async function HomePage() {
  // Consumimos datos reales desde el servidor de forma asíncrona (Server Component)
  const allGames = await fetchGames();
  
  // Extraemos los primeros 3 juegos para la sección "Featured Games"
  const featured = allGames.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 py-24 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-purple-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Welcome to GameVault
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your Ultimate{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Game Library
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Discover, track, and explore thousands of video games across every
            platform and genre.
          </p>
          <Link
            href="/games"
            className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
          >
            Browse All Games
          </Link>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Games</h2>
          <Link
            href="/games/featured"
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            View all →
          </Link>
        </div>

        {featured.length === 0 ? (
          <p className="text-gray-400 text-center">No video games found or API configuration missing.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((game, index) => {
              // Normalizamos las propiedades crudas de la API al formato limpio que usa la Card
              const mainGenre = game.genres && game.genres.length > 0 
                ? game.genres[0].name 
                : "General";

              const platformNames = game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform.name)
                : [];

              return (
                // 🛠️ Reutilización Real de Componentes (Requisito fundamental de la cátedra)
                <GameCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  imageUrl={game.background_image}
                  rating={game.rating}
                  genre={mainGenre}
                  platforms={platformNames}
                  priority={index === 0} // Mantenemos la optimización avanzada de LCP
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}