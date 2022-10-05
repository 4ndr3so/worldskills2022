import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import "./styles.scss"
import HabilidadesCont from "./../components/HabilidadesCont"

const Habilidades = props => {
  return (
    <>
      <Container direction="column">
        <Grid item xs={12}>
          <Banner></Banner>
        </Grid>
        <Grid container>
          <MainMenu ></MainMenu>
        </Grid>
        <Grid item xs={12} className="habilidades">
          <div className="titulohabilidades">
          <h3 >HABILIDADES</h3>
          <p className="textoHabili">
          Corresponden a conocimientos o destrezas pertinentes para el mercado laboral mundial, esta se evalúa en los cuatro días de competencia, por medio de proyectos prueba con una duración de 15 a 22 horas. En cada habilidad no gana el competidor que realice el proyecto en menor tiempo sino aquel que lo realice con la mayor calidad, cumpliendo con los estándares y criterios definidos y con mayor precisión y exactitud.
          </p>
          <p>
          Da clic en cada foto y conoce las habilidades en las que compite la Selección Colombia WorldSkills:
          </p>
          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
          <Grid item xs={12} md={4}>
              <HabilidadesCont></HabilidadesCont>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  )
}

Habilidades.propTypes = {}

export default Habilidades