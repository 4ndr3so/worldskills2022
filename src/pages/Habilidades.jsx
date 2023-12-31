import React, { useEffect } from 'react'
import PropTypes, { element } from 'prop-types'
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import "./styles.scss"
import HabilidadesCont from "./../components/HabilidadesCont"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { useDispatch, useSelector } from 'react-redux';
import { getHabilidadesError, getHabilidadesStatus, selectAllHabilidades } from '../redux/habilidadesSlice';
import { fetchHabilidades } from '../api/apiData';

const data={
  habilidades1:
      {
          foto:"../../img/logo_habilidad.png",
          nombre:null,
          text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
          subtitulo: "Delegada Oficial",
          habilidad:"04 | Mecatrónica",
          numero:"2"
      },
  habilidades2:
      {
          foto:"../../img/logo_habilidad.png",
          nombre:null,
          text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
          subtitulo:"Delegada Oficial",
          habilidad:"02 | Cableado De Redes De Información",
          numero:"3"
      }
  }


const Habilidades = props => {
  
  const habilidadesStatus=useSelector(getHabilidadesStatus);
  const habilidades= useSelector(selectAllHabilidades);
  const habiliError=useSelector(getHabilidadesError);
  const dispatch=useDispatch();
  const habiliSkele=["","","","","",""]
  useEffect(() => {
    
    if(habilidadesStatus==="idle"){

      dispatch(fetchHabilidades())
      
    }
   }, [habilidadesStatus,dispatch]); 

   const skeleNot=habiliSkele.map((element,index)=>
   {

    return <Grid item xs={12} md={4} key={index}>
      <div className="mt-3 " style={{marginRight:"20px"}}>
        
        <Skeleton variant="rectangular"  height={200}></Skeleton>
        <Skeleton variant="rounded"   height={30} ></Skeleton></div> 
        </Grid>
   })

  return (
    <TemplatePrinci>
          <Grid item xs={12} className="generalPa">
            <div className="tituloGeneral">
            <h3 >HABILIDADES</h3>
            <p className="textoHabili">
            Corresponden a conocimientos o destrezas pertinentes para el mercado laboral mundial, esta se evalúa en los cuatro días de competencia, por medio de proyectos prueba con una duración de 15 a 22 horas. En cada habilidad no gana el competidor que realice el proyecto en menor tiempo sino aquel que lo realice con la mayor calidad, cumpliendo con los estándares y criterios definidos y con mayor precisión y exactitud.
            </p>
            <p>
            Da clic en cada foto y conoce las habilidades en las que compite la Selección Colombia WorldSkills:
            </p>
            </div>
          </Grid>
          <Grid container>
          {
            habilidadesStatus==="loading" || habilidadesStatus==="idle"? skeleNot:
              Object.entries(habilidades).map((element, index) => {
                //console.log(element[1].id)
                  return(
                  <Grid item xs={12} md={4} key={element[1].id+index}>
                  <HabilidadesCont data={element[1]} ></HabilidadesCont>
              </Grid>)
              })
          }
          </Grid>
    </TemplatePrinci>
  )
}

Habilidades.propTypes = {}

export default Habilidades