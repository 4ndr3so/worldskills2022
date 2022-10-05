import React from "react";
import PropTypes from "prop-types";
import styles from "./GaleriaVideHome.module.scss";
import { Container, Grid } from "@mui/material";
import VideoItem from "./VideoItem"




const GaleriaVideHome = ({videoData}) => (
  <div className={styles.GaleriaVideHome} data-testid="GaleriaVideHome">
    <div className={styles.titulWs}>VIDEOS</div>
    <Grid container>
      <Grid item xs={12} md={4}>
        <VideoItem videoInf={videoData}></VideoItem>
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoItem videoInf={videoData}></VideoItem>
      </Grid>
      <Grid item xs={12} md={4}>
        <VideoItem videoInf={videoData}></VideoItem>
      </Grid>
    </Grid>
    <div className="titulWsBu">
      <button className="buttonNoVerT">Ver todos los videos</button>
    </div>
  </div>
);

GaleriaVideHome.propTypes = {};

GaleriaVideHome.defaultProps = {};

export default GaleriaVideHome;
