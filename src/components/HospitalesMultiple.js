import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import axios from "axios";
import Global from "../Global";

export default class HospitalesMultiple extends Component {
  selectHospital = React.createRef();

  state = {
    hospitales: [],
    hospitalesSeleccionados: [],
  };

  loadHospitales = () => {
    let request = "api/hospitales";
    let url = Global.urlEjemplos + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        hospitales: response.data,
      });
    });
  };

  getHospitalesSeleccionado = (e) => {
    e.preventDefault();
    let aux = [];
    let options = this.selectHospital.current.options;
    for (var opt of options) {
      if (opt.selected == true) {
        aux.push(opt.value);
      }
    }
    this.setState({
      hospitalesSeleccionados: aux,
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };
  render() {
    return (
      <div>
        <h1>Hospitales Multiple</h1>
        <form>
          <select
            ref={this.selectHospital}
            className="form-control"
            size="8"
            multiple
          >
            {this.state.hospitales.map((hospital, index) => {
              return (
                <option key={index} value={hospital.idHospital}>
                  {hospital.nombre}
                </option>
              );
            })}
          </select>
          <button
            onClick={this.getHospitalesSeleccionado}
            className="btn btn-info"
          >
            Mostrar trabajadores
          </button>
        </form>
        {this.state.hospitalesSeleccionados.length != 0 && (
          <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
        )}
      </div>
    );
  }
}
