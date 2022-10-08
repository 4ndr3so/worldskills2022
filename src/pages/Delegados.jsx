import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import SobreWS from "../components/SobreWS"

import ButonVerMas from "../utils/ButonVerMas"
import im1 from "../img/delegados/delegado1.png"
import TemplatePrinci from "./../utils/TemplatePrinci"

const data={
    delegado1:
        {
            titulo1:"Delegada Oficial",
            text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
            subtitulo:"Adriana colmenares"
        },
    delegado2:
            {
                titulo1:"Delegado Oficial",
                text1:"Es un espacio donde estudiantes técnicos y tecnólogos de todo el mundo compiten en campeonatos nacionales, continentales y mundiales, para demostrar su destreza en habilidades para el trabajo.<br/> <br/> Con esta estrategia se promueve el desarrollo de habilidades vocacionales y se intercambian conocimientos que aportan a una mejor cualificación del talento humano.",
                subtitulo:"Juan colmenares"
            }
        }

const Delegados = props => {
  return (
    <TemplatePrinci>
          <Grid item xs={12} className="generalPa">
            <div className="tituloGeneral">
              <h3>DELEGADOS</h3>
              <p className="textoHabili">
              Para el desarrollo de las competencias cada selección cuenta con un delegado oficial, un delegado técnico y dos delegados técnicos asistentes.
              </p>
            </div>
          <Grid container>
              {
                
                  Object.entries(data).map((element, index) => {
                      console.log(element[1].titulo1)
                      return(
                      <Grid item xs={12} md={4} key={element[0][0]+index}>
                          <SobreWS imgRe={im1} titulo={element[1].titulo1} data={element[1]}></SobreWS>
                      </Grid>)
                  })
                  

              }
              
          </Grid>
          </Grid>
          <Grid container></Grid>
    </TemplatePrinci>
  )
}

Delegados.propTypes = {}

export default Delegados