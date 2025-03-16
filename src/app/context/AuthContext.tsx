import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  user: { token: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const [loading, setLoading] = useState(true); // ✅ Evitar que el contenido se renderice antes de validar

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // ✅ Validar el token antes de establecer el usuario
      axios
        .get("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser({ token });
        })
        .catch((err) => {
          console.error("❌ Token inválido o expirado:", err);
          localStorage.removeItem("token");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    console.log("📌 Intentando conectar con:", `http://localhost:3000/auth/login`);

    try {
      const res = await axios.post(`http://localhost:3000/auth/login`, { email, password });
      console.log("✅ Respuesta del backend:", res.data);

      if (res.data.access_token) {
        localStorage.setItem("token", res.data.access_token);
        setUser({ token: res.data.access_token });
        console.log("✅ Token guardado:", res.data.access_token);
      } else {
        console.error("❌ No se recibió un token en la respuesta.");
      }
    } catch (error) {
      console.error("❌ Error en la solicitud de login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ✅ Mostrar un mensaje de carga antes de validar el token
  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Cargando...</div>;
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
