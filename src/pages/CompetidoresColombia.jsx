import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import HabilidadesCont from "./../components/HabilidadesCont"
import ButonVerMas from "./../utils/ButonVerMas"
import TemplatePrinci from "./../utils/TemplatePrinci"

const data={
    expertos1:
        {
            foto:"../../img/logo_habilidad.png",
            nombre:"Juan Esteban Deossa",
            text1:"Emprendedor, inquieto y propositivo, tiene vocación de servicio y cree en la importancia del esfuerzo y el uso racional del tiempo para conseguir la excelencia, le gusta el cine y en su tiempo libre trota, toca guitarra y es atleta. <br> “Mira que te mando a que te esfuerces y a que seas valiente, no temas ni desmayes porque jehová, tu Dios, estará contigo a donde quiera que vayas”",
            subtitulo:"Delegada Oficial",
            habilidad:"17 | Tecnologías Web",
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

const data2={
expertos1:
    {
        foto:"../../img/logo_habilidad.png",
        nombre:"David Santiago Rodríguez Cruz",
        text1:"Emprendedor, inquieto y propositivo, tiene vocación de servicio y cree en la importancia del esfuerzo y el uso racional del tiempo para conseguir la excelencia, le gusta el cine y en su tiempo libre trota, toca guitarra y es atleta. <br> “Mira que te mando a que te esfuerces y a que seas valiente, no temas ni desmayes porque jehová, tu Dios, estará contigo a donde quiera que vayas”",
        subtitulo:"Delegada Oficial",
        habilidad:"50 | Desarrollo De Aplicaciones Móviles",
        numero:"2"
    },
expertos2:
    {
        foto:"../../img/logo_habilidad.png",
        nombre:"Sebastián Arrieta Hernández",
        text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
        subtitulo:"Delegado Oficial",
        habilidad:"72 | Procesos Contables",
        numero:"3"
    }
}

const data3={
    expertos1:
        {
            foto:"../../img/logo_habilidad.png",
            nombre:"José Sebastián Domínguez",
            text1:"Emprendedor, inquieto y propositivo, tiene vocación de servicio y cree en la importancia del esfuerzo y el uso racional del tiempo para conseguir la excelencia, le gusta el cine y en su tiempo libre trota, toca guitarra y es atleta. <br> “Mira que te mando a que te esfuerces y a que seas valiente, no temas ni desmayes porque jehová, tu Dios, estará contigo a donde quiera que vayas”",
            subtitulo:"Delegada Oficial",
            habilidad:"40 | Tecnologías Del Diseño Gráfico",
            numero:"2"
        },
    expertos2:
        {
            foto:"../../img/logo_habilidad.png",
            nombre:"Sergio Andrés Marín",
            text1:"Es la máxima representante del SENA ante la organización internacional y Directora de Relaciones Corporativas de la Entidad, se encarga de representar a Colombia en todas las reuniones de alto nivel que programe WorldSkills y genera alianzas para el fortalecimiento de los procesos de formación del SENA.",
            subtitulo:"Delegado Oficial",
            habilidad:"9 | IT Administración De Sistemas De Redes",
            numero:"3"
        }
    }

const CompetidoresColombia = props => {

const animate1= "animate__animated animate__flipInY";

    const [dataCompetidores,setDataCompetidores]=useState(data);
    const [animate,setAnimate]=useState(animate1);

const manejarEvent =(lugar)=>{
    setAnimate(animate1);
    if(lugar==="guatemala"){
        setDataCompetidores(data);
    }
    if(lugar==="kazan"){
        setDataCompetidores(data2);
    }
    if(lugar==="chile"){
        setDataCompetidores(data3);
    }
}
const onAnimationEnd = () => {
    setAnimate("");
  };

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
                        <ButonVerMas textNotic="Guatemala 2021" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("guatemala",e)}></ButonVerMas>
                    </div>           
                </Grid>
                <Grid item xs={12} md={4}  className="btnO">
                    <div className="btn0">
                        <ButonVerMas textNotic="Kazan 2019" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("kazan",e)}></ButonVerMas>
                    </div>   
                </Grid>
                <Grid item xs={12} md={4}  className="btnO">
                    <div className="btn0">
                        <ButonVerMas textNotic="Chile 2018" ancho={"100%"} mt="10px" mb="30px" accionBtnver={(e)=>manejarEvent("chile",e)}></ButonVerMas>
                    </div>  
                </Grid>
            </Grid>
            <Grid container>
                {
                    Object.entries(dataCompetidores).map((element, index) => {
                        return(
                        <Grid item xs={12} md={4} key={element[0][0]+index} className={animate} onAnimationEnd={onAnimationEnd}>
                            <HabilidadesCont data={element}></HabilidadesCont>
                    </Grid>)
                    })
                }
            
            </Grid>
  </TemplatePrinci>
  )
}

CompetidoresColombia.propTypes = {}

export default CompetidoresColombia