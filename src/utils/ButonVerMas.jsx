import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"

const styles={
    padding: "3px 10px 1px 10px",
}
const ButonVerMas = ({textNotic,ancho,mt,mb,accionBtnver,isSelected=false}) => {
  return (
    <button className={`butGenerico ${isSelected ? "seleccionado":""}`} style={{...styles,width:ancho,marginTop:mt,marginBottom:mb}} onClick={accionBtnver}>{textNotic}</button>
  )
}

ButonVerMas.propTypes = {}

export default ButonVerMas