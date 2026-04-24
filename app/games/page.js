import Link from "next/link";
import { getAllGames } from "@/lib/games";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function GamesPage() {
  const games = getAllGames();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">All Games</h1>
        <p className="text-gray-400">{games.length} titles in the vault</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] glow-hover flex flex-col"
          >
            {/* Cover placeholder */}
            <div
              className={`${game.color} h-44 flex items-center justify-center relative`}
            >
              <span className="text-5xl opacity-50">🎮</span>
              <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-yellow-400 text-xs font-bold px-2 py-1 rounded-md">
                ★ {game.rating}.0
              </span>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-white font-bold group-hover:text-purple-300 transition-colors line-clamp-2">
                  {game.title}
                </h3>
                <span className="shrink-0 bg-purple-900/60 text-purple-300 text-xs px-2 py-0.5 rounded-full border border-purple-800">
                  {game.genre}
                </span>
              </div>

              <p className="text-gray-500 text-xs mb-3">{game.releaseYear}</p>

              <div className="flex flex-wrap gap-1 mt-auto">
                {game.platform.map((p) => (
                  <span
                    key={p}
                    className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
