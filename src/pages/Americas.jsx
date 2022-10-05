import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsamericas_stat.jpg";
import "./styles.scss";
import LogroCont from "./../components/LogroCont"


const datos={
    titulo:"Guatemala 2021",
    parrafo:"En medio de la pandemia ocasionada por la COVID-19, la delegación colombiana se concentró en Antioquia y enfrentó a 10 países de manera virtual, los Supertalentos ganaron tres medallas de oro, tres de plata y una de bronce y además el competidor de Procesos Contables, Sebastián Arrieta, fue reconocido con el Albert Vidal por tener el mejor puntaje de toda la competencia.",
    puesto:"PUESTO #2 EN GUATEMALA",
    medallas:[
        {oro:1},
        {bronce:2}
    ]
}
const Americas = props => {
  return (
    <>
      <Container direction="column">
        <Grid item xs={12}>
          <Banner></Banner>
        </Grid>
        <Grid container>
          <MainMenu></MainMenu>
        </Grid>
        <Grid item xs={12} className="habilidades">
          <div className="titulohabilidades">
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
            <LogroCont titulo1={datos.titulo} parrafo1={datos.parrafo} puesto1={datos.puesto} medallas={datos.medallas}></LogroCont>
          </div>
        </Grid>
        <Grid container></Grid>
      </Container>
      <Footer></Footer>
      </>
  )
}

Americas.propTypes = {}

export default Americas