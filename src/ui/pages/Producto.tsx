import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Producto() {
    const { id } = useParams<{ id: string }>(); // Aseguramos que id sea un string

  // Datos hardcodeados de ejemplo
  const productos: Record<string, { nombre: string; descripcion: string }> = {
    "1": { nombre: "Kit de distribución + Bomba de Agua", descripcion: "Incluye correa, tensor y bomba de agua." },
    "2": { nombre: "Homocinética para VW Golf", descripcion: "Compatible con modelos 2015 en adelante." },
    "3": { nombre: "Pastillas de Freno Bosch", descripcion: "Alta resistencia al desgaste." },
  };


  const producto = id && productos[id] ? productos[id] : { nombre: "Producto no encontrado", descripcion: "No hay información disponible." };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">{producto.nombre}</h1>
      <p className="mt-2">{producto.descripcion}</p>
    </MainLayout>
  );
}
