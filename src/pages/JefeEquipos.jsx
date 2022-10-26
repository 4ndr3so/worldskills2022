import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import SobreWS from "../components/SobreWS"

import ButonVerMas from "../utils/ButonVerMas"
import im1 from "./../img/interpretes.png"
import im2 from "./../img/jefes.png"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { getDatosEStaStatus, selectAllDatosESta } from "../redux/datosStaticosSlice";
import { useSelector } from "react-redux";

const data={
    delegado1:
        {
            titulo1:"Intérpretes",
            text1:"Son instructores del SENA del programa de Bilingüismo, con un elevado dominio del idioma inglés, su función es acompañar al Experto Nacional y al Competidor en todas las actividades de competencia y proteger de la mejor manera los intereses del SENA y del país.<br> Así mismo, permite la correcta participación de los expertos en los procesos previos durante y post competencia y transmite al competidor las instrucciones de las competencias en idioma español para que se tengan condiciones justas.",
            subtitulo:null,
            image:"./img/interpretes.png"
        },
    delegado2:
            {
                titulo1:"Jefes de Equipo",
                text1:"La selección cuenta con tres jefes de equipo encargados del cuidado, acompañamiento y aseguramiento del bienestar físico y emocional de los aprendices competidores. Ellos están pendientes de los competidores las 24 horas al día, de su confianza y autogestión y se aseguran de que cumplan correctamente con los horarios, una buena alimentación, hábitos de sueño adecuados, entre otras labores.",
                subtitulo:"Margarita Pestana, Catherin Triana y Fredy García",
                image:"./img/jefes.png"
            }
        }

const JefeEquipos = props => {
  const datosEsStatus=useSelector(getDatosEStaStatus);
  const datosEsta=useSelector(selectAllDatosESta);

  const Cargador = ({ value }) => {
    return <Skeleton variant="rectangular"  height={500}></Skeleton>;
  };

  return (
    <TemplatePrinci>
      <Grid item xs={12} className="generalPa">
        <div className="tituloGeneral">
          <h3>Jefes de Equipo e Intérpretes</h3>
          <p className="textoHabili">
          
          </p>
        </div>
      <Grid container>
          {
             datosEsStatus!=="succed" ? <Cargador></Cargador>:
              Object.entries(datosEsta.jefes).map((element, index) => {
                  //console.log(element)
                  return(
                  <Grid item xs={12} md={6} key={element[0][0]+index}>
                      <SobreWS imgRe={element[1].img} titulo={element[1].titulo} data={element[1].texto}></SobreWS>
                  </Grid>)
               })
              

          }
          
      </Grid>
      </Grid>
      <Grid container></Grid>  
    </TemplatePrinci>
  )
}

JefeEquipos.propTypes = {}

export default JefeEquipos