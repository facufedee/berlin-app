import { useState } from "react";

export default function BuscadorProducto() {
  const [producto, setProducto] = useState<string>("");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <select
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="">Selecciona un producto</option>
        <option value="kitBomba">Kit + Bomba</option>
        <option value="homocinetica">Homocinéticas</option>
        <option value="pastillasFreno">Pastillas de Freno</option>
      </select>

      <button className="bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 transition">
        Buscar
      </button>
    </div>
  );
}
