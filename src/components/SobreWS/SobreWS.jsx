import React from 'react';
import PropTypes from 'prop-types';
import styles from './SobreWS.module.scss';

const SobreWs = ({imgRe,titulo}) => (
  <div className={styles.SobreWs} data-testid="SobreWs">
    <h3 className={styles.titulWs}>{titulo}</h3>
    <div className={styles.imSw}>
      <img src={imgRe} alt={titulo} className={styles.imgIn}/>
    </div>
  </div>
);

SobreWs.propTypes = {};

SobreWs.defaultProps = {};

export default SobreWs;
