import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCustomer extends Component {
  urlApi = Global.urlApiCustomers;
  cajaId = React.createRef();
  state = {
    customer: null,
  };

  buscarCustomer = () => {
    //recuperamos el valor de la caja
    let idCustomer = this.cajaId.current.value;
    let request = "customers/" + idCustomer + ".json";
    axios.get(this.urlApi + request).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        customer: response.data.customer,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Buscador Api Customer</h1>
        <form>
          <label>ID customer: </label>
          <input type="text" ref={this.cajaId}></input>
          <br />
          <button>Buscar customer</button>
        </form>
      </div>
    );
  }
}
