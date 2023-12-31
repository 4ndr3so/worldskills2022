import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import Equipo from "./../components/Equipo"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { useDispatch, useSelector } from "react-redux";
import { getExpertosError, getExpertosStatus, selectExpertos } from "../redux/expertosSlice";
import { useEffect } from "react";
import { fetchExpertos } from "../api/apiData";

const data={
    expertos1:
        {
            foto:"../../img/logo_habilidad.png",
            nombre:"Adriana colmenares",
            text1:"Emprendedor, inquieto y propositivo, tiene vocación de servicio y cree en la importancia del esfuerzo y el uso racional del tiempo para conseguir la excelencia, le gusta el cine y en su tiempo libre trota, toca guitarra y es atleta. <br> “Mira que te mando a que te esfuerces y a que seas valiente, no temas ni desmayes porque jehová, tu Dios, estará contigo a donde quiera que vayas”",
            subtitulo:"Delegada Oficial",
            habilidad:"Cableado de redes de información",
            numero:"2"
        },
    expertos2:
        {
            foto:"../../img/logo_habilidad.png",
            nombre:"Jhon Alexander Ortiz Piza",
            text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
            subtitulo:"Delegado Oficial",
            habilidad:"02 | Cableado De Redes De Información",
            numero:"3"
        }
    }

const Expertos = props => {
  const expertos= useSelector(selectExpertos);
  const expertosStatus=useSelector(getExpertosStatus);
  const expertosError=useSelector(getExpertosError);
  const dispatch=useDispatch();

  useEffect(() => {
    
    if(expertosStatus==="idle"){

      dispatch(fetchExpertos())
      
    }
   }, [expertosStatus,dispatch]); 

   const habiliSkele=["","",""]
  const skeleNot=habiliSkele.map((element,index)=>
  {

   return <Grid item xs={12} md={4} key={index}>
     <div className="mt-3 " style={{marginRight:"20px"}}>
       
       <Skeleton variant="rectangular"  height={400}></Skeleton>
       <Skeleton variant="rounded"   height={30} ></Skeleton></div> 
       </Grid>
  })

  return (
    <TemplatePrinci>
        <Grid item xs={12} className="generalPa">
          <div className="tituloGeneral">
            <h3>Expertos colombianos</h3>
            <p className="textoHabili">
              Cada habilidad tiene un experto, son instructores activos del SENA en programas de formación titulada relacionados con la habilidad que representan, tienen grandes cualidades a nivel técnico y humano; conciertan las pruebas con expertos de otros países, así como los criterios de evaluación y materiales o máquinas requeridas para el desarrollo de las mismas.
            </p>
            <p>
            Aunque no pueden tener contacto directo con los aprendices mientras la competencia está en ejecución, asesoran, orientan y acompañan a los competidores para que obtengan el mejor resultado posible; así mismo, evalúan los proyectos realizados por competidores de otros países.
            </p>
            <p>
            Dependiendo de los requerimientos de la competencia pueden desempeñar otras tareas como asegurar la calidad de la seguridad, salud, y ambiente del lugar donde se desarrollan las pruebas, la atención a medios y visitantes, el registro de las evaluaciones en el sistema de información, proponer e implementar estrategias para mejorar la sostenibilidad de la habilidad en la competencia, entre otras.
            </p>
          </div>  
        </Grid>
        <Grid container>
          { expertosStatus!=="succed" ? skeleNot:
              Object.entries(expertos).map((element, index) => {
                  return(
                  <Grid item xs={12} md={4} key={element[0][0]+index}>
                      <Equipo data={element[1]}></Equipo>
              </Grid>)
              })
          }
        
        </Grid>
  </TemplatePrinci>
  )
}

Expertos.propTypes = {}

export default Expertos