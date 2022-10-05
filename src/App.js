import * as React from "react";
import * as ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.module.scss";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Equipo from "./pages/Equipo";
import Competencia from "./pages/Competencia";
import NotFound from "./pages/NotFound";
import { Container, Grid } from "@mui/material";
import Habilidades from "./pages/Habilidades";
import WSNacional from "./pages/WSNacional";
import Americas from "./pages/Americas";


function App() {
  return (
      
      <Router>
        <Routes>
          <Route
            path="/competencia"
            element={<Competencia></Competencia>}
          ></Route>
          <Route
            path="/habilidades"
            element={<Habilidades></Habilidades>}
          ></Route>
          <Route
            path="/nacional"
            element={<WSNacional></WSNacional>}
          ></Route>
          <Route
            path="/americas"
            element={<Americas></Americas>}
          ></Route>
          <Route path="/equipo" element={<Equipo></Equipo>}></Route>
          <Route path="/noticias" element={<Noticias></Noticias>}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    
  );
}

export default App;
