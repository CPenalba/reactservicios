import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaHospitales from "./TablaHospitales";
import InsertarHospital from "./InsertarHospital";
import BuscadorCoches from "./BuscadorCoches";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablaHospitales />} />
          <Route path="/insertarhospital" element={<InsertarHospital />} />
          <Route path="/buscadorcoches" element={<BuscadorCoches />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
