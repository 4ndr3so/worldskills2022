import React from 'react'
import PropTypes from 'prop-types'
import TemplatePrinci from "./../utils/TemplatePrinci"
import im1 from "../img/kasan1.png";
import ButonVerMas from "./../utils/ButonVerMas"
import { NavLink } from "react-router-dom";


const ItemGal = ({linkGal}) => {
  return (
    <div>
      <img src={im1} alt="Imagen1" className="imgale" />
      <NavLink to={linkGal}><ButonVerMas textNotic="Ver la Galeria" ancho={"100%"} mt="20px" mb="40px"></ButonVerMas></NavLink>
    </div>
  )
}
const urlLink="/galeriaDetalle"


function Galeria(props) {
  return (
    <TemplatePrinci>
      <ItemGal linkGal={urlLink}></ItemGal>
      <ItemGal linkGal={urlLink}></ItemGal>
    </TemplatePrinci>
  )
}

Galeria.propTypes = {}

export default Galeria 
