import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"
import { Container, Grid } from '@mui/material'
import ButonVerMas from "../../utils/ButonVerMas"
import Pagination from '@mui/material/Pagination';

function NotiComp({ children,notData, pos,place,indexNo}) {

  return (
    <div className={'datacontNoti ' + (pos === "left" ? "pr-5 " : " ")}>
      {
        children
      }
      <div className={'cuadroConCa ' +(place === "historico" ? "vuelveAbso" : " ")}>
        <div className='cuadroCate'></div><div className="contText">Categoria</div>
      </div>
      <div className={"contNoData " + (place === "historico" ? (indexNo === 0 ? "noticiasMitad ":" ") : " ")+(place === "historico" ? (indexNo === 0 ? "imgabsulte ":" ") : " ") }>
        <h3 className='tiDataNo'>
          {notData[1].titulo1}
        </h3>
        <p className='texDataNo'>
          {notData[1].text1}
        </p>
        <div className='auDataNo'>
          <p className='auDa1'>
            {notData[1].autor}
          </p>
          <p className='auDa2'>
            {notData[1].fecha}
          </p>
          <div className='contBuDa'>
            <ButonVerMas textNotic="Ver noticia"></ButonVerMas>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotiComp2({ notData, pos,place,indexNo}) {

  //console.log(notData)
  return (
    <NotiComp notData={notData} pos={pos} place={place} indexNo={indexNo} style={{position:"relative"}}>
      {
        place === "historico" && <div style={{position:"relative",minHeight: "312px"}}>
            <img src={notData[1].image} alt={notData[1].titulo1} className="imgHisNot" />
        </div>
      }
    </NotiComp>
  )
}

function NoticiasHome({ noticiasCom, place }) {
  //console.log(noticiasCom)
  return (
    <>
      {
        place === "home" && <div className='titulWs'>NOTICIAS</div>
      }
      <Grid container>
        {
          Object.entries(noticiasCom).map((element, index) => {
            return (
              index === 0 ? 
                <Grid item xs={12} md={12} key={element[0] + index}>
                  <NotiComp2 notData={element} pos={"left"} place={place} indexNo={index}></NotiComp2>
                </Grid> :
                <Grid item xs={12} md={6} key={element[0] + index}>
                  <NotiComp2 notData={element} pos={"left"} place={place} indexNo={index}></NotiComp2>
                </Grid>

            )
          })
        }
        
          <Grid item xs={12} md={12}>
            <div className='paginatorStyle'>
            {
              place ==="historico" && <Pagination count={10} variant="outlined" shape="rounded" />
            }
            </div>
          </Grid>
        
      </Grid>
    </>
  )
}

NoticiasHome.propTypes = {}

export default NoticiasHome





