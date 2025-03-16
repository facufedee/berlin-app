import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Buscador from "../ui/pages/Buscador";
import Login from "../ui/pages/Login";

export default function Router() {
  const authContext = useContext(AuthContext);
  const user = authContext ? authContext.user : null;

  return (
      <Routes>
        {/* Si el usuario NO está autenticado, redirige a /login */}
        <Route path="/" element={user ? <Buscador /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
