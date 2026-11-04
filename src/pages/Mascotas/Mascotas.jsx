import { useState } from "react"; 
import "./Mascotas.css"; 
function mascotas() { 
const [nombre, setNombre] = useState(""); 
const [TipoMascota, setTipoMascota] = useState(""); 
const [Propietario, setPropietario] = useState(""); 
const [mascotas, setmascotas] = useState([]); 
const guardarPropietario = () => { 
if ( 
nombre.trim() === "" || 
TipoMascota.trim() === "" || 
Propietario.trim() === "" 
) { 
alert("Todos los campos son obligatorios"); 
return; 
} 
 
const nuevo = { 
id: Date.now(), 
nombre, 
TipoMascota, 
Propietario
}; 
 
setmascotas([...mascotas, nuevo]); 
 
setNombre(""); 
setTipoMascota(""); 
setPropietario(""); 
}; 
 
const eliminarPropietario = (id) => { 
 
const listaNueva = 
mascotas.filter( 
propietario => propietario.id !== id 
); 
 
setmascotas(listaNueva); 
}; 
 
return ( 
<div className="contenedor"> 
 
<h1>Gestión de mascotas</h1> 
 
<div className="formulario"> 
 
<input 
type="text" 
placeholder="Nombre" 
value={nombre} 
onChange={(e) => 
setNombre(e.target.value)} 
/> 
 
<input 
type="text" 
placeholder="TipoMascota" 
value={TipoMascota} 
onChange={(e) => 
setTipoMascota(e.target.value)} 
/> 
 
<input 
type="email" 
placeholder="Propietario" 
value={Propietario} 
onChange={(e) => 
setPropietario(e.target.value)} 
/> 
 
<button 
onClick={guardarPropietario} 
> 
Guardar 
</button> 
 
</div> 
 
<h2>Lista de mascotas</h2> 
 
<table> 
 
<thead> 
<tr> 
<th>ID</th> 
<th>Nombre</th> 
<th>TipoMascota</th> 
<th>Propietario</th> 
<th>Acción</th> 
</tr> 
</thead> 
 
<tbody> 
 
{ 
mascotas.map( 
propietario => ( 
<tr 
key={propietario.id} 
> 
<td>{propietario.id}</td> 
 
<td> 
{propietario.nombre} 
</td> 
 
<td> 
{propietario.TipoMascota} 
</td> 
 
<td> 
{propietario.Propietario} 
</td> 
 
<td> 
 
<button 
className="eliminar" 
onClick={() => 
eliminarPropietario( 
propietario.id 
) 
} 
> 
Eliminar 
</button> 
 
</td> 
</tr> 
) 
) 
} 
 
</tbody> 
 
</table> 
 
</div> 
); 
} 
 
export default mascotas; 