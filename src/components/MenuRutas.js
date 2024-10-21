import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id="menurutas">
          <li>
            <a href="/"> Tabla hospitales</a>
          </li>
          <li>
            <a href="/insertarhospital"> Insertar hospital</a>
          </li>
          <li>
            <a href="/eliminarhospital"> Eliminar hospital</a>
          </li>
          <li>
            <a href="/buscadorcoches"> Buscador Coches</a>
          </li>
          <li>
            <a href="/departamentosempleados"> Departamentos empleados</a>
          </li>
          <li>
            <a href="/empleadosoficios"> Empleados oficios</a>
          </li>
          <li>
            <a href="/departamentos"> Departamentos</a>
          </li>
          <li>
            <a href="/home"> Home</a>
          </li>
          <li>
            <a href="/tablamultiplicar/21"> Tabla multiplicar 21</a>
          </li>
          <li>
            <a href="/tablamultiplicar/50"> Tabla multiplicar 50</a>
          </li>
          <li>
            <a href="/tablamultiplicar/14"> Tabla multiplicar 14</a>
          </li>
          <li>
            <a href="/noexiste"> Sin ruta</a>
          </li>
        </ul>
      </div>
    );
  }
}
