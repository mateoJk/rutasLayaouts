const team = [
  {
    name: "Mateo Johnston",
    role: "Founder & Lead Developer",
    avatar: "👨‍💻",
    bio: "Passionate gamer and full-stack developer with 8 years of experience building web applications.",
  },
  {
    name: "Juan Laporte",
    role: "UI/UX Designer",
    avatar: "👩‍🎨",
    bio: "Crafts beautiful gaming interfaces with a focus on dark themes and intuitive user experiences.",
  },
  {
    name: "Fede Ramirez",
    role: "Game Data Curator",
    avatar: "🎮",
    bio: "Lifelong gamer and data enthusiast who ensures every title in the vault is accurately catalogued.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GameVault
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Tu compañero definitivo para descubrir, seguir y celebrar el mundo de los videojuegos.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🚀</span>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          GameVault fue construido por y para jugadores. Sostenemos que todo jugador merece una 
            interfaz despejada, veloz y estética 
          para explorar el universo del gaming: desde tesoros independientes hasta títulos de alto presupuesto.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Nuestra plataforma abarca miles de juegos en todas las consolas principales, incluyendo PC, PlayStation, Xbox y Nintendo Switch. Ya sea que busques 
          tu próxima obsesión RPG o quieras revivir un shooter clásico, GameVault tiene todo lo que necesitas
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          { icon: "🔍", title: "Discover", desc: "Explora colecciones seleccionadas de todos los géneros y plataformas." },
          { icon: "📋", title: "Track", desc: "Mantén una biblioteca personal de los juegos que has jugado y los que quieres jugar." },
          { icon: "⭐", title: "Review", desc: "Califica títulos y consulta las valoraciones de la comunidad de un vistazo." },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-600 transition-colors"
          >
            <span className="text-4xl block mb-3">{icon}</span>
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map(({ name, role, avatar, bio }) => (
            <div
              key={name}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-600 transition-colors glow-cyan"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-700 to-cyan-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {avatar}
              </div>
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-3">{role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
