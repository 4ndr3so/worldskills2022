import { createSlice } from "@reduxjs/toolkit";
import { fetchGalChile, fetchGalKazam } from "../api/apiData";
/*
const initialState={
records:[
    {"id":"153","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"152","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_37.jpg","destacado":"WorldSkills International 2019","titulo":"Worldskills Entrega de bandera"},
    {"id":"151","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_36.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"150","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_35.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"149","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_34.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"148","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_33.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"147","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_32.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"},
    {"id":"146","link":"https://worldskills.sena.edu.co/imagen/kazan_2/ws_competencia_k2019_31.jpg","destacado":"Competencia en Kazan","titulo":"Competencia en Kazan"}
]}*/
const initialState={
    records:[[],[]],
    status:["idle","idle"],
    error:[null,null]
    }

    export const imagenesSlice = createSlice({
        name:'videosAll',
        initialState,
        reducers:{
            increment:(state)=>
                state.records
            ,
            prub:(state)=>{
                return state;
            },
        },extraReducers(builder){
            builder
                .addCase(fetchGalChile.pending,(state,action)=>{
                    //console.log(state.status)
                    state.status[0]="loading"
                })
                .addCase(fetchGalChile.fulfilled,(state,action)=>{
                   // console.log("cargo termino")
                    state.status[0]="succed"
                    state.records[0]=action.payload;
                })
                .addCase(fetchGalChile.rejected,(state,action)=>{
                   // console.log("error")
                    state.status[0]="fail";
                    state.error[0]=action.error.message
                })
                .addCase(fetchGalKazam.pending,(state,action)=>{
                    // console.log("inicia carga")
                     state.status[1]="loading"
                 })
                 .addCase(fetchGalKazam.fulfilled,(state,action)=>{
                    // console.log("cargo termino")
                     state.status[1]="succed"
                     state.records[1]=action.payload;
                 })
                 .addCase(fetchGalKazam.rejected,(state,action)=>{
                    // console.log("error")
                     state.status[1]="fail";
                     state.error[1]=action.error.message
                 })
        }
    })

    export const selectAllGalChile=(state) =>state.imagenes.records[0];
    export const selectThreeGalChile=(state)=>state.imagenes.records[0].slice(0,3)
    export const getGalChileStatus=(state) =>state.imagenes.status[0];
    export const getGalChileError=(state) =>state.imagenes.error[0];

    export const selectAllGalKazam=(state) =>state.imagenes.records[1];
    export const selectThreeGalKazam=(state)=>state.imagenes.records[1].slice(0,3)
    export const getGalKazamStatus=(state) =>state.imagenes.status[1];
    export const getGalKazamError=(state) =>state.imagenes.error[1];
    
    export const {prub,increment} = imagenesSlice.actions;
    
    export default imagenesSlice.reducer;