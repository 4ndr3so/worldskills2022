import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GaleriaImaHome.module.scss';
import imgGal from "../../img/imageGaleria.jpg"

const GaleriaImaHome = () =>{
  const [visible,setVisible]= useState(true);

  return(
  <div className={styles.GaleriaImaHome} data-testid="GaleriaImaHome">
    <div className={styles.titulWs}>GALERÍA</div>
    <div className={styles.conImgGal}>
      <img className={styles.imageGal} src={imgGal} alt="Galeria" />
      { visible && <div className={styles.cuadroEncima}>
       
          <h4 className={styles.tituloGaleriaIm}>
            Ver todas las galerias Worldskills Kasán y Chile
          </h4>
     
      </div>}
    </div>
    
  </div>)};

GaleriaImaHome.propTypes = {};

GaleriaImaHome.defaultProps = {};

export default GaleriaImaHome;
