"use client";
// CLIENT COMPONENT — requiere "use client" porque usa el hook useRouter.
// Botón de "volver atrás" reutilizable que usa la historia del navegador.
 
import { useRouter } from "next/navigation";
 
/**
 * BackButton — Botón reutilizable para navegar hacia atrás en el historial.
 * Se usa en: app/games/[id]/page.js
 *
 * Props:
 *   @param {string} label    - Texto del botón (opcional, default: "Back")
 *   @param {string} fallback - Ruta a la que navegar si no hay historial (opcional)
 */
export default function BackButton({ label = "Back", fallback = "/games" }) {
  const router = useRouter();
 
  const handleBack = () => {
    // Si hay historial, regresa. Si no, va al fallback.
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };
 
  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 group cursor-pointer"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span>
      {label}
    </button>
  );
}
 