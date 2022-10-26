import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsamericas_stat.jpg";
import "./styles.scss";
import LogroCont from "./../components/LogroCont"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { useSelector } from "react-redux";
import { getLogrosAmericasStatus, selectAllLogrosAmericas } from "../redux/logrosSlice";
import { nanoid } from '@reduxjs/toolkit'
import { getDatosEStaStatus, selectAllDatosESta } from "../redux/datosStaticosSlice";


const Americas = props => {
  const logrosAmericas= useSelector(selectAllLogrosAmericas);
  const logrosAmericasStatus=useSelector(getLogrosAmericasStatus);

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
              <h3>WORLDSKILLS AMÉRICAS</h3>
              <p className="textoHabili">
              Esta versión de WorldSkills se realiza cada dos años en el continente americano, los competidores son los ganadores de las justas nacionales de cada uno de los <span style={{color:"#367BF6"}}>26 países miembros.</span>
              </p>
              <p>
              Las habilidades que compiten las define el país sede, de acuerdo con su sector productivo y las necesidades de interés.
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
              <div className="tituloLogros"><h3>LOGROS DE LA SELECCIÓN COLOMBIA</h3></div>
              {
                datosEsStatus!=="succed" ? <Cargador></Cargador>:
                Object.entries(datosEsta.logrosamerica).map((element, index) => {
                  //console.log(element)
                  return(
                      <LogroCont titulo1={element[1].titulo} parrafo1={element[1].parrafo} key={nanoid()} puesto1={element[1].puesto} medallas={ajusteMedallas(element[1])} link={element[1].link && element[1].link} bandera={element[1].bandera}></LogroCont>
                    )
                  }
                )
              }
              
             
            </div>
          </Grid>
      </TemplatePrinci>
  )
}

Americas.propTypes = {}

export default Americas