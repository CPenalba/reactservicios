import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/"> Tabla hospitales</a>
          </li>
          <li>
            <a href="/insertarhospital"> Insertar hospital</a>
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
        </ul>
      </div>
    );
  }
}
