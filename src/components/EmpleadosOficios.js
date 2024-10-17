import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosOficios extends Component {
  selectOficios = React.createRef();

  state = {
    oficios: [],
    empleados: [],
  };

  loadOficios = () => {
    var request = "api/empleados/getoficios/oficios";
    var url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        oficios: response.data,
      });
    });
  };

  buscarEmpleados = (e) => {
    e.preventDefault();
    let oficioEmpleado = this.selectOficios.current.value;
    let request =
      "api/Empleados/GetEmpleadosOficio/empleadosoficio/" + oficioEmpleado;
    var url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        empleados: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadOficios();
  };

  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
          <label>Seleccione un oficio: </label>
          <select ref={this.selectOficios}>
            {this.state.oficios.map((oficio, index) => {
              return (
                <option key={index} value={oficio}>
                  {oficio}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar empleados</button>
        </form>
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return (
              <li key={index}>
                {empleado.apellido} - {empleado.oficio}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
