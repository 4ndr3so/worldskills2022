//get noticias
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const urlBase="https://worldskills.sena.edu.co/objects/";


export const fetchNoticias= createAsyncThunk('noticias/fetchNoticias',async()=>{
    
    try{
        const response = await axios.get("http://localhost:3004/noticias")
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchVideos= createAsyncThunk('videos/fetchVideos',async()=>{
    
    try{
        const response = await axios.get("http://localhost:3004/videos")
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

export const fetchHabilidades= createAsyncThunk('habilidades/fetchHabilidades',async()=>{
    
    try{
        const response = await axios.get("http://localhost:3004/competencia")
       
        return response.data.records;
    }catch(err){
            return err.message
    }

})

