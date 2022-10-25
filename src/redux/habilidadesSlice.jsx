import { createSlice } from "@reduxjs/toolkit";
import { fetchHabilidades } from "../api/apiData";


/*
 {"id":"1","titulo":"02. Cableado de Redes de Informaci\u00f3n","destacado":"El competidor dise\u00f1a, implementa y hace mantenimiento de sistemas de cableado estructurado para edificaciones comerciales, data center, hogares y planta externa, incorporando diferentes tipos de medios y tecnolog\u00edas.","link":"",                                                                 "img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/02.CABLEADO_DE_REDES_3.jpg","evento":"kazanI"},
    {"id":"3","titulo":"04. Mecatr\u00f3nica ","destacado":"La dupla de competidores implementa soluciones de equipos automatizados, programando dispositivos y ensamblando componentes, de acuerdo con un dise\u00f1o establecido por la competencia.  Los jurados eval\u00faan la calidad y la exactitud del producto con respecto al requerimiento dado.","link":"",                        "img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/04.MECATRONICA1.jpg","evento":"shangai"},
    {"id":"4","titulo":"05. Ingenier\u00eda de Dise\u00f1o Mec\u00e1nico CAD","destacado":"El competidor desarrolla dise\u00f1os de piezas mec\u00e1nicas en 2D y 3D, de acuerdo con las condiciones establecidas, adem\u00e1s de procesos de ingenier\u00eda inversa.  Se valora la calidad y la exactitud del producto con respecto al requerimiento establecido desde un inicio.","link":"","img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/05.CAD_INGENIER\u00cdA_DE_DISEO_MECNICO.jpg","evento":"shangai"},
    {"id":"24","titulo":"06. Torno CNC","destacado":"El competidor fabrica piezas met\u00e1licas utilizando tornos programados por Control Num\u00e9rico Computarizado, de acuerdo con un dise\u00f1o establecido por la competencia.  Se valora la calidad y la exactitud del producto con respecto al dise\u00f1o definido.","link":"",                                                      "img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/06.TORNO_CNC.jpg","evento":"kazanI"},
    {"id":"5","titulo":"07. Fresado CNC","destacado":"El competidor fabrica elementos met\u00e1licos con Centros de Mecanizado programados por Control Num\u00e9rico Computarizado, de acuerdo con un dise\u00f1o establecido por el certamen.  Se eval\u00faa la calidad y la exactitud del producto con respecto al dise\u00f1o definido. ","link":"",                                       "img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/07.FRESADO_CNC.jpg","evento":"kazanI"},
    {"id":"6","titulo":"09. IT Soluciones de Software para Negocios ","destacado":"El competidor desarrolla soluciones de Software con diferentes herramientas de desarrollo disponibles y  da respuesta a la problem\u00e1tica de una empresa. La calidad y la exactitud de la soluci\u00f3n son primordiales a la hora de evaluar el trabajo.","link":"",                                    "img":"https://worldskills.sena.edu.co/img/habilidades/WS-HABILIDADES-EN-ALTA/09.IT_SOLUCIONES_DE_SOFTWARE_PARA_NEGOCIOS.jpg","evento":"guatemala"}

*/
const initialState={
    records:[],
    status:'idle',
    error:null
    }

export const habilidadesSlice = createSlice({
    name:'habilidades',
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
            .addCase(fetchHabilidades.pending,(state,action)=>{
               // console.log("inicia carga")
                state.status="loading"
            })
            .addCase(fetchHabilidades.fulfilled,(state,action)=>{
               // console.log("cargo termino")
                state.status="succed"
                state.records=action.payload;
            })
            .addCase(fetchHabilidades.rejected,(state,action)=>{
               // console.log("error")
                state.status="fail";
                state.error=action.error.message
            })
    }
})

export const selectAllHabilidades=(state) =>state.habilidades.records;
    export const selectThreeHabilidades=(state)=>state.habilidades.records.slice(0,3)
    export const getHabilidadesStatus=(state) =>state.habilidades.status;
    export const getHabilidadesError=(state) =>state.habilidades.error;

export const {prub,increment} = habilidadesSlice.actions;

export default habilidadesSlice.reducer;