import GenreBarButtons from "@/app/components/GenreBarButtons";

export default function GamesLayout({ children }) {
  return (
    <div>
      {/* BARRA DEL LAYOUT ANIDADO */}
      <div className="bg-gray-950/80 backdrop-blur-md border-b border-gray-900 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 relative">
          
          <div className="flex items-center gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-purple-600/30 scrollbar-track-transparent">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider shrink-0 mr-2 border-r border-gray-800 pr-3">
              Genre
            </span>
            
            {/* Delegamos los botones al componente interactivo */}
            <GenreBarButtons />
          </div>

          {/* Sutil difuminado a la derecha solo para móviles */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none md:hidden" />
        </div>
      </div>

      {/* Contenido de las páginas hijas (/games, /games/[id], /games/featured) */}
      {children}
    </div>
  );
}