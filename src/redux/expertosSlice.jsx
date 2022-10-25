import { createSlice } from "@reduxjs/toolkit";
import { fetchExpertos } from "../api/apiData";
/*
const initialState= {records:[
    {"id":"53","nombre":"Jhon Alexander Ortiz Piza","habilidad":"02. Cableado de Redes de Informaci\u00f3n","edad":"0","descripcion":"Emprendedor, inquieto y propositivo, tiene vocaci\u00f3n de servicio y cree en la importancia del esfuerzo y el uso racional del tiempo para conseguir la excelencia, le gusta el cine y en su tiempo libre trota, toca guitarra y es atleta.     <br\/><br\/><span class=\"cursText\">\r\n\u201cMira que te mando a que te esfuerces y a que seas valiente, no temas ni desmayes porque jehov\u00e1, tu Dios, estar\u00e1 contigo a donde quiera que vayas\u201d<span>\r\n","rol":"Experto","foto":"https://worldskills.sena.edu.co/imagen/competidores/Fotos-Expertos\/02.png"},
{"id":"46","nombre":"Daniel Ernesto Espitia","habilidad":"04. Mecatr\u00f3nica","edad":"1","descripcion":"Se considera a s\u00ed mismo como un hombre humilde que disfruta todo lo que hace y siempre se enfoca en cumplir sus sue\u00f1os, es m\u00fasico, hace astrofotograf\u00eda y juega tenis de mesa, vive con su esposa y dos perritos. <br\/><br\/><span class=\"cursText\">\u201cHay que disfrutar lo que hacemos todos los d\u00edas\u201d.<\/span>","rol":"Experto",                                                                                                                                                   "foto":"https://worldskills.sena.edu.co/imagen/competidores/Fotos-Expertos\/04.png"},
{"id":"45","nombre":"Daniel Alejandro P\u00e9rez Loaiza","habilidad":"05.Ingenier\u00eda Mec\u00e1nica CAD","edad":"1","descripcion":"Responsable, disciplinado, entregado a su trabajo y puntual, le gusta hacer las cosas con amor y de la mejor forma posible, fue competidor de WorldSkills en el a\u00f1o 2013 y desde ese entonces, la competencia es su pasi\u00f3n. <br\/><br\/><span class=\"cursText\">\u201cNada se acaba hasta que se termina\u201d.<\/span>","rol":"Experto",                                                                                                                                         "foto":"https://worldskills.sena.edu.co/imagen/competidores/Fotos-Expertos\/05.png"}
]}*/

const initialState={
    records:[],
    status:'idle',
    error:null
    }

export const expertosSlice = createSlice({
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
            .addCase(fetchExpertos.pending,(state,action)=>{
               // console.log("inicia carga")
                state.status="loading"
            })
            .addCase(fetchExpertos.fulfilled,(state,action)=>{
               // console.log("cargo termino")
                state.status="succed"
                state.records=action.payload;
            })
            .addCase(fetchExpertos.rejected,(state,action)=>{
               // console.log("error")
                state.status="fail";
                state.error=action.error.message
            })
    }
})
export const selectExpertos=(state) =>state.expertos.records;
    export const selectThreeExpertos=(state)=>state.expertos.records.slice(0,3)
    export const getExpertosStatus=(state) =>state.expertos.status;
    export const getExpertosError=(state) =>state.expertos.error;

export const {prub,increment} = expertosSlice.actions;

export default expertosSlice.reducer;