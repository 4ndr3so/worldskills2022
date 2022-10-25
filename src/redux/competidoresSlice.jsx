import { createSlice } from "@reduxjs/toolkit";
import { fetchCompeChile, fetchCompeGuatem, fetchCompeKazan } from "../api/apiData";
/*
const initialState= {records:
    [
        {"id":"30","nombre":"Erika Paola Su\u00e1rez","habilidad":"Torno CNC","edad":"1","descripcion":"So\u00f1adora, persistente y berraca, cree que todo es posible si se desea con el coraz\u00f3n y que la disciplina es fundamental para surgir, le gusta pasar tiempo con su familia y jugar futsal.<br\/><br\/><span class=\"cursText\"> \u201cCuando haces las cosas con pasi\u00f3n te das cuenta que los l\u00edmites son mentales\u201d.<\/span>","redes":"facebook",                        "foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-ERIKA-PAOLA-SUAREZ.jpg"},
        {"id":"29","nombre":"Sebasti\u00e1n Castro","habilidad":"Fresado CNC","edad":"1","descripcion":"Le gusta aprender, leer y montar en bicicleta, cree fielmente en el poder de la mente y dice que lo que se piensa se puede lograr, para \u00e9l, WorldSkills le permite demostrar lo que sabe y hacer lo que le gusta.<br\/><br\/><span class=\"cursText\"> \u201cMi coraz\u00f3n y mi mente cargar\u00e1n mi cuerpo, cuando mis piernas no puedan m\u00e1s\u201d.  <\/span>","redes":"facebook","foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-SEBASTIAN-CASTRO.jpg"},
        {"id":"28","nombre":"Laura Patricia Barreto","habilidad":"An\u00e1lisis Qu\u00edmico","edad":"1","descripcion":"Exigente, no se conforma con cualquier resultado, es t\u00edmida alegre disciplinada y perseverante, le gusta salir con su familia y su mejor amiga, as\u00ed como jugar baloncesto. <br\/><br\/><span class=\"cursText\">\u201cCon la disciplina y la perseverancia es posible alcanzar el \u00e9xito\u201d.<\/span>","redes":"facebook",                                       "foto":"https://worldskills.sena.edu.co/imagen/JPG-WS-2019/WORLD-SKILLS-KAZAN-2019-DELEGACION-LAURA-PATRICIA-BARRETO.jpg"}
]}*/

const initialState={
    records:[[],[],[]],
    status:["idle","idle","idle"],
    error:[null,null,null]
    }

export const competidoresSlice = createSlice({
    name:'compChile',
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
            .addCase(fetchCompeChile.pending,(state,action)=>{
                //console.log(state.status)
                state.status[0]="loading"
            })
            .addCase(fetchCompeChile.fulfilled,(state,action)=>{
               // console.log("cargo termino")
                state.status[0]="succed"
                state.records[0]=action.payload;
            })
            .addCase(fetchCompeChile.rejected,(state,action)=>{
               // console.log("error")
                state.status[0]="fail";
                state.error[0]=action.error.message
            })
            .addCase(fetchCompeKazan.pending,(state,action)=>{
                // console.log("inicia carga")
                 state.status[1]="loading"
             })
             .addCase(fetchCompeKazan.fulfilled,(state,action)=>{
                // console.log("cargo termino")
                 state.status[1]="succed"
                 state.records[1]=action.payload;
             })
             .addCase(fetchCompeKazan.rejected,(state,action)=>{
                // console.log("error")
                 state.status[1]="fail";
                 state.error[1]=action.error.message
             })
             .addCase(fetchCompeGuatem.pending,(state,action)=>{
                // console.log("inicia carga")
                 state.status[2]="loading"
             })
             .addCase(fetchCompeGuatem.fulfilled,(state,action)=>{
                // console.log("cargo termino")
                 state.status[2]="succed"
                 state.records[2]=action.payload;
             })
             .addCase(fetchCompeGuatem.rejected,(state,action)=>{
                // console.log("error")
                 state.status[2]="fail";
                 state.error[2]=action.error.message
             })
    }
})

export const selectAllCompeChile=(state) =>state.competidores.records[0];
    export const selectThreeCompeChile=(state)=>state.competidores.records[0].slice(0,3)
    export const getCompeChileStatus=(state) =>state.competidores.status[0];
    export const getCompeChileError=(state) =>state.competidores.error[0];

    export const selectAllCompeKazan=(state) =>state.competidores.records[1];
    export const selectThreeCompeKazan=(state)=>state.competidores.records[1].slice(0,3)
    export const getCompeKazanStatus=(state) =>state.competidores.status[1];
    export const getCompeKazanError=(state) =>state.competidores.error[1];

    export const selectAllCompeGuatem=(state) =>state.competidores.records[2];
    export const selectThreeCompeGuatem=(state)=>state.competidores.records[2].slice(0,3)
    export const getCompeGuatemStatus=(state) =>state.competidores.status[2];
    export const getCompeGuatemError=(state) =>state.competidores.error[2];

export const {prub,increment} = competidoresSlice.actions;

export default competidoresSlice.reducer;