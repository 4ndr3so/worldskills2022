import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"

const BotonCerrar = ({apareceInfo}) => {
  return (
    <div className="btnStyle">
    <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={apareceInfo}></button>
  </div>
  )
}

BotonCerrar.propTypes = {}

export default BotonCerrar