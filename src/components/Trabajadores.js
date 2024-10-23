import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Trabajadores extends Component {
  cajaIncremento = React.createRef();
  state = {
    trabajadores: [],
    mensaje: "",
  };

  loadTrabajadores = () => {
    //recuperar todos los ids de hospital
    let idsHospitales = this.props.idhospitales;
    if (idsHospitales.length != 0) {
      let data = "";
      for (var id of idsHospitales) {
        data += "idhospital=" + id + "&";
      }
      //eliminamos el ultimo caracter del sting
      //idHospital=25&idhospital=22&
      data = data.substring(0, data.length - 1);
      this.setState({
        mensaje: data,
      });
      //podemos realizar la peticion al servicio´
      let request = "api/trabajadores/trabajadoreshospitales?" + data;
      let url = Global.urlEjemplos + request;
      axios.get(url).then((response) => {
        console.log("Leyendo trabajadores");
        this.setState({
          trabajadores: response.data,
        });
      });
    }
  };
  incrementoSalarial = (e) => {
    e.preventDefault();
    let cantidad = parseInt(this.cajaIncremento.current.value);
    console.log("Cantidad: " + cantidad);
    let idsHospitales = this.props.idhospitales;
    if (idsHospitales.length !== 0) {
      let data = "";
      for (var id of idsHospitales) {
        data += "idhospital=" + id + "&";
      }
      data = data.substring(0, data.length - 1);
      let request =
        "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" +
        cantidad +
        "&" +
        data;
      console.log("La URL es: " + request);
      let url = Global.urlEjemplos + request;
      let trabajadoresActualizados = this.state.trabajadores.map((t) => {
        return {
          idTrabajador: t.idTrabajador,
          apellido: t.apellido,
          oficio: t.oficio,
          salario: t.salario + cantidad,
          idHospital: t.idHospital,
        };
      });
      axios.put(url, trabajadoresActualizados).then((response) => {
        console.log("Salarios actualizados en el servidor");
        this.setState({
          trabajadores: trabajadoresActualizados,
        });
      });
    }
  };
  componentDidMount = () => {
    this.loadTrabajadores();
  };

  componentDidUpdate = (valorAntiguo) => {
    if (valorAntiguo.idhospitales != this.props.idhospitales) {
      this.loadTrabajadores();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "pink" }}>Trabajadores component</h1>
        {/* <ul className="list-group"> */}
        <form>
          <label>Incremento salarial: </label>
          <input type="text" ref={this.cajaIncremento}></input>
          <button className="btn btn-danger" onClick={this.incrementoSalarial}>
            Incrementar salario
          </button>
        </form>
        <table className="table table-light">
          <thead>
            <tr>
              <th>idTrabajador</th>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>idHospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trabajadores.map((t, index) => {
              return (
                <tr key={index}>
                  <td>{t.idTrabajador}</td>
                  <td>{t.apellido}</td>
                  <td>{t.oficio}</td>
                  <td>{t.salario}</td>
                  <td>{t.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <li key={index} className="list-group-item">
            // {t.apellido}, {t.idHospital}
            //{" "}
          </li>
        </ul> */}
        {/* <ul>
          {this.props.idhospitales.map((id, index) => {
            return <li key={index}>{id}</li>;
          })}
        </ul> */}
        <h5 style={{ color: "blue" }}>{this.state.mensaje}</h5>
      </div>
    );
  }
}
