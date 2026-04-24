const games = [
  {
    id: "1",
    title: "Void Conquest",
    genre: "Action",
    platform: ["PC", "PS5", "Xbox"],
    description:
      "An intense third-person action game set in a post-apocalyptic world where players battle hordes of mechanical enemies to reclaim humanity's last cities. Features deep combo systems and a rich upgrade tree.",
    rating: 5,
    releaseYear: 2024,
    developer: "Nebula Studios",
    color: "bg-purple-700",
  },
  {
    id: "2",
    title: "Chrono Realm",
    genre: "RPG",
    platform: ["PC", "PS5"],
    description:
      "A sprawling open-world RPG where time itself is your weapon. Travel between four distinct eras, alter history, and forge alliances with legendary figures to stop an ancient evil from erasing existence.",
    rating: 5,
    releaseYear: 2023,
    developer: "Epoch Games",
    color: "bg-cyan-700",
  },
  {
    id: "3",
    title: "Stellar Breach",
    genre: "Shooter",
    platform: ["PC", "Xbox"],
    description:
      "A fast-paced sci-fi shooter with zero-gravity combat mechanics. Breach enemy space stations, customize your loadout, and fight through 30 missions in a tense single-player campaign.",
    rating: 4,
    releaseYear: 2024,
    developer: "Orbital Works",
    color: "bg-blue-700",
  },
  {
    id: "4",
    title: "Shadow Labyrinth",
    genre: "Adventure",
    platform: ["PC", "PS5", "Switch"],
    description:
      "A dark atmospheric adventure game with puzzle-solving at its core. Navigate an ever-shifting dungeon filled with ancient traps, hidden lore, and mythic creatures guarding forgotten treasures.",
    rating: 4,
    releaseYear: 2023,
    developer: "Darkforge Interactive",
    color: "bg-gray-600",
  },
  {
    id: "5",
    title: "Iron League",
    genre: "Sports",
    platform: ["PC", "PS5", "Xbox", "Switch"],
    description:
      "The ultimate futuristic sports experience. Choose from 20 mechanized athletes, compete in a physics-driven arena league, and climb the global leaderboard in solo or co-op play.",
    rating: 4,
    releaseYear: 2024,
    developer: "HyperField Games",
    color: "bg-orange-600",
  },
  {
    id: "6",
    title: "Prism Odyssey",
    genre: "RPG",
    platform: ["PC", "Switch"],
    description:
      "A vibrant JRPG-inspired adventure through six elemental kingdoms. Build your party of six unique heroes, master turn-based combat, and uncover the mystery behind the shattering of the Great Prism.",
    rating: 5,
    releaseYear: 2022,
    developer: "Kaleidoscope RPG",
    color: "bg-pink-600",
  },
  {
    id: "7",
    title: "Neon Renegade",
    genre: "Action",
    platform: ["PC", "PS5"],
    description:
      "A stylized cyberpunk action game with lightning-fast parkour and melee combat. Tear through a neon-drenched megacity, take down corporate syndicates, and uncover a conspiracy that goes all the way to the top.",
    rating: 4,
    releaseYear: 2023,
    developer: "Voltage Interactive",
    color: "bg-yellow-600",
  },
  {
    id: "8",
    title: "Arctic Siege",
    genre: "Shooter",
    platform: ["PC", "Xbox", "PS5"],
    description:
      "A tactical military shooter set in a frozen conflict zone. Command a four-soldier fireteam, use terrain and weather to your advantage, and complete high-stakes missions behind enemy lines.",
    rating: 3,
    releaseYear: 2022,
    developer: "Frostline Studios",
    color: "bg-teal-700",
  },
];

export function getAllGames() {
  return games;
}

export function getGameById(id) {
  return games.find((g) => g.id === String(id)) || null;
}

export function getGamesByGenre(genre) {
  if (!genre || genre === "All") return games;
  return games.filter((g) => g.genre === genre);
}

export const genres = ["All", "Action", "RPG", "Shooter", "Adventure", "Sports"];

export default games;
