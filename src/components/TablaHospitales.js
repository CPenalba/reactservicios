import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class TablaHospitales extends Component {
  urlHospitales = Global.urlApiHospitales;

  state = {
    hospitales: [],
  };

  loadHospitales = () => {
    console.log("Antes del servicio");
    let request = "webresources/hospitales";
    axios.get(this.urlHospitales + request).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        hospitales: response.data,
      });
    });
    console.log("Despues del servicio");
  };

  componentDidMount = () => {
    console.log("Creando component");
    this.loadHospitales();
  };

  render() {
    return (
      <div>
        <h1>Tabla hospitales</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id hospital</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <tr key={index}>
                  <td>{hospital.idhospital}</td>
                  <td>{hospital.nombre}</td>
                  <td>{hospital.direccion}</td>
                  <td>{hospital.telefono}</td>
                  <td>{hospital.camas}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
