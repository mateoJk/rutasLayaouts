import Link from "next/link";
import { getGameById } from "@/lib/games";
import { notFound } from "next/navigation";

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-2xl">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-yellow-400" : "text-gray-700"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default async function GameDetailPage({ params }) {
  const { id } = await params;
  const game = getGameById(id);

  if (!game) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <Link
        href="/games"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Games
      </Link>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {/* Large cover placeholder */}
        <div
          className={`${game.color} h-64 sm:h-80 flex items-center justify-center relative`}
        >
          <span className="text-9xl opacity-30">🎮</span>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {game.genre}
              </span>
              {game.platform.map((p) => (
                <span
                  key={p}
                  className="bg-black/50 backdrop-blur-sm text-gray-200 text-sm px-3 py-1 rounded-full border border-white/20"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Title & rating */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <h1 className="text-4xl font-extrabold text-white">{game.title}</h1>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <StarRating rating={game.rating} />
              <span className="text-gray-400 text-sm">{game.rating} / 5</span>
            </div>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Developer</p>
              <p className="text-white font-semibold">{game.developer}</p>
            </div>
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Release Year</p>
              <p className="text-white font-semibold">{game.releaseYear}</p>
            </div>
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Genre</p>
              <p className="text-purple-300 font-semibold">{game.genre}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">About this game</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{game.description}</p>
          </div>

          {/* Platforms */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-white mb-3">Available on</h2>
            <div className="flex flex-wrap gap-2">
              {game.platform.map((p) => (
                <span
                  key={p}
                  className="bg-gray-800 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
