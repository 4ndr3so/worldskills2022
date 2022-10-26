import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"

const styles={
    padding: "3px 10px 1px 10px",
}
const ButonVerMas = ({textNotic,ancho,mt,mb,accionBtnver,ml,mr,isSelected=false,otrosStilos}) => {
  //console.log(otrosStilos)
  return (
    <button className={`butGenerico ${isSelected ? "seleccionado":""}`} style={{...otrosStilos,width:ancho,marginTop:mt,marginBottom:mb,marginLeft:ml,marginRight:mr}} onClick={accionBtnver}>{textNotic}</button>
  )
}

ButonVerMas.propTypes = {}

export default ButonVerMas