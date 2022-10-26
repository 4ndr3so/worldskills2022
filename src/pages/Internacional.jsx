import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/internacional.png";
import "./styles.scss";
import LogroCont from "./../components/LogroCont"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { selectAllLogrosInternacional, getLogrosInternacionalStatus } from "../redux/logrosSlice";
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from "react-redux";
import { getDatosEStaStatus, selectAllDatosESta } from "../redux/datosStaticosSlice";

const datos={
    titulo:"Rusia 20219",
    parrafo:"24 aprendices del SENA compitieron en WorldSkills Kazán 2019 y por primera vez se subieron al podio de la competencia internacional con dos medallas de bronce en las habilidades Ingeniería de Diseño Mecánico CAD y Jardinería de Paisaje, además los jóvenes obtuvieron 4 medallas de excelencia.",
    puesto:"PUESTO #2 EN GUATEMALA",
    medallas:[
        {oro:1},
        {bronce:2},
        {plata:3}
    ]
}
const Internacional = props => {
  const logrosInter= useSelector(selectAllLogrosInternacional);
  const logrosInterStatus=useSelector(getLogrosInternacionalStatus);

  const datosEsStatus=useSelector(getDatosEStaStatus);
  const datosEsta=useSelector(selectAllDatosESta);
  //console.log(logrosAmericas)

  const ajusteMedallas=(item)=>{
    const medallas=[
      {"oro":item.medallasOro},
      {"plata":item.medallasPlata},
      {"bronce":item.medallasBronce}
      
  ]
  return medallas
}

const Cargador = ({ value }) => {
  return <Skeleton variant="rectangular"  height={500}></Skeleton>;
};

  return (
    <TemplatePrinci>

          <Grid item xs={12} className="generalPa">
            <div className="tituloGeneral">
              <h3>WORLDSKILLS INTERNACIONAL</h3>
              <p className="textoHabili">
              WorldSkills es una organización internacional nacida en España, que desde 1950 celebra en años impares una competencia patrocinada por la Organización Internacional de Educación Profesional (IVTO). Las competencias son un ciclo olímpico, donde los mejores en 56 habilidades de la formación técnica y tecnológica se llevan medallas de oro, plata y bronce.
              </p>
              <p>
              Los objetivos de las competencias mundiales son promover la excelencia en los programas de formación técnicos y tecnológicos en el mundo y generar intercambio de conocimientos, experiencias e innovaciones entre países en pro de la pertinencia de la formación en el mercado laboral mundial.
              </p>
              <p>
              El SENA es la única Entidad de formación que representa al país en WorldSkills. Esta estrategia posiciona no sólo al SENA, sino a Colombia como un país que cuenta con talento humano calificado para el mercado laboral mundial, con estándares internacionales y que capacita en habilidades que potencializan los sectores productivos y hacen más dinámica la economía.
              </p>
            </div>
            <div className="imgCont">
              <img
                src={imgStat}
                alt="Worldskills Nacional"
                style={{ width: "100%" }}
              />
            </div>
            <div className="contLogros">
              <div className="tituloLogros"><h3>LOGROS INTERNACIONALES</h3></div>
              {
                datosEsStatus!=="succed" ? <Cargador></Cargador>:
                Object.entries(datosEsta.logrosInternacional).map((element, index) => {
                // console.log(element)
                  return(
                      <LogroCont titulo1={element[1].titulo} parrafo1={element[1].parrafo} key={nanoid()} puesto1={element[1].puesto} medallas={ajusteMedallas(element[1])} link={element[1].link } bandera={element[1].bandera}></LogroCont>
                    )
                  }
                )
              }   </div>
          </Grid>
          <Grid container></Grid>
      </TemplatePrinci>
  )
}

Internacional.propTypes = {}

export default Internacional