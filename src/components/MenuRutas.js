import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menurutas">
          <li>
            <NavLink to="/"> Tabla hospitales</NavLink>
          </li>
          {/* <li>
            <NavLink to="/insertarhospital"> Insertar hospital</NavLink>
          </li>
          <li>
            <NavLink to="/eliminarhospital"> Eliminar hospital</NavLink>
          </li>
          <li>
            <NavLink to="/buscadorcoches"> Buscador Coches</NavLink>
          </li>
          <li>
            <NavLink to="/departamentosempleados">Departamentos empleados</NavLink>
          </li>
          <li>
            <NavLink to="/empleadosoficios"> Empleados oficios</NavLink>
          </li>
          <li>
            <NavLink to="/departamentos"> Departamentos</NavLink>
          </li>
          <li>
            <NavLink to="/home"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/tablamultiplicar/21"> Tabla multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tablamultiplicar/50"> Tabla multiplicar 50</NavLink>
          </li>
          <li>
            <NavLink to="/tablamultiplicar/14"> Tabla multiplicar 14</NavLink>
          </li> */}
          <li>
            <NavLink to="/hospitalesmultiple"> Hospitales multiple</NavLink>
          </li>
          <li>
            <NavLink to="/noexiste"> Sin ruta</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
