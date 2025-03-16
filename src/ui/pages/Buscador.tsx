import { useState } from "react";
import BuscadorGeneral from "./BuscadorGeneral";
import BuscadorVehiculo from "./BuscadorVehiculo";
import BuscadorProducto from "./BuscadorProducto";
import NavBar from "../components/NavBar";

export default function Buscador() {
  const [tipoBusqueda, setTipoBusqueda] = useState<"general" | "vehiculo" | "producto">("vehiculo");

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <NavBar />

      {/* Categorías */}

      {/* Opciones de búsqueda */}
      <div className="mt-32 flex flex-wrap justify-center gap-2">
        <button
          className={`border px-4 py-3 text-sm md:text-lg transition ${
            tipoBusqueda === "general" ? "bg-gray-200" : ""
          }`}
          onClick={() => setTipoBusqueda("general")}
        >
          Buscador General
        </button>
        <button
          className={`border px-4 py-4 text-sm md:text-lg transition ${
            tipoBusqueda === "vehiculo" ? "bg-gray-300 " : ""
          }`}
          onClick={() => setTipoBusqueda("vehiculo")}
        >
          Buscador por Vehículo
        </button>
        <button
          className={`border px-4 py-3 text-sm md:text-lg transition ${
            tipoBusqueda === "producto" ? "bg-gray-200" : ""
          }`}
          onClick={() => setTipoBusqueda("producto")}
        >
          Buscador por Producto
        </button>
      </div>

      {/* Renderiza el buscador seleccionado con key para forzar re-render */}
      <div className="container mx-auto mt-6 px-4">
        {tipoBusqueda === "general" && <BuscadorGeneral key="general" />}
        {tipoBusqueda === "vehiculo" && <BuscadorVehiculo key="vehiculo" />}
        {tipoBusqueda === "producto" && <BuscadorProducto key="producto" />}
      </div>
    </div>
  );
}
