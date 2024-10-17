import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaHospitales from "./TablaHospitales";
import InsertarHospital from "./InsertarHospital";
import BuscadorCoches from "./BuscadorCoches";
import DepartamentosEmpleados from "./DepartamentosEmpleados";
import EmpleadosOficios from "./EmpleadosOficios";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablaHospitales />} />
          <Route path="/insertarhospital" element={<InsertarHospital />} />
          <Route path="/buscadorcoches" element={<BuscadorCoches />} />
          <Route path="/departamentosempleados" element={<DepartamentosEmpleados />} />
          <Route path="/empleadosoficios" element={<EmpleadosOficios />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
