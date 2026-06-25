"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // Evita errores de Hydration en Next.js

  // 1. Cargar datos de Local Storage al iniciar la app (solo ocurre en el cliente)
  useEffect(() => {
    const savedFavorites = localStorage.getItem("gamevault_favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    setIsLoaded(true);
  }, []);

  // 2. Guardar en Local Storage cada vez que cambie la lista
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("gamevault_favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  // Lógica para agregar o sacar de favoritos
  const toggleFavorite = (game) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === game.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== game.id); // Lo saca
      } else {
        return [...prev, game]; // Lo agrega
      }
    });
  };

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, isLoaded }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personalizado para consumir el contexto de forma limpia
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
  }
  return context;
}