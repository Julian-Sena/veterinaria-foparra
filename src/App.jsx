import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login/Login";
import Inicio from "./pages/Inicio/Inicio";
import Propietarios from "./pages/Propietarios/Propietarios";
import Mascotas from "./pages/Mascotas/Mascotas";
import Citas from "./pages/Citas/Citas";

// Componente auxiliar para decidir si se muestra el Navbar
function MainLayout() {
  const location = useLocation();
  
  // Si la ruta actual es la raíz ("/"), no mostramos el Navbar
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* La primera página al entrar */}
        <Route path="/" element={<Login />} />
        
        {/* Páginas principales de la veterinaria */}
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/propietarios" element={<Propietarios />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;