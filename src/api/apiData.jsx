//get noticias
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const urlBase="https://worldskills.sena.edu.co/objects/";

//base es la leida
export const urls={
    "base":{//dev
        noticias:"http://localhost:3004/noticias",
        videos:"http://localhost:3004/videos",
        habilidades:"http://localhost:3004/competencia",
        expertos:"http://localhost:3004/expertos",
        compChile:"http://localhost:3004/compeChile",
        compKasan:"http://localhost:3004/compeKazan",
        compGuate:"http://localhost:3004/guateComp",
        galChile:"http://localhost:3004/galeriaChile",
        galKazan:"http://localhost:3004/galeriaKazan"
    },
    "test":{//test
        noticias:'./objects/NoticiaOp.php?action=readAll',
        videos:'./objects/VideoOp.php?action=readAll',
        habilidades:'./objects/compentenciaOp.php?action=readAll',
        expertos:'./objects/EquipoOp.php?action=readExpertos',
        compChile:'./objects/EquipoOp.php?action=readAllNalChile',
        compKasan:'./objects/EquipoOp.php?action=readAllNacKazan',
        compGuate:'./objects/EquipoOp.php?action=readAllNaGuate',
        galChile:'./objects/FotoGaleryOp.php?action=readAmericas',
        galKazan:"./objects/FotoGaleryOp.php?action=readNacioKazan"
    },
    "prod":{
        noticias:'./objects/NoticiaOp.php?action=readAll',
        videos:'./objects/VideoOp.php?action=readAll',
        habilidades:'./objects/compentenciaOp.php?action=readAll',
        expertos:'./objects/EquipoOp.php?action=readExpertos',
        compChile:'./objects/EquipoOp.php?action=readAllNalChile',
        compKasan:'./objects/EquipoOp.php?action=readAllNacKazan',
        compGuate:'./objects/EquipoOp.php?action=readAllNaGuate',
        galChile:'./objects/FotoGaleryOp.php?action=readAmericas',
        galKazan:"./objects/FotoGaleryOp.php?action=readNacioKazan"
    }
}

export const fetchNoticias= createAsyncThunk('noticias/fetchNoticias',async()=>{
    
    try{
       // console.log(urls.dev)
        const response = await axios.get(urls.base.noticias)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchVideos= createAsyncThunk('videos/fetchVideos',async()=>{
    
    try{
        const response = await axios.get(urls.base.videos)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchHabilidades= createAsyncThunk('habilidades/fetchHabilidades',async()=>{
    
    try{
        const response = await axios.get(urls.base.habilidades)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchExpertos= createAsyncThunk('expertos/fetchExpertos',async()=>{
    
    try{
        const response = await axios.get(urls.base.expertos)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})


export const fetchCompeChile= createAsyncThunk('compeChile/fetchComchile',async()=>{
    
    try{
        const response = await axios.get(urls.base.compChile)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})
export const fetchCompeKazan= createAsyncThunk('compeKazan/fetchComKazan',async()=>{
    
    try{
        const response = await axios.get(urls.base.compKasan)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchCompeGuatem= createAsyncThunk('compeGuate/fetchComGuate',async()=>{
    
    try{
        const response = await axios.get(urls.base.compGuate)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})
export const fetchGalChile= createAsyncThunk('galChile/fetchGalChile',async()=>{
    
    try{
        const response = await axios.get(urls.base.galChile)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchGalKazam= createAsyncThunk('galKazam/fetchGalKazam',async()=>{
    
    try{
        const response = await axios.get(urls.base.galKazan)
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchDatosEsta= createAsyncThunk('datosEst/fetchDatosEstaticos',async()=>{
    
    try{
        const response = await axios.get("http://localhost:3000/json/datosstaticos.json")
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

