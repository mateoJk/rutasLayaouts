import Link from "next/link";
import { fetchGames } from "@/lib/rawg";
import Image from "next/image";
import StarRating from "@/app/components/StarRating";

const genreCards = [
  { label: "Action", icon: "⚔️", color: "from-red-800 to-red-600" },
  { label: "RPG", icon: "🧙", color: "from-purple-800 to-purple-600" },
  { label: "Shooter", icon: "🔫", color: "from-blue-800 to-blue-600" },
  { label: "Adventure", icon: "🗺️", color: "from-green-800 to-green-600" },
  { label: "Sports", icon: "🏆", color: "from-orange-800 to-orange-600" },
];

// Al agregar "async", Next.js sabe que debe resolver peticiones de datos antes de renderizar
export default async function HomePage() {
  // Consumimos datos reales desde el servidor de forma asíncrona
  const allGames = await fetchGames();
  
  // Extraemos los primeros 3 juegos para la sección "Featured Games"
  const featured = allGames.slice(0, 3);

  return (
    <div>
      {/* Hero */}
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

      {/* Featured Games */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Games</h2>
          <Link
            href="/games"
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            View all →
          </Link>
        </div>

        {featured.length === 0 ? (
          <p className="text-gray-400 text-center">No video games found or API configuration missing.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((game) => {
              // Mapeo seguro de géneros desde la estructura de RAWG
              const mainGenre = game.genres && game.genres.length > 0 
                ? game.genres[0].name 
                : "General";

              return (
                <Link
                  key={game.id}
                  href={`/games/${game.id}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] glow-hover flex flex-col justify-between"
                >
                  {/* Imagen dinámica de RAWG optimizada */}
                  <div className="h-48 w-full bg-gray-800 relative overflow-hidden">
                    {game.background_image ? (
                      <Image
                        src={game.background_image}
                        alt={game.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={featured.indexOf(game) === 0} // Carga prioritaria para el primer juego (LCP Optimization)
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-500">
                        <span>🎮 No Image Available</span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors line-clamp-1">
                          {game.name}
                        </h3>
                        <span className="shrink-0 bg-purple-900/60 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-700 max-w-[100px] truncate">
                          {mainGenre}
                        </span>
                      </div>

                      {/* Mapeo seguro de plataformas desde el formato anidado de RAWG */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {game.parent_platforms?.slice(0, 3).map((p) => (
                          <span
                            key={p.platform.id || p.platform.name}
                            className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded"
                          >
                            {p.platform.name}
                          </span>
                        ))}
                        {game.parent_platforms?.length > 3 && (
                          <span className="bg-gray-800 text-gray-500 text-xs px-1.5 py-0.5 rounded">
                            +{game.parent_platforms.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Componente Atómico Reutilizable */}
                    <div className="mt-2">
                      <StarRating rating={game.rating} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Browse by Genre */}
      <section className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Genre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {genreCards.map(({ label, icon, color }) => (
              <Link
                key={label}
                href="/games"
                className={`bg-gradient-to-br ${color} rounded-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-200 border border-white/10 hover:border-white/30 shadow-lg`}
              >
                <span className="text-4xl">{icon}</span>
                <span className="text-white font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}