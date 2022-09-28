import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import Banner from './../components/Banner'
import NoticiasHome from "../components/NoticiasHome"
import SobreWS from "./../components/SobreWS"
import GaleriaVideHome from "./../components/GaleriaVideHome"
import MainMenu from "./../components/MainMenu"
import GaleriaImaHome from "./../components/GaleriaImaHome"
import Slider from './../components/Slider'
//imagenes
import im1 from '../img/Recurso2-100.jpg'
import im2 from '../img/Recurso3-100.jpg'
import im3 from '../img/Recurso4-100.jpg'
function MainPage(props) {
  return (
  
    <Container container direction="column" justifyContent="center">
          <Grid xs="12" justifyContent="center">
              <Banner></Banner>
          </Grid>
          <Grid>
            <MainMenu xs="12">

            </MainMenu>
          </Grid>
          <Grid xs="12">
              <Slider></Slider>
          </Grid>
          <Grid container>
            <Grid xs="4"><SobreWS imgRe={im1} titulo={"¿QUÉ ES WORLDSKILLS?"} ></SobreWS></Grid>
            <Grid xs="4"><SobreWS imgRe={im2} titulo={"COMPETENCIA"}></SobreWS></Grid>
            <Grid xs="4"><SobreWS imgRe={im3} titulo={"EQUIPO"}></SobreWS></Grid>
          </Grid>
          <Grid container>
              <Grid xs="12"></Grid>
              <Grid xs="6"></Grid>
              <Grid xs="6"></Grid>
          </Grid>
          <Grid container>
            <Grid xs="12"> <GaleriaImaHome></GaleriaImaHome></Grid>
          </Grid>
          <Grid container>
          <Grid xs="4"><GaleriaVideHome></GaleriaVideHome></Grid>
          <Grid xs="4"><GaleriaVideHome></GaleriaVideHome></Grid>
          <Grid xs="4"><GaleriaVideHome></GaleriaVideHome></Grid>
          </Grid>
    
    </Container>
   
  )
}

MainPage.propTypes = {}

export default MainPage
