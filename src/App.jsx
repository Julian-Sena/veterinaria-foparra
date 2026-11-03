import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio/Inicio";
import Propietarios from "./pages/Propietarios/Propietarios";
import Mascotas from "./pages/Mascotas/Mascotas";
import Citas from "./pages/Citas/Citas";

function App() {
return (
<BrowserRouter>

<Navbar />

<Routes>

<Route
path="/"
element={<Inicio />}
/>

<Route
path="/propietarios"
element={<Propietarios />}
/>

<Route
path="/mascotas"
element={<Mascotas />}
/>

<Route
path="/citas"
element={<Citas />}
/>

</Routes>

</BrowserRouter>
);
}

export default App;
