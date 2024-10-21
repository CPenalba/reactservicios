import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaHospitales from "./TablaHospitales";
import InsertarHospital from "./InsertarHospital";
import BuscadorCoches from "./BuscadorCoches";
import DepartamentosEmpleados from "./DepartamentosEmpleados";
import EmpleadosOficios from "./EmpleadosOficios";
import Departamentos from "./MaestroDetalle/Departamentos";
import EliminarHospital from "./EliminarHospital";
import TablaMultiplicar from "./TablaMultiplicar";
import Home from "./Home";
import NotFound from "./NotFound";

import { useParams } from "react-router-dom";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //esta funcion nos servira para capturar los parametros en una ruta
      //para separar props de params voy a llamar a nuetsro parametro en ruta minumero
      var {minumero} = useParams();
      //devolvemos el component tabla multiplicar con su props de la variable numero
      return <TablaMultiplicar numero={minumero}/>
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablaHospitales />} />
          <Route path="/insertarhospital" element={<InsertarHospital />} />
          <Route path="/eliminarhospital" element={<EliminarHospital />} />
          <Route path="/buscadorcoches" element={<BuscadorCoches />} />
          <Route path="/departamentosempleados" element={<DepartamentosEmpleados />} />
          <Route path="/empleadosoficios" element={<EmpleadosOficios />} />
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tablamultiplicar/:minumero" element={<TablaMultiplicarElement/>} />
          {/* para las rutas que no existen debemos utilizar un asterisco dentro del path y debe ser la ultima etiqueta de <routes></routes> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
