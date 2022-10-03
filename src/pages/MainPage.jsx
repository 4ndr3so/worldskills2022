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
          <SobreWS imgRe={im1} titulo={"¿QUÉ ES WORLDSKILLS?"}></SobreWS>
        </Grid>
        <Grid item xs={12} md={4}>
          <SobreWS imgRe={im2} titulo={"COMPETENCIA"}></SobreWS>
        </Grid>
        <Grid item  xs={12} md={4}>
          <SobreWS imgRe={im3} titulo={"EQUIPO"}></SobreWS>
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
