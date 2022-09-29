import React from "react";
import PropTypes from "prop-types";
import styles from "./GaleriaVideHome.module.scss";
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function VideoItem({videoData}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Súper talentosSENA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nuestros #SupertalentosSENA pronto llegarán a #WorldSkillsKazán2019
        </Typography>
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
