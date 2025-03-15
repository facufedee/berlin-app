import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscador from "../ui/pages/Buscador";
import Producto from "../ui/pages/Producto";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>
    </BrowserRouter>
  );
}
