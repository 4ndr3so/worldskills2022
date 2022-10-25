import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GalImageDetalle.scss';
import TemplatePrinci from "../../utils/TemplatePrinci"
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material'
import BotonCerrar from "../../utils/BotonCerrar"
import { NavLink } from "react-router-dom";
import ButonVerMas from "../../utils/ButonVerMas"
import { useDispatch, useSelector } from 'react-redux';

const data={
  im1:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im2:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_36.jpg",
  im3:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im4:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im5:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im6:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im7:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im8:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im9:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im10:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",
  im11:"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg",

}

const GalImageDetalle = ({}) =>{ 
  const imagenes= useSelector((state) =>state.imagenes.records);
  const dispatch=useDispatch();

 
  const [modal,setModal]=useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (ent,elemt) => {
    setModal(elemt)  
    setOpen(true)
  
  };
  const handleClose = () => setOpen(false);

  return(
    <TemplatePrinci  data-testid="GalImageDetalle">
      <NavLink to={"/galeria"}><ButonVerMas textNotic="Volver a las galerías" ancho={"100%"} mt="30px" mb="20px"></ButonVerMas></NavLink>
      <Grid container className='GalImageDetalle'>
      
        { 
          
          Object.entries(imagenes).map((element, index) => {
              console.log("q")
                return (
                    <Grid item xs={6} md={3} key={element[1].id + index} >
                        <img src={element[1].link} alt={element[1].titulo} className='imgGalerDet' onClick={(e)=>handleOpen(e,element[1].link)}/>
                    </Grid>
                )})
          
        }
      </Grid>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className='estiloModalImg'>
          <div className='btnCrrarImg'><BotonCerrar apareceInfo={handleClose}></BotonCerrar></div>
            <img src={modal} alt="" className="estiloImgModal" />
            
          </div>
        </Modal>
  </TemplatePrinci>)
};

GalImageDetalle.propTypes = {};

GalImageDetalle.defaultProps = {};

export default GalImageDetalle;
