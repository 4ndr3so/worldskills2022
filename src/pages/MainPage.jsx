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
            <Grid xs="4"><SobreWS></SobreWS></Grid>
            <Grid xs="4"><SobreWS></SobreWS></Grid>
            <Grid xs="4"><SobreWS></SobreWS></Grid>
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
