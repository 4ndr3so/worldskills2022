import React from 'react';
import PropTypes from 'prop-types';
import styles from './GaleriaImaHome.module.scss';
import imgGal from "../../img/imageGaleria.jpg"

const GaleriaImaHome = () => (
  <div className={styles.GaleriaImaHome} data-testid="GaleriaImaHome">
    
    <div className={styles.conImgGal}>
      <img className={styles.imageGal} src={imgGal} alt="Galeria" />
    </div>
  </div>
);

GaleriaImaHome.propTypes = {};

GaleriaImaHome.defaultProps = {};

export default GaleriaImaHome;
