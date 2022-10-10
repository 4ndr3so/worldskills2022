import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";

import "./styles.scss";

import TemplatePrinci from "./../utils/TemplatePrinci"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const data={
    vid1:["https://worldskills.sena.edu.co/video/WS-2019-web.mp4",
        "Súper talentosSENA",
        "Nuestros #SupertalentosSENA pronto llegarána #WorldSkillsKazán2019",
        "https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_31.jpg"],
    vid2:["https://worldskills.sena.edu.co/imagen/galery/v3.mp4",
        "Súper talentosSENA2",
        "Nuestros #SupertalentosSENA pronto llegarána",
        "https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_29.jpg"],
}




 const VideoItem2 = ({dataV,reproVideo,isSelected}) => {

  const reproVideoPrimer=(e,videoC)=>{
    return reproVideo(e,dataV[1][0]);
  }

  //  console.log(isSelected)
  return (
    <div className={"videoItm "+(isSelected && "selecC")}>
        <Grid container className="stilosVideo">
        <Grid item xs={12} md={5} className="imgStVo"> 
            <div className="reproBut">
                <img src={dataV[1][3]} alt={dataV[1][1]} className="imgVio" />
                <div className={"buttonRev"} onClick={(e)=>reproVideoPrimer(e,dataV[1][0])}><PlayArrowIcon sx={{ fontSize: 45 }}></PlayArrowIcon></div>
            </div>
            
         </Grid>
         <Grid item xs={12} md={7} className={"textConVi "+(isSelected && "selecC")} > 
            <h3 className="tituloVi">{dataV[1][1]}</h3>
            <p className="textov">{dataV[1][2]}</p>
        </Grid>
        </Grid>
    </div>
  )
}

const Videos = props => {
    const arraCambioColor=[true,false];
    const [videoRepro,setVideoRepro]=useState(data.vid1[0]);
    const [arrSelec,setArrSelec]=useState(arraCambioColor);
   
    const reproVideo=(e,videoC,ind,data)=>{

        setVideoRepro(videoC);
        
        
        setArrSelec( arr => {
        var temCoun=[];
        Object.entries(data).map((element, index) =>{
          temCoun.push(false);
        })
        //temCoun[ind]=true;
        temCoun.splice(ind,1,true)
        return temCoun
        })

    }





    
    return (
   
    <TemplatePrinci>
      <Grid item xs={12} className="videoItmPrin" style={{marginTop: "30px"}}>    
          <video src={videoRepro} controls width="100%">

          Sorry, your browser doesn't support videos.
        </video>
      </Grid>
      { 
            Object.entries(data).map((element, index) => {         
                    return (
                        <Grid item xs={6} md={6} key={element[0] + index} >
                            <VideoItem2 dataV={element} reproVideo={(e,f)=>reproVideo(e,f,index,data)} isSelected={arrSelec[index]}></VideoItem2>
                        </Grid>
                    )})

      }
    </TemplatePrinci>         

  )
}

Videos.propTypes = {}

export default Videos