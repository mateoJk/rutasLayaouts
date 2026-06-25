"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/app/context/FavoritesContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            <span className="text-2xl">🎮</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              GameVault
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive(href)
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                <span>{label}</span>
                
                {/* 🎯 BADGE REACTIVO: Si el enlace es "Favorites" y hay elementos, renderiza el globo numérico */}
                {label === "Favorites" && favorites.length > 0 && (
                  <span className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-extrabold shadow-sm border border-purple-400/30 tracking-tight transition-all duration-300 animate-pulse">
                    {favorites.length}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}