import { BrowserRouter } from "react-router-dom";
import Router from "./app/router";
import { AuthProvider } from "./app/context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
