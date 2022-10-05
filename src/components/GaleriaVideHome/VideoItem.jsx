import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import styles from "./GaleriaVideHome.module.scss";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import vid1 from "../../video/WS-2019-web.mp4";

function VideoItem(props) {
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

VideoItem.propTypes = {}

export default VideoItem
