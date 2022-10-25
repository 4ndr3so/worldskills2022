import { createSlice } from "@reduxjs/toolkit";

const initialState={
records:[
    {"id":"14","titulo":"S\u00faper talento SENA","destacado":" Nuestros #SupertalentosSENA pronto llegar\u00e1n a #WorldSkillsKaz\u00e1n2019","link":".\/video\/WS-2019-web.mp4","img":".\/imagen\/tumbsVideos\/tumbnail_2019.jpg"},
    {"id":"13","titulo":"WorldSkills Am\u00e9ricas","destacado":"Selecci\u00f3n SENA es campeona en WorldSkills Am\u00e9rica","link":".\/imagen\/galery\/v3.mp4","img":".\/imagen\/tumbsVideos\/14.PNG"},
    {"id":"13","titulo":"WorldSkills Am\u00e9ricas","destacado":"Selecci\u00f3n SENA es campeona en WorldSkills Am\u00e9rica","link":".\/imagen\/galery\/v3.mp4","img":".\/imagen\/tumbsVideos\/14.PNG"},
    {"id":"14","titulo":"S\u00faper talento SENA","destacado":" Nuestros #SupertalentosSENA pronto llegar\u00e1n a #WorldSkillsKaz\u00e1n2019","link":".\/video\/WS-2019-web.mp4","img":".\/imagen\/tumbsVideos\/tumbnail_2019.jpg"},
    {"id":"13","titulo":"WorldSkills Am\u00e9ricas","destacado":"Selecci\u00f3n SENA es campeona en WorldSkills Am\u00e9rica","link":".\/imagen\/galery\/v3.mp4","img":".\/imagen\/tumbsVideos\/14.PNG"},
    {"id":"14","titulo":"S\u00faper talento SENA","destacado":" Nuestros #SupertalentosSENA pronto llegar\u00e1n a #WorldSkillsKaz\u00e1n2019","link":".\/video\/WS-2019-web.mp4","img":".\/imagen\/tumbsVideos\/tumbnail_2019.jpg"},
    {"id":"13","titulo":"WorldSkills Am\u00e9ricas","destacado":"Selecci\u00f3n SENA es campeona en WorldSkills Am\u00e9rica","link":".\/imagen\/galery\/v3.mp4","img":".\/imagen\/tumbsVideos\/14.PNG"},
]}


    export const videoAllSlice = createSlice({
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
    
    export const {prub,increment} = videoAllSlice.actions;
    
    export default videoAllSlice.reducer;