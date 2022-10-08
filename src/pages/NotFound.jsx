import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";

import "./styles.scss";

import TemplatePrinci from "./../utils/TemplatePrinci"
function NotFound(props) {
  return (
    <>
      <TemplatePrinci>
        <Grid item xs={12} className="generalPa">
          <div className="tituloGeneral">
            <h3>Lo que buscas no está en está sección o ya no Existe</h3>
            <p className="textoHabili">
              :(
            </p>
            <p>
              </p>
          </div>  
        </Grid>
      </TemplatePrinci>         
  </>
  )
}

NotFound.propTypes = {}

export default NotFound
