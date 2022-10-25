import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticias } from "../api/apiData";
/*
const initialState={
    records:[
    {"id":"57","titulo":"Juan Diego Mej\u00eda, aprendiz guajiro, gana Medalla a la Excelencia en WorldSkills 2022 Special Edition","destacado":"A los 12 a\u00f1os, Juan Diego tuvo un computador en sus manos por primera vez. Desde entonces, y con mucho esfuerzo, se ha enfocado en fortalecer sus conocimientos en sistemas inform\u00e1ticos y sigue disput\u00e1ndose las mejores preseas en habilidades TIC.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6206","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/WorldSkills_19102022.jpg"},
    {"id":"56","titulo":"Nuestros aprendices demuestran su talento en el exterior","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
    {"id":"57","titulo":"Nulolo lololo ","destacado":"Ever Daniel Hern\u00e1ndez, es un aprendiz de la Regional Nari\u00f1o que lleg\u00f3 a Antioquia con el sue\u00f1o de aprender y preparase para obtener la medalla de oro en la habilidad CAD de la competencia WorldSkills Special Edition 2022.","link":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/Paginas\/noticia.aspx?IdNoticia=6201","img":"https:\/\/www.sena.edu.co\/es-co\/Noticias\/NoticiasImg\/EverDaniel_10182022.jpg","fecha":"24/03/2022","autor": "Oficina de Comunicaciones Regional Atlántico / Sharon M. Kalil. PC"},
]
}*/
const initialState={
    records:[],
    status:'idle',
    error:null
        }

export const noticiaSlice = createSlice({
    name:"noticias",
    initialState,
    reducers:{
        prub:(state)=>state
        ,generarData(state,action){
            state.push(action.payload)
        }
    },extraReducers(builder){
        builder
            .addCase(fetchNoticias.pending,(state,action)=>{
               // console.log("inicia carga")
                state.status="loading"
            })
            .addCase(fetchNoticias.fulfilled,(state,action)=>{
               // console.log("cargo termino")
                state.status="suced"
                state.records=action.payload;
            })
            .addCase(fetchNoticias.rejected,(state,action)=>{
               // console.log("error")
                state.status="failed";
                state.error=action.error.message
            })
    }
})

export const selectAllNoticias=(state) =>state.noticias.records;
export const selectThreeNoticias=(state)=>state.noticias.records.slice(0,3)
export const getNoticiasStatus=(state) =>state.noticias.status;
export const getNoticiasError=(state) =>state.noticias.error;

export const {prub,generarData} = noticiaSlice.actions;
export default noticiaSlice.reducer;


