import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"
import { Container, Grid } from '@mui/material'

function NotiComp({notiData}) {
  return (
    <div className={ 'datacontNoti'}>
      <div className='cuadroConCa'>
        <div className='cuadroCate'></div><div className="contText">Categoria</div>
      </div>
      <div className="contNoData">
        <h3 className='tiDataNo'>WorldSkills Colombia realizó competencia amistosa como preparación a competencia internacional
</h3>
        <p className='texDataNo'>La estrategia del SENA, WorldSkills Colombia, abrió sus puertas a la competencia amistosa en la que nuestro país fue anfitrión. Competidores, delegados y expertos  realizaron  un intercambio de conocimiento con delegaciones de otros países  para reconocer el talento en habilidades como: Cocina, Servicio de Restaurante y Soldadura.</p>
        <div className='auDataNo'> <p className='auDa1'>Oficina Nacional de Comunicaciones / Zulma Lizeth Rincón. PC</p><p className='auDa2'>Viernes, 03 de junio de 2022</p> <div className='contBuDa'><button className='buttonNo'>Ver Noticia</button></div></div>
      </div>
    </div>
  )
}

function NoticiasHome({noticiasCom}) {
  return (
    <>
    <div className='titulWs'>NOTICIAS</div>
    <Grid container>
            <Grid item xs={12} md={12}><NotiComp notData={noticiasCom}></NotiComp></Grid>
            <Grid item xs={12} md={6}><NotiComp notData={"left"}></NotiComp></Grid>
            <Grid item xs={12} md={6}><NotiComp notData={noticiasCom}></NotiComp></Grid>
    </Grid>
    <div className='titulWsBu'><button className='buttonNoVerT'>Ver todas las noticias</button></div>
    </>
  )
}

NoticiasHome.propTypes = {}

export default NoticiasHome





