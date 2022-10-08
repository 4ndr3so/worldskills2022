import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import NoticiasHome from "../components/NoticiasHome";
import SobreWS from "./../components/SobreWS";
import GaleriaVideHome from "./../components/GaleriaVideHome";
import MainMenu from "./../components/MainMenu";
import GaleriaImaHome from "./../components/GaleriaImaHome";
import Slider from "./../components/Slider";
import Footer from "./../components/Footer";
//imagenes que es worldskills
import im1 from "../img/Recurso2-100.jpg";
import im2 from "../img/Recurso3-100.jpg";
import im3 from "../img/Recurso4-100.jpg";
import TemplatePrinci from "./../utils/TemplatePrinci"
import ButonVerMas from "./../utils/ButonVerMas"
//Datos slider


const data={
  titulo1:"¿Qué es Worldskills?",
  text1:"Es un espacio donde estudiantes técnicos y tecnólogos de todo el mundo compiten en campeonatos nacionales, continentales y mundiales, para demostrar su destreza en habilidades para el trabajo.<br/> <br/> Con esta estrategia se promueve el desarrollo de habilidades vocacionales y se intercambian conocimientos que aportan a una mejor cualificación del talento humano."
}

const data2={
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

function MainPage(props) {
  return (

    <TemplatePrinci>
        <Grid item  xs={12}>
        <Slider></Slider>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SobreWS imgRe={im1} titulo={"¿QUÉ ES WORLDSKILLS?"} data={data}></SobreWS>
        </Grid>
        <Grid item xs={12} md={4}>
          <SobreWS imgRe={im2} titulo={"COMPETENCIA"} data={data}></SobreWS>
        </Grid>
        <Grid item  xs={12} md={4}>
          <SobreWS imgRe={im3} titulo={"EQUIPO"} data={data}></SobreWS>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12}>
          <NoticiasHome noticiasCom={data2} place={"home"}></NoticiasHome>
          <div className='titulWsBu'><ButonVerMas textNotic="Ver todas las noticias" ancho={"100%"} mt="30px"></ButonVerMas></div>
        </Grid>
      </Grid>
     
      <Grid container>
        <Grid item xs={12}>
          <GaleriaImaHome></GaleriaImaHome>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12}>
          <GaleriaVideHome></GaleriaVideHome>
        </Grid> 
      </Grid>
    </TemplatePrinci>


  );
}

MainPage.propTypes = {};

export default MainPage;
