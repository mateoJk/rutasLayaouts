// SERVER COMPONENT (por defecto, sin "use client")
// Renderiza en el servidor: no puede usar hooks ni eventos del navegador.
// Recibe los datos ya mapeados desde RAWG y los presenta como tarjeta de juego.
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";
import FavoriteButton from "./FavoriteButton";

export default function GameCard({
  id,
  name,
  imageUrl,
  rating,
  genre,
  platforms = [],
  priority = false,
}) {
  return (
    <Link
      href={`/games/${id}`}
      className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] flex flex-col relative"
    >
      {/*Inyectamos el botón interactivo pasándole el objeto que necesita el contexto */}
      <FavoriteButton game={{ id, name, imageUrl, rating, genre, platforms }} />

      {/* Imagen de portada */}
      <div className="h-48 w-full bg-gray-800 relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-500">
            <span className="text-4xl">🎮</span>
          </div>
        )}
      </div>
 
      {/* Info del juego */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors line-clamp-1">
            {name}
          </h3>
          {genre && (
            <span className="shrink-0 bg-purple-900/60 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-700 max-w-[100px] truncate">
              {genre}
            </span>
          )}
        </div>
 
        {/* Plataformas */}
        {platforms.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {platforms.slice(0, 3).map((p) => (
              <span key={p} className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded">
                {p}
              </span>
            ))}
            {platforms.length > 3 && (
              <span className="bg-gray-800 text-gray-500 text-xs px-1.5 py-0.5 rounded">
                +{platforms.length - 3}
              </span>
            )}
          </div>
        )}
 
        {/* Rating */}
        <div className="mt-auto">
          <StarRating rating={rating} />
        </div>
      </div>
    </Link>
  );
}