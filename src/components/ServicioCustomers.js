import React, { Component } from "react";
//lo primero es utilizar la libreia de axios
import axios from "axios";
import Global from "../Global";

export default class ServicioCustomers extends Component {
  //necesitamos la url y el request de acceso al servicio
  urlCustomers = Global.urlApiCustomers;

  //necesitamos una variable en state para almacenar los clientes
  state = {
    customers: [],
  };

  //necesitaremos recuperar los clintes con axios
  //la pregunta es cuando queremos hacerlo??

  loadCustomers = () => {
    console.log("Antes del servicio");
    let request = "customers.json";
    axios.get(this.urlCustomers + request).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        customers: response.data.results,
      });
    });

    console.log("Despues del servicio");
  };

  //vamos a cargar los datos en el metodo incial de la pagina
  //lo haremos solamente una vez que sera al iniciar el component
  componentDidMount = () => {
    console.log("Creando component");
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>

        <button onClick={this.loadCustomers}>Cargar clientes Api</button>
        {this.state.customers.map((cliente, index) => {
          return (
            <h3 style={{ color: "blue" }} key={index}>
              {cliente.contactName}
            </h3>
          );
        })}
      </div>
    );
  }
}
