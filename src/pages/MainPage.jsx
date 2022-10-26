import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Grid, Skeleton } from "@mui/material";
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
import { NavLink } from "react-router-dom";
import Confeti from "../utils/Confeti";
import { useSelector, useDispatch } from "react-redux";
import { prub, selectAllNoticias, getNoticiasStatus, getNoticiasError } from "../redux/noticiaSlice"
import { increment } from "../redux/counterSlice";
import { getVideosStatus, selectAllVideos, selectThreeVideos, selectTres } from "../redux/videoSlice"
import { useEffect } from "react";
import { useState } from "react";
import { fetchNoticias, fetchVideos } from "../api/apiData";
import { getDatosEStaStatus, selectAllDatosESta } from "../redux/datosStaticosSlice";

//Datos slider


const data = {
  titulo1: "¿Qué es Worldskills?",
  text1: "Es un espacio donde estudiantes técnicos y tecnólogos de todo el mundo compiten en campeonatos nacionales, continentales y mundiales, para demostrar su destreza en habilidades para el trabajo.<br/> <br/> Con esta estrategia se promueve el desarrollo de habilidades vocacionales y se intercambian conocimientos que aportan a una mejor cualificación del talento humano."
}


function MainPage(props) {
  const noticias = useSelector(selectAllNoticias);
  const notiStatus = useSelector(getNoticiasStatus);
  const notiError = useSelector(getNoticiasError);

  const videos = useSelector(selectThreeVideos);
  const videoStatus = useSelector(getVideosStatus);

  const datosEsStatus = useSelector(getDatosEStaStatus);
  const datosEsta = useSelector(selectAllDatosESta);

  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [contrSin, setConrSin] = useState(true);
  ///console.log("REnderiza la main page")

  const accionBtnver = (e) => {
    //console.log("clic")
    dispatch(increment());
  }

  useEffect(() => {

    if (notiStatus === "idle") {

      dispatch(fetchNoticias())
    }
  }, [notiStatus, dispatch]);

  useEffect(() => {

    if (videoStatus === "idle") {

      dispatch(fetchVideos())
    }
  }, [videoStatus, dispatch]);

  const Cargador = ({ value }) => {
    return <div className="mt-4 " style={{ marginRight: "10px" }}><Skeleton variant="rectangular" height={500}></Skeleton></div>;
  };

  return (

    <TemplatePrinci>
      <Confeti></Confeti>
      <Grid item xs={12}>
        <Slider></Slider>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={4}>
          {

          }
          {datosEsStatus !== "succed" ? <Cargador></Cargador> :
            <SobreWS imgRe={datosEsta.qswskill.img} titulo={datosEsta.qswskill && datosEsta.qswskill.titulo} data={datosEsta.qswskill.texto}></SobreWS>
          }
        </Grid>
        <Grid item xs={12} md={4}>
          {datosEsStatus !== "succed" ? <Cargador></Cargador> :
            <SobreWS imgRe={datosEsta.competenciaws.img} titulo={datosEsta.competenciaws && datosEsta.competenciaws.titulo} data={datosEsta.competenciaws.texto}></SobreWS>
          }
        </Grid>
        <Grid item xs={12} md={4}>
          {datosEsStatus !== "succed" ? <Cargador></Cargador> :
            <SobreWS imgRe={datosEsta.equipows.img} titulo={datosEsta.equipows && datosEsta.equipows.titulo} data={datosEsta.equipows.texto}></SobreWS>
          }
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <NoticiasHome noticiasCom={noticias} place={"home"} accionBtnver={accionBtnver} statusN={notiStatus} errorN={notiError}></NoticiasHome>
          <div className='titulWsBu'><NavLink to={"/noticias"}><ButonVerMas textNotic="Ver todas las noticias" ancho={"100%"} mt="30px"></ButonVerMas></NavLink></div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <NavLink to={"/galeria"}><GaleriaImaHome></GaleriaImaHome></NavLink>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <GaleriaVideHome data={videos}></GaleriaVideHome>
        </Grid>
      </Grid>
    </TemplatePrinci>


  );
}

MainPage.propTypes = {};

export default MainPage;
