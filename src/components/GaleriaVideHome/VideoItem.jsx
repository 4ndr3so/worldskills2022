import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import styles from "./GaleriaVideHome.module.scss";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import vid1 from "../../video/WS-2019-web.mp4";
import "./videoItm.scss"

function VideoItem(props) {
  
    return (
        <Card xs={12} className="cardTe">
          <video controls width="100%">
            <source src={props.videoInf.link} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
          <CardContent>
            <h3 className={styles.tituloVideo}>
            {props.videoInf.titulo}
            </h3>
            <p variant="body2" color="text.secondary" className={styles.textVideo}>
            {props.videoInf.destacado}
            </p>
          </CardContent>
        </Card>
      );
}

VideoItem.propTypes = {}

export default VideoItem
