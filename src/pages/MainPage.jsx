import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import NoticiasHome from "../components/NoticiasHome";
import SobreWS from "./../components/SobreWS";
import GaleriaVideHome from "./../components/GaleriaVideHome";
import MainMenu from "./../components/MainMenu";
import GaleriaImaHome from "./../components/GaleriaImaHome";
import Slider from "./../components/Slider";
import Footer from "./../components/Footer";
//imagenes que es worldskills
import im1 from "../img/Recurso2-100.jpg";
import im2 from "../img/Recurso3-100.jpg";
import im3 from "../img/Recurso4-100.jpg";
//Datos slider


const data={
  titulo1:"¿Qué es Worldskills?",
  text1:"Es un espacio donde estudiantes técnicos y tecnólogos de todo el mundo compiten en campeonatos nacionales, continentales y mundiales, para demostrar su destreza en habilidades para el trabajo.<br/> <br/> Con esta estrategia se promueve el desarrollo de habilidades vocacionales y se intercambian conocimientos que aportan a una mejor cualificación del talento humano."
}

function MainPage(props) {
  return (
    <>
    <Container direction="column">
      <Grid item  xs={12}>
        <Banner></Banner>
      </Grid>
      <Grid container>
        <MainMenu ></MainMenu>
      </Grid>
      <Grid item  xs={12}>
        <Slider></Slider>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SobreWS imgRe={im1} titulo={"¿QUÉ ES WORLDSKILLS?"} data={data}></SobreWS>
        </Grid>
        <Grid item xs={12} md={4}>
          <SobreWS imgRe={im2} titulo={"COMPETENCIA"} data={data}></SobreWS>
        </Grid>
        <Grid item  xs={12} md={4}>
          <SobreWS imgRe={im3} titulo={"EQUIPO"} data={data}></SobreWS>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12}>
          <NoticiasHome></NoticiasHome>
        </Grid>
      </Grid>
     
      <Grid container>
        <Grid item xs={12}>
          <GaleriaImaHome></GaleriaImaHome>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12}>
          <GaleriaVideHome></GaleriaVideHome>
        </Grid> 
      </Grid>
     
    </Container>
    <Footer></Footer>
    </>
  );
}

MainPage.propTypes = {};

export default MainPage;
