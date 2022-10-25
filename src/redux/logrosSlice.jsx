import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
import { fetchCompeChile, fetchCompeGuatem, fetchCompeKazan } from "../api/apiData";

const initialState={
    records:[
        {
            "titulo":"Guatemala 2021",
            "parrafo":"En medio de la pandemia ocasionada por la COVID-19, la delegación colombiana se concentró en Antioquia y enfrento a 10 países de manera virtual, los Supertalentos ganaron tres medallas de oro, tres de plata y una de bronce y además el competidor de Procesos Contables, Sebastián Arrieta, fue reconocido con el Albert Vidal por tener el mejor puntaje de toda la competencia.",
            "puesto":"PUESTO #2 EN GUATEMALA",
            "medallasOro":"1",
            "medallasPlata":"2",
            "medallasBronce":"3"
        },{
            "titulo":"CHILE - 2018",
            "parrafo":"La selección Colombia obtuvo cuatro medallas de oro y dos de plata. La única mujer de la Selección Colombia, Jennifer Cardona de la regional Antioquia, fue reconocida como la Mejor de la Nación y la más destacada de la competencia. La delegación colombiana ocupó el primer puesto de WorldSkills Américas. Vér más",
            "puesto":"Puesto #1 en Chile",
            "medallasOro":"3",
            "medallasPlata":"0",
            "medallasBronce":"1"
        },{
            "titulo":"COLOMBIA - 2014",
            "parrafo":"En esta oportunidad Colombia fue la sede del evento, ocupó el puesto 2 entre 17 países participantes. En la ceremonia se entregó la medallería correspondiente a las 31 habilidades en competencia. La asistencia superó todas las expectativas con 120.902 visitantes. Ver más",
            "puesto":"Puesto #2 en Colombia",
            "medallasOro":"1",
            "medallasPlata":"4",
            "medallasBronce":"2"
        }
    ],status:"idle",
    error:null
}

export const logrosSlice = createSlice({
    name:'logrosAmericas',
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

export const selectAllLogrosAmericas=(state) =>state.logros.records;
    export const selectThreeLogrosAmericas=(state)=>state.logros.records.slice(0,3)
    export const getLogrosAmericasStatus=(state) =>state.logros.status;
    export const getLogrosAmericasError=(state) =>state.logros.error;

    export const selectAllLogrosInternacional=(state) =>state.logros.records;
    export const selectThreeLogrosInternacional=(state)=>state.logros.records.slice(0,3)
    export const getLogrosInternacionalStatus=(state) =>state.logros.status;
    export const getLogrosInternacionalError=(state) =>state.logros.error;



export const {prub,increment} = logrosSlice.actions;

export default logrosSlice.reducer;