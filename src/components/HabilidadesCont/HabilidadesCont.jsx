import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './HabilidadesCont.scss';
import im1 from "../../img/habilidades_1.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { width } from '@mui/system';
import BotonCerrar from '../../utils/BotonCerrar';
import logoHabili1 from "../../img/logo_habilidad.png"

const HabilidadesCont = () => {

  const [visible,setVisible]= useState(false);
  const [tamano,setTamano]= useState("32px");
  const apareceInfo=()=>{
    setVisible(!visible)
    if(visible){ setTamano("410px")}else{setTamano("32px")}
    
  }
  const cerrarBtn=()=>{

  }
const styles={
  
}
return(
  <div className="HabilidadesCont" data-testid="HabilidadesCont">
      <div className="imgCon">
        <img src={im1} alt="habilidad" className='imgStyle'/>
        </div>
        <div className={'textoHa animate__animated animate__fadeIn '+(visible ? "animateHeig":"amimate1")} style={{...styles}}>
          <div className="openFle" onClick={apareceInfo} >
            <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
          </div>
          <div className='contTextStylo'>
              <h3 className="numeroHa">02</h3>
              <div className="logoc">
                <img src={logoHabili1} alt="Habilidad" className="imgloghab" />
                </div>
              <p className="subTi">Cableado de redes de información</p>
              <p className="textInf">El competidor diseña, implementa y hace mantenimiento de sistemas de cableado estructurado para edificaciones comerciales, data center, hogares y planta externa, incorporando diferentes tipos de medios y tecnologías.</p>
              <BotonCerrar apareceInfo={apareceInfo}></BotonCerrar>
              
            </div>
            <div className="difumina"></div>
        </div>
  </div>
)};

HabilidadesCont.propTypes = {};

HabilidadesCont.defaultProps = {};

export default HabilidadesCont;
