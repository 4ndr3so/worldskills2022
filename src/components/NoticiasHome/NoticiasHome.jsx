import React from 'react'
import PropTypes from 'prop-types'
import "./styles.scss"
import { Container, Grid } from '@mui/material'
import ButonVerMas from "../../utils/ButonVerMas"
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';

function NotiComp({ children,notData, pos,place,indexNo,accionBtnver}) {
  const url= typeof(notData[1].link) === "string" ? notData[1].link:"";
 // console.log(url)
  return (
    <div className={'datacontNoti ' + (pos === "left" ? "pr-5 " : " ")}>
      {
        children
      }
      <div className={'cuadroConCa ' +(place === "historico" ? "vuelveAbso" : " ")}>
        <div className='cuadroCate'></div><div className="contText">Noticia</div>
      </div>
      <div className={"contNoData " + (place === "historico" ? (indexNo === 0 ? "noticiasMitad ":" ") : " ")+(place === "historico" ? (indexNo === 0 ? "imgabsulte ":" ") : " ") }>
        <h3 className='tiDataNo'>
          {notData[1].titulo}
        </h3>
        <p className='texDataNo'>
          {notData[1].destacado}
        </p>
        <div className='auDataNo'>
          <p className='auDa1'>
            {notData[1].autor}
          </p>
          <p className='auDa2'>
            {notData[1].fecha}
          </p>
          <div className='contBuDa'>
            <a href={url} target="_blank" rel='noreferrer'>
              <ButonVerMas textNotic="Ver noticia" accionBtnver={accionBtnver} ></ButonVerMas>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function NotiComp2({ notData, pos,place,indexNo,accionBtnver}) {

  //console.log(notData)
  return (
    <NotiComp notData={notData} pos={pos} place={place} indexNo={indexNo} style={{position:"relative"}} accionBtnver={accionBtnver} >
      {
        place === "historico" && <div className='conImgNot'>
            <img src={notData[1].img} alt={notData[1].titulo} className="imgHisNot" />
        </div>
      }
    </NotiComp>
  )
}

function NoticiasHome({ noticiasCom, place,accionBtnver,statusN,errorN }) {
  const[notPrin,setNotPrin]=useState(["","",""]);

  useEffect(() => {
    //debugger;
    if(place === "home" ){

      setNotPrin(noticiasCom.slice(0,3)) 

    }
    if(place === "historico"  ){

      setNotPrin(noticiasCom) 
      
    }

  },[noticiasCom,place]);
  //console.log(noticiasCom)
  const skeleNot=<div className="mt-3 " style={{marginRight:"20px"}}><Skeleton variant="rectangular" width={200} height={31} ></Skeleton><Skeleton variant="rectangular"  height={200}></Skeleton></div> 
  return (
    <>
      {
        place === "home" && <div className='titulWs'>NOTICIAS</div>
      }
      <Grid container style={{overflow: "hidden"}}>
        {
      
          Object.entries(notPrin).map((element, index) => {
            return (
              index === 0 ? 
                <Grid item xs={12} md={12} key={element[0] + index}>
                  { statusN ==='loading'|| statusN==="idle"? skeleNot:
                    <NotiComp2 notData={element} pos={"left"} place={place} indexNo={index} accionBtnver={accionBtnver} ></NotiComp2>
                  }
                </Grid> :
                <Grid item xs={12} md={6} key={element[0] + index}>
                  {
                    statusN ==='loading'|| statusN==="idle"? skeleNot:
                    <NotiComp2 notData={element} pos={"left"} place={place} indexNo={index} accionBtnver={accionBtnver} ></NotiComp2>
                  }
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





