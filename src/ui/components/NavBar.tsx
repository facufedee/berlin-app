import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-black text-white py-3">
      {/* Primera línea: Logo + Texto */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo-berlin.png" alt="Berlin Repuestos" className="h-10 mr-3" />
          <span className="text-lg font-bold">BERLIN REPUESTOS ITUZAINGO</span>
        </div>
        {/* Mensaje de Bienvenida */}
        <span className="text-sm">BIENVENIDO AL CATÁLOGO ONLINE</span>
      </div>

      {/* Segunda línea: Menú de Navegación */}
      <div className="container mx-auto mt-3 px-4">
        <ul className="flex justify-around bg-red-600 py-2">
          <li><Link to="/" className="hover:underline">LIVIANOS</Link></li>
          <li><Link to="/kit-bomba" className="hover:underline">KIT + BOMBA</Link></li>
          <li><Link to="/homocineticas" className="hover:underline">HOMOCINÉTICAS</Link></li>
          <li><Link to="/pastillas" className="hover:underline">PASTILLAS DE FRENO</Link></li>
        </ul>
      </div>
    </nav>
  );
}
