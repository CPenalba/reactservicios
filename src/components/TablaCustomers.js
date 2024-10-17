import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class TablaCustomers extends Component {
  urlCustomers = Global.urlApiCustomers;

  state = {
    customers: [],
  };

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

  componentDidMount = () => {
    console.log("Creando component");
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h1>Tabla Customers</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Company name</th>
              <th>Contact name</th>
              <th>Contact title</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cliente, index) => {
              return (
                <tr key={index}>
                  <td>{cliente.id}</td>
                  <td>{cliente.companyName}</td>
                  <td>{cliente.contactName}</td>
                  <td>{cliente.contactTitle}</td>
                  <td>{cliente.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
