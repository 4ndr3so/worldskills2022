import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container, Grid } from '@mui/material'
import Banner from './../components/Banner'
import NoticiasHome from "../components/NoticiasHome"
import SobreWS from "./../components/SobreWS"

function MainPage(props) {
  return (
  
    <Container container direction="column" justify="center" className="full">
     
          <Grid xs="12">
              <Banner></Banner>
          </Grid>
          <Grid container>
            <Grid xs="4"><SobreWS></SobreWS></Grid>
            <Grid xs="4"><SobreWS></SobreWS></Grid>
            <Grid xs="4"><SobreWS></SobreWS></Grid>

          </Grid>
    
    </Container>
   
  )
}

MainPage.propTypes = {}

export default MainPage
