import * as React from "react";
import * as ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Noticias from "./pages/Noticias";
import Galeria from "./pages/Galeria";
import Equipo from "./pages/Equipo";
import Competencia from "./pages/Competencia";
import NotFound from "./pages/NotFound";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container >
      <div>
      <h1>WorldSkills</h1>
      <Router>
        <Routes>
          <Route
            path="/competencia"
            element={<Competencia></Competencia>}
          ></Route>
          <Route path="/equipo" element={<Equipo></Equipo>}></Route>
          <Route path="/noticias" element={<Noticias></Noticias>}></Route>
          <Route path="/galeria" element={<Galeria />}></Route>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
    </Grid>
  );
}

export default App;
