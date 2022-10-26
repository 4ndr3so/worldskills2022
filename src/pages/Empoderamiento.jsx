import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import TemplatePrinci from "./../utils/TemplatePrinci"

import ButonVerMas from "../utils/ButonVerMas"
const Empoderamiento = (props) => {
  return (
    <TemplatePrinci>
        <Grid item xs={12} className="generalPa">
          <div className="tituloGeneral" style={{    padding: "10px"}}>
            <h3>Empoderamientos Territoriales WorldSkills Colombia</h3>
            <p className="textoHabili">
                Son competencias pedagógicas de habilidades para el trabajo creadas para lograr que jóvenes de todas las regiones tengan la oportunidad de integrar el equipo nacional que representa a Colombia en las justas continentales y mundiales.
            </p>
            <p>
                El SENA realiza tres versiones de estas justas
            </p>
          </div>
          <div className="contBlanco">
            <h3><span>Empoderamiento Territorial </span> Región Caribe</h3>
            <p>
                Participan aprendices de La Guajira, Cesar, Córdoba, Magdalena, San Andrés y Sucre.
            </p>
            <br></br>
            <br></br>
            <h3><span>Empoderamiento Territorial</span>  Región Llanos </h3>
            <p>
            Participan aprendices de Arauca, Casanare, Meta, Caquetá, Vichada y Guaviare.
            </p>
            <br></br>
            <br></br>
            <h3><span>Empoderamiento Territorial </span> Región Selva  </h3>
            <p>
            Participan aprendices de Amazonas, Vaupés, Guainía, Caquetá, Putumayo, Chocó y Guaviare
            </p>
            <br></br>
            <br></br>
            <p>En cada versión se elige una regional anfitriona, que recibe durante una semana a todos los competidores, las justas son abiertas al público y ofrecen a sus asistentes vivir la adrenalina de una competencia real, disfrutar de la demostración de algunas habilidades y conocer a expertos de habilidades para el trabajo.</p>
          </div>
        </Grid>
        <Grid container></Grid>
    </TemplatePrinci>
  );
};

Empoderamiento.propTypes = {};

export default Empoderamiento;