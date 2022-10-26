import React from 'react';
import PropTypes from 'prop-types';
import './LogroCont.scss';
import imgMedaOro from "../../img/medallaOro.png";
import imgMedaBronce from "../../img/medallaBronce.png";
import imgMedaPlata from "../../img/medallaPlata.png";
import imgBandera from "../../img/bandera.png";
import { Container, Grid } from "@mui/material";
import ButonVerMas from "../../utils/ButonVerMas"

const MedallaCont = ({tipoMedalla,cantidad,ancho}) => {
  return (
    <Grid item xs={(12/ancho)} md={(12/ancho)}>
        <div className={tipoMedalla=="oro" ? "oro": tipoMedalla=="plata" ? "plata": tipoMedalla=="bronce" ? "bronce":""}>
            <img
              src={tipoMedalla=="oro" ? imgMedaOro: tipoMedalla=="plata" ? imgMedaPlata: tipoMedalla=="bronce" ? imgMedaBronce:""}
              alt="Worldskills Nacional"
              style={{padding: "7px 0px 8px 0px"}}
            />
        <span className={tipoMedalla=="oro" ? "oroL": tipoMedalla=="plata" ? "plataL": tipoMedalla=="bronce" ? "bronceL":""} style={{fontSize: "36px",verticalAlign: "bottom",marginLeft: "10px"}}>{cantidad} </span>     {tipoMedalla=="oro" ? "MEDALLAS DE ORO": tipoMedalla=="plata" ? "MEDALLAS DE PLATA": tipoMedalla=="bronce" ? "MEDALLAS DE BRONCE":""}
      </div>
   </Grid>
  )
}



const LogroCont = ({titulo1,parrafo1,puesto1,medallas,link,bandera}) =>{ 

  const accionBtnver=()=>{
    window.open(link, '_blank');
  }
  
  return(
  <div className="LogroCont" data-testid="LogroCont">
    <div className='tituloLogocon'>
        <h3> {titulo1}</h3>
        <p>{parrafo1}</p>
    </div>
    <div className='cajaMedallas'>
      <div className='tituloMeda'>
      <img
        src={bandera}
        alt="Worldskills Nacional"
        style={{float: "left"}}
      />
         <div className='ganador1'> {puesto1}</div>
      </div>
      <div className='medallacon'>
      <Grid container>
            
              {
                 
              medallas.map((titulo,index)=>{
               // console.log( Object.entries(titulo)[0][1],index )
                return(
                <MedallaCont key={titulo+index} cantidad ={Object.entries(titulo)[0][1]} tipoMedalla={Object.keys(titulo)} ancho={medallas.length}></MedallaCont>
              )})
            }
      
      </Grid>
        </div>
    </div>
      {link &&
        <ButonVerMas textNotic="Ver más" accionBtnver={accionBtnver}></ButonVerMas>}
  </div>
)};

LogroCont.propTypes = {};

LogroCont.defaultProps = {};

export default LogroCont;
