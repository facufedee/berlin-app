import { FaYoutube, FaDownload } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Sección de enlaces */}
        <div>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:underline">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Atención y soporte
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gates Argentina
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de dirección y botones de descarga */}
        <div>
          <p className="font-semibold">
            Juan Carlos Cruz 1810, Piso 5
            <br />
            CP B1638BHR
            <br />
            Vicente López | Buenos Aires – Argentina
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <button className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition">
              <FaDownload /> CATÁLOGO LIVIANOS
            </button>
            <button className="flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition">
              <FaDownload /> CATÁLOGO PESADOS
            </button>
          </div>
        </div>

        {/* Sección de redes y catálogos internacionales */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold">SEGUINOS</p>
            <a href="#" className="inline-block mt-2">
              <FaYoutube className="text-3xl hover:text-red-600 transition" />
            </a>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">CATÁLOGOS</p>
            <a href="#" className="block hover:underline">
              Catálogo Europa
            </a>
            <a href="#" className="block hover:underline">
              Catálogo Brasil
            </a>
            <a href="#" className="block hover:underline">
              Catálogo EE.UU.
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        Update 11.0 / GATES Argentina / Catálogo Online @ 2025
      </div>
    </footer>
  );
}
