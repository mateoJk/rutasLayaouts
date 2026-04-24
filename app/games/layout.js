import Link from "next/link";

const filterButtons = ["All", "Action", "RPG", "Shooter", "Adventure", "Sports"];

export default function GamesLayout({ children }) {
  return (
    <div>
      {/* Genre filter bar */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-gray-400 text-sm font-medium shrink-0 mr-1">
              Genre:
            </span>
            {filterButtons.map((genre) => (
              <Link
                key={genre}
                href="/games"
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-900/20 transition-all duration-200"
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
