"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FILTER_BUTTONS = [
  "All", "Action", "RPG", "Shooter", "Adventure", 
  "Sports", "Strategy", "Puzzle", "Racing"
];

export default function GenreBarButtons() {
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre")?.toLowerCase() || "all";

  return (
    <>
      {FILTER_BUTTONS.map((genre) => {
        const genreLower = genre.toLowerCase();
        const isActive = currentGenre === genreLower;

        return (
          <Link
            key={genre}
            href={genre === "All" ? "/games" : `/games?genre=${genreLower}`}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
              isActive
                ? "border-purple-500 bg-purple-950/40 text-purple-300 shadow-sm shadow-purple-500/10"
                : "border-gray-800 bg-gray-900/40 text-gray-400 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/30"
            }`}
          >
            {genre}
          </Link>
        );
      })}
    </>
  );
}