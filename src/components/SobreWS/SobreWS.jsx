import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SobreWS.module.scss';
import BotonCerrar from '../../utils/BotonCerrar';

const SobreWs = ({imgRe,titulo}) =>{
const [visible,setVisible]= useState(false);
const apareceInfo=()=>{
  setVisible(!visible)
}
const data={
  titulo1:"¿Qué es Worldskills?",
  text1:"Es un espacio donde estudiantes técnicos y tecnólogos de todo el mundo compiten en campeonatos nacionales, continentales y mundiales, para demostrar su destreza en habilidades para el trabajo.<br/> <br/> Con esta estrategia se promueve el desarrollo de habilidades vocacionales y se intercambian conocimientos que aportan a una mejor cualificación del talento humano."
}

function createMarkup() {
  return {__html: data.text1};
}



function BotonVerM() {
  return (
    <div className={styles.btnStyle}>
      <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
    </div>
  )
}


return (
  <div className={styles.SobreWs} data-testid="SobreWs">
    <h3 className={styles.titulWs}>{titulo}</h3>
    <div className={styles.imSw} onClick={apareceInfo} >
      <img src={imgRe} alt={titulo} className={styles.imgIn}/>
      
    </div>
    { visible && <div className={styles.cuadroEncima}>
        <h4 className={styles.tituloQueEsW}>
          {data.titulo1}
        </h4>
        <div className={styles.parrQueEsW}  dangerouslySetInnerHTML={createMarkup()}>
        </div>
            <div className={styles.cerrarBtn}>
              <BotonCerrar apareceInfo={apareceInfo}></BotonCerrar>
            </div>
      </div>}
  </div>
)};

SobreWs.propTypes = {};

SobreWs.defaultProps = {};

export default SobreWs;
