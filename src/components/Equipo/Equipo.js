import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Equipo.scss';
import im1 from "../../img/habilidades_1.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { width } from '@mui/system';
import BotonCerrar from '../../utils/BotonCerrar';
import logoHabili1 from "../../img/logo_habilidad.png"

const Equipo = ({data}) => {
  const [visible,setVisible]= useState(false);
  const [tamano,setTamano]= useState("32px");
  //console.log(data)
  const apareceInfo=()=>{
    setVisible(!visible)
    if(visible){ setTamano("410px")}else{setTamano("32px")}
    
  }

  const cerrarBtn=()=>{
  }

  const styles={
  }

  function createMarkup() {
    return {__html: data.descripcion};
  }



return(
  <div className="HabilidadesCont" data-testid="HabilidadesCont">
      <div className="imgCon">
        <img src={data.foto} alt="habilidad" className='imgStyle'/>
        </div>
        {   
            <div className="nombreCam"><h3>{data.nombre}</h3><p>{data.rol}</p></div>
        }
        <div className={'textoHa animate__animated animate__fadeIn '+(visible ? "animateHeig":"amimate1")} style={{...styles}}>
          <div className="openFle" onClick={apareceInfo} >
            <ArrowDropDownIcon fontSize="large"></ArrowDropDownIcon>
          </div>
          <div className='contTextStylo'>
              <h3 className="numeroHa">{data.id}</h3>
              <div className="logoc">
                <img src={logoHabili1} alt="Habilidad" className="imgloghab" />
                </div>
              <p className="subTi">{data.titulo}</p>
              <p className="textInf" dangerouslySetInnerHTML={createMarkup()}></p>
              <BotonCerrar apareceInfo={apareceInfo}></BotonCerrar>
              
            </div>
            <div className="difumina"></div>
        </div>
  </div>
)};

Equipo.propTypes = {};

Equipo.defaultProps = {};

export default Equipo;

