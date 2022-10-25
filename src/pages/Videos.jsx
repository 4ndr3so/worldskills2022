import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";

import "./styles.scss";

import TemplatePrinci from "./../utils/TemplatePrinci"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch, useSelector } from "react-redux";
import { getVideosStatus, selectAllVideos } from "../redux/videoSlice";
import { fetchVideos } from "../api/apiData";

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
    //console.log(dataV.link)
    return reproVideo(e,dataV.link);
  }

 
  return (
    <div className={"videoItm "+(isSelected && "selecC")}>
        <Grid container className="stilosVideo">
        <Grid item xs={12} md={5} className="imgStVo"> 
            <div className="reproBut">
                <img src={dataV.img} alt={dataV.titulo} className="imgVio" />
                <div className={"buttonRev"} onClick={(e)=>reproVideoPrimer(e,dataV.link)}><PlayArrowIcon sx={{ fontSize: 45 }}></PlayArrowIcon></div>
            </div>
            
         </Grid>
         <Grid item xs={12} md={7} className={"textConVi "+(isSelected && "selecC")} > 
            <h3 className="tituloVi">{dataV.titulo}</h3>
            <p className="textov">{dataV.destacado}</p>
        </Grid>
        </Grid>
    </div>
  )
}

const Videos = props => {

    const arraCambioColor=[true];

    const [arrSelec,setArrSelec]=useState(arraCambioColor);

    const videos= useSelector(selectAllVideos);
    const videoStatus=useSelector(getVideosStatus);

    const dispatch=useDispatch();

    const [videoRepro,setVideoRepro]=useState();

    useEffect(() => {
    
      if(videoStatus==="idle"){
  
        dispatch(fetchVideos())
        
      }else if(videoStatus==="succed"){
        setVideoRepro(videos[1].link)
      }
     }, [videoStatus,dispatch,videos]);

     
    const reproVideo=(e,videoC,ind,videos)=>{
        //console.log(videoC,ind,videos)
        setVideoRepro(videoC);
        setArrSelec( arr => {

        var temCoun=[];
        Object.entries(videos).map((element, index) =>{
          temCoun.push(false);
        })
        temCoun[ind]=true;
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
            Object.entries(videos).map((element, index) => {         
                    return (
                        <Grid item xs={6} md={6} key={element[1].id + index} >
                            <VideoItem2 dataV={element[1]} reproVideo={(e,f)=>reproVideo(e,f,index,element[1])} isSelected={arrSelec[index]}></VideoItem2>
                        </Grid>
                    )})

      }
    </TemplatePrinci>         

  )
}

Videos.propTypes = {}

export default Videos