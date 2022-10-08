import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import "./styles.scss";

import TemplatePrinci from "./../utils/TemplatePrinci"
import NoticiasHome from "../components/NoticiasHome";
const data={
  not1:
      {
        titulo1:"Aprendices SENA listos para participar en WorldSkills 2022 Special Edition",
        text1:"Los instructores de bilingüismo actualizaron en el uso del idioma inglés a los expertos que viajarán a representar a Colombia en WorldSkills Shanghái este año.",
        autor:"Oficina de Comunicaciones Regional Risaralda / Gerardo Calderón",
        image:"https://www.sena.edu.co/es-co/Noticias/NoticiasImg/ws_risa_10042022.jpg",
        link:"https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=6168",
        fecha:"Viernes, 29 de abril de 2022"
      },
  not2:
    {
      titulo1:"Atlántico, sede de la etapa preparatoria de worldskills internacional shanghái 2022",
      text1:"El aprendiz Sebastián Arrieta de Atlántico,  recibió dos medallas de oro por mejor puntaje en la competencia.",
      autor:"Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC",
      image:"https://www.sena.edu.co/es-co/Noticias/NoticiasImg/ws_risa_10042022.jpg",
      link:"https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=6168",
      fecha:"Viernes, 29 de abril de 2022"
     },
  not3:
    {
      titulo1:"Caucano representó a Colombia en Worldskills Guatemala",
      text1:"Se trata de David Santiago Rodríguez, aprendiz del SENA Regional Cauca, quien a sus 19 años tiene muy claros sus propósitos",
      autor:"Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC",
      image:"https://www.sena.edu.co/es-co/Noticias/NoticiasImg/ws_risa_10042022.jpg",
      link:"https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=6168",
      fecha:"Viernes, 29 de abril de 2022"
    } 
}


function Noticias(props) {


  //console.log(data)
  return (
    <TemplatePrinci>
      <NoticiasHome noticiasCom={data} place={"historico"}></NoticiasHome>
    </TemplatePrinci>
  )
}

Noticias.propTypes = {}

export default Noticias
