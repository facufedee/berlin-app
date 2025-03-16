import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../app/context/AuthContext";
import {  } from "react";
import logo from "../../assets/img/logo_oficial.png";

export default function NavBar() {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext || {}; // ✅ Para evitar errores si AuthContext es null
  const [categoria, setCategoria] = useState<string>("Kit + Bomba");

  return (
    <nav className="bg-black text-white py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Nombre */}
        <div className="flex items-center">
          <img src={logo} alt="Berlin Repuestos" className="h-10 mr-3" />
          <span className="text-lg font-extrabold tracking-wide">
            | REPUESTOS ITUZAINGÓ ™ | CATÁLOGO ONLINE
          </span>
        </div>

        {/* Botón de Cerrar Sesión */}
        {user && (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition"
          >
            Cerrar Sesión
          </button>
        )}
      </div>

      {/* Menú de Navegación
      <div className="container mx-auto mt-3 px-4">
        <ul className="flex justify-around bg-red-600 py-2">
          <li><Link to="/" className="hover:underline">LIVIANOS</Link></li>
          <li><Link to="/kit-bomba" className="hover:underline">KIT + BOMBA</Link></li>
          <li><Link to="/homocineticas" className="hover:underline">HOMOCINÉTICAS</Link></li>
          <li><Link to="/pastillas" className="hover:underline">PASTILLAS DE FRENO</Link></li>
        </ul>
      </div>
 */}

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

    </nav>
  );
}
