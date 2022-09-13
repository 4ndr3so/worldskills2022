import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MainPage(props) {
  return (
    <div>
        Bienvenida
        <br></br>
        <Link to="/">Inicio</Link>
    </div>
  )
}

MainPage.propTypes = {}

export default MainPage
