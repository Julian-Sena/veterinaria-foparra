import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
return (
<nav className="navbar">
<h2>🐾 Veterinaria FOPARRA</h2>

<ul>
<li>
<Link to="/inicio">Inicio</Link>
</li>

<li>
<Link to="/propietarios">Propietarios</Link>
</li>

<li>
<Link to="/mascotas">Mascotas</Link>
</li>

<li>
<Link to="/citas">Citas</Link>
</li>
</ul>
</nav>
);
}

export default Navbar;
