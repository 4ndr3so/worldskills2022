import React from 'react'
import PropTypes from 'prop-types'
import TemplatePrinci from "./../utils/TemplatePrinci"
import im1 from "../img/kasan1.png";
import ButonVerMas from "./../utils/ButonVerMas"



const ItemGal = () => {
  return (
    <div>
      <img src={im1} alt="Imagen1" className="imgale" />
      <ButonVerMas textNotic="Ver la Galeria" ancho={"100%"} mt="20px" mb="40px"></ButonVerMas>
    </div>
  )
}


function Galeria(props) {
  return (
    <TemplatePrinci>
      <ItemGal ></ItemGal>
      <ItemGal ></ItemGal>
    </TemplatePrinci>
  )
}

Galeria.propTypes = {}

export default Galeria 
