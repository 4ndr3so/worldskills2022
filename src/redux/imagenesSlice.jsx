import { createSlice } from "@reduxjs/toolkit";

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
]}

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
        }
    })
    
    export const {prub,increment} = imagenesSlice.actions;
    
    export default imagenesSlice.reducer;