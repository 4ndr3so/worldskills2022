import React from "react";
import PropTypes from "prop-types";
import styles from "./GaleriaVideHome.module.scss";
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import vid1 from "../../video/WS-2019-web.mp4";


function VideoItem({videoData}) {
  return (
    <Card sx={{ maxWidth: "90%" }}>
      <video controls width="100%">
        <source src={vid1} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
      <CardContent>
        <h3 className={styles.tituloVideo}>
        Súper talentosSENA
        </h3>
        <p variant="body2" color="text.secondary" className={styles.textVideo}>
        Nuestros #SupertalentosSENA pronto llegarán a #WorldSkillsKazán2019
        </p>
      </CardContent>
    </Card>
  );
}

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
