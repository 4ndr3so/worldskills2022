import React from 'react'
import PropTypes from 'prop-types'
import TemplatePrinci from "./../utils/TemplatePrinci"
import im1 from "../img/kasan1.png";
import ButonVerMas from "./../utils/ButonVerMas"
import { NavLink } from "react-router-dom";


const ItemGal = ({linkGal,texGal}) => {
  return (
    <div style={{minHeight:"230px"}}>
      <img src={im1} alt="Imagen1" className="imgale" />
      <NavLink to={linkGal}><ButonVerMas textNotic={texGal} ancho={"100%"} mt="20px" mb="40px"></ButonVerMas></NavLink>
    </div>
  )
}
const urlLink1="/galeriaDetalle/kazam"
const urlLink2="/galeriaDetalle/chile"

function Galeria(props) {
  return (
    <TemplatePrinci>
      <ItemGal linkGal={urlLink1} texGal={"Ver la Galeria Kazam"}></ItemGal>
      <ItemGal linkGal={urlLink2}  texGal={"Ver la Galeria Chile"}></ItemGal>
    </TemplatePrinci>
  )
}

Galeria.propTypes = {}

export default Galeria 
