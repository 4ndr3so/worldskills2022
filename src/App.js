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
import Internacional from "./pages/Internacional";
import Empoderamiento from "./pages/Empoderamiento";
import Delegados from "./pages/Delegados";
import Expertos from "./pages/Expertos"
import CompetidoresColombia from "./pages/CompetidoresColombia"
import JefeEquipos from "./pages/JefeEquipos"
import GalImageDetalle from "./components/GalImageDetalle";
import Videos from "./pages/Videos"
import ScrollTop from "./utils/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { getDatosEStaError, getDatosEStaStatus, selectAllDatosESta } from "./redux/datosStaticosSlice";
import { useEffect } from "react";
import { fetchDatosEsta } from "./api/apiData";
function App() {

  
    const datosEsStatus=useSelector(getDatosEStaStatus);
 

    const dispatch=useDispatch();

    useEffect(() => {
        if(datosEsStatus==="idle"){
          dispatch(fetchDatosEsta())   
        }

    }, [datosEsStatus,dispatch]); 

  return (
      
      <Router>
        <ScrollTop />
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
          <Route
            path="/internacional"
            element={<Internacional></Internacional>}
          ></Route>
          <Route
            path="/empoderamiento"
            element={<Empoderamiento></Empoderamiento>}
          ></Route>
          <Route
            path="/delegados"
            element={<Delegados></Delegados>}
          ></Route>
          <Route
            path="/expertos"
            element={<Expertos></Expertos>}
          ></Route>
          <Route
            path="/competidorescolombia"
            element={<CompetidoresColombia></CompetidoresColombia>}
          ></Route>
          <Route
            path="/jefe-quipos"
            element={<JefeEquipos></JefeEquipos>}
          ></Route>
          <Route
            path="/galeriaDetalle/:galeriaN"
            element={<GalImageDetalle></GalImageDetalle>}
          ></Route>
          <Route
            path="/videos"
            element={<Videos></Videos>}
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
