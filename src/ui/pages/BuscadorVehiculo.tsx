import { useState } from "react";

export default function BuscadorVehiculo() {
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [version, setVersion] = useState<string>("");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <select
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="">Marca</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Chevrolet">Chevrolet</option>
      </select>

      <select
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="">Modelo</option>
        <option value="Corolla">Corolla</option>
        <option value="Mustang">Mustang</option>
        <option value="Camaro">Camaro</option>
      </select>

      <select
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="">Versión</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>

      <button className="bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 transition">
        Buscar
      </button>
    </div>
  );
}
