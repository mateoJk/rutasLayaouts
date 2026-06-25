import Link from "next/link";
import { fetchGames } from "@/lib/rawg";
import Image from "next/image";
import StarRating from "@/app/components/StarRating";

export default async function FeaturedGamesPage() {
  const allGames = await fetchGames();
  // Filtramos o tomamos una selección especial para simular la sección destacada fija
  const featuredGames = allGames.slice(0, 6); 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          href="/games"
          className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
        >
          ← Back to All Games
        </Link>
        <h1 className="text-4xl font-extrabold text-white mt-4">
          ⭐ Premium Featured Games
        </h1>
        <p className="text-gray-400 mt-2">
          A curated elite selection of the highest rated titles available this week.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGames.map((game) => {
          const mainGenre = game.genres && game.genres.length > 0 
            ? game.genres[0].name 
            : "General";

          return (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div className="h-48 w-full bg-gray-800 relative overflow-hidden">
                {game.background_image ? (
                  <Image
                    src={game.background_image}
                    alt={game.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    <span>🎮 No Image</span>
                  </div>
                )}
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors line-clamp-1">
                      {game.name}
                    </h3>
                    <span className="shrink-0 bg-purple-900/60 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-700">
                      {mainGenre}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <StarRating rating={game.rating} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}