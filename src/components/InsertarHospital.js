import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class InsertarHospital extends Component {
  urlHospitales = Global.urlApiHospitales;

  state = {
    idhospital: "",
    nombre: "",
    direccion: "",
    telefono: "",
    camas: "",
  };

  insertarHospital = (e) => {
    e.preventDefault();
    const newHospital = {
      idhospital: this.state.idhospital,
      nombre: this.state.nombre,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
      camas: this.state.camas,
    };
    let request = "webresources/hospitales/post";
    axios.post(this.urlHospitales + request, newHospital).then(() => {
      console.log("Hospital insertado correctamente");
    });
    this.setState({
      idhospital: "",
      nombre: "",
      direccion: "",
      telefono: "",
      camas: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Insertar hospital</h1>
        <form onSubmit={this.insertarHospital}>
          <label>Id Hospital:</label>
          <input
            type="text"
            name="idhospital"
            value={this.state.idhospital}
            onChange={(e) => this.setState({ idhospital: e.target.value })}
          />
          <br />
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={this.state.nombre}
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
          <br />
          <label>Direccion:</label>
          <input
            type="text"
            name="direccion"
            value={this.state.direccion}
            onChange={(e) => this.setState({ direccion: e.target.value })}
          />
          <br />
          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={this.state.telefono}
            onChange={(e) => this.setState({ telefono: e.target.value })}
          />
          <br />
          <label>Camas:</label>
          <input
            type="text"
            name="camas"
            value={this.state.camas}
            onChange={(e) => this.setState({ camas: e.target.value })}
          />
          <br />
          <button type="submit">Insertar Hospital</button>
        </form>
      </div>
    );
  }
}
