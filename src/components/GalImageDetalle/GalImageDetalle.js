import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GalImageDetalle.scss';
import TemplatePrinci from "../../utils/TemplatePrinci"
import Modal from '@mui/material/Modal';
import { Container, Grid, Skeleton } from '@mui/material'
import BotonCerrar from "../../utils/BotonCerrar"
import { NavLink } from "react-router-dom";
import ButonVerMas from "../../utils/ButonVerMas"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectAllGalKazam, getGalKazamStatus, getGalKazamError, selectAllGalChile, getGalChileStatus, getGalChileError } from "../../redux/imagenesSlice";
import { useEffect } from "react";
import { fetchGalKazam, fetchGalChile } from "../../api/apiData";
import { nanoid } from '@reduxjs/toolkit'

const GalImageDetalle = ({}) =>{ 

  const galKazam= useSelector(selectAllGalKazam);
    const galKazamStatus=useSelector(getGalKazamStatus);
    const galKazameError=useSelector(getGalKazamError);

    const galchile= useSelector(selectAllGalChile);
    const galchileStatus=useSelector(getGalChileStatus);
    const galchileError=useSelector(getGalChileError);

    const [galUsa,setGalUsa]=useState(null);

  let params = useParams();

  const imagenes= useSelector((state) =>state.imagenes.records);
  const dispatch=useDispatch();

  useEffect(() => {
    if(galKazamStatus==="idle"){
      dispatch(fetchGalKazam())   
    }else if(galKazamStatus==="succed" && params.galeriaN==="kazam"){
        setGalUsa(galKazam);
        
    }

}, [galKazamStatus,dispatch,galKazam,params]); 

useEffect(() => {
    if(galchileStatus==="idle"){
        dispatch(fetchGalChile())     
    }else if(galchileStatus==="succed" && params.galeriaN==="chile"){
      setGalUsa(galchile);
    }

   }, [galchileStatus,dispatch,galUsa,params]); 
   
  const [modal,setModal]=useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (ent,elemt) => {
    setModal(elemt)  
    setOpen(true)
  
  };
  const handleClose = () => setOpen(false);
  const habiliSkele=["","","","","","","",""]
  const skeleNot=habiliSkele.map((element,index)=>
  {

   return <Grid item xs={12} md={4} key={index}>
     <div className="mt-3 " style={{marginRight:"20px"}}>
       
       <Skeleton variant="rectangular"  height={200}></Skeleton>
       <Skeleton variant="rounded"   height={30} ></Skeleton></div> 
       </Grid>
  })

  return(
    <TemplatePrinci  data-testid="GalImageDetalle">
      <NavLink to={"/galeria"}><ButonVerMas textNotic="Volver a las galerías" ancho={"100%"} mt="30px" mb="20px"></ButonVerMas></NavLink>
      <Grid container className='GalImageDetalle'>
      
        { 
          galUsa ? 
          Object.entries(galUsa).map((element, index) => {
             // console.log("q")
                return (
                    <Grid item xs={6} md={3} key={nanoid()} >
                        <img src={element[1].link} alt={element[1].titulo} className='imgGalerDet' onClick={(e)=>handleOpen(e,element[1].link)}/>
                    </Grid>
                )}):skeleNot
          
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
