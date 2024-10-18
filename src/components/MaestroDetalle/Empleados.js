import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class Empleados extends Component {
  state = {
    empleados: [],
  };

  loadEmpleados = () => {
    let iddepartamento = this.props.iddepartamento;
    var request = "api/empleados/empleadosdepartamento/" + iddepartamento;
    var url = Global.urlApiEmpleados2 + request;
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        empleados: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEmpleados();
  };

  componentDidUpdate = (valorAnterior) => {
    console.log("Dibujando component: " + this.props.iddepartamento)
    if (valorAnterior.iddepartamento != this.props.iddepartamento) {
      this.loadEmpleados();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "blue" }}>
          Empleados component {this.props.iddepartamento}
        </h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Apelido</th>
              <th>Oficio</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map((empleado, index) => {
              return (
                <tr key={index}>
                  <td>{empleado.apellido}</td>
                  <td>{empleado.oficio}</td>
                  <td>{empleado.departamento}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
