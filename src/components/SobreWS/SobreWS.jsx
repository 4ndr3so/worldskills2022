import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SobreWS.module.scss';
import BotonCerrar from '../../utils/BotonCerrar';

const SobreWs = ({imgRe,titulo,data}) =>{


const [visible,setVisible]= useState(false);


const apareceInfo=()=>{
  setVisible(!visible)
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
    { 
    visible && <div className={styles.cuadroEncima}>
                  <h3 className={styles.tituloQueEsW}>
                    {data.titulo1}
                  </h3>
                  {
                    data.subtitulo && <p style={{marginBottom:"20px",marginTop:"20px",textTransform: "uppercase"}}>{data.subtitulo}</p>
                  }
              <div className={styles.parrQueEsW}  dangerouslySetInnerHTML={createMarkup()}>
              </div>
                  <div className={styles.cerrarBtn}>
                    <BotonCerrar apareceInfo={apareceInfo}></BotonCerrar>
                  </div>
            </div>
      }
  </div>
)};

SobreWs.propTypes = {};

SobreWs.defaultProps = {};

export default SobreWs;
