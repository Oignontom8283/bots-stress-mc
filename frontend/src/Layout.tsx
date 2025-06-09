// src/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Barre de navigation à gauche (tu peux la mettre à droite si tu préfères) */}
      <div className="flex min-h-screen">
        <Navbar />
      </div>

      {/* Contenu de la page */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
