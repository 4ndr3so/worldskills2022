import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import imgStat from "./../img/wsNacional-stat.jpg";
import "./styles.scss";
import TemplatePrinci from "./../utils/TemplatePrinci"

import ButonVerMas from "../utils/ButonVerMas"
const WSNacional = (props) => {
  return (
    <>
      <TemplatePrinci>
        <Grid item xs={12} className="generalPa">
          <div className="tituloGeneral">
            <h3>WORLDSKILLS NACIONAL</h3>
            <p className="textoHabili">
              Es una estrategia de la Dirección de Formación Profesional del
              SENA, que fomenta en los jóvenes, el desarrollo de habilidades
              vocacionales y eleva los estándares de calidad de los programas de
              formación de la Entidad.
            </p>
            <p>
              Gracias a estrategias como WordlSkills, el SENA ofrece a todos los
              ciudadanos educación pertinente para el trabajo con normas
              internacionales y de excelente calidad.
            </p>
          </div>
          <div className="imgCont">
            <img
              src={imgStat}
              alt="Worldskills Nacional"
              style={{ width: "100%" }}
            />
          </div>
          <div className="titulohabilidades" style={{padding:"38px"}}>
            <h3>OBJETIVOS</h3>
            <p className="textoHabili">
              Promover la educación técnica y tecnológica Inspirar la cultura de
              la calidad y excelencia. Impactar la formación con actualización y
              transferencia de conocimiento y fortalecimiento de Habilidades
              Blandas Actualizar ambientes de formación, proyectos y programas
              de formación y normas de competencia laboral.
            </p>
          </div>
          <div className="contBlanco">
            <h3>LOGROS</h3>
            <p>
              Con la estrategia WorldSkills Colombia, el SENA eleva su calidad
              en la formación, alcanza estándares internacionales, promueve la
              participación en competencias de habilidades que inspiran a otros
              aprendices a alcanzar la excelencia académica y a fortalecer su
              proceso de manera integral. Con WorldSkills se actualizan normas
              de competencia laboral, diseños y desarrollos curriculares.
            </p>
            <p>
              Durante esta competencia, los participantes no sólo mejoran sus
              habilidades técnicas, también, habilidades blandas como la
              comunicación asertiva, el trabajo en equipo y el liderazgo.
              Además, fortalecen el bilingüismo e interactúan con culturas,
              empresas y personas de diferentes lugares del mundo ampliando su
              proyección de vida.
            </p>
            <p>
              El SENA ha ejecutado seis competencias nacionales, la última
              versión se hizo en tres fases, cada una en una regional distinta,
              las regionales fueron: Risaralda, Valle del Cauca y Bolívar.
            </p>
            <ButonVerMas textNotic="Leer más"></ButonVerMas>
          </div>
        </Grid>
        <Grid container></Grid>
      </TemplatePrinci>
    </>
  );
};

WSNacional.propTypes = {};

export default WSNacional;
