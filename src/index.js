import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServicioCustomers from "./components/ServicioCustomers";
import BuscadorCustomer from "./components/BuscadorCustomer";
import TablaHospitales from "./components/TablaHospitales";
import InsertarHospital from "./components/InsertarHospital";
import Router from "./components/Router";
import MenuRutas from "./components/MenuRutas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ServicioCustomers /> */}
    {/* <InsertarHospital />
    <TablaHospitales /> */}
    <MenuRutas />
    <br />
    <Router />
    {/* // <BuscadorCustomer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
