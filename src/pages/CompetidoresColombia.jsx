import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid, Skeleton } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import HabilidadesCont from "./../components/HabilidadesCont"
import ButonVerMas from "./../utils/ButonVerMas"
import TemplatePrinci from "./../utils/TemplatePrinci"
import { useDispatch, useSelector } from "react-redux";
import Equipo from "../components/Equipo";
import { getCompeChileError, getCompeChileStatus, getCompeGuatemError, getCompeGuatemStatus, getCompeKazanError, getCompeKazanStatus, selectAllCompeChile, selectAllCompeGuatem, selectAllCompeKazan } from "../redux/competidoresSlice";
import { useEffect } from "react";
import { fetchCompeChile, fetchCompeGuatem, fetchCompeKazan } from "../api/apiData";



const CompetidoresColombia = props => {
    const competidoresChile= useSelector(selectAllCompeChile);
    const competidoresChileStatus=useSelector(getCompeChileStatus);
    const competidoresChileError=useSelector(getCompeChileError);

    const competidoresKazan= useSelector(selectAllCompeKazan);
    const competidoresKazanStatus=useSelector(getCompeKazanStatus);
    const competidoresKazanError=useSelector(getCompeKazanError);

    const competidoresGuatem= useSelector(selectAllCompeGuatem);
    const competidoresGuatemStatus=useSelector(getCompeGuatemStatus);
    const competidoresGuatemError=useSelector(getCompeGuatemError);
    const [selctBtn,setSelctBtn]=useState([true,false,false])
    
    const [dataCompetidores,setDataCompetidores]=useState(competidoresChile);
    const dispatch=useDispatch();

    useEffect(() => {
        if(competidoresGuatemStatus==="idle"){
          dispatch(fetchCompeGuatem())   
        }else if(competidoresGuatemStatus==="succed"){
            setDataCompetidores(competidoresGuatem);
        }

    }, [competidoresGuatemStatus,dispatch,competidoresGuatem]); 

    useEffect(() => {
        if(competidoresChileStatus==="idle"){
            dispatch(fetchCompeChile())     
        }

       }, [competidoresChileStatus,dispatch,competidoresChile]); 

    useEffect(() => {
        if(competidoresKazanStatus==="idle"){   
          dispatch(fetchCompeKazan())  
        }

       }, [competidoresKazanStatus,dispatch]); 
    
    

const animate1= "animate__animated animate__flipInY";

    
    const [animate,setAnimate]=useState(animate1);

const manejarEvent =(lugar)=>{
    setAnimate(animate1);
    if(lugar==="guatemala"){
        if(competidoresChileStatus==="succed"){
            setDataCompetidores(competidoresGuatem);
            }
            setSelctBtn([true,false,false])      
    }
    if(lugar==="kazan"){
        if(competidoresKazanStatus==="succed"){
                setDataCompetidores(competidoresKazan);
            }
            setSelctBtn([false,true,false])    
    }
    if(lugar==="chile"){
        if(competidoresChileStatus==="idle"){
    
            dispatch(fetchCompeChile())
            
          }else if(competidoresChileStatus==="succed"){
            setDataCompetidores(competidoresChile);
            }
            setSelctBtn([false,false,true])  
    }
}
const onAnimationEnd = () => {
    setAnimate("");
  };
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
                <h3>Competidores colombianos</h3>
                <p className="textoHabili">
                Jóvenes entre los 15 y 22 años; son aprendices de formación titulada del SENA en programas asociados a la habilidad que representan. Para hacer parte de la selección, los aprendices deben desarrollar proyectos prácticos relacionados con la habilidad y demostrar que son los mejores, compiten por el puesto a nivel local, regional, nacional, continental y mundial.
                </p>
                <p>
                En el desarrollo de las competencias existen habilidades que tienen un solo competidor y hay otras en las que son duplas.
                </p>
                </div>  
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4}  >
                    <div className="btn0">
                        <ButonVerMas textNotic="Guatemala 2021" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("guatemala",e)} isSelected={selctBtn[0]}></ButonVerMas>
                    </div>           
                </Grid>
                <Grid item xs={12} md={4}  className="btnO">
                    <div className="btn0">
                        <ButonVerMas textNotic="Kazan 2019" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("kazan",e)} isSelected={selctBtn[1]}></ButonVerMas>
                    </div>   
                </Grid>
                <Grid item xs={12} md={4}  className="btnO">
                    <div className="btn0">
                        <ButonVerMas textNotic="Chile 2018" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("chile",e)} isSelected={selctBtn[2]}></ButonVerMas>
                    </div>  
                </Grid>
            </Grid>
            <Grid container>
            {   competidoresGuatemStatus==="loading" || competidoresGuatemStatus==="idle" ? skeleNot:
                    Object.entries(dataCompetidores).map((element, index) => {
                        return(
                        <Grid item xs={12} md={4} key={element[1].id+index} className={animate} onAnimationEnd={onAnimationEnd}>
                            <Equipo data={element[1]}></Equipo>
                    </Grid>)
                    })
                }
            
            </Grid>
  </TemplatePrinci>
  )
}

CompetidoresColombia.propTypes = {}

export default CompetidoresColombia