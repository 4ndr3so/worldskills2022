import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './HabilidadesCont.scss';
import im1 from "../../img/habilidades_1.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { width } from '@mui/system';



const HabilidadesCont = () => {

  const [visible,setVisible]= useState(false);
  const [tamano,setTamano]= useState("32px");
  const apareceInfo=()=>{
    setVisible(!visible)
    if(visible){ setTamano("376px")}else{setTamano("32px")}
    
  }
const styles={
  
}
return(
  <div className="HabilidadesCont" data-testid="HabilidadesCont">
      <div className="imgCon">
        <img src={im1} alt="habilidad" className='imgStyle'/>
        </div>
        <div className={'textoHa '+(visible ? "animateHeig":"amimate1")} style={{...styles}}>
          <div className="openFle" onClick={apareceInfo} >
            <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
          </div>
          <div className='contTextStylo'>
              <h3 className="numeroHa">02</h3>
              <p className="subTi">Cableado de redes de información</p>
              <p className="textInf">El competidor diseña, implementa y hace mantenimiento de sistemas de cableado estructurado para edificaciones comerciales, data center, hogares y planta externa, incorporando diferentes tipos de medios y tecnologías.</p>
            </div>
        </div>
  </div>
)};

HabilidadesCont.propTypes = {};

HabilidadesCont.defaultProps = {};

export default HabilidadesCont;
