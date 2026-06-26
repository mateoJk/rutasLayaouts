// SERVER COMPONENT (por defecto, sin "use client")
// Página de detalle de un juego individual.

import { fetchGameDetails } from "@/lib/rawg";
import { notFound } from "next/navigation";
import Image from "next/image";
import StarRating from "@/app/components/StarRating";
import BackButton from "@/app/components/BackButton";
import FavoriteButton from "@/app/components/FavoriteButton";

// Metadatos dinámicos: se generan con los datos reales del juego
export async function generateMetadata({ params }) {
  const { id } = await params;
  const game = await fetchGameDetails(id);
  if (!game) return { title: "Game Not Found — GameVault" };
  return {
    title: `${game.name} — GameVault`,
    description: game.description_raw?.slice(0, 150) || "Game details on GameVault.",
  };
}

export default async function GameDetailPage({ params }) {
  const { id } = await params;

  // Llamamos a la API real de RAWG
  const game = await fetchGameDetails(id);

  // Si la API devuelve null (juego no encontrado o error), mostramos 404
  if (!game) notFound();

  // ─── Mapeo de campos de RAWG ───────────────────────────────────────────────
  const mainGenre = game.genres?.[0]?.name || "General";
  const developer = game.developers?.[0]?.name || "Unknown Developer";
  const releaseYear = game.released ? game.released.split("-")[0] : "N/A";
  const platforms = game.parent_platforms?.map((p) => p.platform.name) || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* BackButton es un Client Component (usa useRouter) */}
      <BackButton label="Back to Games" fallback="/games" />

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        {/* Imagen de portada real desde RAWG */}
        <div className="h-64 sm:h-80 relative bg-gray-800">
          {game.background_image ? (
            <Image
              src={game.background_image}
              alt={game.name}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <span className="text-9xl opacity-30">🎮</span>
            </div>
          )}
          {/* Overlay con gradiente y badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {mainGenre}
              </span>
              {platforms.map((p) => (
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
          {/* Título, botón de favoritos y rating */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-extrabold text-white">{game.name}</h1>
              
              {/* El botón interactivo de favoritos convive dentro del Server Component.
                  Le pasamos los datos normalizados exactamente igual a como los mapea la GameCard */}
              <div className="relative w-10 h-10 shrink-0">
                <FavoriteButton 
                  game={{ 
                    id: game.id, 
                    name: game.name, 
                    imageUrl: game.background_image, 
                    rating: game.rating, 
                    genre: mainGenre, 
                    platforms 
                  }} 
                />
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-1">
              <StarRating rating={game.rating} />
              <span className="text-gray-400 text-sm">{game.rating?.toFixed(1)} / 5</span>
            </div>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Developer</p>
              <p className="text-white font-semibold">{developer}</p>
            </div>
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Release Year</p>
              <p className="text-white font-semibold">{releaseYear}</p>
            </div>
            <div className="bg-gray-800/60 rounded-lg p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Genre</p>
              <p className="text-purple-300 font-semibold">{mainGenre}</p>
            </div>
          </div>

          {/* Descripción */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">About this game</h2>
            {game.description_raw ? (
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {game.description_raw}
              </p>
            ) : (
              <p className="text-gray-500 italic">No description available.</p>
            )}
          </div>

          {/* Plataformas */}
          {platforms.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-white mb-3">Available on</h2>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="bg-gray-800 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Rating visual adicional */}
          {game.ratings_count && (
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Based on{" "}
                <span className="text-gray-300 font-medium">
                  {game.ratings_count.toLocaleString()}
                </span>{" "}
                ratings on RAWG
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}