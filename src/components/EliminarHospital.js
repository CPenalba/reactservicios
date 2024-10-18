import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EliminarHospital extends Component {
  urlHospitales = Global.urlApiHospitales;

  state = {
    idhospital: "",
  };

  eliminarHospital = (e) => {
    e.preventDefault();
    let id = this.state.idhospital;
    let request = "webresources/hospitales/delete/" + id;
    axios.delete(this.urlHospitales + request).then(() => {
      console.log("Hospital eliminado correctamente");
    });
    this.setState({
      idhospital: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Eliminar hospital</h1>
        <form >
          <label>Id Hospital:</label>
          <input
            type="text"
            name="idhospital"
            value={this.state.idhospital}
            onChange={(e) => this.setState({ idhospital: e.target.value })}
          />
          <br />
          <button onClick={this.eliminarHospital}>Eliminar Hospital</button>
        </form>
      </div>
    );
  }
}
