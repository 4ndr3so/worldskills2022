import React from "react";
import PropTypes from "prop-types";
import styles from "./GaleriaVideHome.module.scss";
import { Container, Grid } from "@mui/material";
import VideoItem from "./VideoItem"
import ButonVerMas from "../../utils/ButonVerMas"
import { NavLink } from "react-router-dom";


const GaleriaVideHome = ({data}) => (
  <div className={styles.GaleriaVideHome} data-testid="GaleriaVideHome">
    <div className={styles.titulWs}>VIDEOS</div>
    <Grid container>
      {
         Object.entries(data).map((element, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <VideoItem videoInf={element[1]}></VideoItem>
            </Grid>
          )})
      }
    </Grid>
    <div className="titulWsBu">
    <NavLink to={"/videos"}><ButonVerMas textNotic="Ver todos los videos" ancho={"100%"} mt="30px"></ButonVerMas></NavLink>
    </div>
  </div>
);

GaleriaVideHome.propTypes = {};

GaleriaVideHome.defaultProps = {};

export default GaleriaVideHome;
