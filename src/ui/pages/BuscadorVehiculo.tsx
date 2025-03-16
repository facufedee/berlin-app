import { useState, useEffect } from "react";
import axios from "axios";

interface Vehiculo {
  marca: string;
  modelo: string;
  version: string;
  motor: string;
  combustible: string;
  año: string;
}

export default function BuscadorVehiculo() {
  const [tipoProducto, setTipoProducto] = useState<string>("kit-distribucion");
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [motor, setMotor] = useState<string>("");
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [marcas, setMarcas] = useState<string[]>([]);
  const [modelos, setModelos] = useState<string[]>([]);
  const [motores, setMotores] = useState<string[]>([]);

  // Cargar datos desde el backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/autos") // 🔥 Endpoint del backend
      .then((res) => {
        const vehiculosData: Vehiculo[] = res.data;
        setVehiculos(vehiculosData);
        const marcasUnicas = Array.from(new Set(vehiculosData.map((v: Vehiculo) => v.marca)));
        setMarcas(marcasUnicas);
        console.log("✅ Autos cargaditos:", res.data);
      })
      .catch((err) => console.error("❌ Error al cargar autos:", err));
  }, []);

  const handleMarcaChange = (selectedMarca: string) => {
    setMarca(selectedMarca);
    setModelo("");
    setMotor("");
    setMotores([]);

    const modelosUnicos = Array.from(
      new Set(vehiculos.filter((v) => v.marca === selectedMarca).map((v) => v.modelo))
    );
    setModelos(modelosUnicos);
  };

  const handleModeloChange = (selectedModelo: string) => {
    setModelo(selectedModelo);
    setMotor("");

    const versionesUnicas = Array.from(
      new Set(
        vehiculos
          .filter((v) => v.marca === marca && v.modelo === selectedModelo)
          .map((v) => v.motor)
      )
    );
    setMotores(versionesUnicas);
  };

  const handleBuscar = () => {
    if (!marca || !modelo || !motor) {
      alert("⚠️ Debes seleccionar Marca, Modelo y Versión.");
      return;
    }

    console.log(`🔎 Buscando: ${tipoProducto} para ${marca} ${modelo} ${motor}`);

    // Llamada al backend con los parámetros seleccionados
    axios
      .get("http://localhost:3000/productos", {
        params: { tipo: tipoProducto, marca, modelo, motor },
      })
      .then((res) => console.log("✅ Productos encontrados:", res.data))
      .catch((err) => console.error("❌ Error al buscar productos:", err));
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Tipo de Producto */}
      <select
        value={tipoProducto}
        onChange={(e) => setTipoProducto(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="kit-distribucion">Kit de Distribución</option>
        <option value="homocinetica">Homocinética</option>
        <option value="pastillas-freno">Pastillas de Freno</option>
      </select>

      {/* Marca */}
      <select
        value={marca}
        onChange={(e) => handleMarcaChange(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
      >
        <option value="">Marca</option>
        {marcas.map((m, index) => (
          <option key={index} value={m}> {/* 🔥 Agregamos una key única */}
            {m}
          </option>
        ))}
      </select>

      <select
        value={modelo}
        onChange={(e) => handleModeloChange(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
        disabled={!marca}
      >
        <option value="">Modelo</option>
        {modelos.map((m, index) => (
          <option key={index} value={m}> {/* 🔥 Agregamos una key única */}
            {m}
          </option>
        ))}
      </select>

      <select
        value={motor}
        onChange={(e) => setMotor(e.target.value)}
        className="border p-3 w-full md:w-48 rounded-lg"
        disabled={!modelo}
      >
        <option value="">Version</option>
        {motores.map((mo, index) => (
          <option key={index} value={mo}> {/* 🔥 Agregamos una key única */}
            {mo}
          </option>
        ))}
      </select>

      {/* Botón Buscar */}
      <button
        onClick={handleBuscar}
        className="bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 transition"
      >
        Buscar
      </button>
    </div>
  );
}
