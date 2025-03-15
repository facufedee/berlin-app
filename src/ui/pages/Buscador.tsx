import { useState } from "react";
import logo from "../../assets/img/logo_oficial.png";
import BuscadorGeneral from "./BuscadorGeneral";
import BuscadorVehiculo from "./BuscadorVehiculo";
import BuscadorProducto from "./BuscadorProducto";

export default function Buscador() {
  const [categoria, setCategoria] = useState<string>("Kit + Bomba");
  const [tipoBusqueda, setTipoBusqueda] = useState<"general" | "vehiculo" | "producto">("vehiculo");

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="bg-black text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 mr-3" />
            <span className="text-lg font-extrabold tracking-wide">
              | REPUESTOS ITUZAINGÓ™ | CATÁLOGO ONLINE
            </span>
          </div>
        </div>
      </nav>

      {/* Categorías */}
      <div className="bg-black text-white py-2 flex flex-wrap justify-center gap-4 px-4">
        {["Kit + Bomba", "Homocinéticas", "Pastillas de Freno"].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 text-lg font-semibold border-b-2 ${
              categoria === item ? "border-red-600 text-red-500" : "border-transparent"
            } transition`}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Opciones de búsqueda */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
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
