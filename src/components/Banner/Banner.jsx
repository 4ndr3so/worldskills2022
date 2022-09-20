import React from 'react'
import PropTypes from 'prop-types'
import logoSW from "../../img/logo_sena_ws.png"
import styles from './Banner.scss';

function Banner(props) {
  return (
    <div className='arregloM' ><img src={logoSW} alt="Logo SENA Worldskill" className={styles.imgArr} /></div>
  )
}

Banner.propTypes = {}

export default Banner
