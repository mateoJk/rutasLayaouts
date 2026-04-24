import Link from "next/link";
import { getAllGames } from "@/lib/games";

const genreCards = [
  { label: "Action", icon: "⚔️", color: "from-red-800 to-red-600" },
  { label: "RPG", icon: "🧙", color: "from-purple-800 to-purple-600" },
  { label: "Shooter", icon: "🔫", color: "from-blue-800 to-blue-600" },
  { label: "Adventure", icon: "🗺️", color: "from-green-800 to-green-600" },
  { label: "Sports", icon: "🏆", color: "from-orange-800 to-orange-600" },
];

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

export default function HomePage() {
  const featured = getAllGames().slice(0, 3);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] glow-hover"
            >
              <div className={`${game.color} h-48 flex items-center justify-center`}>
                <span className="text-6xl opacity-60">🎮</span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {game.title}
                  </h3>
                  <span className="shrink-0 bg-purple-900/60 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-700">
                    {game.genre}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {game.platform.map((p) => (
                    <span
                      key={p}
                      className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <StarRating rating={game.rating} />
              </div>
            </Link>
          ))}
        </div>
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
